using Microsoft.AspNetCore.Mvc;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SearchController : ControllerBase
{
    private readonly ISearchService _searchService;
    private readonly ILogger<SearchController> _logger;

    public SearchController(ISearchService searchService, ILogger<SearchController> logger)
    {
        _searchService = searchService;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> Search()
    {
        try
        {
            var repositoryPath = MigrationExecutionAPI.Utilities.RepoLocator.GetLatestRepo();
            
            Request.EnableBuffering();
            using var reader = new StreamReader(Request.Body, leaveOpen: true);
            var body = await reader.ReadToEndAsync();
            Request.Body.Position = 0;
            
            string pattern = "";
            string rawPayload = body;
            try {
                var json = System.Text.Json.JsonDocument.Parse(body);
                var payloadNode = json.RootElement;
                if (json.RootElement.TryGetProperty("", out var wrapperVal) && wrapperVal.ValueKind == System.Text.Json.JsonValueKind.String) {
                    rawPayload = wrapperVal.GetString() ?? "";
                    try {
                        payloadNode = System.Text.Json.JsonDocument.Parse(rawPayload).RootElement;
                    } catch {
                        // Not JSON, it's a raw string
                        pattern = rawPayload.Trim();
                    }
                }
                
                if (string.IsNullOrEmpty(pattern)) {
                    if (payloadNode.TryGetProperty("pattern", out var val)) pattern = val.GetString() ?? "";
                    else if (payloadNode.TryGetProperty("Pattern", out val)) pattern = val.GetString() ?? "";
                }
            } catch {
                if (string.IsNullOrEmpty(pattern)) pattern = body.Trim();
            }

            var parsed = MigrationExecutionAPI.Utilities.CustomBodyParser.Parse(rawPayload);
            if (parsed.TryGetValue("PATTERN", out var pVal)) pattern = pVal;

            if (string.IsNullOrWhiteSpace(pattern))
            {
                return BadRequest(new SearchResponse { Success = false, Message = "Search pattern cannot be empty." });
            }

            var results = await _searchService.SearchAsync(repositoryPath, pattern);
            return Ok(new SearchResponse { Success = true, Results = results });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error searching in repository");
            return StatusCode(500, new SearchResponse { Success = false, Message = ex.Message });
        }
    }
}
