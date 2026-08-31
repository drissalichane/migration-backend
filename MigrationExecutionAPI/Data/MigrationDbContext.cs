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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Seed default Admin
        modelBuilder.Entity<User>().HasData(
            new User { Id = 1, Username = "admin", PasswordHash = "hashed_pw_here", Role = "Admin" }
        );
    }
}
