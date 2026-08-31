using System.Diagnostics;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;
using MigrationExecutionAPI.Utilities;

namespace MigrationExecutionAPI.Services;

public class GitService : IGitService
{
    private readonly ILogger<GitService> _logger;

    public GitService(ILogger<GitService> logger)
    {
        _logger = logger;
    }

    public Task<CommandResponse> GetStatusAsync(string repositoryPath)
    {
        return RunGitCommandAsync(repositoryPath, "status");
    }

    public async Task<CommandResponse> CommitAsync(string repositoryPath, string? message)
    {
        var commitMessage = string.IsNullOrWhiteSpace(message) 
            ? "Automated migration by AI Migration Platform" 
            : message;

        // First add all changes
        var addResult = await RunGitCommandAsync(repositoryPath, "add .");
        if (!addResult.Success)
        {
            return addResult;
        }

        // Then commit
        return await RunGitCommandAsync(repositoryPath, $"commit -m \"{commitMessage}\"");
    }

    private async Task<CommandResponse> RunGitCommandAsync(string repositoryPath, string arguments)
    {
        _logger.LogInformation("Running git {Arguments} in {RepositoryPath}", arguments, repositoryPath);

        // Ensure repo path is valid and exists
        var fullRepoPath = PathValidator.GetValidatedFullPath(repositoryPath, ".");

        var processInfo = new ProcessStartInfo
        {
            FileName = "git",
            Arguments = arguments,
            WorkingDirectory = fullRepoPath,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false,
            CreateNoWindow = true
        };

        using var process = new Process { StartInfo = processInfo };
        
        process.Start();

        var stdoutTask = process.StandardOutput.ReadToEndAsync();
        var stderrTask = process.StandardError.ReadToEndAsync();

        await process.WaitForExitAsync();

        var stdout = await stdoutTask;
        var stderr = await stderrTask;

        return new CommandResponse
        {
            Success = process.ExitCode == 0,
            Message = process.ExitCode == 0 ? "Git command completed successfully" : "Git command failed",
            ExitCode = process.ExitCode,
            StdOut = stdout,
            StdErr = stderr
        };
    }
}
