using System;
using System.Text.Json;

namespace MigrationExecutionAPI.Utilities
{
    /// <summary>
    /// Decides a job's status from Part 2's webhook response.
    ///
    /// Until Part 2 v5.4 the three terminal nodes (Success / Failure / Test Failure
    /// Response) were empty Set nodes that passed along whatever reached them, so the
    /// backend never received an explicit outcome and guessed from text: a response
    /// with no `text`/`output` field was a failure, and a report that merely CONTAINED
    /// "BUILD_FAILED", "errorMessage" or "Error:" was a failure too. The report is
    /// LLM-written markdown, so a successful run whose report said "**Error:** none" -
    /// or described an error the Error Fixer had just fixed - was recorded as failed.
    ///
    /// v5.4's terminal nodes send `outcome`. When it is present it is the only thing
    /// that decides. The old text rules survive only for exports older than v5.4.
    /// </summary>
    public static class Part2Outcome
    {
        public const string Success = "Pending PR Review";
        public const string Failed = "Failed Execution";

        public sealed record Result(
            string Status,
            string? Report,
            string? Outcome,
            string LogLevel,
            string LogMessage);

        public static Result Decide(string? responseBody)
        {
            if (string.IsNullOrWhiteSpace(responseBody))
            {
                // n8n answers 2xx with an empty body when a node fails outright.
                return new Result(Failed, "", null, "error",
                    "Part 2 returned an empty response - a node failed outright. Check the n8n execution log for this job.");
            }

            JsonElement root;
            try
            {
                using var doc = JsonDocument.Parse(responseBody);
                root = doc.RootElement.Clone();
            }
            catch (JsonException)
            {
                return new Result(Failed, responseBody, null, "error",
                    "Part 2 returned a response that is not JSON. Check the n8n execution log for this job.");
            }

            // Respond to Webhook can answer with an array of items; the first is the result.
            if (root.ValueKind == JsonValueKind.Array && root.GetArrayLength() > 0) root = root[0];
            if (root.ValueKind != JsonValueKind.Object)
            {
                return new Result(Failed, responseBody, null, "error",
                    "Part 2 returned an unexpected response shape. Check the n8n execution log for this job.");
            }

            var report = Str(root, "report") ?? Str(root, "output") ?? Str(root, "text");
            var outcome = Str(root, "outcome");

            if (outcome != null)
            {
                return outcome switch
                {
                    "success" => new Result(Success, report, outcome, "info",
                        "Part 2 finished: build passed, tests passed or absent. Ready for PR review."),
                    "build_failed" => new Result(Failed, report, outcome, "error",
                        "Part 2 finished with the build still failing after the Error Fixer's retries. No PR should be opened."),
                    "tests_failed" => new Result(Failed, report, outcome, "error",
                        "Part 2 finished: the migrated code builds, but its tests fail. No PR should be opened."),
                    _ => new Result(Failed, report, outcome, "error",
                        $"Part 2 returned an unknown outcome \"{outcome}\". Treated as a failure.")
                };
            }

            // ── Exports older than v5.4: the old heuristic, plus TESTS_FAILED ──────────
            if (report == null)
            {
                return new Result(Failed, "Workflow execution stopped unexpectedly. Raw response: " + responseBody, null,
                    "error", "Part 2 returned no report and no outcome - treated as a failure. (Pre-v5.4 export?)");
            }
            var looksFailed =
                report.Contains("BUILD_FAILED", StringComparison.Ordinal) ||
                report.Contains("TESTS_FAILED", StringComparison.Ordinal) ||
                report.Contains("errorMessage", StringComparison.Ordinal) ||
                report.Contains("Error:", StringComparison.Ordinal);
            return looksFailed
                ? new Result(Failed, report, null, "warning",
                    "Part 2 sent no explicit outcome (export older than v5.4), and the report text looked like a failure. " +
                    "This guess can be wrong - it also fires on a successful report that merely contains \"Error:\".")
                : new Result(Success, report, null, "warning",
                    "Part 2 sent no explicit outcome (export older than v5.4); success was inferred from the report text. Import v5.4.");
        }

        private static string? Str(JsonElement o, string name) =>
            o.TryGetProperty(name, out var v) && v.ValueKind == JsonValueKind.String ? v.GetString() : null;
    }
}
