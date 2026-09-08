using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.Models;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly MigrationDbContext _context;

    public TasksController(MigrationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetTasks()
    {
        var tasks = await _context.MigrationTasks
            .Include(t => t.AssignedToUser)
            .Include(t => t.MigrationJob)
            .Include(t => t.Comments)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync();
            
        return Ok(tasks);
    }

    [HttpGet("job/{jobId}")]
    public async Task<IActionResult> GetTasksByJob(int jobId)
    {
        var tasks = await _context.MigrationTasks
            .Include(t => t.AssignedToUser)
            .Include(t => t.Comments)
            .Where(t => t.MigrationJobId == jobId)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync();
            
        return Ok(tasks);
    }

    [HttpPost]
    public async Task<IActionResult> CreateTask([FromBody] MigrationTask dto)
    {
        _context.MigrationTasks.Add(dto);
        await _context.SaveChangesAsync();
        return Ok(dto);
    }

    [HttpPut("{id}/status")]
    public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateStatusRequest request)
    {
        var task = await _context.MigrationTasks.FindAsync(id);
        if (task == null) return NotFound();

        // In real app, check if user is assigned to this task or is a manager
        // We will assume UI sends UserId via headers or we trust the request for now
        
        task.Status = request.Status;
        if (request.Status == "Finished") {
            task.CompletedAt = DateTime.UtcNow;
        }

        await _context.SaveChangesAsync();
        return Ok(task);
    }

    [HttpPut("{id}/description")]
    public async Task<IActionResult> UpdateDescription(int id, [FromBody] UpdateDescriptionRequest request)
    {
        var task = await _context.MigrationTasks.FindAsync(id);
        if (task == null) return NotFound();

        task.Description = request.Description;
        await _context.SaveChangesAsync();
        return Ok(task);
    }

    [HttpPut("{id}/assign")]
    public async Task<IActionResult> AssignTask(int id, [FromBody] AssignTaskRequest request)
    {
        var task = await _context.MigrationTasks.FindAsync(id);
        if (task == null) return NotFound();

        task.AssignedToUserId = request.UserId;
        if (task.Status == "PendingApproval") {
            task.Status = "Todo";
        }

        await _context.SaveChangesAsync();
        return Ok(task);
    }

    [HttpPost("{id}/comments")]
    public async Task<IActionResult> AddComment(int id, [FromBody] TaskComment dto)
    {
        var task = await _context.MigrationTasks.FindAsync(id);
        if (task == null) return NotFound();

        dto.MigrationTaskId = id;
        dto.CreatedAt = DateTime.UtcNow;
        _context.TaskComments.Add(dto);
        await _context.SaveChangesAsync();
        return Ok(dto);
    }

    [HttpPost("seed")]
    public async Task<IActionResult> SeedTasks()
    {
        var job = await _context.MigrationJobs.OrderByDescending(j => j.Id).FirstOrDefaultAsync(j => j.Status == "Completed" || j.Status == "Approved");
        if (job == null) return NotFound("No completed or approved job found to attach tasks to.");

        var tasks = new List<MigrationTask>
        {
            new MigrationTask { Title = "Double Check Auth Headers", Description = "Ensure new Minimal API auth matches old Startup.cs", Status = "Todo", MigrationJobId = job.Id },
            new MigrationTask { Title = "Review DI Registrations", Description = "Verify keyed services are correctly resolved", Status = "InProgress", MigrationJobId = job.Id },
            new MigrationTask { Title = "Update Test Coverage", Description = "Add tests for the new OpenAPI endpoints", Status = "Review", MigrationJobId = job.Id },
            new MigrationTask { Title = "Validate JSON Serialization", Description = "Ensure System.Text.Json uses Web defaults", Status = "Finished", MigrationJobId = job.Id, CompletedAt = DateTime.UtcNow },
            new MigrationTask { Title = "Reporter AI: Audit Logging", Description = "LLM noticed missing ILogger calls in critical path", Status = "PendingApproval", MigrationJobId = job.Id },
            new MigrationTask { Title = "Reporter AI: EF Core Warnings", Description = "Address multiple pending model changes warnings logged during generation", Status = "PendingApproval", MigrationJobId = job.Id }
        };

        _context.MigrationTasks.AddRange(tasks);
        await _context.SaveChangesAsync();
        return Ok(new { Message = $"Seeded 6 tasks to Job ID {job.Id}", Tasks = tasks });
    }

    [HttpPost("seed-all")]
    public async Task<IActionResult> SeedAllTasks()
    {
        var jobs = await _context.MigrationJobs
            .Where(j => j.Status == "Pending PR Review" || j.Status == "Approved and PR Created")
            .ToListAsync();

        var tasksToAdd = new List<MigrationTask>();
        int jobsSeeded = 0;

        foreach (var job in jobs)
        {
            bool hasTasks = await _context.MigrationTasks.AnyAsync(t => t.MigrationJobId == job.Id);
            if (hasTasks) continue;

            tasksToAdd.AddRange(new List<MigrationTask>
            {
                new MigrationTask { Title = "Double Check Auth Headers", Description = "Ensure new Minimal API auth matches old Startup.cs", Status = "Todo", MigrationJobId = job.Id },
                new MigrationTask { Title = "Review DI Registrations", Description = "Verify keyed services are correctly resolved", Status = "InProgress", MigrationJobId = job.Id },
                new MigrationTask { Title = "Update Test Coverage", Description = "Add tests for the new OpenAPI endpoints", Status = "Review", MigrationJobId = job.Id },
                new MigrationTask { Title = "Validate JSON Serialization", Description = "Ensure System.Text.Json uses Web defaults", Status = "Finished", MigrationJobId = job.Id, CompletedAt = DateTime.UtcNow },
                new MigrationTask { Title = "Reporter AI: Audit Logging", Description = "LLM noticed missing ILogger calls in critical path", Status = "PendingApproval", MigrationJobId = job.Id },
                new MigrationTask { Title = "Reporter AI: EF Core Warnings", Description = "Address multiple pending model changes warnings logged during generation", Status = "PendingApproval", MigrationJobId = job.Id }
            });
            jobsSeeded++;
        }

        if (tasksToAdd.Any())
        {
            _context.MigrationTasks.AddRange(tasksToAdd);
            await _context.SaveChangesAsync();
        }

        return Ok(new { Message = $"Seeded {tasksToAdd.Count} tasks across {jobsSeeded} jobs." });
    }
}

public class UpdateStatusRequest {
    public string Status { get; set; } = string.Empty;
}

public class AssignTaskRequest {
    public int? UserId { get; set; }
}

public class UpdateDescriptionRequest {
    public string Description { get; set; } = string.Empty;
}
