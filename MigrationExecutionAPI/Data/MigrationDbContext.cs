using Microsoft.EntityFrameworkCore;
using MigrationExecutionAPI.Models;

namespace MigrationExecutionAPI.Data;

public class MigrationDbContext : DbContext
{
    public MigrationDbContext(DbContextOptions<MigrationDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<MigrationJob> MigrationJobs { get; set; }
    public DbSet<FileChange> FileChanges { get; set; }
    public DbSet<JobLog> JobLogs { get; set; }
    public DbSet<LlmUsageLog> LlmUsageLogs { get; set; }
    public DbSet<NodeExecutionLog> NodeExecutionLogs { get; set; }
    public DbSet<MigrationRule> MigrationRules { get; set; }
    public DbSet<RepositoryProfile> RepositoryProfiles { get; set; }
    public DbSet<ProjectProfile> ProjectProfiles { get; set; }
    public DbSet<Organization> Organizations { get; set; }
    public DbSet<Team> Teams { get; set; }
    public DbSet<ApprovalRecord> ApprovalRecords { get; set; }

    public DbSet<Project> Projects { get; set; }
    public DbSet<ProjectAssignment> ProjectAssignments { get; set; }
    public DbSet<MigrationTask> MigrationTasks { get; set; }
    public DbSet<TaskComment> TaskComments { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<ProjectAssignment>()
            .HasKey(pa => new { pa.ProjectId, pa.UserId });

        // Seed Organization and Team
        modelBuilder.Entity<Organization>().HasData(
            new Organization { Id = 1, Name = "Global Corp" }
        );

        modelBuilder.Entity<Team>().HasData(
            new Team { Id = 1, OrganizationId = 1, Name = "Platform Engineering" }
        );

        // Seed default Admin
        modelBuilder.Entity<User>().HasData(
            new User { Id = 1, Username = "admin", PasswordHash = "hashed_pw_here", Role = "Admin", TeamId = 1 }
        );

        // Seed some basic migration rules
        modelBuilder.Entity<MigrationRule>().HasData(
            new MigrationRule 
            { 
                Id = 1, 
                SourceVersion = "net6.0", 
                TargetVersion = "net8.0", 
                Pattern = "UseStartup<Startup>()", 
                Replacement = "builder.Services.AddControllers();", 
                Description = "Migrate from Startup.cs to Program.cs minimal hosting", 
                IsActive = true 
            }
        );
    }
}
