using System.Diagnostics;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;
using MigrationExecutionAPI.Utilities;

namespace MigrationExecutionAPI.Services;

public class BuildService : IBuildService
{
    private readonly ILogger<BuildService> _logger;

    public BuildService(ILogger<BuildService> logger)
    {
        _logger = logger;
    }

    public Task<CommandResponse> BuildAsync(string repositoryPath)
    {
        return RunDotnetCommandAsync(repositoryPath, "build");
    }

    public Task<CommandResponse> TestAsync(string repositoryPath)
    {
        return RunDotnetCommandAsync(repositoryPath, "test");
    }

    private async Task<CommandResponse> RunDotnetCommandAsync(string repositoryPath, string arguments)
    {
        _logger.LogInformation("Running dotnet {Arguments} in {RepositoryPath}", arguments, repositoryPath);

        // Ensure repo path is valid and exists
        var fullRepoPath = PathValidator.GetValidatedFullPath(repositoryPath, ".");

        var processInfo = new ProcessStartInfo
        {
            FileName = "dotnet",
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
            Message = process.ExitCode == 0 ? "Command completed successfully" : "Command failed",
            ExitCode = process.ExitCode,
            StdOut = stdout,
            StdErr = stderr
        };
    }
}
