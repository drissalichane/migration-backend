using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.Interfaces;
using MigrationExecutionAPI.Models;
using MigrationExecutionAPI.Services;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class MigrationJobController : ControllerBase
{
    private readonly MigrationDbContext _context;
    private readonly IFileService _fileService;
    private readonly GitHubService _githubService;
    private readonly HttpClient _httpClient;

    public MigrationJobController(MigrationDbContext context, IFileService fileService, GitHubService githubService)
    {
        _context = context;
        _fileService = fileService;
        _githubService = githubService;
        _httpClient = new HttpClient { Timeout = TimeSpan.FromMinutes(10) };
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetJobs()
    {
        var jobs = await _context.MigrationJobs
            .Include(j => j.FileChanges)
            .OrderByDescending(j => j.CreatedAt)
            .ToListAsync();
        return Ok(jobs);
    }
    
    [HttpGet("repositories")]
    [AllowAnonymous]
    public async Task<IActionResult> GetRepositories()
    {
        var repos = await _context.MigrationJobs
            .Select(j => j.RepositoryUrl)
            .Where(url => !string.IsNullOrEmpty(url))
            .Distinct()
            .ToListAsync();
        return Ok(repos);
    }

    [HttpGet("{id:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetJob(int id)
    {
        var job = await _context.MigrationJobs
            .Include(j => j.FileChanges)
            .FirstOrDefaultAsync(j => j.Id == id);
            
        if (job == null)
            return NotFound(new { message = "Job not found" });
            
        return Ok(job);
    }

    [HttpPost("analyze")]
    [AllowAnonymous] // Open for testing, normally should be Authorize
    public async Task<IActionResult> Analyze([FromBody] AnalyzeRequest request, [FromServices] IServiceScopeFactory scopeFactory)
    {
        // 1. Create the job in SQLite
        var job = new MigrationJob
        {
            RepositoryUrl = request.RepositoryUrl,
            TargetBranch = request.TargetBranch,
            TargetCommit = request.TargetCommit,
            Status = "Analyzing",
            CreatedBy = "user"
        };
        _context.MigrationJobs.Add(job);
        await _context.SaveChangesAsync();
        
        _context.JobLogs.Add(new JobLog {
            MigrationJobId = job.Id,
            Level = "info",
            Phase = "Analyze",
            Message = $"Initiating migration job for {request.RepositoryUrl}...",
            Timestamp = DateTime.UtcNow
        });
        await _context.SaveChangesAsync();

        var jobId = job.Id;
        var token = Request.Headers["Authorization"].ToString();

        _ = Task.Run(async () =>
        {
            using var scope = scopeFactory.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<MigrationDbContext>();
            var httpClient = new HttpClient { Timeout = TimeSpan.FromMinutes(10) };
            
            try
            {
                var payload = new { 
                    repo_url = request.RepositoryUrl, 
                    job_id = jobId,
                    target_branch = request.TargetBranch,
                    target_commit = request.TargetCommit
                };
                var content = new StringContent(JsonSerializer.Serialize(payload), System.Text.Encoding.UTF8, "application/json");
                
                var response = await httpClient.PostAsync("http://localhost:5678/webhook/net8-migration-analyze", content);
                
                var currentJob = await db.MigrationJobs.FindAsync(jobId);
                if (currentJob == null) return;

                if (!response.IsSuccessStatusCode)
                {
                    var errorResponse = await response.Content.ReadAsStringAsync();
                    currentJob.Status = "Failed";
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id,
                        Level = "error",
                        Phase = "Analyze",
                        Message = $"Webhook failed with status {response.StatusCode}: {errorResponse}",
                        Timestamp = DateTime.UtcNow
                    });
                    await db.SaveChangesAsync();
                    return;
                }

                var n8nResponse = await response.Content.ReadAsStringAsync();
                var jsonNode = JsonNode.Parse(n8nResponse);
                var planJson = jsonNode?["migration_plan"]?.ToString();
                
                if (string.IsNullOrEmpty(planJson))
                {
                    currentJob.Status = "Failed";
                }
                else
                {
                    currentJob.MigrationPlanJson = planJson;
                    currentJob.Status = "Pending Plan Approval";
                }
                await db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                var currentJob = await db.MigrationJobs.FindAsync(jobId);
                if (currentJob != null)
                {
                    currentJob.Status = "Failed";
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id,
                        Level = "error",
                        Phase = "Analyze",
                        Message = $"Internal backend error: {ex.Message}",
                        Timestamp = DateTime.UtcNow
                    });
                    await db.SaveChangesAsync();
                }
            }
        });

        return Ok(new { JobId = job.Id, Status = job.Status });
    }

    [HttpPost("{id}/execute")]
    [AllowAnonymous]
    public async Task<IActionResult> ExecutePlan(int id, [FromServices] IServiceScopeFactory scopeFactory)
    {
        var job = await _context.MigrationJobs.FindAsync(id);
        if (job == null) return NotFound(new { Message = "Job not found" });
        if (job.Status != "Pending Plan Approval" && job.Status != "Failed Execution") 
            return BadRequest(new { Message = "Job is not awaiting plan approval or failed execution." });

        job.Status = "Executing";
        _context.JobLogs.Add(new JobLog {
            MigrationJobId = job.Id,
            Level = "info",
            Phase = "Execute",
            Message = "Initiating execution phase...",
            Timestamp = DateTime.UtcNow
        });
        await _context.SaveChangesAsync();

        var jobId = job.Id;

        _ = Task.Run(async () =>
        {
            using var scope = scopeFactory.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<MigrationDbContext>();
            var httpClient = new HttpClient { Timeout = TimeSpan.FromMinutes(10) };
            try
            {
                var currentJob = await db.MigrationJobs.FindAsync(jobId);
                if (currentJob == null) return;

                var repositoryPath = $"C:/Users/grandy/projects/migration-{jobId}";
                if (System.IO.Directory.Exists(repositoryPath))
                {
                    try {
                        var resetInfo = new System.Diagnostics.ProcessStartInfo {
                            FileName = "git", Arguments = "reset --hard", WorkingDirectory = repositoryPath, CreateNoWindow = true
                        };
                        using var p1 = System.Diagnostics.Process.Start(resetInfo);
                        p1?.WaitForExit();

                        var cleanInfo = new System.Diagnostics.ProcessStartInfo {
                            FileName = "git", Arguments = "clean -fd", WorkingDirectory = repositoryPath, CreateNoWindow = true
                        };
                        using var p2 = System.Diagnostics.Process.Start(cleanInfo);
                        p2?.WaitForExit();
                    } catch (Exception ex) {
                        db.JobLogs.Add(new JobLog { MigrationJobId = jobId, Level = "warn", Phase = "Execute", Message = "Failed to reset git repo: " + ex.Message, Timestamp = DateTime.UtcNow });
                    }
                }

                var payload = new { job_id = currentJob.Id, migration_plan = currentJob.MigrationPlanJson };
                var content = new StringContent(System.Text.Json.JsonSerializer.Serialize(payload), System.Text.Encoding.UTF8, "application/json");
                
                var response = await httpClient.PostAsync("http://localhost:5678/webhook/net8-migration-execute", content);
                
                if (!response.IsSuccessStatusCode)
                {
                    var errorResponse = await response.Content.ReadAsStringAsync();
                    currentJob.Status = "Failed Execution";
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id,
                        Level = "error",
                        Phase = "Execute",
                        Message = $"Webhook failed with status {response.StatusCode}: {errorResponse}",
                        Timestamp = DateTime.UtcNow
                    });
                    await db.SaveChangesAsync();
                    return;
                }

                var responseBody = await response.Content.ReadAsStringAsync();
                bool isStructuredSuccess = false;
                try
                {
                    using var jsonDoc = JsonDocument.Parse(responseBody);
                    if (jsonDoc.RootElement.TryGetProperty("output", out var outputElement))
                    {
                        currentJob.ExecutionReport = outputElement.GetString();
                        isStructuredSuccess = true;
                    }
                    else if (jsonDoc.RootElement.TryGetProperty("text", out var textElement))
                    {
                        currentJob.ExecutionReport = textElement.GetString();
                        isStructuredSuccess = true;
                    }
                    else
                    {
                        currentJob.ExecutionReport = "Workflow execution stopped unexpectedly. Raw response: " + responseBody;
                    }
                }
                catch
                {
                    currentJob.ExecutionReport = responseBody;
                }

                if (!isStructuredSuccess ||
                    currentJob.ExecutionReport?.Contains("BUILD_FAILED") == true ||
                    currentJob.ExecutionReport?.Contains("errorMessage") == true ||
                    currentJob.ExecutionReport?.Contains("Error:") == true)
                {
                    currentJob.Status = "Failed Execution";
                }
                else
                {
                    currentJob.Status = "Pending PR Review";
                }
                
                await db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                var currentJob = await db.MigrationJobs.FindAsync(jobId);
                if (currentJob != null)
                {
                    currentJob.Status = "Failed Execution";
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id,
                        Level = "error",
                        Phase = "Execute",
                        Message = $"Internal backend error: {ex.Message}",
                        Timestamp = DateTime.UtcNow
                    });
                    await db.SaveChangesAsync();
                }
            }
        });

        return Ok(new { JobId = job.Id, Status = job.Status });
    }

    [HttpPost("submit-plan")]
    [AllowAnonymous] 
    public async Task<IActionResult> SubmitPlan([FromBody] SubmitPlanRequest request)
    {
        var job = await _context.MigrationJobs.Include(j => j.FileChanges).FirstOrDefaultAsync(j => j.RepositoryUrl == request.RepositoryUrl && j.Status == "Executing");
        if (job == null) return NotFound("No executing job found for this repository.");

        foreach (var file in request.FileChanges)
        {
            job.FileChanges.Add(new FileChange
            {
                FilePath = file.FilePath,
                Action = file.Action,
                TargetContent = file.TargetContent,
                ReplacementContent = file.ReplacementContent,
                Accepted = true
            });
        }

        await _context.SaveChangesAsync();
        return Ok(new { Message = "File changes recorded." });
    }

    [HttpPost("{id}/approve")]
    [AllowAnonymous] 
    public async Task<IActionResult> ApproveJob(int id, [FromBody] ApproveRequest request)
    {
        var job = await _context.MigrationJobs
            .Include(j => j.FileChanges)
            .FirstOrDefaultAsync(j => j.Id == id);

        if (job == null) return NotFound("Job not found");
        if (job.Status != "Pending PR Review") return BadRequest("Job is not pending PR review.");

        var githubToken = User.FindFirst("github_token")?.Value;
        if (string.IsNullOrEmpty(githubToken)) return Unauthorized("User has no GitHub token. Please re-login with GitHub.");

        var fileChangesToCommit = new List<(string FilePath, string Content)>();

        foreach (var change in job.FileChanges)
        {
            var userEdit = request.FileEdits.FirstOrDefault(e => e.FileChangeId == change.Id);
            if (userEdit != null)
            {
                change.Accepted = userEdit.Accepted;
                if (!string.IsNullOrEmpty(userEdit.ManualReplacement))
                {
                    change.ReplacementContent = userEdit.ManualReplacement;
                }
            }

            if (change.Accepted)
            {
                // Note: The actual file on disk is already updated by the execution step.
                // But for GitHub API, we need to read it or use the ReplacementContent.
                // ReplacementContent is a partial diff. We must use the full file content!
                // Actually, wait, ReplacementContent is full file? No, earlier I saw ReplacementChunks.
                // Wait! n8n execution step actually replaced the file on disk. 
                // So we can just read the modified file from disk!
                var jobWorkspace = $"C:/Users/grandy/projects/migration-{job.Id}";
                var fullPath = Path.Combine(jobWorkspace, change.FilePath);
                if (System.IO.File.Exists(fullPath))
                {
                    var fullContent = await System.IO.File.ReadAllTextAsync(fullPath);
                    fileChangesToCommit.Add((change.FilePath, fullContent));
                }
            }
        }

        try
        {
            // Parse owner/repo from "https://github.com/owner/repo.git"
            var repoParts = job.RepositoryUrl.Replace(".git", "").Split('/');
            var repoName = repoParts.Last();
            var owner = repoParts[repoParts.Length - 2];
            var branchName = $"migration/net8-{job.Id}";

            // Target branch is the selected one, or default to null (which means CreatePullRequestAsync should fall back to DefaultBranch)
            var targetBranch = job.TargetBranch;

            var (branch, prUrl, commitHash) = await _githubService.CreatePullRequestAsync(
                githubToken, owner, repoName, branchName, "Automated .NET Migration", fileChangesToCommit, targetBranch);

            job.BranchName = branch;
            job.PrUrl = prUrl;
            job.CommitHash = commitHash;
            job.Status = "Approved and PR Created";
        }
        catch (Exception ex)
        {
            job.Status = "PR Creation Failed";
            await _context.SaveChangesAsync();
            return StatusCode(500, new { Message = "Failed to create PR on GitHub", Error = ex.Message });
        }

        await _context.SaveChangesAsync();

        return Ok(new { Message = "Job approved and PR created successfully.", PrUrl = job.PrUrl });
    }

    [HttpPost("{id}/reject-save")]
    [AllowAnonymous] 
    public async Task<IActionResult> RejectAndSaveJob(int id, [FromBody] ApproveRequest request)
    {
        var job = await _context.MigrationJobs
            .Include(j => j.FileChanges)
            .FirstOrDefaultAsync(j => j.Id == id);

        if (job == null) return NotFound("Job not found");
        if (job.Status != "Pending PR Review") return BadRequest("Job is not pending PR review.");

        foreach (var change in job.FileChanges)
        {
            var userEdit = request.FileEdits.FirstOrDefault(e => e.FileChangeId == change.Id);
            if (userEdit != null)
            {
                change.Accepted = userEdit.Accepted;
                if (!string.IsNullOrEmpty(userEdit.ManualReplacement))
                {
                    change.ReplacementContent = userEdit.ManualReplacement;
                }
            }
        }

        job.Status = "Rejected";
        await _context.SaveChangesAsync();

        return Ok(new { Message = "Job marked as draft/rejected and changes saved." });
    }

    [HttpPost("{id}/sync")]
    public async Task<IActionResult> SyncJobStatus(int id)
    {
        var job = await _context.MigrationJobs.FindAsync(id);
        if (job == null) return NotFound("Job not found");
        if (string.IsNullOrEmpty(job.PrUrl)) return BadRequest("Job has no PR to sync.");

        var githubToken = User.FindFirst("github_token")?.Value;
        if (string.IsNullOrEmpty(githubToken)) return Unauthorized("No GitHub token found.");

        try
        {
            var repoParts = job.RepositoryUrl.Replace(".git", "").Split('/');
            var repoName = repoParts.Last();
            var owner = repoParts[repoParts.Length - 2];
            var pullNumber = int.Parse(job.PrUrl.Split('/').Last());

            var pr = await _githubService.GetPullRequestStatusAsync(githubToken, owner, repoName, pullNumber);

            if (pr.Merged)
            {
                job.Status = "Merged";
                job.MergeCommitSha = pr.MergeCommitSha;

                // Sync Revert PR if it exists or search for one
                if (string.IsNullOrEmpty(job.RevertPrUrl))
                {
                    var foundRevertPrUrl = await _githubService.FindRevertPullRequestAsync(githubToken, owner, repoName, pullNumber);
                    if (!string.IsNullOrEmpty(foundRevertPrUrl))
                    {
                        job.RevertPrUrl = foundRevertPrUrl;
                    }
                }

                if (!string.IsNullOrEmpty(job.RevertPrUrl))
                {
                    var revertPullNumber = int.Parse(job.RevertPrUrl.Split('/').Last());
                    var revertPr = await _githubService.GetPullRequestStatusAsync(githubToken, owner, repoName, revertPullNumber);
                    if (revertPr.Merged)
                    {
                        job.Status = "Reverted";
                    }
                }
            }
            else if (pr.State.StringValue == "closed")
            {
                job.Status = "PR Closed";
            }
            
            await _context.SaveChangesAsync();
            return Ok(new { Status = job.Status, RevertPrUrl = job.RevertPrUrl });
        }
        catch (Exception ex)
        {
            return BadRequest($"Failed to sync PR status: {ex.Message}");
        }
    }

    [HttpPost("{id}/archive")]
    public async Task<IActionResult> ArchiveJob(int id)
    {
        var job = await _context.MigrationJobs.FindAsync(id);
        if (job == null) return NotFound("Job not found");

        job.Status = "Archived";
        job.IsArchived = true;
        await _context.SaveChangesAsync();
        
        return Ok(new { Message = "Job archived successfully" });
    }

    [HttpPost("bulk-archive")]
    public async Task<IActionResult> BulkArchiveJobs([FromBody] BulkArchiveRequest request)
    {
        if (request.JobIds == null || !request.JobIds.Any())
        {
            return BadRequest("No job IDs provided.");
        }

        var jobs = await _context.MigrationJobs
            .Where(j => request.JobIds.Contains(j.Id))
            .ToListAsync();

        foreach (var job in jobs)
        {
            job.Status = "Archived";
            job.IsArchived = true;
        }

        await _context.SaveChangesAsync();
        
        return Ok(new { Message = $"{jobs.Count} jobs archived successfully" });
    }

    [HttpPost("{id}/logs")]
    [AllowAnonymous]
    public async Task<IActionResult> AddJobLog(int id, [FromBody] AddJobLogRequest request)
    {
        var job = await _context.MigrationJobs.FindAsync(id);
        if (job == null) return NotFound("Job not found");

        var log = new JobLog
        {
            MigrationJobId = job.Id,
            Level = string.IsNullOrEmpty(request.Level) ? "info" : request.Level,
            Message = request.Message,
            Phase = request.Phase,
            Details = request.Details,
            Timestamp = DateTime.UtcNow
        };

        _context.JobLogs.Add(log);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "Log added" });
    }

    [HttpGet("{id}/logs")]
    [AllowAnonymous]
    public async Task<IActionResult> GetJobLogs(int id)
    {
        var logs = await _context.JobLogs
            .Where(l => l.MigrationJobId == id)
            .OrderBy(l => l.Timestamp)
            .Select(l => new {
                l.Id,
                l.Timestamp,
                l.Level,
                l.Message,
                l.Phase,
                l.Details
            })
            .ToListAsync();

        return Ok(logs);
    }
}

public class BulkArchiveRequest
{
    public List<int> JobIds { get; set; } = new();
}

public class AddJobLogRequest
{
    public string? Level { get; set; }
    public string Message { get; set; } = string.Empty;
    public string? Phase { get; set; }
    public string? Details { get; set; }
}

public class AnalyzeRequest
{
    public string RepositoryUrl { get; set; } = string.Empty;
    public string? TargetBranch { get; set; }
    public string? TargetCommit { get; set; }
}

public class SubmitPlanRequest
{
    public string RepositoryUrl { get; set; } = string.Empty;
    public List<SubmitFileChange> FileChanges { get; set; } = new();
}

public class SubmitFileChange
{
    public string FilePath { get; set; } = string.Empty;
    public string Action { get; set; } = "ReplaceContent";
    public string TargetContent { get; set; } = string.Empty;
    public string ReplacementContent { get; set; } = string.Empty;
}

public class ApproveRequest
{
    public List<ApproveFileEdit> FileEdits { get; set; } = new();
}

public class ApproveFileEdit
{
    public int FileChangeId { get; set; }
    public bool Accepted { get; set; }
    public string ManualReplacement { get; set; } = string.Empty;
}
