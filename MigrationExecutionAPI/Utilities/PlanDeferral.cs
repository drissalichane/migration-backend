using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;

namespace MigrationExecutionAPI.Utilities
{
    /// <summary>
    /// What the must-only execution filter leaves out of a migration.
    ///
    /// <c>/execute</c> sends Part 2 only the items whose priority is not "should", and
    /// until now nothing said what was dropped: the job log read "Plan filtered to
    /// must-only items for execution", and the PR body described a finished migration.
    /// On job 99 that was 8 of 16 changes - the whole SYSLIB modernization.
    ///
    /// The must/should split itself is right (must = will not compile or throws on the
    /// target; should = deprecated but still works). This only makes the consequence
    /// visible. It reads <c>MigrationPlanJson</c>, which <c>/execute</c> overwrites with
    /// the reviewer's edited plan before filtering, so a "should" here is exactly what
    /// was deferred - including anything the reviewer demoted by hand.
    /// </summary>
    public static class PlanDeferral
    {
        public sealed record Item(string Section, string Target, string Reason, bool PragmaSuppressed);

        public static List<Item> Collect(string? planJson)
        {
            var items = new List<Item>();
            if (string.IsNullOrWhiteSpace(planJson)) return items;

            JsonNode? plan;
            try { plan = JsonNode.Parse(planJson); }
            catch { return items; }
            if (plan == null) return items;

            foreach (var fc in plan["file_changes"]?.AsArray() ?? new JsonArray())
            {
                var file = Str(fc?["file"]) ?? Str(fc?["file_path"]) ?? "(unknown file)";
                foreach (var c in fc?["changes"]?.AsArray() ?? new JsonArray())
                {
                    if (Str(c?["priority"]) != "should") continue;
                    var old = Str(c?["old"]) ?? Str(c?["old_content"]) ?? "";
                    // The fixture - and real legacy code - wraps deprecated calls in
                    // `#pragma warning disable SYSLIBxxxx`, and the should-change removes the
                    // pragma together with the API. Skip the change and both stay, so the
                    // build reports 0 warnings for code that is still deprecated.
                    var pragma = old.Contains("#pragma warning disable", StringComparison.Ordinal);
                    items.Add(new Item("file_changes", file, Str(c?["reason"]) ?? "", pragma));
                }
            }

            foreach (var (section, nameField) in new[]
                     { ("package_updates", "name"), ("nuget_versions_needed", "package"), ("startup_changes", "file") })
            {
                foreach (var p in plan[section]?.AsArray() ?? new JsonArray())
                {
                    if (Str(p?["priority"]) != "should") continue;
                    var target = Str(p?[nameField]) ?? Str(p?["name"]) ?? "(unnamed)";
                    var reason = Str(p?["reason"]) ?? Str(p?["description"])
                                 ?? $"{Str(p?["from_version"])} -> {Str(p?["resolved_version"]) ?? Str(p?["to_version"])}".Trim(' ', '-', '>');
                    items.Add(new Item(section, target, reason, false));
                }
            }
            return items;
        }

        /// <summary>One-line summary for a JobLog message.</summary>
        public static string Summarise(IReadOnlyCollection<Item> items)
        {
            if (items.Count == 0) return "Plan filtered to must-only items for execution: nothing deferred.";
            var files = items.Where(i => i.Section == "file_changes").Select(i => i.Target).Distinct().Count();
            var suppressed = items.Count(i => i.PragmaSuppressed);
            var sb = new StringBuilder($"Plan filtered to must-only items: {items.Count} \"should\" change(s) deferred");
            if (files > 0) sb.Append($" across {files} file(s)");
            sb.Append(" - they will not be applied");
            if (suppressed > 0) sb.Append($"; {suppressed} are hidden by #pragma warning disable, so the build will not flag them");
            sb.Append('.');
            return sb.ToString();
        }

        /// <summary>Multi-line list for JobLog.Details.</summary>
        public static string Details(IReadOnlyCollection<Item> items) =>
            string.Join("\n", items.Select(i =>
                $"- [{i.Section}] {i.Target}: {Trim(i.Reason, 160)}{(i.PragmaSuppressed ? "  (warning suppressed by #pragma)" : "")}"));

        /// <summary>Markdown section for the PR body; empty when nothing was deferred.</summary>
        public static string PrSection(IReadOnlyCollection<Item> items, string targetFramework, int jobId, int maxRows = 30)
        {
            if (items.Count == 0) return "";
            var sb = new StringBuilder();
            sb.AppendLine($"### Deferred: {items.Count} deprecated-but-working change(s) NOT applied");
            sb.AppendLine();
            sb.AppendLine($"These were flagged during analysis and deliberately left out: they compile and run on " +
                          $"`{targetFramework}` today, but the APIs are deprecated. Each one is tracked as a task on job #{jobId}.");
            if (items.Any(i => i.PragmaSuppressed))
            {
                sb.AppendLine();
                sb.AppendLine("**Note:** items marked 🔇 are wrapped in `#pragma warning disable`, so this PR's build " +
                              "reports **no warnings** for them. A clean build is not evidence they were handled.");
            }
            sb.AppendLine();
            foreach (var i in items.Take(maxRows))
                sb.AppendLine($"- {(i.PragmaSuppressed ? "🔇 " : "")}`{i.Target}` — {Trim(i.Reason, 140)}");
            if (items.Count > maxRows) sb.AppendLine($"- …and {items.Count - maxRows} more (see the job's tasks)");
            return sb.ToString().TrimEnd();
        }

        /// <summary>
        /// Shape sent to Part 2 as `deferred_changes`, so the Reporter can list them.
        /// </summary>
        public static object[] ForPayload(IReadOnlyCollection<Item> items) =>
            items.Select(i => (object)new
            {
                section = i.Section,
                target = i.Target,
                reason = Trim(i.Reason, 200),
                pragma_suppressed = i.PragmaSuppressed
            }).ToArray();

        /// <summary>
        /// Part 2 v5.4 asks the Reporter to list the deferred changes. Prompt rules in
        /// these workflows have been ignored three times in a row, so if the report
        /// comes back without them, append the deterministic section - labelled as added
        /// by the backend. Never touches a report that already covers them.
        /// </summary>
        public static (string Report, bool Appended) EnsureInReport(
            string? report, IReadOnlyCollection<Item> items, string targetFramework, int jobId)
        {
            report ??= "";
            if (items.Count == 0) return (report, false);
            if (report.Contains("deferred", StringComparison.OrdinalIgnoreCase)) return (report, false);
            var section = PrSection(items, targetFramework, jobId);
            return (report.TrimEnd() + "\n\n---\n_Added by the backend: the report did not list the deferred changes._\n\n" + section, true);
        }

        private static string? Str(JsonNode? n)
        {
            try { var s = n?.GetValue<string>(); return string.IsNullOrWhiteSpace(s) ? null : s; }
            catch { return null; }
        }

        private static string Trim(string s, int max)
        {
            s = (s ?? "").Replace('\n', ' ').Replace('\r', ' ').Trim();
            return s.Length <= max ? s : s[..(max - 1)].TrimEnd() + "…";
        }
    }
}
