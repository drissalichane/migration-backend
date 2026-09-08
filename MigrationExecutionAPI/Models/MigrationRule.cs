namespace MigrationExecutionAPI.Models;

public class MigrationRule
{
    public int Id { get; set; }
    
    // E.g. "net6.0", "net7.0"
    public string SourceVersion { get; set; } = string.Empty;
    
    // E.g. "net8.0"
    public string TargetVersion { get; set; } = string.Empty;
    
    // E.g. "UseStartup" or Regex pattern
    public string Pattern { get; set; } = string.Empty;
    
    // E.g. "builder.Services..."
    public string Replacement { get; set; } = string.Empty;
    
    public string? Description { get; set; }
    public bool IsActive { get; set; } = true;
}
