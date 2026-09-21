using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MigrationExecutionAPI.Utilities
{
    /// <summary>
    /// What a migration actually changed in a job's workspace, read from git: per-file
    /// line counts, the unified diff, and new files git does not track yet.
    ///
    /// Added for Part 2 v5.6. The Reporter used to be given the plan and nothing about
    /// the result, so job 100's report described the plan: it claimed a "repaired
    /// corrupted field name" that existed only in the plan's deliberately broken
    /// snippet, and a MailKit reference that no project has. The diff is the record of
    /// what happened.
    ///
    /// Runs on the host, where the backend already runs `git reset --hard` on these
    /// workspaces. The host's git applies core.autocrlf, so a file whose line endings
    /// /api/files/replace normalised shows only its real changes, not every line.
    /// </summary>
    public static class WorkspaceDiff
    {
        public sealed record FileStat(string Path, int? Added, int? Removed);

        public sealed record Result(
            bool Success, string Message, List<FileStat> Files, List<string> Untracked, string Diff, bool Truncated);

        /// <summary>Cap on the diff text returned. Part 2 trims it again for the LLM.</summary>
        public const int MaxDiffChars = 200_000;

        public static async Task<Result> ReadAsync(string repoRoot, CancellationToken ct = default)
        {
            if (!Directory.Exists(Path.Combine(repoRoot, ".git")))
                return Fail("Not a git workspace: " + repoRoot);

            var (c1, numstat, e1) = await RunGitAsync(repoRoot, ct, "diff", "--numstat");
            if (c1 != 0) return Fail("git diff --numstat failed: " + e1.Trim());
            var files = new List<FileStat>();
            foreach (var line in Lines(numstat))
            {
                var parts = line.Split('\t');
                if (parts.Length < 3) continue;
                // Binary files report "-" for both counts.
                files.Add(new FileStat(parts[2],
                    int.TryParse(parts[0], out var added) ? added : null,
                    int.TryParse(parts[1], out var removed) ? removed : null));
            }

            var (c2, diff, e2) = await RunGitAsync(repoRoot, ct, "diff", "--no-color", "--no-ext-diff");
            if (c2 != 0) return Fail("git diff failed: " + e2.Trim());
            var truncated = diff.Length > MaxDiffChars;
            if (truncated) diff = diff[..MaxDiffChars];

            // Files the Error Fixer created with write_file. `git diff` does not show them.
            var (c3, others, _) = await RunGitAsync(repoRoot, ct, "ls-files", "--others", "--exclude-standard");
            var untracked = c3 == 0 ? Lines(others).ToList() : new List<string>();

            return new Result(true, "", files, untracked, diff, truncated);
        }

        private static Result Fail(string message) => new(false, message, new(), new(), "", false);

        private static IEnumerable<string> Lines(string s) =>
            s.Split('\n').Select(l => l.TrimEnd('\r')).Where(l => l.Length > 0);

        private static async Task<(int Code, string Stdout, string Stderr)> RunGitAsync(
            string repo, CancellationToken ct, params string[] args)
        {
            var psi = new ProcessStartInfo("git")
            {
                WorkingDirectory = repo,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true,
                StandardOutputEncoding = Encoding.UTF8,
                StandardErrorEncoding = Encoding.UTF8
            };
            // Global options go before the subcommand. quotepath=false keeps non-ASCII
            // paths readable instead of octal-escaped. Arguments are passed as a list,
            // never through a shell.
            psi.ArgumentList.Add("--no-pager");
            psi.ArgumentList.Add("-c");
            psi.ArgumentList.Add("core.quotepath=false");
            foreach (var a in args) psi.ArgumentList.Add(a);

            using var p = Process.Start(psi) ?? throw new InvalidOperationException("git could not be started");
            var stdout = p.StandardOutput.ReadToEndAsync();
            var stderr = p.StandardError.ReadToEndAsync();
            using var timeout = CancellationTokenSource.CreateLinkedTokenSource(ct);
            timeout.CancelAfter(TimeSpan.FromSeconds(30));
            try
            {
                await p.WaitForExitAsync(timeout.Token);
            }
            catch (OperationCanceledException)
            {
                try { p.Kill(entireProcessTree: true); } catch { }
                return (-1, "", "git did not finish within 30s");
            }
            return (p.ExitCode, await stdout, await stderr);
        }
    }
}
