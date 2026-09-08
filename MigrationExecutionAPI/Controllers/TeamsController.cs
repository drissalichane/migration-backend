using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.Models;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
[AllowAnonymous]
public class TeamsController : ControllerBase
{
    private readonly MigrationDbContext _context;

    public TeamsController(MigrationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetTeams()
    {
        var teams = await _context.Teams
            .Include(t => t.Organization)
            .ToListAsync();
        return Ok(teams);
    }

    [HttpPost]
    public async Task<IActionResult> CreateTeam([FromBody] Team team)
    {
        _context.Teams.Add(team);
        await _context.SaveChangesAsync();
        
        var createdTeam = await _context.Teams.Include(t => t.Organization).FirstOrDefaultAsync(t => t.Id == team.Id);
        return Ok(createdTeam);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTeam(int id, [FromBody] Team updatedTeam)
    {
        var team = await _context.Teams.FindAsync(id);
        if (team == null) return NotFound();

        team.Name = updatedTeam.Name;
        team.OrganizationId = updatedTeam.OrganizationId;

        await _context.SaveChangesAsync();
        
        var savedTeam = await _context.Teams.Include(t => t.Organization).FirstOrDefaultAsync(t => t.Id == team.Id);
        return Ok(savedTeam);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTeam(int id)
    {
        var team = await _context.Teams.FindAsync(id);
        if (team == null) return NotFound();

        _context.Teams.Remove(team);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Team deleted" });
    }
}
