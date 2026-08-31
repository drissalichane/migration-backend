using MigrationExecutionAPI.DTOs;

namespace MigrationExecutionAPI.Interfaces;

public interface IGitService
{
    Task<CommandResponse> GetStatusAsync(string repositoryPath);
    Task<CommandResponse> CommitAsync(string repositoryPath, string? message);
}
