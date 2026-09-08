using System;

namespace MigrationExecutionAPI.Models;

public class NodeExecutionLog
{
    public int Id { get; set; }
    public int MigrationJobId { get; set; }
    public MigrationJob MigrationJob { get; set; } = null!;
    
    public string NodeName { get; set; } = string.Empty;
    public string Phase { get; set; } = string.Empty;
    public long ExecutionTimeMs { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
