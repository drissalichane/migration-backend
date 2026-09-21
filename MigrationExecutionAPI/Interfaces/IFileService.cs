namespace MigrationExecutionAPI.Interfaces;

public interface IFileService
{
    Task<string> ReadFileAsync(string repositoryPath, string filePath);
    Task WriteFileAsync(string repositoryPath, string filePath, string content);
    Task ReplaceFileContentAsync(string repositoryPath, string filePath, string targetContent, string replacementContent);
    /// <summary>The file a path refers to, resolved exactly as the three methods above resolve it.</summary>
    string ResolveExistingPath(string repositoryPath, string filePath);
}
