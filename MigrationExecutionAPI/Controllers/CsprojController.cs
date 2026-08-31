using Microsoft.AspNetCore.Mvc;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CsprojController : ControllerBase
{
    private readonly ICsprojService _csprojService;
    private readonly ILogger<CsprojController> _logger;

    public CsprojController(ICsprojService csprojService, ILogger<CsprojController> logger)
    {
        _csprojService = csprojService;
        _logger = logger;
    }

    [HttpPost("update")]
    public async Task<IActionResult> UpdateFramework()
    {
        try
        {
            var repositoryPath = MigrationExecutionAPI.Utilities.RepoLocator.GetLatestRepo();
            
            Request.EnableBuffering();
            using var reader = new StreamReader(Request.Body, leaveOpen: true);
            var body = await reader.ReadToEndAsync();
            Request.Body.Position = 0;
            
            string projectFile = "";
            string framework = "";
            try {
                var json = System.Text.Json.JsonDocument.Parse(body);
                var payloadNode = json.RootElement;
                if (json.RootElement.TryGetProperty("", out var wrapperVal) && wrapperVal.ValueKind == System.Text.Json.JsonValueKind.String) {
                    payloadNode = System.Text.Json.JsonDocument.Parse(wrapperVal.GetString()!).RootElement;
                }
                
                if (payloadNode.TryGetProperty("projectFile", out var fVal)) projectFile = fVal.GetString() ?? "";
                else if (payloadNode.TryGetProperty("ProjectFile", out fVal)) projectFile = fVal.GetString() ?? "";
                
                if (payloadNode.TryGetProperty("framework", out var cVal)) framework = cVal.GetString() ?? "";
                else if (payloadNode.TryGetProperty("Framework", out cVal)) framework = cVal.GetString() ?? "";
            } catch { }

            if (string.IsNullOrEmpty(projectFile) || string.IsNullOrEmpty(framework))
            {
                return BadRequest(new BaseResponse { Success = false, Message = "projectFile and framework are required." });
            }

            var updateRequest = new MigrationExecutionAPI.DTOs.UpdateCsprojRequest {
                RepositoryPath = repositoryPath,
                ProjectFile = projectFile,
                Framework = framework.Trim()
            };

            await _csprojService.UpdateCsprojAsync(updateRequest);
            return Ok(new BaseResponse { Success = true, Message = $"Successfully updated {projectFile} to {framework}" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating csproj framework");
            return StatusCode(500, new BaseResponse { Success = false, Message = ex.Message });
        }
    }
}
