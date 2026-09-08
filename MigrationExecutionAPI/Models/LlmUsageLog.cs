namespace MigrationExecutionAPI.Models;

public class LlmUsageLog
{
    public int Id { get; set; }
    public int MigrationJobId { get; set; }
    public MigrationJob MigrationJob { get; set; } = null!;
    
    public string AgentName { get; set; } = string.Empty; // e.g. "Analyzer", "Migrator"
    public string ModelName { get; set; } = string.Empty; // e.g. "gemini-1.5-pro"
    public string Provider { get; set; } = string.Empty; // e.g. "OpenAI", "Groq"
    public int PromptTokens { get; set; }
    public int CompletionTokens { get; set; }
    public int TotalTokens { get; set; }
    public decimal TotalCostUsd { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
