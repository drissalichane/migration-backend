namespace MigrationExecutionAPI.Models;

public class ProjectProfile
{
    public int Id { get; set; }
    public int RepositoryProfileId { get; set; }
    public RepositoryProfile RepositoryProfile { get; set; } = null!;
    
    public string ProjectName { get; set; } = string.Empty;
    public string ProjectPath { get; set; } = string.Empty;
    public string ProjectType { get; set; } = string.Empty; // e.g. "Web API", "Class Library"
    public string TargetFramework { get; set; } = string.Empty; // e.g. "net6.0"
}
