namespace MigrationExecutionAPI.Models;

public class Team
{
    public int Id { get; set; }
    public int OrganizationId { get; set; }
    public Organization Organization { get; set; } = null!;

    public string Name { get; set; } = string.Empty;

    public ICollection<User> Users { get; set; } = new List<User>();
    public ICollection<MigrationJob> MigrationJobs { get; set; } = new List<MigrationJob>();
}
