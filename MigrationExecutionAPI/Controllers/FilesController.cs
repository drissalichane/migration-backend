using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;
using MigrationExecutionAPI.Models;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FilesController : ControllerBase
{
    private readonly IFileService _fileService;
    private readonly ILogger<FilesController> _logger;
    private readonly MigrationDbContext _context;

    public FilesController(IFileService fileService, ILogger<FilesController> logger, MigrationDbContext context)
    {
        _fileService = fileService;
        _logger = logger;
        _context = context;
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
            
            string filePath = "";
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
                    } catch {
                        // Not JSON, it's a raw string
                        filePath = rawPayload.Trim();
                    }
                }
                
                if (string.IsNullOrEmpty(filePath)) {
                    if (payloadNode.TryGetProperty("filePath", out var val)) filePath = val.GetString() ?? "";
                    else if (payloadNode.TryGetProperty("FilePath", out val)) filePath = val.GetString() ?? "";
                }
            } catch {
                if (string.IsNullOrEmpty(filePath)) filePath = body.Trim();
            }

            var parsed = MigrationExecutionAPI.Utilities.CustomBodyParser.Parse(rawPayload);
            if (parsed.TryGetValue("FILEPATH", out var fpVal)) filePath = fpVal;

            string repositoryPath = jobId.HasValue 
                ? $"C:/Users/grandy/projects/migration-{jobId.Value}" 
                : MigrationExecutionAPI.Utilities.RepoLocator.GetLatestRepo();

            if (string.IsNullOrEmpty(filePath))
            {
                return Ok(new BaseResponse { Success = false, Message = "File path cannot be empty" });
            }

            var content = await _fileService.ReadFileAsync(repositoryPath, filePath);
            return Ok(new FileContentResponse { Success = true, Content = content });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error reading file");
            return StatusCode(500, new FileContentResponse { Success = false, Message = ex.Message });
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
            return BadRequest(new BaseResponse { Success = false, Message = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error replacing file content");
            return StatusCode(500, new BaseResponse { Success = false, Message = ex.Message });
        }
    }
}
