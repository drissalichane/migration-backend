using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.Models;
using System.Text.Json.Nodes;

namespace MigrationExecutionAPI.Services;

/// <summary>
/// Pulls a finished pipeline run's real telemetry out of n8n and stores it against the job.
///
/// n8n keeps, per execution, the provider's own token counts for every LLM call plus wall-clock
/// for every node. That is the difference between this table being a measurement and being a
/// guess: the workflow's own telemetry nodes could only estimate (len/3, ~30x low, because a Code
/// node cannot see the ReAct scratchpad that is re-sent on every turn). Nothing here is
/// reconstructed - it is read from what the provider billed.
///
/// Reached over n8n's public REST API, which returns the run data already deserialised. n8n prunes
/// old executions (on this instance ids below 322 are already gone), so ingest at the end of a run
/// rather than lazily when someone opens the page.
///
/// The one thing n8n does not record is cost: there is no cost field and no OpenRouter generation
/// id to look one up with. Cost is therefore tokens x list price from <see cref="OpenRouterPricing"/>,
/// an estimate, and is labelled as one in the UI.
/// </summary>
public class N8nTelemetryService
{
    private readonly IHttpClientFactory _httpFactory;
    private readonly OpenRouterPricing _pricing;
    private readonly IConfiguration _config;
    private readonly ILogger<N8nTelemetryService> _logger;

    public N8nTelemetryService(IHttpClientFactory httpFactory, OpenRouterPricing pricing,
        IConfiguration config, ILogger<N8nTelemetryService> logger)
    {
        _httpFactory = httpFactory;
        _pricing = pricing;
        _config = config;
        _logger = logger;
    }

    private string BaseUrl => (_config["N8n:BaseUrl"] ?? "http://localhost:5678").TrimEnd('/');
    private string? ApiKey => _config["N8n:ApiKey"];

    public bool IsConfigured => !string.IsNullOrWhiteSpace(ApiKey);

    /// <summary>
    /// n8n execution ids are numeric. A workflow run manually from the editor has no saved
    /// execution and $execution.id is then the literal "__UNKNOWN__" - storing that would put a
    /// dead id on the job and every later refresh would 404 against it.
    /// </summary>
    public static bool IsUsableExecutionId(string? id) =>
        !string.IsNullOrWhiteSpace(id) && id.All(char.IsDigit);

    public record IngestResult(bool Ok, string Message, int LlmRows = 0, int NodeRows = 0,
        int TotalTokens = 0, decimal CostUsd = 0m, long WallClockMs = 0);

