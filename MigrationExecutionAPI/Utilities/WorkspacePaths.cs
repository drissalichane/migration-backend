using System.IO;

namespace MigrationExecutionAPI.Utilities
{
    /// <summary>
    /// Where each job's cloned repository lives: {Root}/migration-{jobId}.
    ///
    /// n8n clones into /projects/migration-{jobId} inside its container, and the API must open the
    /// very same directory. That used to be the literal C:/Users/grandy/projects in nine places, so
    /// the API only ran on one machine.
    ///
    /// - Docker Compose sets Workspaces:Root to /projects, the same volume n8n mounts there, so both
    ///   sides use one spelling of the path.
    /// - Left unset, it is the folder that holds this repository (MigrationExecutionAPI/../..), which
    ///   is where a hand-started n8n container is pointed with -v &lt;that folder&gt;:/projects.
    /// </summary>
    public static class WorkspacePaths
    {
        public static string Root { get; private set; } = "";

        public static void Configure(string? configuredRoot, string contentRootPath)
        {
            var root = string.IsNullOrWhiteSpace(configuredRoot)
                ? Path.GetFullPath(Path.Combine(contentRootPath, "..", ".."))
                : configuredRoot;
            // Forward slashes and no trailing separator: the paths built from this are compared
            // and prefixed as strings elsewhere, and that is the spelling they always had.
            Root = root.Replace("\\", "/").TrimEnd('/');
        }

        public static string ForJob(int jobId) => $"{Root}/migration-{jobId}";

        public static string LogsDirectory => $"{Root}/logs";
    }
}
