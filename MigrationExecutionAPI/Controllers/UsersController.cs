using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.Models;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
[AllowAnonymous]
public class UsersController : ControllerBase
{
    private readonly MigrationDbContext _context;

    public UsersController(MigrationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        var users = await _context.Users
            .Include(u => u.Team)
                .ThenInclude(t => t!.Organization)
            .Select(u => new { 
                u.Id, 
                u.Username, 
                u.Role, 
                u.TeamId, 
                Team = u.Team != null ? new { u.Team.Id, u.Team.Name, Organization = u.Team.Organization != null ? new { u.Team.Organization.Name } : null } : null 
            })
            .ToListAsync();
        return Ok(users);
    }

    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] User user)
    {
        // Simple create for governance dashboard (skips password hashing for demo)
        user.PasswordHash = "dummy_hash";
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        
        var created = await _context.Users.Include(u => u.Team).ThenInclude(t => t!.Organization).FirstOrDefaultAsync(u => u.Id == user.Id);
        return Ok(new { created!.Id, created.Username, created.Role, created.TeamId, Team = created.Team });
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(int id, [FromBody] User updatedUser)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null) return NotFound();

        user.Username = updatedUser.Username;
        user.Role = updatedUser.Role;
        user.TeamId = updatedUser.TeamId;

        await _context.SaveChangesAsync();
        
        var saved = await _context.Users.Include(u => u.Team).ThenInclude(t => t!.Organization).FirstOrDefaultAsync(u => u.Id == user.Id);
        return Ok(new { saved!.Id, saved.Username, saved.Role, saved.TeamId, Team = saved.Team });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null) return NotFound();

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();
        return Ok(new { message = "User deleted" });
    }
}
