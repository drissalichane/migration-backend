using Microsoft.AspNetCore.Mvc;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BuildController : ControllerBase
{
    private readonly IBuildService _buildService;
    private readonly ILogger<BuildController> _logger;

    public BuildController(IBuildService buildService, ILogger<BuildController> logger)
    {
        _buildService = buildService;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> Build()
    {
        try
        {
            var repositoryPath = MigrationExecutionAPI.Utilities.RepoLocator.GetLatestRepo();
            var result = await _buildService.BuildAsync(repositoryPath);
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error executing build");
            return BadRequest(new CommandResponse { Success = false, Message = ex.Message });
        }
    }
}
