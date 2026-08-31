namespace MigrationExecutionAPI.Interfaces;

public interface IFileService
{
    Task<string> ReadFileAsync(string repositoryPath, string filePath);
    Task WriteFileAsync(string repositoryPath, string filePath, string content);
    Task ReplaceFileContentAsync(string repositoryPath, string filePath, string targetContent, string replacementContent);
}
