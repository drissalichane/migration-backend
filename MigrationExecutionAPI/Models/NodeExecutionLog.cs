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

    // --- filled when the row comes from n8n's execution record -------------------------------
    public bool IsMeasured { get; set; }
    public int Runs { get; set; }       // a node inside a loop or an agent runs many times

    // An LLM or tool node hangs off its agent and its time is already counted inside that
    // agent's. Summing every row would double-count it, so the UI adds up only the main-flow
    // nodes and lists these underneath.
    public bool IsSubNode { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
