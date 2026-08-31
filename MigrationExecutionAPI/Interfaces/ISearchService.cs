using MigrationExecutionAPI.DTOs;

namespace MigrationExecutionAPI.Interfaces;

public interface ISearchService
{
    Task<List<SearchResultDto>> SearchAsync(string repositoryPath, string pattern);
}
