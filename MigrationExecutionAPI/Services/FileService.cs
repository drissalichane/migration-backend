using MigrationExecutionAPI.Interfaces;
using MigrationExecutionAPI.Utilities;

namespace MigrationExecutionAPI.Services;

public class FileService : IFileService
{
    // One gate per file. Agents issue tool calls in parallel: on job 100 the Error
    // Fixer sent three replace_in_file calls to the same file within 51 ms, and the
    // read-modify-write below has no locking, so two failed with IOException (a 500).
    // Reproduced in isolation: 24 concurrent edits to one file, 23 threw. Edits to
    // the same file now queue; edits to different files still run in parallel.
    // Static because the service is registered per request.
    private static readonly System.Collections.Concurrent.ConcurrentDictionary<string, SemaphoreSlim> FileGates =
        new(StringComparer.OrdinalIgnoreCase);

    private static SemaphoreSlim GateFor(string fullPath) =>
        FileGates.GetOrAdd(Path.GetFullPath(fullPath), _ => new SemaphoreSlim(1, 1));

    private readonly ILogger<FileService> _logger;

    public FileService(ILogger<FileService> logger)
    {
        _logger = logger;
    }

    private string ResolveFilePath(string repositoryPath, string filePath, bool createNew = false)
    {
        var fullPath = PathValidator.GetValidatedFullPath(repositoryPath, filePath);
        if (File.Exists(fullPath)) return fullPath;

        var fileName = Path.GetFileName(filePath);
        if (string.IsNullOrEmpty(fileName)) return fullPath;

        var matches = Directory.GetFiles(repositoryPath, fileName, SearchOption.AllDirectories)
            .Where(f => !f.Contains("\\bin\\") && !f.Contains("\\obj\\") && !f.Contains("\\.git\\"))
            .ToArray();
        
        if (matches.Length == 1)
        {
            _logger.LogInformation("File {FilePath} not found exactly, but resolved to {ResolvedPath}", filePath, matches[0]);
            return matches[0];
        }
        else if (matches.Length > 1)
        {
            var normalizedFilePath = filePath.Replace('\\', '/');
            var suffixMatches = matches.Where(m => m.Replace('\\', '/').EndsWith(normalizedFilePath)).ToArray();
            if (suffixMatches.Length == 1)
            {
                return suffixMatches[0];
            }
            throw new FileNotFoundException($"File '{filePath}' is ambiguous. Found {matches.Length} matches in the repository.");
        }

        if (createNew) return fullPath;

        throw new FileNotFoundException($"File '{filePath}' does not exist in the repository.");
    }

    public async Task<string> ReadFileAsync(string repositoryPath, string filePath)
    {
        _logger.LogInformation("Reading file {FilePath} in repository {RepositoryPath}", filePath, repositoryPath);
        
        var fullPath = ResolveFilePath(repositoryPath, filePath);

        return await File.ReadAllTextAsync(fullPath);
    }

    public async Task WriteFileAsync(string repositoryPath, string filePath, string content)
    {
        _logger.LogInformation("Writing to file {FilePath} in repository {RepositoryPath}", filePath, repositoryPath);
        
        var fullPath = ResolveFilePath(repositoryPath, filePath, createNew: true);

        var directory = Path.GetDirectoryName(fullPath);
        if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
        {
            Directory.CreateDirectory(directory);
        }

        var gate = GateFor(fullPath);
        await gate.WaitAsync();
        try
        {
            await File.WriteAllTextAsync(fullPath, content);
        }
        finally
        {
            gate.Release();
        }
    }

    public async Task ReplaceFileContentAsync(string repositoryPath, string filePath, string targetContent, string replacementContent)
    {
        _logger.LogInformation("Replacing content in file {FilePath} in repository {RepositoryPath}", filePath, repositoryPath);
        
        var fullPath = ResolveFilePath(repositoryPath, filePath);

        // The whole read-modify-write holds the file's gate: a concurrent edit must see
        // this one's result, not the content from before it.
        var gate = GateFor(fullPath);
        await gate.WaitAsync();
        try
        {
            await ReplaceUnderGateAsync(fullPath, targetContent, replacementContent);
        }
        finally
        {
            gate.Release();
        }
    }

    private static async Task ReplaceUnderGateAsync(string fullPath, string targetContent, string replacementContent)
    {
        var rawContent = await File.ReadAllTextAsync(fullPath);

        var content = rawContent.Replace("\r\n", "\n");
        targetContent = targetContent.Replace("\r\n", "\n");
        replacementContent = replacementContent.Replace("\r\n", "\n");
        
        int firstIndex = content.IndexOf(targetContent, StringComparison.Ordinal);
        if (firstIndex == -1)
        {
            // Fuzzy match fallback: ignore leading/trailing whitespace on each line
            var lines = content.Split('\n');
            var targetLines = targetContent.Split('\n').Select(l => l.Trim()).ToArray();
            
            for (int i = 0; i <= lines.Length - targetLines.Length; i++)
            {
                bool match = true;
                for (int j = 0; j < targetLines.Length; j++)
                {
                    if (lines[i + j].Trim() != targetLines[j])
                    {
                        match = false;
                        break;
                    }
                }
                if (match)
                {
                    var actualTargetLines = lines.Skip(i).Take(targetLines.Length).ToArray();
                    targetContent = string.Join("\n", actualTargetLines);
                    
                    // Indent replacementContent if it lacks indentation
                    var leadingSpaces = new string(lines[i].TakeWhile(c => c == ' ' || c == '\t').ToArray());
                    var repLines = replacementContent.Split('\n');
                    for (int k = 0; k < repLines.Length; k++)
                    {
                        if (repLines[k].Length > 0 && !char.IsWhiteSpace(repLines[k][0]))
                        {
                            repLines[k] = leadingSpaces + repLines[k];
                        }
                    }
                    replacementContent = string.Join("\n", repLines);
                    
                    firstIndex = content.IndexOf(targetContent, StringComparison.Ordinal);
                    break;
                }
            }
            
            if (firstIndex == -1)
            {
                throw new InvalidOperationException("Target content not found in file. Ensure the target string matches the file contents exactly, including leading spaces. Line endings are automatically normalized.");
            }
        }
        
        int lastIndex = content.LastIndexOf(targetContent, StringComparison.Ordinal);
        if (firstIndex != lastIndex)
        {
            throw new InvalidOperationException("Target content found multiple times in the file. Please provide a more specific target string to uniquely identify the replacement location.");
        }

        var newContent = content.Replace(targetContent, replacementContent, StringComparison.Ordinal);
        await File.WriteAllTextAsync(fullPath, newContent);
    }
}
