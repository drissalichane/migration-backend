namespace MigrationExecutionAPI.Utilities;

public static class PathValidator
{
    public static string GetValidatedFullPath(string repositoryPath, string relativeOrAbsolutePath)
    {
        if (string.IsNullOrWhiteSpace(repositoryPath))
        {
            throw new ArgumentException("Repository path cannot be empty", nameof(repositoryPath));
        }

        if (string.IsNullOrWhiteSpace(relativeOrAbsolutePath))
        {
            throw new ArgumentException("File path cannot be empty", nameof(relativeOrAbsolutePath));
        }

        // Get full absolute path of the repository
        var fullRepoPath = Path.GetFullPath(repositoryPath);
        
        // Ensure the repository directory exists
        if (!Directory.Exists(fullRepoPath))
        {
            throw new DirectoryNotFoundException($"Repository path '{fullRepoPath}' does not exist.");
        }

        // Determine the full path of the target file
        // Trim leading slashes from relative paths to prevent Path.Combine from treating them as absolute paths to the drive root
        string safeRelativePath = relativeOrAbsolutePath.TrimStart('/', '\\');
        var fullTargetPath = Path.GetFullPath(Path.Combine(fullRepoPath, safeRelativePath));

        // Ensure the target path is still inside the repository folder
        if (!fullTargetPath.StartsWith(fullRepoPath, StringComparison.OrdinalIgnoreCase))
        {
            throw new UnauthorizedAccessException("Path traversal detected! The requested path is outside the repository.");
        }

        return fullTargetPath;
    }
}
