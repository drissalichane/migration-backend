using System.Text.Json.Serialization;

namespace MigrationExecutionAPI.Models;

public class FileChange
{
    public int Id { get; set; }
    public int MigrationJobId { get; set; }
    public string FilePath { get; set; } = string.Empty;
    public string Action { get; set; } = string.Empty; // AddPackage, ReplaceContent
    public string TargetContent { get; set; } = string.Empty;
    public string ReplacementContent { get; set; } = string.Empty;
    public bool Accepted { get; set; } = true;

    [JsonIgnore]
    public MigrationJob? MigrationJob { get; set; }
}
