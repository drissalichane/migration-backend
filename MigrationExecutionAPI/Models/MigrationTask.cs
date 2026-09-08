namespace MigrationExecutionAPI.Models;

public class MigrationTask
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Status { get; set; } = "Todo"; // Todo, Started, Review, Finished
    
    public int? AssignedToUserId { get; set; }
    public User? AssignedToUser { get; set; }
    
    public int? CreatedByUserId { get; set; }
    public User? CreatedByUser { get; set; }

    public int? MigrationJobId { get; set; }
    public MigrationJob? MigrationJob { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? CompletedAt { get; set; }
    
    public ICollection<TaskComment> Comments { get; set; } = new List<TaskComment>();
}
