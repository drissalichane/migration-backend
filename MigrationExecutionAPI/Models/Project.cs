namespace MigrationExecutionAPI.Models;

public class Project
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string RepositoryUrl { get; set; } = string.Empty;
    public int OrganizationId { get; set; }
    public Organization? Organization { get; set; }

    public int? ManagerId { get; set; }
    public User? Manager { get; set; }

    public ICollection<ProjectAssignment> Assignments { get; set; } = new List<ProjectAssignment>();
    public ICollection<MigrationJob> MigrationJobs { get; set; } = new List<MigrationJob>();
}
