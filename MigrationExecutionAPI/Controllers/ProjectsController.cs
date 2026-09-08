using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.Models;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly MigrationDbContext _context;

    public ProjectsController(MigrationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetProjects([FromQuery] string? username)
    {
        var query = _context.Projects
            .Include(p => p.Assignments)
            .ThenInclude(a => a.User)
            .Include(p => p.Manager)
            .AsQueryable();

        if (!string.IsNullOrEmpty(username))
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            if (user != null && user.Role != "Admin")
            {
                var assignedProjectIds = await _context.ProjectAssignments
                    .Where(pa => pa.UserId == user.Id)
                    .Select(pa => pa.ProjectId)
                    .ToListAsync();
                
                query = query.Where(p => assignedProjectIds.Contains(p.Id));
            }
        }

        var projects = await query.ToListAsync();
        return Ok(projects);
    }

    [HttpPost]
    public async Task<IActionResult> CreateProject([FromBody] Project dto, [FromQuery] string? username)
    {
        dto.OrganizationId = 1; // hardcoded to global org for now
        _context.Projects.Add(dto);
        await _context.SaveChangesAsync();

        if (!string.IsNullOrEmpty(username))
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            if (user != null)
            {
                _context.ProjectAssignments.Add(new ProjectAssignment
                {
                    ProjectId = dto.Id,
                    UserId = user.Id,
                    Role = "Manager" // Auto-assign as Manager
                });
                await _context.SaveChangesAsync();
            }
        }

        var existingJobs = await _context.MigrationJobs
            .Where(j => j.RepositoryUrl == dto.RepositoryUrl || j.RepositoryUrl + ".git" == dto.RepositoryUrl || dto.RepositoryUrl + ".git" == j.RepositoryUrl)
            .ToListAsync();
            
        foreach (var job in existingJobs)
        {
            job.ProjectId = dto.Id;
        }
        await _context.SaveChangesAsync();

        return Ok(dto);
    }

    [HttpPost("{projectId}/assign")]
    public async Task<IActionResult> AssignUser(int projectId, [FromBody] AssignUserRequest dto)
    {
        var project = await _context.Projects.FindAsync(projectId);
        if (project == null) return NotFound("Project not found");

        var user = await _context.Users.FindAsync(dto.UserId);
        if (user == null) return NotFound("User not found");

        var existing = await _context.ProjectAssignments
            .FirstOrDefaultAsync(pa => pa.ProjectId == projectId && pa.UserId == dto.UserId);
        
        if (existing != null)
        {
            existing.Role = dto.Role;
        }
        else
        {
            var assignment = new ProjectAssignment
            {
                ProjectId = projectId,
                UserId = dto.UserId,
                Role = dto.Role
            };
            _context.ProjectAssignments.Add(assignment);
        }

        // TODO: In the future, this is where we would call GitHub API to invite the user as a collaborator
        // await _githubService.AddCollaboratorAsync(project.RepositoryUrl, user.GitHubId, dto.Role);

        await _context.SaveChangesAsync();
        return Ok();
    }
}

public class AssignUserRequest
{
    public int UserId { get; set; }
    public string Role { get; set; } = "Developer";
}
