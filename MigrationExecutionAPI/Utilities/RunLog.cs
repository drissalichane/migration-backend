using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using MigrationExecutionAPI.Models;

namespace MigrationExecutionAPI.Utilities
{
    /// <summary>
    /// Reads the latest execution out of a job's log. A job can be executed more than
    /// once (/execute accepts "Failed Execution"), and its log keeps every run. Job 100's
    /// PR body would have said "6 planned edit(s) did not apply" for a run that had 3,
    /// because it counted both runs. Everything from the last "Initiating execution
    /// phase..." on belongs to the latest run.
    /// </summary>
    public static class RunLog
    {
        public const string ExecutionStart = "Initiating execution phase...";
        public const string EditNotApplied = "A planned file edit did not apply";
        /// <summary>Posted by Part 2 v5.6's 'Collect Actual Changes' after comparing the final files with the plan.</summary>
        public const string PlanComparison = "Compared the final code with the plan";

        // Part 2 v5.6 names the file: "A planned file edit did not apply (path): ...". Earlier exports did not.
        private static readonly Regex NotAppliedPath =
            new(@"^A planned file edit did not apply \((?<path>[^)]+)\):", RegexOptions.Compiled);

        public static List<JobLog> LatestExecution(IEnumerable<JobLog> logs)
        {
            var ordered = logs.OrderBy(l => l.Id).ToList();
            var start = ordered.FindLastIndex(l => l.Message == ExecutionStart);
            return start < 0 ? new List<JobLog>() : ordered.Skip(start).ToList();
        }

        public static (int Count, List<string> Paths) EditsNotApplied(IEnumerable<JobLog> run)
        {
            var hits = run.Where(l => l.Message.StartsWith(EditNotApplied, StringComparison.Ordinal)).ToList();
            var paths = hits.Select(l => NotAppliedPath.Match(l.Message))
                .Where(m => m.Success)
                .Select(m => m.Groups["path"].Value)
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();
            return (hits.Count, paths);
        }

        public static JobLog? FindPlanComparison(IEnumerable<JobLog> run) =>
            run.LastOrDefault(l => l.Message.StartsWith(PlanComparison, StringComparison.Ordinal));
    }
}
