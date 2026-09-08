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
    private static Dictionary<string, (decimal Prompt, decimal Completion)>? _modelPricingCache = null;
    private static DateTime _cacheLastUpdated = DateTime.MinValue;

    private async Task<decimal> GetCostUsdAsync(string modelName, int promptTokens, int completionTokens)
    {
        try
        {
            if (_modelPricingCache == null || (DateTime.UtcNow - _cacheLastUpdated).TotalHours > 24)
            {
                var response = await _httpClient.GetAsync("https://openrouter.ai/api/v1/models");
                if (response.IsSuccessStatusCode)
                {
                    var jsonStr = await response.Content.ReadAsStringAsync();
                    using var json = JsonDocument.Parse(jsonStr);
                    var cache = new Dictionary<string, (decimal, decimal)>();
                    foreach (var model in json.RootElement.GetProperty("data").EnumerateArray())
                    {
                        var id = model.GetProperty("id").GetString();
                        var pricing = model.GetProperty("pricing");
                        var promptStr = pricing.GetProperty("prompt").GetString();
                        var compStr = pricing.GetProperty("completion").GetString();
                        
                        if (id != null && 
                            decimal.TryParse(promptStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out var p) && 
                            decimal.TryParse(compStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out var c))
                        {
                            cache[id] = (p, c);
                        }
                    }
                    _modelPricingCache = cache;
                    _cacheLastUpdated = DateTime.UtcNow;
                }
            }

            if (_modelPricingCache != null && _modelPricingCache.TryGetValue(modelName, out var rates))
            {
                return (promptTokens * rates.Prompt) + (completionTokens * rates.Completion);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching OpenRouter pricing: {ex.Message}");
        }
        
        return 0; // Fallback
    }

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
            .Include(j => j.LlmUsageLogs)
            .Include(j => j.NodeExecutionLogs)
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
            .Include(j => j.LlmUsageLogs)
            .Include(j => j.NodeExecutionLogs)
            .Include(j => j.ApprovalRecords)
                .ThenInclude(a => a.ApproverUser)
            .Include(j => j.MigrationTasks)
            .Include(j => j.Team)
            .Include(j => j.AssignedToUser)
            .FirstOrDefaultAsync(j => j.Id == id);
            
        if (job == null)
            return NotFound(new { message = "Job not found" });
            
        return Ok(job);
    }

    [HttpPost("analyze")]
    [AllowAnonymous] // Open for testing, normally should be Authorize
    public async Task<IActionResult> Analyze([FromBody] AnalyzeRequest request, [FromServices] IServiceScopeFactory scopeFactory)
    {
        var username = User.FindFirst(System.Security.Claims.ClaimTypes.Name)?.Value ?? "System";
        var idClaim = User.FindFirst("id")?.Value;
        int? assignedUserId = null;
        if (int.TryParse(idClaim, out var uid))
        {
            assignedUserId = uid;
        }

        // 1. Create the job in SQLite
        var job = new MigrationJob
        {
            RepositoryUrl = request.RepositoryUrl,
            TargetBranch = request.TargetBranch,
            TargetCommit = request.TargetCommit,
            Status = "Analyzing",
            CreatedBy = username,
            AssignedToUserId = assignedUserId
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

                    // Auto-generate MigrationTasks from "should" priority items
                    try
                    {
                        var planObj = System.Text.Json.Nodes.JsonNode.Parse(planJson);
                        var taskSections = new[] {
                            ("package_updates", "name", (string?)null),
                            ("startup_changes", "description", (string?)null),
                            ("nuget_versions_needed", "package", (string?)null)
                        };

                        foreach (var (section, titleField, descField) in taskSections)
                        {
                            var items = planObj?[section]?.AsArray();
                            if (items == null) continue;
                            foreach (var item in items)
                            {
                                if (item?["priority"]?.GetValue<string>() != "should") continue;
                                db.MigrationTasks.Add(new MigrationTask
                                {
                                    Title = $"[{section}] {item?[titleField]?.GetValue<string>() ?? "Unknown"}",
                                    Description = descField != null 
                                        ? (item?[descField]?.GetValue<string>() ?? "") 
                                        : (item?.ToJsonString() ?? ""),
                                    Status = "PendingApproval",
                                    MigrationJobId = currentJob.Id,
                                    CreatedAt = DateTime.UtcNow
                                });
                            }
                        }

                        // file_changes has per-change granularity
                        var fileChangesArr = planObj?["file_changes"]?.AsArray();
                        if (fileChangesArr != null)
                        {
                            foreach (var fc in fileChangesArr)
                            {
                                var file = fc?["file"]?.GetValue<string>();
                                var changes = fc?["changes"]?.AsArray();
                                if (changes == null) continue;
                                foreach (var c in changes)
                                {
                                    if (c?["priority"]?.GetValue<string>() == "should")
                                    {
                                        db.MigrationTasks.Add(new MigrationTask
                                        {
                                            Title = $"[file_changes] {file}",
                                            Description = c?["reason"]?.GetValue<string>() ?? "",
                                            Status = "PendingApproval",
                                            MigrationJobId = currentJob.Id,
                                            CreatedAt = DateTime.UtcNow
                                        });
                                    }
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        db.JobLogs.Add(new JobLog {
                            MigrationJobId = currentJob.Id, Level = "warn", Phase = "Analyze",
                            Message = "Failed to auto-create tasks from should items: " + ex.Message,
                            Timestamp = DateTime.UtcNow
                        });
                    }
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

    public class ExecutePlanRequest
    {
        public string? UpdatedPlanJson { get; set; }
    }

    [HttpPost("{id}/execute")]
    [AllowAnonymous]
    public async Task<IActionResult> ExecutePlan(int id, [FromBody] ExecutePlanRequest request, [FromServices] IServiceScopeFactory scopeFactory)
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

        // Record the Phase 1 approval
        var idClaim = User.FindFirst("id")?.Value;
        int? approverUserId = null;
        if (int.TryParse(idClaim, out var uid))
        {
            approverUserId = uid;
        }
        
        job.ApprovalRecords.Add(new ApprovalRecord
        {
            ApproverUserId = approverUserId,
            ApprovedAt = DateTime.UtcNow,
            ExecutionOverridePrompt = "Phase 1: Migration Plan Approved"
        });

        if (!string.IsNullOrEmpty(request.UpdatedPlanJson))
        {
            job.MigrationPlanJson = request.UpdatedPlanJson;
        }

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

                string filteredPlan = currentJob.MigrationPlanJson ?? "{}";
                try
                {
                    var planObj = System.Text.Json.Nodes.JsonNode.Parse(filteredPlan);
                    var filterableKeys = new[] { "package_updates", "startup_changes", "nuget_versions_needed" };
                    foreach (var key in filterableKeys)
                    {
                        var arr = planObj?[key]?.AsArray();
                        if (arr == null) continue;
                        var mustOnly = new System.Text.Json.Nodes.JsonArray();
                        foreach (var item in arr.ToList())
                        {
                            if (item?["priority"]?.GetValue<string>() != "should")
                            {
                                arr.Remove(item);
                                mustOnly.Add(item);
                            }
                        }
                        planObj[key] = mustOnly;
                    }
                    
                    var fileChangesArr = planObj?["file_changes"]?.AsArray();
                    if (fileChangesArr != null) {
                        var mustFileChanges = new System.Text.Json.Nodes.JsonArray();
                        foreach (var fileChange in fileChangesArr.ToList()) {
                            var changesArr = fileChange?["changes"]?.AsArray();
                            if (changesArr != null) {
                                var mustChanges = new System.Text.Json.Nodes.JsonArray();
                                foreach(var change in changesArr.ToList()) {
                                    if (change?["priority"]?.GetValue<string>() != "should") {
                                        changesArr.Remove(change);
                                        mustChanges.Add(change);
                                    }
                                }
                                if (mustChanges.Count > 0) {
                                    fileChange["changes"] = mustChanges;
                                    fileChangesArr.Remove(fileChange);
                                    mustFileChanges.Add(fileChange);
                                }
                            }
                        }
                        planObj["file_changes"] = mustFileChanges;
                    }

                    filteredPlan = planObj?.ToJsonString() ?? filteredPlan;
                    
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id, Level = "info", Phase = "Execute",
                        Message = "Plan filtered to must-only items for execution",
                        Timestamp = DateTime.UtcNow
                    });
                }
                catch (Exception ex)
                {
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id, Level = "warn", Phase = "Execute",
                        Message = "Could not filter plan by priority, sending full plan: " + ex.Message,
                        Timestamp = DateTime.UtcNow
                    });
                }
                await db.SaveChangesAsync();

                var payload = new { job_id = currentJob.Id, migration_plan = filteredPlan };
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
                githubToken, owner, repoName, branchName, "Automated .NET 8 Migration", fileChangesToCommit, targetBranch);

            job.BranchName = branch;
            job.PrUrl = prUrl;
            job.CommitHash = commitHash;
            job.Status = "Approved and PR Created";

            // Record the Phase 2 approval
            var idClaim = User.FindFirst("id")?.Value;
            int? approverUserId = null;
            if (int.TryParse(idClaim, out var uid))
            {
                approverUserId = uid;
            }
            
            job.ApprovalRecords.Add(new ApprovalRecord
            {
                ApproverUserId = approverUserId,
                ApprovedAt = DateTime.UtcNow,
                ExecutionOverridePrompt = "Phase 2: Code Changes Approved and PR Created"
            });
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

    [HttpPost("{id}/metrics")]
    [AllowAnonymous]
    public async Task<IActionResult> UpdateMetrics(int id, [FromBody] UpdateMetricsRequest request)
    {
        var job = await _context.MigrationJobs.FindAsync(id);
        if (job == null) return NotFound("Job not found");

        if (request.Phase1ExecutionTimeMs.HasValue) {
            job.Phase1ExecutionTimeMs = request.Phase1ExecutionTimeMs;
            job.ExecutionTimeMs = request.Phase1ExecutionTimeMs;
        }
        if (request.Phase2ExecutionTimeMs.HasValue) {
            job.Phase2ExecutionTimeMs = request.Phase2ExecutionTimeMs;
            job.ExecutionTimeMs = (job.Phase1ExecutionTimeMs ?? 0) + request.Phase2ExecutionTimeMs.Value;
        }
        if (request.InitialErrorCount.HasValue) job.InitialErrorCount = request.InitialErrorCount;
        if (request.ResidualErrorCount.HasValue) job.ResidualErrorCount = request.ResidualErrorCount;
        if (request.ErrorFixerIterations.HasValue) job.ErrorFixerIterations = request.ErrorFixerIterations;
        if (request.SuccessRate.HasValue) job.SuccessRate = request.SuccessRate;
        if (request.RegressionRate.HasValue) job.RegressionRate = request.RegressionRate;
        
        if (request.Phase1Success.HasValue) job.Phase1Success = request.Phase1Success;
        if (request.Phase2Success.HasValue) job.Phase2Success = request.Phase2Success;
        if (request.IsSuccess.HasValue) job.IsSuccess = request.IsSuccess;

        if (request.NodeExecutions != null)
        {
            foreach (var node in request.NodeExecutions)
            {
                _context.NodeExecutionLogs.Add(new NodeExecutionLog
                {
                    MigrationJobId = job.Id,
                    NodeName = node.NodeName,
                    Phase = node.Phase,
                    ExecutionTimeMs = node.ExecutionTimeMs
                });
            }
        }

        if (request.LlmUsages != null)
        {
            foreach (var usage in request.LlmUsages)
            {
                var calculatedCost = await GetCostUsdAsync(usage.ModelName, usage.PromptTokens, usage.CompletionTokens);
                _context.LlmUsageLogs.Add(new LlmUsageLog
                {
                    MigrationJobId = job.Id,
                    AgentName = usage.AgentName,
                    ModelName = usage.ModelName,
                    Provider = usage.Provider,
                    PromptTokens = usage.PromptTokens,
                    CompletionTokens = usage.CompletionTokens,
                    TotalTokens = usage.TotalTokens,
                    TotalCostUsd = calculatedCost > 0 ? calculatedCost : usage.TotalCostUsd
                });
            }
        }

        await _context.SaveChangesAsync();
        return Ok(new { Message = "Metrics updated successfully" });
    }

    [HttpPost("{id}/llm-usage")]
    [AllowAnonymous]
    public async Task<IActionResult> AddLlmUsage(int id, [FromBody] AddLlmUsageRequest request)
    {
        var job = await _context.MigrationJobs.FindAsync(id);
        if (job == null) return NotFound("Job not found");

        var usage = new LlmUsageLog
        {
            MigrationJobId = job.Id,
            AgentName = request.AgentName,
            ModelName = request.ModelName,
            Provider = request.Provider,
            PromptTokens = request.PromptTokens,
            CompletionTokens = request.CompletionTokens,
            TotalTokens = request.TotalTokens,
            TotalCostUsd = request.TotalCostUsd,
            CreatedAt = DateTime.UtcNow
        };

        _context.LlmUsageLogs.Add(usage);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "LLM Usage logged successfully", LogId = usage.Id });
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

