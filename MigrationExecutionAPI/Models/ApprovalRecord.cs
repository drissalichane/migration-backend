namespace MigrationExecutionAPI.Models;

public class ApprovalRecord
{
    public int Id { get; set; }
    public int MigrationJobId { get; set; }
    public MigrationJob MigrationJob { get; set; } = null!;

    public int? ApproverUserId { get; set; }
    public User? ApproverUser { get; set; }

    public DateTime ApprovedAt { get; set; } = DateTime.UtcNow;
    
    // Track what override prompt the user applied when approving, if any
    public string? ExecutionOverridePrompt { get; set; }
}
