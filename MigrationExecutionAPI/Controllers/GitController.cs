using Microsoft.AspNetCore.Mvc;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GitController : ControllerBase
{
    private readonly IGitService _gitService;
    private readonly ILogger<GitController> _logger;

    public GitController(IGitService gitService, ILogger<GitController> logger)
    {
        _gitService = gitService;
        _logger = logger;
    }

    [HttpPost("status")]
    public async Task<IActionResult> GetStatus()
    {
        try
        {
            var repositoryPath = MigrationExecutionAPI.Utilities.RepoLocator.GetLatestRepo();
            var result = await _gitService.GetStatusAsync(repositoryPath);
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting git status");
            return BadRequest(new CommandResponse { Success = false, Message = ex.Message });
        }
    }

    [HttpPost("commit")]
    public async Task<IActionResult> Commit()
    {
        try
        {
            var repositoryPath = MigrationExecutionAPI.Utilities.RepoLocator.GetLatestRepo();
            
            Request.EnableBuffering();
            using var reader = new StreamReader(Request.Body, leaveOpen: true);
            var body = await reader.ReadToEndAsync();
            Request.Body.Position = 0;
            
            string message = "";
            try {
                var json = System.Text.Json.JsonDocument.Parse(body);
                var payloadNode = json.RootElement;
                if (json.RootElement.TryGetProperty("", out var wrapperVal) && wrapperVal.ValueKind == System.Text.Json.JsonValueKind.String) {
                    payloadNode = System.Text.Json.JsonDocument.Parse(wrapperVal.GetString()!).RootElement;
                }
                
                if (payloadNode.TryGetProperty("message", out var mVal)) message = mVal.GetString() ?? "";
                else if (payloadNode.TryGetProperty("Message", out mVal)) message = mVal.GetString() ?? "";
            } catch { }

            var result = await _gitService.CommitAsync(repositoryPath, message ?? "");
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error executing git commit");
            return StatusCode(500, new CommandResponse { Success = false, Message = ex.Message });
        }
    }
}