public class UpdateMetricsRequest
{
    public long? ExecutionTimeMs { get; set; }
    public long? Phase1ExecutionTimeMs { get; set; }
    public long? Phase2ExecutionTimeMs { get; set; }
    public int? InitialErrorCount { get; set; }
    public int? ResidualErrorCount { get; set; }
    public int? ErrorFixerIterations { get; set; }
    public double? SuccessRate { get; set; }
    public double? RegressionRate { get; set; }
    public bool? Phase1Success { get; set; }
    public bool? Phase2Success { get; set; }
    public bool? IsSuccess { get; set; }
    public List<NodeExecutionDto>? NodeExecutions { get; set; }
    public List<LlmUsageDto>? LlmUsages { get; set; }
}

public class NodeExecutionDto
{
    public string NodeName { get; set; } = string.Empty;
    public string Phase { get; set; } = string.Empty;
    public long ExecutionTimeMs { get; set; }
}

public class LlmUsageDto
{
    public string AgentName { get; set; } = string.Empty;
    public string ModelName { get; set; } = string.Empty;
    public string Provider { get; set; } = string.Empty;
    public int PromptTokens { get; set; }
    public int CompletionTokens { get; set; }
    public int TotalTokens { get; set; }
    public decimal TotalCostUsd { get; set; }
}

public class AddLlmUsageRequest
{
    public string AgentName { get; set; } = string.Empty;
    public string ModelName { get; set; } = string.Empty;
    public string Provider { get; set; } = string.Empty;
    public int PromptTokens { get; set; }
    public int CompletionTokens { get; set; }
    public int TotalTokens { get; set; }
    public decimal TotalCostUsd { get; set; }
}

public class ExecuteRequest
{
    public string? CustomPrompt { get; set; }
}
