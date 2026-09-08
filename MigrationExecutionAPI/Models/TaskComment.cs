namespace MigrationExecutionAPI.Models;

public class TaskComment
{
    public int Id { get; set; }
    public int MigrationTaskId { get; set; }
    public MigrationTask MigrationTask { get; set; } = null!;
    public string Author { get; set; } = string.Empty;
    public string Text { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
