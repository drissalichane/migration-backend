namespace MigrationExecutionAPI.Models;

public class RepositoryProfile
{
    public int Id { get; set; }
    public int MigrationJobId { get; set; }
    public MigrationJob MigrationJob { get; set; } = null!;
    
    public int TotalProjects { get; set; }
    public DateTime ScanDate { get; set; } = DateTime.UtcNow;

    public ICollection<ProjectProfile> Projects { get; set; } = new List<ProjectProfile>();
}