    /// <summary>
    /// Replaces this job+phase's telemetry with what n8n recorded for <paramref name="executionId"/>.
    /// Never throws: telemetry is reporting, and losing it must not fail a migration that worked.
    /// </summary>
    public async Task<IngestResult> IngestAsync(MigrationDbContext db, int jobId, string executionId,
        string phase, CancellationToken ct = default)
    {
        if (!IsConfigured)
            return new IngestResult(false, "No n8n API key is configured (N8n:ApiKey), so real token counts cannot be read.");

        try
        {
            JsonNode? root;
            using (var http = _httpFactory.CreateClient())
            {
                http.Timeout = TimeSpan.FromSeconds(90);
                using var req = new HttpRequestMessage(HttpMethod.Get,
                    $"{BaseUrl}/api/v1/executions/{Uri.EscapeDataString(executionId)}?includeData=true");
                req.Headers.Add("X-N8N-API-KEY", ApiKey);

                using var res = await http.SendAsync(req, ct);
                if (!res.IsSuccessStatusCode)
                    return new IngestResult(false, $"n8n answered HTTP {(int)res.StatusCode} for execution {executionId}.");

                root = JsonNode.Parse(await res.Content.ReadAsStringAsync(ct));
            }

            var runData = root?["data"]?["resultData"]?["runData"] as JsonObject;
            if (runData is null)
                return new IngestResult(false, $"n8n execution {executionId} carried no run data.");

            // The model id lives on the LLM node's own parameters. generationInfo.model_name is
            // present on an agent's calls but absent on a chainLlm's (the Analyzer and Reporter),
            // so the workflow definition is the reliable source.
            var modelOfNode = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            if (root?["workflowData"]?["nodes"] is JsonArray wfNodes)
            {
                foreach (var n in wfNodes)
                {
                    var name = n?["name"]?.ToString();
                    var model = n?["parameters"]?["model"]?.ToString();
                    if (!string.IsNullOrWhiteSpace(name) && !string.IsNullOrWhiteSpace(model))
                        modelOfNode[name] = model;
                }
            }

            var llmRows = new List<LlmUsageLog>();
            var nodeRows = new List<NodeExecutionLog>();

            foreach (var entry in runData)
            {
                var nodeName = entry.Key;
                if (entry.Value is not JsonArray runs || runs.Count == 0) continue;

                long nodeMs = 0;
                var isSubNode = false;

                int prompt = 0, completion = 0, calls = 0;
                long llmMs = 0;
                decimal cost = 0m;
                var measuredTokens = false;
                string? model = null;
                var finishReasons = new List<string>();

                foreach (var run in runs)
                {
                    nodeMs += AsLong(run?["executionTime"]);
                    if (run?["data"] is not JsonObject data) continue;

                    // A node wired as ai_languageModel / ai_tool / ai_outputParser hangs off an
                    // agent, and its time is already inside that agent's own executionTime.
                    if (data.Any(kv => kv.Key.StartsWith("ai_", StringComparison.Ordinal))) isSubNode = true;

                    var gen = data["ai_languageModel"]?[0]?[0]?["json"];
                    if (gen is null) continue;

                    // tokenUsage is what the provider reported. tokenUsageEstimate is n8n's own
                    // fallback when a provider returns none - counted, but it does not make the
                    // row measured.
                    var usage = gen["tokenUsage"];
                    if (usage is not null) measuredTokens = true; else usage = gen["tokenUsageEstimate"];

                    var p = (int)AsLong(usage?["promptTokens"]);
                    var c = (int)AsLong(usage?["completionTokens"]);
                    prompt += p;
                    completion += c;
                    calls++;
                    llmMs += AsLong(run?["executionTime"]);

                    var info = gen["response"]?["generations"]?[0]?[0]?["generationInfo"];
                    model ??= info?["model_name"]?.ToString();
                    var finish = info?["finish_reason"]?.ToString();
                    if (!string.IsNullOrWhiteSpace(finish)) finishReasons.Add(finish);

                    // Price each call at its own timestamp: some models (deepseek-v4.1-flash among
                    // them) charge twice as much in peak hours, so one rate for a whole run would
                    // be out by 2x on the model that dominates Part 1's tokens.
                    var startedAt = AsLong(run?["startTime"]);
                    var atUtc = startedAt > 0
                        ? DateTimeOffset.FromUnixTimeMilliseconds(startedAt).UtcDateTime
                        : DateTime.UtcNow;

                    var lookup = model ?? (modelOfNode.TryGetValue(nodeName, out var m) ? m : null);
                    var priced = await _pricing.GetAsync(lookup, ct);
                    if (priced is not null) cost += OpenRouterPricing.CostOf(priced, p, c, atUtc);
                }

                nodeRows.Add(new NodeExecutionLog
                {
                    MigrationJobId = jobId,
                    NodeName = nodeName,
                    Phase = phase,
                    ExecutionTimeMs = nodeMs,
                    Runs = runs.Count,
                    IsSubNode = isSubNode,
                    IsMeasured = true,
                    CreatedAt = DateTime.UtcNow
                });

                if (calls == 0) continue;

                if (string.IsNullOrWhiteSpace(model))
                    modelOfNode.TryGetValue(nodeName, out model);

                llmRows.Add(new LlmUsageLog
                {
                    MigrationJobId = jobId,
                    AgentName = nodeName,
                    ModelName = model ?? "(unreported)",
                    Provider = "OpenRouter (measured via n8n)",
                    PromptTokens = prompt,
                    CompletionTokens = completion,
                    TotalTokens = prompt + completion,
                    TotalCostUsd = cost,
                    IsMeasured = measuredTokens,
                    Phase = phase,
                    Calls = calls,
                    DurationMs = llmMs,
                    FinishReasons = Summarise(finishReasons),
                    CreatedAt = DateTime.UtcNow
                });
            }

            // Re-ingesting the same phase replaces its rows, so a manual refresh or a re-executed
            // job cannot stack duplicates - and the old estimated rows go with them. The estimates
            // written from inside the workflow spelled the phase "Phase 1"/"Phase 2", and the
            // LlmUsageLog rows predate the Phase column entirely, so they carry "". Matching only
            // the new spelling left both sets in the table and every node appeared twice.
            var aliases = phase == "Analyze"
                ? new[] { "Analyze", "Phase 1", "Phase1", "" }
                : new[] { "Execute", "Phase 2", "Phase2", "" };

            var staleLlm = await db.LlmUsageLogs
                .Where(l => l.MigrationJobId == jobId && aliases.Contains(l.Phase))
                .ToListAsync(ct);
            var staleNodes = await db.NodeExecutionLogs
                .Where(n => n.MigrationJobId == jobId && aliases.Contains(n.Phase))
                .ToListAsync(ct);
            db.LlmUsageLogs.RemoveRange(staleLlm);
            db.NodeExecutionLogs.RemoveRange(staleNodes);

            db.LlmUsageLogs.AddRange(llmRows);
            db.NodeExecutionLogs.AddRange(nodeRows);

            // The run's own wall-clock, which is the honest "how long did this phase take" - the
            // node rows cannot be summed for it, because sub-nodes sit inside their agents.
            var startedAtUtc = AsDate(root?["startedAt"]);
            var stoppedAtUtc = AsDate(root?["stoppedAt"]);
            long wallClock = startedAtUtc is not null && stoppedAtUtc is not null
                ? (long)(stoppedAtUtc.Value - startedAtUtc.Value).TotalMilliseconds
                : 0;

            var job = await db.MigrationJobs.FindAsync(new object[] { jobId }, ct);
            if (job is not null && wallClock > 0)
            {
                if (phase == "Analyze") job.Phase1ExecutionTimeMs = wallClock;
                else job.Phase2ExecutionTimeMs = wallClock;
                job.ExecutionTimeMs = (job.Phase1ExecutionTimeMs ?? 0) + (job.Phase2ExecutionTimeMs ?? 0);
            }

            var totalTokens = llmRows.Sum(l => l.TotalTokens);
            var totalCost = llmRows.Sum(l => l.TotalCostUsd);

            db.JobLogs.Add(new JobLog
            {
                MigrationJobId = jobId,
                Level = "info",
                Phase = phase,
                Message = $"Telemetry read from n8n execution {executionId}: {totalTokens:N0} tokens across " +
                          $"{llmRows.Sum(l => l.Calls)} LLM call(s) on {llmRows.Count} model node(s), " +
                          $"{wallClock / 1000.0:F0}s wall clock.",
                Details = string.Join("\n", llmRows.Select(l =>
                    $"{l.AgentName} [{l.ModelName}] {l.Calls} call(s), {l.PromptTokens:N0} prompt + {l.CompletionTokens:N0} completion, " +
                    $"{l.DurationMs / 1000.0:F1}s, ~${l.TotalCostUsd:F4}" +
                    (string.IsNullOrEmpty(l.FinishReasons) ? "" : $", finish: {l.FinishReasons}"))),
                Timestamp = DateTime.UtcNow
            });

            await db.SaveChangesAsync(ct);

            return new IngestResult(true,
                $"Read {llmRows.Count} model node(s) and {nodeRows.Count} node timing(s) from n8n execution {executionId}.",
                llmRows.Count, nodeRows.Count, totalTokens, totalCost, wallClock);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Could not ingest n8n telemetry for job {JobId}, execution {ExecutionId}", jobId, executionId);
            return new IngestResult(false, $"Could not read n8n execution {executionId}: {ex.Message}");
        }
    }

    /// <summary>"stop x5, length" - a "length" here is a truncated reply, which is how the v5.8
    /// Reporter returned nothing at all. Worth surfacing rather than averaging away.</summary>
    private static string? Summarise(List<string> reasons)
    {
        if (reasons.Count == 0) return null;
        return string.Join(", ", reasons.GroupBy(r => r)
            .OrderByDescending(g => g.Count())
            .Select(g => g.Count() > 1 ? $"{g.Key} x{g.Count()}" : g.Key));
    }

    private static long AsLong(JsonNode? n) =>
        n is not null && long.TryParse(n.ToString(), out var v) ? v : 0;

    private static DateTime? AsDate(JsonNode? n) =>
        n is not null && DateTime.TryParse(n.ToString(), System.Globalization.CultureInfo.InvariantCulture,
            System.Globalization.DateTimeStyles.AdjustToUniversal | System.Globalization.DateTimeStyles.AssumeUniversal,
            out var d) ? d : null;
}
