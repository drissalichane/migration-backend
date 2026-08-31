using MigrationExecutionAPI.DTOs;

namespace MigrationExecutionAPI.Interfaces;

public interface IBuildService
{
    Task<CommandResponse> BuildAsync(string repositoryPath);
    Task<CommandResponse> TestAsync(string repositoryPath);
}
