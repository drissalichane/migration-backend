using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.Models;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RulesController : ControllerBase
{
    private readonly MigrationDbContext _context;

    public RulesController(MigrationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetRules([FromQuery] string? sourceVersion, [FromQuery] string? targetVersion)
    {
        var query = _context.MigrationRules.AsQueryable();

        if (!string.IsNullOrEmpty(sourceVersion))
            query = query.Where(r => r.SourceVersion == sourceVersion);

        if (!string.IsNullOrEmpty(targetVersion))
            query = query.Where(r => r.TargetVersion == targetVersion);

        var rules = await query.ToListAsync();
        return Ok(rules);
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> CreateRule([FromBody] MigrationRule rule)
    {
        _context.MigrationRules.Add(rule);
        await _context.SaveChangesAsync();
        return Ok(rule);
    }

    [HttpPut("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> UpdateRule(int id, [FromBody] MigrationRule updatedRule)
    {
        var rule = await _context.MigrationRules.FindAsync(id);
        if (rule == null) return NotFound();

        rule.SourceVersion = updatedRule.SourceVersion;
        rule.TargetVersion = updatedRule.TargetVersion;
        rule.Pattern = updatedRule.Pattern;
        rule.Replacement = updatedRule.Replacement;
        rule.Description = updatedRule.Description;
        rule.IsActive = updatedRule.IsActive;

        await _context.SaveChangesAsync();
        return Ok(rule);
    }

    [HttpDelete("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> DeleteRule(int id)
    {
        var rule = await _context.MigrationRules.FindAsync(id);
        if (rule == null) return NotFound();

        _context.MigrationRules.Remove(rule);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Rule deleted" });
    }
}
