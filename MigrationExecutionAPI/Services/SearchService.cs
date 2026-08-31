using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;
using MigrationExecutionAPI.Utilities;

namespace MigrationExecutionAPI.Services;

public class SearchService : ISearchService
{
    private readonly ILogger<SearchService> _logger;

    public SearchService(ILogger<SearchService> logger)
    {
        _logger = logger;
    }

    public async Task<List<SearchResultDto>> SearchAsync(string repositoryPath, string pattern)
    {
        // LLMs often mistakenly use wildcards like *.csproj. Strip them to allow .Contains() to work.
        if (pattern.StartsWith("*"))
        {
            pattern = pattern.Substring(1);
        }
        
        _logger.LogInformation("Searching for pattern '{Pattern}' in repository {RepositoryPath}", pattern, repositoryPath);

        // Validate repo exists by checking a dummy relative path (just the root)
        var fullRepoPath = PathValidator.GetValidatedFullPath(repositoryPath, ".");

        var results = new List<SearchResultDto>();

        // This could be optimized for very large repos, but this works well for standard search
        var files = Directory.GetFiles(fullRepoPath, "*.*", SearchOption.AllDirectories)
                             .Where(f => !f.Contains("\\.git\\") && !f.Contains("\\bin\\") && !f.Contains("\\obj\\"));

        foreach (var file in files)
        {
            if (results.Count >= 30) break; // PREVENT LLM CONTEXT EXPLOSION

            try
            {
                var relativePath = Path.GetRelativePath(fullRepoPath, file);
                
                // If the file name or path itself contains the pattern, return it immediately as a match
                if (relativePath.Contains(pattern, StringComparison.OrdinalIgnoreCase))
                {
                    results.Add(new SearchResultDto
                    {
                        FilePath = relativePath,
                        LineNumber = 0,
                        LineContent = "[File Path Match]"
                    });
                }

                var lines = await File.ReadAllLinesAsync(file);
                for (int i = 0; i < lines.Length; i++)
                {
                    if (results.Count >= 30) break; // PREVENT LLM CONTEXT EXPLOSION

                    if (lines[i].Contains(pattern, StringComparison.OrdinalIgnoreCase))
                    {
                        results.Add(new SearchResultDto
                        {
                            FilePath = relativePath,
                            LineNumber = i + 1,
                            LineContent = lines[i].Trim()
                        });
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Failed to read file for search: {File}", file);
            }
        }

        return results;
    }
}
