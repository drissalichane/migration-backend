using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MigrationExecutionAPI.Utilities
{
    /// <summary>
    /// Applies the reviewer's choices from the PR review screen to the job's workspace,
    /// so that what is committed is what the reviewer approved.
    ///
    /// The screen lets a reviewer untick single edits and rewrite an edit's code. Until
    /// now /approve stored those choices on the FileChange rows and then committed every
    /// ticked file exactly as it was on disk: a hand edit never reached the PR, and
    /// unticking one edit of a file that had other ticked edits changed nothing.
    ///
    /// Every row keeps one invariant: Accepted means its ReplacementContent is what the
    /// file holds there; not Accepted means its TargetContent was put back. Applying the
    /// same choices twice (a retry, or a saved draft approved later) therefore does
    /// nothing, and an edit unticked in a draft can be ticked again.
    /// </summary>
    public static class ReviewApplier
    {
        public sealed record Row(int Id, string FilePath, string Action, string TargetContent, string ReplacementContent, bool Accepted);
        public sealed record Decision(int FileChangeId, bool Accepted, string? ManualReplacement);

        public enum Kind { Withdraw, Rewrite, Restore }
        public sealed record Step(int RowId, string FilePath, Kind Kind, string From, string To, bool WholeFile);

        public static List<Step> Plan(IEnumerable<Row> rows, IEnumerable<Decision> decisions)
        {
            var wanted = decisions.GroupBy(d => d.FileChangeId).ToDictionary(g => g.Key, g => g.Last());
            var ordered = rows.OrderBy(r => r.Id).ToList();
            var steps = new List<Step>();
            // Undo newest first: a later edit (the Error Fixer's, say) can sit inside the
            // text an earlier one wrote, which is findable again only once it is undone.
            foreach (var r in Enumerable.Reverse(ordered))
            {
                if (!r.Accepted || !wanted.TryGetValue(r.Id, out var d)) continue;
                if (!d.Accepted)
                    steps.Add(new Step(r.Id, r.FilePath, Kind.Withdraw, r.ReplacementContent, r.TargetContent, IsWholeFile(r)));
                else if (Manual(d) is { } text && !Same(text, r.ReplacementContent))
                    steps.Add(new Step(r.Id, r.FilePath, Kind.Rewrite, r.ReplacementContent, text, IsWholeFile(r)));
            }
            // Re-apply in the order the pipeline applied them.
            foreach (var r in ordered)
            {
                if (r.Accepted || !wanted.TryGetValue(r.Id, out var d) || !d.Accepted) continue;
                steps.Add(new Step(r.Id, r.FilePath, Kind.Restore, r.TargetContent, Manual(d) ?? r.ReplacementContent, IsWholeFile(r)));
            }
            return steps;
        }

        /// <summary>
        /// Runs the steps through <paramref name="replace"/> - FileService's, so the same
        /// matching the pipeline used. All or nothing: if one step does not apply, every
        /// file already touched is put back byte for byte, and the message names the edit.
        /// Returns null on success.
        /// </summary>
        public static async Task<string?> ApplyAsync(
            IReadOnlyList<Step> steps,
            Func<string, string> resolve,
            Func<string, string, string, Task> replace)
        {
            var snapshots = new Dictionary<string, byte[]>(StringComparer.OrdinalIgnoreCase);
            foreach (var s in steps)
            {
                try
                {
                    var why = Unappliable(s);
                    if (why != null) throw new InvalidOperationException(why);
                    var full = resolve(s.FilePath);
                    if (!snapshots.ContainsKey(full)) snapshots[full] = await File.ReadAllBytesAsync(full);
                    await replace(s.FilePath, s.From, s.To);
                }
                catch (Exception ex)
                {
                    foreach (var (full, bytes) in snapshots) await File.WriteAllBytesAsync(full, bytes);
                    var verb = s.Kind switch { Kind.Withdraw => "withdraw", Kind.Rewrite => "apply your edit to", _ => "re-apply" };
                    return $"Could not {verb} edit #{s.RowId} in {s.FilePath}: {ex.Message} Nothing was changed.";
                }
            }
            return null;
        }

        /// <summary>A step that cannot be done by finding text and replacing it.</summary>
        private static string? Unappliable(Step s)
        {
            if (s.WholeFile && s.Kind == Kind.Withdraw && s.To.Length == 0)
                return "it wrote the whole file and the previous content was not recorded, so it cannot be withdrawn here.";
            if (s.From.Trim().Length == 0)
                return s.Kind == Kind.Withdraw
                    ? "it only removed code, so there is no text left to find it by."
                    : "there is no recorded text to find it by.";
            return null;
        }

        private static bool IsWholeFile(Row r) => string.Equals(r.Action, "WriteFile", StringComparison.OrdinalIgnoreCase);
        private static string? Manual(Decision d) => string.IsNullOrEmpty(d.ManualReplacement) ? null : d.ManualReplacement;
        private static bool Same(string a, string b) => a.Replace("\r\n", "\n").TrimEnd() == b.Replace("\r\n", "\n").TrimEnd();
    }

    /// <summary>
    /// Reads the answer of the 'NET8 Migration Build Tool' n8n workflow - the build the
    /// Error Fixer's `build` tool uses - as the backend gets it: the Build Workspace
    /// item as JSON, whose stdout ends in BUILD_SUCCESS or BUILD_FAILED.
    /// </summary>
    public static class BuildToolResult
    {
        public static (bool? Builds, List<string> Errors) Parse(string body)
        {
            var stdout = body ?? "";
            try
            {
                using var doc = System.Text.Json.JsonDocument.Parse(stdout);
                var root = doc.RootElement;
                if (root.ValueKind == System.Text.Json.JsonValueKind.Array && root.GetArrayLength() > 0) root = root[0];
                if (root.ValueKind == System.Text.Json.JsonValueKind.Object && root.TryGetProperty("stdout", out var so))
                    stdout = so.GetString() ?? "";
            }
            catch (System.Text.Json.JsonException) { }

            var trimmed = stdout.TrimEnd();
            if (trimmed.EndsWith("BUILD_SUCCESS", StringComparison.Ordinal)) return (true, new List<string>());
            if (!trimmed.EndsWith("BUILD_FAILED", StringComparison.Ordinal)) return (null, new List<string>());
            // dotnet prints each error twice, with absolute container paths and the project in brackets.
            var errors = trimmed.Split('\n')
                .Where(l => l.Contains(": error ", StringComparison.Ordinal))
                // Suffix first: the bracketed project path also contains /projects/migration-N/.
                .Select(l => System.Text.RegularExpressions.Regex.Replace(l.Trim(), @"\s*\[[^\]]*\]$", ""))
                .Select(l => System.Text.RegularExpressions.Regex.Replace(l, @"^\S*?/projects/migration-\d+/", ""))
                .Distinct()
                .ToList();
            return (false, errors);
        }
    }
}
