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
    private readonly N8nTelemetryService _n8nTelemetry;
    private readonly OpenRouterPricing _pricing;
    // Costs come from OpenRouter's live catalogue via OpenRouterPricing, which also handles
    // variant suffixes (":floor" on the Error Fixer's model) and models whose rate changes by
    // time of day. Still an estimate - OpenRouter's activity tab is what was actually billed.
    private async Task<decimal> GetCostUsdAsync(string modelName, int promptTokens, int completionTokens)
    {
        var price = await _pricing.GetAsync(modelName);
        return price is null ? 0m : OpenRouterPricing.CostOf(price, promptTokens, completionTokens, DateTime.UtcNow);
    }

    private readonly HttpClient _httpClient;

    // The n8n webhooks of the two pipeline workflows. Renamed from net8-migration-* on
    // 2026-09-21 together with the workflows (DotNet_Migration_Pipeline_*.json); an export
    // still on the old path answers 404 until the renamed one is imported and active.
    private const string AnalyzeWebhookPath = "dotnet-migration-analyze";
    private const string ExecuteWebhookPath = "dotnet-migration-execute";

    private static string WebhookHint(System.Net.HttpStatusCode status, string path, string part) =>
        status == System.Net.HttpStatusCode.NotFound
            ? $" - n8n has no active workflow on /webhook/{path}. Import and activate the current {part} workflow."
            : "";

    public MigrationJobController(MigrationDbContext context, IFileService fileService, GitHubService githubService,
        N8nTelemetryService n8nTelemetry, OpenRouterPricing pricing)
    {
        _context = context;
        _fileService = fileService;
        _githubService = githubService;
        _n8nTelemetry = n8nTelemetry;
        _pricing = pricing;
        _httpClient = new HttpClient { Timeout = TimeSpan.FromMinutes(60) };
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
            // Mirror the pipeline's own default so the persisted record matches what actually ran
            // (every n8n node reads `body.target_framework || 'net8.0'`).
            TargetFramework = string.IsNullOrWhiteSpace(request.TargetFramework) ? "net8.0" : request.TargetFramework,
            CustomPrompt = request.CustomPrompt,
            CustomBranchName = request.CustomBranchName,
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
            var httpClient = new HttpClient { Timeout = TimeSpan.FromMinutes(60) };
            
            try
            {
                var payload = new { 
                    repo_url = request.RepositoryUrl, 
                    job_id = jobId,
                    target_branch = request.TargetBranch,
                    target_commit = request.TargetCommit,
                    target_framework = request.TargetFramework,
                    custom_prompt = request.CustomPrompt
                };
                var content = new StringContent(JsonSerializer.Serialize(payload), System.Text.Encoding.UTF8, "application/json");
                
                // Was /webhook/net8-migration-analyze: the pipeline targets any framework, and
                // the path said otherwise. Renamed together with the workflow (2026-09-21).
                var response = await httpClient.PostAsync($"http://localhost:5678/webhook/{AnalyzeWebhookPath}", content);

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
                        Message = $"Webhook failed with status {response.StatusCode}: {errorResponse}" + WebhookHint(response.StatusCode, AnalyzeWebhookPath, "Part 1"),
                        Timestamp = DateTime.UtcNow
                    });
                    await db.SaveChangesAsync();
                    return;
                }

                var n8nResponse = await response.Content.ReadAsStringAsync();

                // n8n answers 2xx with an EMPTY body when the workflow dies before reaching
                // "Respond to Webhook" (a node failing outright, e.g. the MCP server being
                // unreachable). Parsing that throws "The input does not contain any JSON tokens",
                // which told the user nothing about the real cause. Record the status and the raw
                // body so the job log points at the n8n execution instead of a parser artifact.
                JsonNode? jsonNode;
                try
                {
                    jsonNode = JsonNode.Parse(n8nResponse);
                }
                catch (System.Text.Json.JsonException)
                {
                    currentJob.Status = "Failed";
                    var bodyDescription = string.IsNullOrWhiteSpace(n8nResponse)
                        ? "an empty body"
                        : $"a body that is not JSON ({n8nResponse.Length} chars)";
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id,
                        Level = "error",
                        Phase = "Analyze",
                        Message = $"n8n returned HTTP {(int)response.StatusCode} with {bodyDescription}. The workflow most likely failed before reaching 'Respond to Webhook' - open the n8n execution log for this run to see which node errored.",
                        Details = n8nResponse.Length > 4000 ? n8nResponse[..4000] + "\n...(truncated)" : n8nResponse,
                        Timestamp = DateTime.UtcNow
                    });
                    await db.SaveChangesAsync();
                    return;
                }

                // n8n reports its own execution id so the backend can pull this run's real token
                // counts and per-node timings back out of n8n's API once the run is over. An
                // export that does not send it simply leaves telemetry unpopulated.
                var n8nExecutionId = jsonNode?["n8n_execution_id"]?.ToString();
                if (N8nTelemetryService.IsUsableExecutionId(n8nExecutionId))
                    currentJob.N8nExecutionIdPhase1 = n8nExecutionId;

                var planJson = jsonNode?["migration_plan"]?.ToString();
                
                if (string.IsNullOrEmpty(planJson))
                {
                    currentJob.Status = "Failed";
                }
                else
                {
                    currentJob.MigrationPlanJson = planJson;
                    currentJob.Status = "Pending Plan Approval";

                    // The analyzer detects the repo's current TFM; `source_framework` is a required
                    // field in the Plan Validator, but tolerate it being absent rather than failing the job.
                    try
                    {
                        var sourceFramework = JsonNode.Parse(planJson)?["source_framework"]?.ToString();
                        if (!string.IsNullOrWhiteSpace(sourceFramework))
                        {
                            currentJob.SourceFramework = sourceFramework;
                        }
                    }
                    catch { }

                    // Persist NuGet resolver v5.1 fields
                    var nugetWarnings = jsonNode?["nuget_warnings"];
                    var nugetVulnerabilities = jsonNode?["nuget_vulnerabilities"];

                    if (nugetWarnings != null)
                    {
                        currentJob.NugetWarnings = nugetWarnings.ToJsonString();
                    }
                    if (nugetVulnerabilities != null)
                    {
                        currentJob.NugetVulnerabilities = nugetVulnerabilities.ToJsonString();
                    }

                    // Auto-create MigrationTasks for warnings that need human review
                    if (nugetWarnings is JsonArray warningsArr)
                    {
                        foreach (var warning in warningsArr)
                        {
                            var warningStr = warning?.GetValue<string>() ?? "";
                            if (warningStr.Contains("needs human review", StringComparison.OrdinalIgnoreCase))
                            {
                                db.MigrationTasks.Add(new MigrationTask
                                {
                                    Title = "[NuGet] Package needs human review",
                                    Description = warningStr,
                                    Status = "Todo",
                                    MigrationJobId = currentJob.Id,
                                    CreatedAt = DateTime.UtcNow
                                });
                            }
                        }
                    }
                }
                await db.SaveChangesAsync();

                if (N8nTelemetryService.IsUsableExecutionId(n8nExecutionId))
                {
                    var telemetry = scope.ServiceProvider.GetRequiredService<N8nTelemetryService>();
                    var ingest = await telemetry.IngestAsync(db, jobId, n8nExecutionId, "Analyze");
                    if (!ingest.Ok)
                    {
                        db.JobLogs.Add(new JobLog {
                            MigrationJobId = jobId, Level = "warning", Phase = "Analyze",
                            Message = "Could not read this run's telemetry from n8n: " + ingest.Message,
                            Timestamp = DateTime.UtcNow
                        });
                        await db.SaveChangesAsync();
                    }
                }
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
        public string? CustomPrompt { get; set; }
    }

    [HttpPost("{id}/execute")]
    [AllowAnonymous]
    public async Task<IActionResult> ExecutePlan(int id, [FromBody] ExecutePlanRequest request, [FromServices] IServiceScopeFactory scopeFactory)
    {
        var job = await _context.MigrationJobs.FindAsync(id);
        if (job == null) return NotFound(new { Message = "Job not found" });
        if (job.Status != "Pending Plan Approval" && job.Status != "Failed Execution") 
            return BadRequest(new { Message = "Job is not awaiting plan approval or failed execution." });

        // NuGet vulnerabilities are surfaced on the plan review screen rather than blocking execution
        // here: aborting after Phase 1 wastes the tokens already spent producing the plan. They are
        // recorded in the job log so the decision to proceed stays auditable.
        if (!string.IsNullOrEmpty(job.NugetVulnerabilities) && job.NugetVulnerabilities != "[]")
        {
            _context.JobLogs.Add(new JobLog {
                MigrationJobId = job.Id,
                Level = "warning",
                Phase = "Execute",
                Message = "Proceeding with execution despite known NuGet vulnerabilities.",
                Details = job.NugetVulnerabilities,
                Timestamp = DateTime.UtcNow
            });
        }

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
            // The override prompt the reviewer typed on the plan screen, or null so the UI omits
            // the row entirely rather than showing a placeholder as if it were user input.
            ExecutionOverridePrompt = string.IsNullOrWhiteSpace(request.CustomPrompt)
                ? null
                : request.CustomPrompt.Trim()
        });

        if (!string.IsNullOrEmpty(request.UpdatedPlanJson))
        {
            job.MigrationPlanJson = request.UpdatedPlanJson;
        }

        await _context.SaveChangesAsync();

        var jobId = job.Id;
        // Forwarded to Part 2 so the Migrator actually honours it. Until now this was recorded on
        // the ApprovalRecord for audit and then dropped, so a reviewer's override changed nothing.
        var overridePrompt = string.IsNullOrWhiteSpace(request.CustomPrompt) ? "" : request.CustomPrompt.Trim();

        _ = Task.Run(async () =>
        {
            using var scope = scopeFactory.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<MigrationDbContext>();
            var httpClient = new HttpClient { Timeout = TimeSpan.FromMinutes(60) };
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
                        db.JobLogs.Add(new JobLog { MigrationJobId = jobId, Level = "warning", Phase = "Execute", Message = "Failed to reset git repo: " + ex.Message, Timestamp = DateTime.UtcNow });
                    }
                }

                // The reset returns the workspace to the original code, so file-change records
                // from an earlier run of this job describe edits that no longer exist. Job 100's
                // successful re-run kept the failed run's four wrong LegacyMapping.cs edits, and
                // the review screen listed 15 edits for 6 files.
                var staleChanges = await db.FileChanges.Where(f => f.MigrationJobId == jobId).ToListAsync();
                if (staleChanges.Count > 0)
                {
                    db.FileChanges.RemoveRange(staleChanges);
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = jobId, Level = "info", Phase = "Execute",
                        Message = $"Cleared {staleChanges.Count} file-change record(s) left by a previous run of this job.",
                        Timestamp = DateTime.UtcNow
                    });
                }

                // Everything the must-only filter below leaves out. Computed once and used three
                // times: the execute log, the Part 2 payload (so the Reporter can list it), and
                // the fallback that appends it to the report if the Reporter does not.
                var deferred = MigrationExecutionAPI.Utilities.PlanDeferral.Collect(currentJob.MigrationPlanJson);
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
                        planObj![key] = mustOnly;
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
                                    fileChange!["changes"] = mustChanges;
                                    fileChangesArr.Remove(fileChange);
                                    mustFileChanges.Add(fileChange);
                                }
                            }
                        }
                        planObj!["file_changes"] = mustFileChanges;
                    }

                    filteredPlan = planObj?.ToJsonString() ?? filteredPlan;

                    // This used to say only "Plan filtered to must-only items for execution" -
                    // no count, no files. On job 99 it silently dropped 8 of 16 changes, the
                    // entire SYSLIB modernization. Say what was left out, and warn when it is
                    // non-empty so the dashboard terminal highlights it.
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id,
                        Level = deferred.Count > 0 ? "warning" : "info",
                        Phase = "Execute",
                        Message = MigrationExecutionAPI.Utilities.PlanDeferral.Summarise(deferred),
                        Details = deferred.Count > 0 ? MigrationExecutionAPI.Utilities.PlanDeferral.Details(deferred) : null,
                        Timestamp = DateTime.UtcNow
                    });
                }
                catch (Exception ex)
                {
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id, Level = "warning", Phase = "Execute",
                        Message = "Could not filter plan by priority, sending full plan: " + ex.Message,
                        Timestamp = DateTime.UtcNow
                    });
                }
                await db.SaveChangesAsync();

                // Part 2's Migrator and Error Fixer prompts already read body.target_framework and
                // body.custom_prompt; neither was ever sent, so the Migrator prompt literally read
                // "TARGET FRAMEWORK: undefined" and every reviewer override was discarded.
                // custom_prompt is guarded by a truthy check upstream, so "" correctly omits the block.
                var targetTfm = string.IsNullOrWhiteSpace(currentJob.TargetFramework) ? "net8.0" : currentJob.TargetFramework;
                var payload = new
                {
                    job_id = currentJob.Id,
                    migration_plan = filteredPlan,
                    target_framework = targetTfm,
                    custom_prompt = overridePrompt,
                    // Part 2 v5.4's Reporter lists these. Before, it only ever saw the filtered
                    // plan, so its report described a complete migration while every "should"
                    // item was still in the code.
                    deferred_changes = MigrationExecutionAPI.Utilities.PlanDeferral.ForPayload(deferred)
                };
                var content = new StringContent(System.Text.Json.JsonSerializer.Serialize(payload), System.Text.Encoding.UTF8, "application/json");
                
                var response = await httpClient.PostAsync($"http://localhost:5678/webhook/{ExecuteWebhookPath}", content);

                if (!response.IsSuccessStatusCode)
                {
                    var errorResponse = await response.Content.ReadAsStringAsync();
                    currentJob.Status = "Failed Execution";
                    db.JobLogs.Add(new JobLog {
                        MigrationJobId = currentJob.Id,
                        Level = "error",
                        Phase = "Execute",
                        Message = $"Webhook failed with status {response.StatusCode}: {errorResponse}" + WebhookHint(response.StatusCode, ExecuteWebhookPath, "Part 2"),
                        Timestamp = DateTime.UtcNow
                    });
                    await db.SaveChangesAsync();
                    return;
                }

                var responseBody = await response.Content.ReadAsStringAsync();
                // Part 2 v5.4 sends an explicit `outcome`; older exports make this fall back to the
                // old text heuristic, which wrongly fails a successful report containing "Error:".
                var result = MigrationExecutionAPI.Utilities.Part2Outcome.Decide(responseBody);
                currentJob.ExecutionReport = result.Report;

                // Same handover as Part 1: the workflow names its own execution so its real token
                // counts can be read back. Parsed defensively - Part 2's body may be array-wrapped,
                // and a non-JSON body is a case Part2Outcome.Decide already absorbs on its own.
                string? n8nExecutionIdP2 = null;
                try
                {
                    var parsedBody = JsonNode.Parse(responseBody);
                    var holder = parsedBody is JsonArray bodyArr ? bodyArr.FirstOrDefault() : parsedBody;
                    n8nExecutionIdP2 = holder?["n8n_execution_id"]?.ToString();
                }
                catch { }
                if (N8nTelemetryService.IsUsableExecutionId(n8nExecutionIdP2))
                    currentJob.N8nExecutionIdPhase2 = n8nExecutionIdP2;

                // Parse tasks from Reporter LLM if present
                if (!string.IsNullOrEmpty(currentJob.ExecutionReport))
                {
                    var reportText = currentJob.ExecutionReport;
                    var taskMarker = "---TASKS---";
                    var markerIndex = reportText.IndexOf(taskMarker);
                    if (markerIndex >= 0)
                    {
                        var tasksJsonStr = reportText.Substring(markerIndex + taskMarker.Length).Trim();
                        // Remove tasks block from report
                        currentJob.ExecutionReport = reportText.Substring(0, markerIndex).Trim();
                        try
                        {
                            // Strip markdown code block formatting if present
                            if (tasksJsonStr.StartsWith("```json")) tasksJsonStr = tasksJsonStr.Substring(7);
                            else if (tasksJsonStr.StartsWith("```")) tasksJsonStr = tasksJsonStr.Substring(3);
                            if (tasksJsonStr.EndsWith("```")) tasksJsonStr = tasksJsonStr.Substring(0, tasksJsonStr.Length - 3);

                            var generatedTasks = System.Text.Json.JsonSerializer.Deserialize<List<Dictionary<string, string>>>(tasksJsonStr.Trim());
                            if (generatedTasks != null)
                            {
                                foreach (var gt in generatedTasks)
                                {
                                    if (gt.TryGetValue("title", out var title))
                                    {
                                        gt.TryGetValue("description", out var desc);
                                        db.MigrationTasks.Add(new MigrationTask
                                        {
                                            Title = $"[Reporter Agent] {title}",
                                            Description = desc ?? "",
                                            Status = "PendingApproval",
                                            MigrationJobId = currentJob.Id,
                                            CreatedAt = DateTime.UtcNow
                                        });
                                    }
                                }
                            }
                        }
                        catch (Exception ex)
                        {
                            db.JobLogs.Add(new JobLog {
                                MigrationJobId = currentJob.Id, Level = "warning", Phase = "Execute",
                                Message = "Failed to parse tasks from reporter LLM: " + ex.Message,
                                Timestamp = DateTime.UtcNow
                            });
                        }
                    }
                }

                currentJob.Status = result.Status;
                db.JobLogs.Add(new JobLog {
                    MigrationJobId = currentJob.Id, Level = result.LogLevel, Phase = "Execute",
                    Message = result.LogMessage,
                    Timestamp = DateTime.UtcNow
                });

                // The Reporter is asked (v5.4) to list the deferred changes. If it did not, append
                // them - the report is what the dashboard shows as the account of this migration.
                if (result.Status == MigrationExecutionAPI.Utilities.Part2Outcome.Success)
                {
                    var (withDeferred, appended) = MigrationExecutionAPI.Utilities.PlanDeferral.EnsureInReport(
                        currentJob.ExecutionReport, deferred, targetTfm, currentJob.Id);
                    currentJob.ExecutionReport = withDeferred;
                    if (appended)
                    {
                        db.JobLogs.Add(new JobLog {
                            MigrationJobId = currentJob.Id, Level = "warning", Phase = "Execute",
                            Message = $"The Reporter did not list the {deferred.Count} deferred change(s); the backend appended them to the report.",
                            Timestamp = DateTime.UtcNow
                        });
                    }
                }
                
                await db.SaveChangesAsync();

                if (N8nTelemetryService.IsUsableExecutionId(n8nExecutionIdP2))
                {
                    var telemetry = scope.ServiceProvider.GetRequiredService<N8nTelemetryService>();
                    var ingest = await telemetry.IngestAsync(db, jobId, n8nExecutionIdP2, "Execute");
                    if (!ingest.Ok)
                    {
                        db.JobLogs.Add(new JobLog {
                            MigrationJobId = jobId, Level = "warning", Phase = "Execute",
                            Message = "Could not read this run's telemetry from n8n: " + ingest.Message,
                            Timestamp = DateTime.UtcNow
                        });
                        await db.SaveChangesAsync();
                    }
                }
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
        // "Rejected" is the review screen's saved draft ("Reject & Save"), whose panel offers
        // "Create PR". This used to answer 400, so a draft could never become a PR.
        if (job.Status != "Pending PR Review" && job.Status != "Rejected") return BadRequest("Job is not pending PR review.");

        var githubToken = User.FindFirst("github_token")?.Value;
        if (string.IsNullOrEmpty(githubToken)) return Unauthorized("User has no GitHub token. Please re-login with GitHub.");

        var jobWorkspace = $"C:/Users/grandy/projects/migration-{job.Id}";

        // 1. The reviewer's choices go into the workspace first. They used to be stored on
        //    the rows only, and the commit read the files from disk: a hand edit never
        //    reached the PR, and unticking one edit of a file changed nothing.
        var (reviewError, reviewSteps) = await ApplyReviewAsync(job, request, jobWorkspace);
        if (reviewError != null) return Conflict(new { Message = reviewError });

        // 2. Commit what differs from the cloned commit - including project files changed only
        //    by `dotnet add/remove`, which leave no edit record. One entry per file: committing
        //    one per record announced "15 file(s) changed" for job 100's 6.
        var (fileChangesToCommit, notCommitted, fromDiff) = await MigrationExecutionAPI.Utilities.WorkspaceDiff.CommitSetAsync(
            jobWorkspace, job.FileChanges.Where(f => f.Accepted).Select(f => f.FilePath));
        if (fileChangesToCommit.Count == 0)
        {
            await _context.SaveChangesAsync();
            return BadRequest(new { Message = "Nothing to commit: after the review, no file differs from the original code." });
        }

        // 3. The pipeline built this code before the review. If the reviewer changed it, build
        //    again - the PR says whether it still compiles; the reviewer's choice stands.
        (bool? Builds, string Detail)? rebuilt = reviewSteps.Count > 0 ? await BuildAfterReviewAsync(job.Id) : null;
        var reviewSummary = DescribeReview(reviewSteps);
        if (reviewSteps.Count > 0)
        {
            _context.JobLogs.Add(new JobLog {
                MigrationJobId = job.Id, Phase = "Approve",
                Level = rebuilt?.Builds == true ? "info" : "warning",
                Message = $"Applied the reviewer's changes to the workspace ({reviewSummary}). " + rebuilt switch
                {
                    { Builds: true } => "Rebuilt: it builds.",
                    { Builds: false } r => "Rebuilt: it does NOT build. " + r.Detail,
                    { } r => "Could not rebuild: " + r.Detail,
                    _ => ""
                },
                Details = string.Join("\n", reviewSteps.Select(s => $"#{s.RowId} {s.FilePath}: {s.Kind}")),
                Timestamp = DateTime.UtcNow
            });
        }

        // Files with no edit record were never on the review screen - say which.
        var recorded = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        foreach (var fc in job.FileChanges)
        {
            try { recorded.Add(Path.GetFullPath(_fileService.ResolveExistingPath(jobWorkspace, fc.FilePath))); } catch { }
        }
        var unrecorded = fileChangesToCommit.Select(f => f.FilePath)
            .Where(p => !recorded.Contains(Path.GetFullPath(Path.Combine(jobWorkspace, p)))).ToList();

        try
        {
            // Parse owner/repo from "https://github.com/owner/repo.git"
            var repoParts = job.RepositoryUrl.Replace(".git", "").Split('/');
            var repoName = repoParts.Last();
            var owner = repoParts[repoParts.Length - 2];
            // The branch name and PR title used to be hardcoded to "net8" regardless of what the
            // job actually targeted, so a net9.0 migration opened a PR titled ".NET 8 Migration".
            // TargetFramework is persisted now, so derive both from it.
            var tfm = string.IsNullOrWhiteSpace(job.TargetFramework) ? "net8.0" : job.TargetFramework.Trim();
            var tfmSlug = tfm.StartsWith("net", StringComparison.OrdinalIgnoreCase) ? tfm.Replace(".0", "") : tfm;
            var tfmLabel = tfmSlug.StartsWith("net", StringComparison.OrdinalIgnoreCase)
                ? $".NET {tfmSlug[3..]}"
                : tfm;

            // Honour the branch name the user typed on the ingest screen, falling back to the
            // generated default. Sanitized because it is free text and git rejects most punctuation.
            var branchName = BranchNameSanitizer.Sanitize(job.CustomBranchName) ?? $"migration/{tfmSlug}-{job.Id}";

            // Target branch is the selected one, or default to null (which means CreatePullRequestAsync should fall back to DefaultBranch)
            var targetBranch = job.TargetBranch;

            // The PR body named ".NET 8" regardless of target, same bug the title had.
            // It is the first thing a reviewer reads, so state what actually changed and,
            // importantly, what did NOT: execution runs must-only, so every "should" item
            // was deferred and the reviewer should not read this as a complete modernization.
            var srcLabel = string.IsNullOrWhiteSpace(job.SourceFramework) ? "the current framework" : job.SourceFramework;
            var deferred = MigrationExecutionAPI.Utilities.PlanDeferral.Collect(job.MigrationPlanJson);
            // Check Replace Applied (Part 2 v5.2+) logs when a planned edit did not match the
            // file. Such an edit is neither applied nor deferred - the reviewer has to know it
            // exists, or the PR looks more complete than it is. Only the latest execution
            // counts: the log keeps every run, and a re-run starts from a reset workspace.
            var latestRun = MigrationExecutionAPI.Utilities.RunLog.LatestExecution(
                await _context.JobLogs.Where(l => l.MigrationJobId == job.Id)
                    .Select(l => new JobLog { Id = l.Id, Level = l.Level, Message = l.Message })
                    .ToListAsync());
            var (failedEdits, failedPaths) = MigrationExecutionAPI.Utilities.RunLog.EditsNotApplied(latestRun);
            // Part 2 v5.6 then compares the final files with the plan, which says whether a
            // failed edit was made afterwards by the Error Fixer. Absent on older exports.
            var planComparison = MigrationExecutionAPI.Utilities.RunLog.FindPlanComparison(latestRun);

            var bodyLines = new List<string>
            {
                $"Automated migration from **{srcLabel}** to **{tfm}**, generated by the Migration Dashboard (job #{job.Id}).",
                "",
                $"- {fileChangesToCommit.Count} file(s) changed",
                // "Nothing was deferred", not "every planned change was applied": an edit can
                // still fail to apply, and the lines below say so.
                deferred.Count == 0
                    ? "- Nothing was deferred."
                    : $"- Only the changes required to build and run on `{tfm}` were applied. **{deferred.Count} {(deferred.Count == 1 ? "was" : "were")} deferred** — see below.",
            };
            if (failedEdits > 0)
                bodyLines.Add($"- ⚠️ **{failedEdits} planned edit(s) did not apply as written** (the target text was not found)" +
                              (failedPaths.Count > 0 ? " in " + string.Join(", ", failedPaths.Select(p => $"`{p}`")) : "") +
                              (planComparison == null ? ". See the job log before merging." : "."));
            if (planComparison != null)
                bodyLines.Add($"- {(planComparison.Level == "info" ? "✅" : "⚠️")} {planComparison.Message}");
            if (unrecorded.Count > 0)
                bodyLines.Add("- Not on the review screen, because no edit was recorded for them (for project files: the " +
                              "pipeline's `dotnet add/remove` package commands): " + string.Join(", ", unrecorded.Select(p => $"`{p}`")));
            if (reviewSteps.Count > 0)
                bodyLines.Add($"- Reviewer changes: {reviewSummary}. " + rebuilt switch
                {
                    { Builds: true } => "✅ Rebuilt after the review: it builds.",
                    { Builds: false } r => "⚠️ **Rebuilt after the review: it does NOT build.** " + r.Detail,
                    { } r => $"⚠️ Could not rebuild after the review ({r.Detail}), so this code is unverified.",
                    _ => ""
                });
            if (notCommitted.Count > 0)
                bodyLines.Add("- Not included in this PR: " + string.Join(", ", notCommitted.Select(p => $"`{p}`")));
            if (!fromDiff)
                bodyLines.Add("- The file list comes from the edit records: the workspace diff could not be read.");
            var deferredSection = MigrationExecutionAPI.Utilities.PlanDeferral.PrSection(deferred, tfm, job.Id);
            if (deferredSection.Length > 0) { bodyLines.Add(""); bodyLines.Add(deferredSection); }
            var prBody = string.Join("\n", bodyLines);

            var (branch, prUrl, commitHash) = await _githubService.CreatePullRequestAsync(
                githubToken, owner, repoName, branchName, $"Automated {tfmLabel} Migration", fileChangesToCommit, targetBranch, prBody);

            job.BranchName = branch;
            job.PrUrl = prUrl;
            job.CommitHash = commitHash;
            job.Status = "Approved and PR Created";

            // The job log used to stop at "Generating file diffs for review..." - nothing
            // recorded that a PR was opened, by whom, or where. That is the most important
            // moment in the audit trail, so it gets its own entry.
            var approverName = User.FindFirst(System.Security.Claims.ClaimTypes.Name)?.Value ?? "unknown user";
            _context.JobLogs.Add(new JobLog {
                MigrationJobId = job.Id, Level = "info", Phase = "Approve",
                Message = $"Pull request opened by {approverName}: {prUrl}",
                Details = $"Branch: {branch}\nCommit: {commitHash}\nFiles committed: {fileChangesToCommit.Count}\n" +
                          $"Deferred \"should\" changes: {deferred.Count}" +
                          (failedEdits > 0 ? $"\nPlanned edits that did not apply: {failedEdits}" : "") +
                          (reviewSteps.Count > 0 ? $"\nReviewer changes: {reviewSummary}" : "") +
                          (unrecorded.Count > 0 ? $"\nCommitted without an edit record: {string.Join(", ", unrecorded)}" : ""),
                Timestamp = DateTime.UtcNow
            });

            // Auto-generate MigrationTasks from "should" priority items in the plan
            if (!string.IsNullOrEmpty(job.MigrationPlanJson))
            {
                try
                {
                    var planObj = System.Text.Json.Nodes.JsonNode.Parse(job.MigrationPlanJson);
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
                            
                            var title = $"[{section}] {item?[titleField]?.GetValue<string>() ?? "Unknown"}";
                            if (!_context.MigrationTasks.Any(t => t.MigrationJobId == job.Id && t.Title == title))
                            {
                                _context.MigrationTasks.Add(new MigrationTask
                                {
                                    Title = title,
                                    Description = descField != null 
                                        ? (item?[descField]?.GetValue<string>() ?? "") 
                                        : (item?.ToJsonString() ?? ""),
                                    Status = "PendingApproval",
                                    MigrationJobId = job.Id,
                                    CreatedAt = DateTime.UtcNow
                                });
                            }
                        }
                    }

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
                                    var title = $"[file_changes] {file}";
                                    var desc = c?["reason"]?.GetValue<string>() ?? "";
                                    
                                    if (!_context.MigrationTasks.Any(t => t.MigrationJobId == job.Id && t.Title == title && t.Description == desc))
                                    {
                                        _context.MigrationTasks.Add(new MigrationTask
                                        {
                                            Title = title,
                                            Description = desc,
                                            Status = "PendingApproval",
                                            MigrationJobId = job.Id,
                                            CreatedAt = DateTime.UtcNow
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    _context.JobLogs.Add(new JobLog {
                        MigrationJobId = job.Id, Level = "warning", Phase = "Approve",
                        Message = "Failed to auto-create tasks from should items: " + ex.Message,
                        Timestamp = DateTime.UtcNow
                    });
                }
            }

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
            // Same gap as the success path: a failed PR only showed up as a status change.
            _context.JobLogs.Add(new JobLog {
                MigrationJobId = job.Id, Level = "error", Phase = "Approve",
                Message = "Pull request creation failed: " + ex.Message,
                Details = ex.ToString(),
                Timestamp = DateTime.UtcNow
            });
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
        if (job.Status != "Pending PR Review" && job.Status != "Rejected") return BadRequest("Job is not pending PR review.");

        // The draft's choices go into the workspace, as in /approve, so the rows keep
        // describing it. They used to be saved on the rows only - overwriting the text the
        // pipeline had written, after which that edit could no longer be found or undone.
        var (reviewError, reviewSteps) = await ApplyReviewAsync(job, request, $"C:/Users/grandy/projects/migration-{job.Id}");
        if (reviewError != null) return Conflict(new { Message = reviewError });
        if (reviewSteps.Count > 0)
        {
            _context.JobLogs.Add(new JobLog {
                MigrationJobId = job.Id, Level = "info", Phase = "Approve",
                Message = $"Review saved as a draft ({DescribeReview(reviewSteps)}); the workspace holds these choices.",
                Details = string.Join("\n", reviewSteps.Select(s => $"#{s.RowId} {s.FilePath}: {s.Kind}")),
                Timestamp = DateTime.UtcNow
            });
        }

        job.Status = "Rejected";
        await _context.SaveChangesAsync();

        return Ok(new { Message = "Job marked as draft/rejected and changes saved." });
    }

    /// <summary>
    /// Applies the review screen's choices to the workspace (Utilities/ReviewApplier) and
    /// records them on the rows, so each row still describes what its file holds. On an
    /// error nothing was changed, on disk or on the rows.
    /// </summary>
    private async Task<(string? Error, List<MigrationExecutionAPI.Utilities.ReviewApplier.Step> Steps)> ApplyReviewAsync(
        MigrationJob job, ApproveRequest request, string workspace)
    {
        var rows = job.FileChanges.Select(f => new MigrationExecutionAPI.Utilities.ReviewApplier.Row(
            f.Id, f.FilePath, f.Action, f.TargetContent, f.ReplacementContent, f.Accepted)).ToList();
        var decisions = request.FileEdits.Select(e => new MigrationExecutionAPI.Utilities.ReviewApplier.Decision(
            e.FileChangeId, e.Accepted, e.ManualReplacement)).ToList();
        var steps = MigrationExecutionAPI.Utilities.ReviewApplier.Plan(rows, decisions);
        if (steps.Count == 0) return (null, steps);

        var error = await MigrationExecutionAPI.Utilities.ReviewApplier.ApplyAsync(steps,
            path => _fileService.ResolveExistingPath(workspace, path),
            (path, from, to) => _fileService.ReplaceFileContentAsync(workspace, path, from, to));
        if (error != null) return (error, steps);

        foreach (var s in steps)
        {
            var row = job.FileChanges.First(f => f.Id == s.RowId);
            if (s.Kind == MigrationExecutionAPI.Utilities.ReviewApplier.Kind.Withdraw) row.Accepted = false;
            else { row.Accepted = true; row.ReplacementContent = s.To; }
        }
        return (null, steps);
    }

    private static string DescribeReview(IReadOnlyCollection<MigrationExecutionAPI.Utilities.ReviewApplier.Step> steps)
    {
        var parts = new List<string>();
        void Add(MigrationExecutionAPI.Utilities.ReviewApplier.Kind kind, string label)
        {
            var n = steps.Count(s => s.Kind == kind);
            if (n > 0) parts.Add($"{n} edit(s) {label}");
        }
        Add(MigrationExecutionAPI.Utilities.ReviewApplier.Kind.Withdraw, "withdrawn");
        Add(MigrationExecutionAPI.Utilities.ReviewApplier.Kind.Rewrite, "rewritten by hand");
        Add(MigrationExecutionAPI.Utilities.ReviewApplier.Kind.Restore, "re-applied");
        return string.Join(", ", parts);
    }

    /// <summary>
    /// Builds the job's workspace in the n8n container through the 'DotNet Migration Build
    /// Tool' workflow - the same build the Error Fixer's `build` tool uses, with the
    /// container's SDKs. Never throws: an unavailable build tool is reported, not fatal.
    /// </summary>
    private static async Task<(bool? Builds, string Detail)> BuildAfterReviewAsync(int jobId)
    {
        try
        {
            using var http = new HttpClient { Timeout = TimeSpan.FromMinutes(6) };
            using var res = await http.PostAsync("http://localhost:5678/webhook/migration-build-tool",
                new StringContent(System.Text.Json.JsonSerializer.Serialize(new { jobId }), System.Text.Encoding.UTF8, "application/json"));
            if (!res.IsSuccessStatusCode)
                return (null, $"the build tool answered HTTP {(int)res.StatusCode}; is the 'DotNet Migration Build Tool' workflow active?");
            var (builds, errors) = MigrationExecutionAPI.Utilities.BuildToolResult.Parse(await res.Content.ReadAsStringAsync());
            return builds switch
            {
                true => (true, ""),
                false => (false, errors.Count == 0
                    ? "No compiler errors could be read from the output."
                    : string.Join("; ", errors.Take(3).Select(e => $"`{e}`")) + (errors.Count > 3 ? $" and {errors.Count - 3} more" : "")),
                _ => (null, "the build tool's answer was not recognised")
            };
        }
        catch (Exception ex)
        {
            return (null, ex.Message);
        }
    }

    [HttpPost("{id}/sync")]
    public async Task<IActionResult> SyncJobStatus(int id)
    {
        var job = await _context.MigrationJobs.FindAsync(id);
        if (job == null) return NotFound("Job not found");
        if (string.IsNullOrEmpty(job.PrUrl)) return Ok(new { Status = job.Status, Message = "Job has no PR to sync." });

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

    public class RefreshTelemetryRequest
    {
        // Only needed to backfill a job that ran before the workflows reported their own
        // execution id. Find it in n8n's execution list, or via the API:
        //   GET /api/v1/executions?limit=20   (header X-N8N-API-KEY)
        public string? Phase1ExecutionId { get; set; }
        public string? Phase2ExecutionId { get; set; }
    }

    /// <summary>
    /// Re-reads this job's telemetry from n8n: the provider's real token counts per model and
    /// wall-clock per node. Safe to call repeatedly - each phase's rows are replaced, not stacked.
    /// </summary>
    [HttpPost("{id}/telemetry/refresh")]
    public async Task<IActionResult> RefreshTelemetry(int id, [FromBody] RefreshTelemetryRequest? request)
    {
        var job = await _context.MigrationJobs.FindAsync(id);
        if (job == null) return NotFound(new { Message = "Job not found" });

        if (!_n8nTelemetry.IsConfigured)
            return BadRequest(new { Message = "No n8n API key is configured. Set it with: dotnet user-secrets set \"N8n:ApiKey\" \"<key>\"" });

        // A supplied id is only written onto the job once it has actually produced telemetry.
        // Storing a typo would leave the job pointing at an execution that 404s on every later
        // refresh, with nothing to say why.
        var p1 = request?.Phase1ExecutionId?.Trim();
        var p2 = request?.Phase2ExecutionId?.Trim();
        if (string.IsNullOrWhiteSpace(p1)) p1 = job.N8nExecutionIdPhase1;
        if (string.IsNullOrWhiteSpace(p2)) p2 = job.N8nExecutionIdPhase2;

        if (string.IsNullOrWhiteSpace(p1) && string.IsNullOrWhiteSpace(p2))
            return BadRequest(new { Message = "This job has no n8n execution id. Pass phase1ExecutionId / phase2ExecutionId to backfill it from n8n's execution list." });

        var results = new List<object>();
        if (!string.IsNullOrWhiteSpace(p1))
        {
            var r = await _n8nTelemetry.IngestAsync(_context, id, p1, "Analyze");
            if (r.Ok) job.N8nExecutionIdPhase1 = p1;
            results.Add(new { Phase = "Analyze", ExecutionId = p1, r.Ok, r.Message, r.TotalTokens, r.CostUsd, r.WallClockMs });
        }
        if (!string.IsNullOrWhiteSpace(p2))
        {
            var r = await _n8nTelemetry.IngestAsync(_context, id, p2, "Execute");
            if (r.Ok) job.N8nExecutionIdPhase2 = p2;
            results.Add(new { Phase = "Execute", ExecutionId = p2, r.Ok, r.Message, r.TotalTokens, r.CostUsd, r.WallClockMs });
        }

        await _context.SaveChangesAsync();
        return Ok(new { JobId = id, Results = results });
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

/// <summary>
/// Reduces free-text input to something git will accept as a branch name, or returns null if
/// nothing usable survives (in which case the caller should use its own default).
/// </summary>
public static class BranchNameSanitizer
{
    public static string? Sanitize(string? raw)
    {
        if (string.IsNullOrWhiteSpace(raw)) return null;

        var cleaned = System.Text.RegularExpressions.Regex.Replace(raw.Trim(), @"\s+", "-");
        // git check-ref-format: no ~ ^ : ? * [ \ or ASCII control characters
        cleaned = System.Text.RegularExpressions.Regex.Replace(cleaned, @"[~^:?*\[\]\\\x00-\x1F\x7F]", "");
        // no leading/trailing slash or dot, no "..", no consecutive slashes
        cleaned = System.Text.RegularExpressions.Regex.Replace(cleaned, @"\.{2,}", ".");
        cleaned = System.Text.RegularExpressions.Regex.Replace(cleaned, @"/{2,}", "/");
        cleaned = cleaned.Trim('/', '.', '-');
        if (cleaned.EndsWith(".lock", StringComparison.OrdinalIgnoreCase))
        {
            cleaned = cleaned[..^5].Trim('/', '.', '-');
        }

        return string.IsNullOrWhiteSpace(cleaned) ? null : cleaned;
    }
}

public class AnalyzeRequest
{
    public string RepositoryUrl { get; set; } = string.Empty;
    public string? TargetBranch { get; set; }
    public string? TargetCommit { get; set; }
    public string? TargetFramework { get; set; }
    public string? CustomPrompt { get; set; }
    public string? CustomBranchName { get; set; }
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
