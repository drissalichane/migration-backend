using System;
using System.IO;
using System.Linq;

namespace MigrationExecutionAPI.Utilities
{
    public static class RepoLocator
    {
        public static string GetLatestRepo()
        {
            var baseDir = "C:/Users/grandy/projects/";
            var dirs = Directory.GetDirectories(baseDir, "migration-*");
            if (dirs.Length == 0) throw new Exception("No migration repository found.");
            
            // Get the one with the latest write/creation time
            var latest = dirs.OrderByDescending(d => new DirectoryInfo(d).LastWriteTime).First();
            return latest.Replace("\\", "/");
        }
    }
}
