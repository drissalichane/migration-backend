using Microsoft.AspNetCore.Mvc;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    private readonly IBuildService _buildService;
    private readonly ILogger<TestController> _logger;

    public TestController(IBuildService buildService, ILogger<TestController> logger)
    {
        _buildService = buildService;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> Test([FromBody] TestRequest request)
    {
        try
        {
            var result = await _buildService.TestAsync(request.RepositoryPath);
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error executing test");
            return BadRequest(new CommandResponse { Success = false, Message = ex.Message });
        }
    }
}
