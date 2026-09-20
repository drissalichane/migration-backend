using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;
using MigrationExecutionAPI.Models;
using System.Text;
using System.Text.RegularExpressions;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FilesController : ControllerBase
{
    private readonly IFileService _fileService;
    private readonly ILogger<FilesController> _logger;
    private readonly MigrationDbContext _context;

    private static readonly HashSet<string> BinaryExtensions = new(StringComparer.OrdinalIgnoreCase)
    {
        ".exe", ".dll", ".pdb", ".obj", ".bin", ".zip", ".tar", ".gz", ".7z",
        ".png", ".jpg", ".jpeg", ".gif", ".bmp", ".ico", ".svg",
        ".woff", ".woff2", ".ttf", ".eot",
        ".pdf", ".doc", ".docx", ".xls", ".xlsx",
        ".nupkg", ".snupkg", ".so", ".dylib"
    };

    private const long MaxFileSizeBytes = 2 * 1024 * 1024; // 2 MB
    private const int DefaultMaxLines = 250;
    private const int HardCapMaxLines = 400;

    public FilesController(IFileService fileService, ILogger<FilesController> logger, MigrationDbContext context)
    {
        _fileService = fileService;
        _logger = logger;
        _context = context;
    }

    /// <summary>
    /// Resolves the workspace path for a given jobId, falling back to latest repo.
    /// </summary>
    private string ResolveRepositoryPath(int? jobId)
    {
        return jobId.HasValue
            ? $"C:/Users/grandy/projects/migration-{jobId.Value}"
            : MigrationExecutionAPI.Utilities.RepoLocator.GetLatestRepo();
    }

    /// <summary>
    /// Parses common fields (jobId, filePath) from the raw request body using the same
    /// multi-format parsing strategy that existing endpoints use for n8n compatibility.
    /// </summary>
    private (int? jobId, string filePath, System.Text.Json.JsonElement payloadNode) ParseFileRequest(string body)
    {
        string filePath = "";
        string rawPayload = body;
        int? jobId = null;
        System.Text.Json.JsonElement payloadNode = default;

        try
        {
            var json = System.Text.Json.JsonDocument.Parse(body);
            payloadNode = json.RootElement;
            if (payloadNode.TryGetProperty("jobId", out var jId)) jobId = jId.GetInt32();
            else if (payloadNode.TryGetProperty("JobId", out jId)) jobId = jId.GetInt32();
            else if (payloadNode.TryGetProperty("job_id", out jId)) jobId = jId.GetInt32();

            if (json.RootElement.TryGetProperty("", out var wrapperVal) && wrapperVal.ValueKind == System.Text.Json.JsonValueKind.String)
            {
                rawPayload = wrapperVal.GetString() ?? "";
                try
                {
                    var parsedJson = System.Text.Json.JsonDocument.Parse(rawPayload);
                    payloadNode = parsedJson.RootElement;
                    if (payloadNode.TryGetProperty("jobId", out var jId2)) jobId = jId2.GetInt32();
                    else if (payloadNode.TryGetProperty("job_id", out jId2)) jobId = jId2.GetInt32();
                }
                catch
                {
                    filePath = rawPayload.Trim();
                }
            }

            if (string.IsNullOrEmpty(filePath))
            {
                if (payloadNode.TryGetProperty("filePath", out var val)) filePath = val.GetString() ?? "";
                else if (payloadNode.TryGetProperty("FilePath", out val)) filePath = val.GetString() ?? "";
            }
        }
        catch
        {
            if (string.IsNullOrEmpty(filePath)) filePath = body.Trim();
        }

        var parsed = MigrationExecutionAPI.Utilities.CustomBodyParser.Parse(rawPayload);
        if (parsed.TryGetValue("FILEPATH", out var fpVal)) filePath = fpVal;

        return (jobId, filePath, payloadNode);
    }

    [HttpPost("read")]
    public async Task<IActionResult> ReadFile()
    {
        try
        {
            Request.EnableBuffering();
            using var reader = new StreamReader(Request.Body, leaveOpen: true);
            var body = await reader.ReadToEndAsync();
            Request.Body.Position = 0;

            _logger.LogInformation("ReadFile raw body: {Body}", body);

            var (jobId, filePath, payloadNode) = ParseFileRequest(body);

            // Parse optional pagination params
            int startLine = 1;
            int maxLines = DefaultMaxLines;
            bool isPaginated = false;

            if (payloadNode.ValueKind == System.Text.Json.JsonValueKind.Object)
            {
                if (payloadNode.TryGetProperty("startLine", out var slVal))
                {
                    startLine = slVal.GetInt32();
                    isPaginated = true;
                }
                if (payloadNode.TryGetProperty("maxLines", out var mlVal))
                {
                    maxLines = mlVal.GetInt32();
                    isPaginated = true;
                }
            }

            // Enforce constraints
            if (startLine < 1) startLine = 1;
            if (maxLines < 1) maxLines = DefaultMaxLines;
            if (maxLines > HardCapMaxLines) maxLines = HardCapMaxLines;

            string repositoryPath = ResolveRepositoryPath(jobId);

            if (string.IsNullOrEmpty(filePath))
            {
                return Ok(new BaseResponse { Success = false, Message = "File path cannot be empty" });
            }

            // Resolve the file path with path-traversal guard
            string fullPath;
            try
            {
                fullPath = MigrationExecutionAPI.Utilities.PathValidator.GetValidatedFullPath(repositoryPath, filePath);
            }
            catch (UnauthorizedAccessException)
            {
                return BadRequest(new BaseResponse { Success = false, Message = "Path traversal detected — the requested path is outside the job workspace." });
            }

            // Fuzzy resolve (same logic as FileService.ResolveFilePath)
            if (!System.IO.File.Exists(fullPath))
            {
                var fileName = Path.GetFileName(filePath);
                if (!string.IsNullOrEmpty(fileName) && Directory.Exists(repositoryPath))
                {
                    var matches = Directory.GetFiles(repositoryPath, fileName, SearchOption.AllDirectories)
                        .Where(f => !f.Contains("\\bin\\") && !f.Contains("\\obj\\") && !f.Contains("\\.git\\"))
                        .ToArray();
                    if (matches.Length == 1) fullPath = matches[0];
                    else if (matches.Length > 1)
                    {
                        var normalized = filePath.Replace('\\', '/');
                        var suffix = matches.Where(m => m.Replace('\\', '/').EndsWith(normalized)).ToArray();
                        if (suffix.Length == 1) fullPath = suffix[0];
                    }
                }
            }

            if (!System.IO.File.Exists(fullPath))
            {
                return NotFound(new BaseResponse { Success = false, Message = $"File not found: {filePath}" });
            }

            // Binary file guard
            var ext = Path.GetExtension(fullPath);
            if (BinaryExtensions.Contains(ext))
            {
                return BadRequest(new BaseResponse { Success = false, Message = $"Cannot read binary file ({ext}). Only text files are supported." });
            }

            // Size guard
            var fileInfo = new FileInfo(fullPath);
            if (fileInfo.Length > MaxFileSizeBytes)
            {
                return BadRequest(new BaseResponse { Success = false, Message = $"File is too large ({fileInfo.Length / 1024.0 / 1024.0:F1} MB). Maximum supported size is 2 MB." });
            }

            // If not paginated, return legacy response shape for backward compat (dashboard diff viewer)
            if (!isPaginated)
            {
                var content = await System.IO.File.ReadAllTextAsync(fullPath);
                return Ok(new FileContentResponse { Success = true, Content = content });
            }

            // Paginated response with line-number prefixes
            var allLines = await System.IO.File.ReadAllLinesAsync(fullPath);
            int totalLines = allLines.Length;
            int startIdx = startLine - 1; // convert to 0-based
            if (startIdx >= totalLines) startIdx = totalLines;

            int count = Math.Min(maxLines, totalLines - startIdx);
            var slice = allLines.Skip(startIdx).Take(count).ToArray();

            // Build line-numbered content
            var sb = new StringBuilder();
            int lineNumWidth = (startIdx + count).ToString().Length;
            for (int i = 0; i < slice.Length; i++)
            {
                int lineNum = startIdx + i + 1;
                sb.AppendLine($"{lineNum.ToString().PadLeft(lineNumWidth)}| {slice[i]}");
            }

            var relativePath = Path.GetRelativePath(repositoryPath, fullPath).Replace('\\', '/');

            return Ok(new PaginatedFileContentResponse
            {
                FilePath = relativePath,
                Content = sb.ToString(),
                TotalLines = totalLines,
                ReturnedLines = count,
                Truncated = (startIdx + count) < totalLines
            });
        }
        catch (DirectoryNotFoundException ex)
        {
            return NotFound(new BaseResponse { Success = false, Message = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error reading file");
            return StatusCode(500, new FileContentResponse { Success = false, Message = ex.Message });
        }
    }

    [HttpPost("grep")]
    public async Task<IActionResult> Grep()
    {
        try
        {
            Request.EnableBuffering();
            using var reader = new StreamReader(Request.Body, leaveOpen: true);
            var body = await reader.ReadToEndAsync();
            Request.Body.Position = 0;

            _logger.LogInformation("Grep raw body: {Body}", body);

            var (jobId, _, payloadNode) = ParseFileRequest(body);

            string pattern = "";
            string glob = "*.cs";
            int maxResults = 40;
            const int hardCapResults = 100;

            if (payloadNode.ValueKind == System.Text.Json.JsonValueKind.Object)
            {
                if (payloadNode.TryGetProperty("pattern", out var pVal))
                    pattern = pVal.GetString() ?? "";
                else if (payloadNode.TryGetProperty("Pattern", out pVal))
                    pattern = pVal.GetString() ?? "";

                if (payloadNode.TryGetProperty("glob", out var gVal))
                    glob = gVal.GetString() ?? "*.cs";
                else if (payloadNode.TryGetProperty("Glob", out gVal))
                    glob = gVal.GetString() ?? "*.cs";

                if (payloadNode.TryGetProperty("maxResults", out var mrVal))
                    maxResults = mrVal.GetInt32();
                else if (payloadNode.TryGetProperty("MaxResults", out mrVal))
                    maxResults = mrVal.GetInt32();
            }

            // Also try CustomBodyParser
            var parsed = MigrationExecutionAPI.Utilities.CustomBodyParser.Parse(body);
            if (parsed.TryGetValue("PATTERN", out var ppVal)) pattern = ppVal;

            if (string.IsNullOrWhiteSpace(pattern))
            {
                return BadRequest(new GrepResponse { Matches = new(), Truncated = false });
            }

            if (maxResults < 1) maxResults = 40;
            if (maxResults > hardCapResults) maxResults = hardCapResults;

            string repositoryPath = ResolveRepositoryPath(jobId);

            // Validate workspace exists
            string fullRepoPath;
            try
            {
                fullRepoPath = MigrationExecutionAPI.Utilities.PathValidator.GetValidatedFullPath(repositoryPath, ".");
            }
            catch (UnauthorizedAccessException)
            {
                return BadRequest(new BaseResponse { Success = false, Message = "Path traversal detected." });
            }
            catch (DirectoryNotFoundException ex)
            {
                return NotFound(new BaseResponse { Success = false, Message = ex.Message });
            }

            // Try to compile regex with timeout; fall back to literal on failure
            Regex? regex = null;
            bool useLiteral = false;
            try
            {
                regex = new Regex(pattern, RegexOptions.None, TimeSpan.FromSeconds(2));
            }
            catch
            {
                useLiteral = true;
                _logger.LogWarning("Invalid regex pattern '{Pattern}', falling back to literal search", pattern);
            }

            // Enumerate files matching the glob, skipping excluded dirs
            var skipDirs = new[] { "\\bin\\", "\\obj\\", "\\.git\\", "\\node_modules\\" };
            var files = Directory.GetFiles(fullRepoPath, glob, SearchOption.AllDirectories)
                .Where(f => !skipDirs.Any(d => f.Contains(d)));

            var matches = new List<GrepMatchDto>();
            bool truncated = false;

            foreach (var file in files)
            {
                if (matches.Count >= maxResults) { truncated = true; break; }

                try
                {
                    var lines = await System.IO.File.ReadAllLinesAsync(file);
                    var relativePath = Path.GetRelativePath(fullRepoPath, file).Replace('\\', '/');

                    for (int i = 0; i < lines.Length; i++)
                    {
                        if (matches.Count >= maxResults) { truncated = true; break; }

                        bool isMatch;
                        try
                        {
                            isMatch = useLiteral
                                ? lines[i].Contains(pattern, StringComparison.OrdinalIgnoreCase)
                                : regex!.IsMatch(lines[i]);
                        }
                        catch (RegexMatchTimeoutException)
                        {
                            // ReDoS — fall back to literal for the rest of this search
                            _logger.LogWarning("Regex timed out on file {File}, falling back to literal search", relativePath);
                            useLiteral = true;
                            isMatch = lines[i].Contains(pattern, StringComparison.OrdinalIgnoreCase);
                        }

                        if (isMatch)
                        {
                            matches.Add(new GrepMatchDto
                            {
                                FilePath = relativePath,
                                LineNumber = i + 1,
                                Line = lines[i].TrimEnd()
                            });
                        }
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogWarning(ex, "Failed to read file for grep: {File}", file);
                }
            }

            return Ok(new GrepResponse { Matches = matches, Truncated = truncated });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error in grep");
            return StatusCode(500, new BaseResponse { Success = false, Message = ex.Message });
        }
    }

    [HttpPost("write")]
    public async Task<IActionResult> WriteFile()
    {
        try
        {
            Request.EnableBuffering();
            using var reader = new StreamReader(Request.Body, leaveOpen: true);
            var body = await reader.ReadToEndAsync();
            Request.Body.Position = 0;
            
            _logger.LogInformation("WriteFile raw body: {Body}", body);
            
            string filePath = "";
            string content = "";
            string rawPayload = body;
            int? jobId = null;
            
            try {
                var json = System.Text.Json.JsonDocument.Parse(body);
                var payloadNode = json.RootElement;
                if (payloadNode.TryGetProperty("jobId", out var jId)) jobId = jId.GetInt32();
                else if (payloadNode.TryGetProperty("JobId", out jId)) jobId = jId.GetInt32();
                else if (payloadNode.TryGetProperty("job_id", out jId)) jobId = jId.GetInt32();
                
                if (json.RootElement.TryGetProperty("", out var wrapperVal) && wrapperVal.ValueKind == System.Text.Json.JsonValueKind.String) {
                    rawPayload = wrapperVal.GetString() ?? "";
                    try {
                        var parsedJson = System.Text.Json.JsonDocument.Parse(rawPayload);
                        payloadNode = parsedJson.RootElement;
                        if (payloadNode.TryGetProperty("jobId", out var jId2)) jobId = jId2.GetInt32();
                        else if (payloadNode.TryGetProperty("job_id", out jId2)) jobId = jId2.GetInt32();
                    } catch { } // Not JSON, rely on CustomBodyParser
                }
                
                if (payloadNode.TryGetProperty("filePath", out var fVal)) filePath = fVal.GetString() ?? "";
                else if (payloadNode.TryGetProperty("FilePath", out fVal)) filePath = fVal.GetString() ?? "";
                
                if (payloadNode.TryGetProperty("content", out var cVal)) content = cVal.GetString() ?? "";
                else if (payloadNode.TryGetProperty("Content", out cVal)) content = cVal.GetString() ?? "";
            } catch { }

            var parsed = MigrationExecutionAPI.Utilities.CustomBodyParser.Parse(rawPayload);
            if (parsed.TryGetValue("FILEPATH", out var fpVal)) filePath = fpVal;
            if (parsed.TryGetValue("CONTENT", out var cParsed)) content = cParsed;

            string repositoryPath = jobId.HasValue 
                ? $"C:/Users/grandy/projects/migration-{jobId.Value}" 
                : MigrationExecutionAPI.Utilities.RepoLocator.GetLatestRepo();

            // Allow empty content, but not empty filePath
            if (string.IsNullOrEmpty(filePath))
            {
                return Ok(new BaseResponse { Success = false, Message = "File path cannot be empty" });
            }

            await _fileService.WriteFileAsync(repositoryPath, filePath, content ?? "");
            // Auto-record the file change on the latest executing job
            try
            {
                var activeJob = await _context.MigrationJobs
                    .Include(j => j.FileChanges)
                    .Where(j => j.Status == "Executing" || j.Status == "Pending PR Review")
                    .OrderByDescending(j => j.Id)
                    .FirstOrDefaultAsync();

                if (activeJob != null)
                {
                    activeJob.FileChanges.Add(new FileChange
                    {
                        FilePath = filePath,
                        Action = "WriteFile",
                        TargetContent = "",
                        ReplacementContent = content ?? "",
                        Accepted = true
                    });
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception dbEx)
            {
                _logger.LogWarning(dbEx, "Failed to record file change in database (non-fatal)");
            }
            return Ok(new BaseResponse { Success = true, Message = "File written successfully" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error writing file");
            return Ok(new BaseResponse { Success = false, Message = ex.Message });
        }
    }

    [HttpPost("replace")]
    public async Task<IActionResult> ReplaceFileContent()
    {
        try
        {
            Request.EnableBuffering();
            using var reader = new StreamReader(Request.Body, leaveOpen: true);
            var body = await reader.ReadToEndAsync();
            Request.Body.Position = 0;
            
            _logger.LogInformation("ReplaceFileContent raw body: {Body}", body);
            
            string filePath = "";
            string targetContent = "";
            string replacementContent = "";
            string rawPayload = body;
            int? jobId = null;
            
            try {
                var json = System.Text.Json.JsonDocument.Parse(body);
                var payloadNode = json.RootElement;
                if (payloadNode.TryGetProperty("jobId", out var jId)) jobId = jId.GetInt32();
                else if (payloadNode.TryGetProperty("JobId", out jId)) jobId = jId.GetInt32();
                else if (payloadNode.TryGetProperty("job_id", out jId)) jobId = jId.GetInt32();
                
                if (json.RootElement.TryGetProperty("", out var wrapperVal) && wrapperVal.ValueKind == System.Text.Json.JsonValueKind.String) {
                    rawPayload = wrapperVal.GetString() ?? "";
                    try {
                        var parsedJson = System.Text.Json.JsonDocument.Parse(rawPayload);
                        payloadNode = parsedJson.RootElement;
                        if (payloadNode.TryGetProperty("jobId", out var jId2)) jobId = jId2.GetInt32();
                        else if (payloadNode.TryGetProperty("job_id", out jId2)) jobId = jId2.GetInt32();
                    } catch { } // Not JSON, rely on CustomBodyParser
                }
                
                if (payloadNode.TryGetProperty("filePath", out var fVal)) filePath = fVal.GetString() ?? "";
                else if (payloadNode.TryGetProperty("FilePath", out fVal)) filePath = fVal.GetString() ?? "";
                
                if (payloadNode.TryGetProperty("targetContent", out var tcVal)) targetContent = tcVal.GetString() ?? "";
                else if (payloadNode.TryGetProperty("TargetContent", out tcVal)) targetContent = tcVal.GetString() ?? "";
                
                if (payloadNode.TryGetProperty("replacementContent", out var rcVal)) replacementContent = rcVal.GetString() ?? "";
                else if (payloadNode.TryGetProperty("ReplacementContent", out rcVal)) replacementContent = rcVal.GetString() ?? "";
            } catch { }

            var parsed = MigrationExecutionAPI.Utilities.CustomBodyParser.Parse(rawPayload);
            if (parsed.TryGetValue("FILEPATH", out var fpVal)) filePath = fpVal;
            if (parsed.TryGetValue("TARGETCONTENT", out var tcParsed)) targetContent = tcParsed;
            if (parsed.TryGetValue("REPLACEMENTCONTENT", out var rcParsed)) replacementContent = rcParsed;

            string repositoryPath = jobId.HasValue 
                ? $"C:/Users/grandy/projects/migration-{jobId.Value}" 
                : MigrationExecutionAPI.Utilities.RepoLocator.GetLatestRepo();

            if (string.IsNullOrEmpty(filePath))
            {
                return Ok(new BaseResponse { Success = false, Message = "File path cannot be empty" });
            }
            if (string.IsNullOrEmpty(targetContent))
            {
                return Ok(new BaseResponse { Success = false, Message = "Target content cannot be empty" });
            }

            await _fileService.ReplaceFileContentAsync(repositoryPath, filePath, targetContent, replacementContent ?? "");

            // Auto-record the file change on the latest executing job
            try
            {
                var activeJob = await _context.MigrationJobs
                    .Include(j => j.FileChanges)
                    .Where(j => j.Status == "Executing" || j.Status == "Pending PR Review")
                    .OrderByDescending(j => j.Id)
                    .FirstOrDefaultAsync();

                if (activeJob != null)
                {
                    activeJob.FileChanges.Add(new FileChange
                    {
                        FilePath = filePath,
                        Action = "ReplaceContent",
                        TargetContent = targetContent,
                        ReplacementContent = replacementContent ?? "",
                        Accepted = true
                    });
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception dbEx)
            {
                _logger.LogWarning(dbEx, "Failed to record file change in database (non-fatal)");
            }

            return Ok(new BaseResponse { Success = true, Message = "Content replaced successfully" });
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning(ex, "Validation or operational error replacing file content");
            return Ok(new BaseResponse { Success = false, Message = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error replacing file content");
            return StatusCode(500, new BaseResponse { Success = false, Message = ex.Message });
        }
    }
}
