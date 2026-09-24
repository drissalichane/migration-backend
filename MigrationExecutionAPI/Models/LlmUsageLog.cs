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

    // --- filled when the row comes from n8n's execution record -------------------------------
    // IsMeasured separates the two kinds of row that can sit in this table. True means the
    // tokens are the provider's own counts, pulled from n8n; false means the old in-workflow
    // len/3 estimate, which was ~30x low because it could not see the ReAct scratchpad. The UI
    // must not present the two the same way.
    public bool IsMeasured { get; set; }
    public string Phase { get; set; } = string.Empty;   // "Analyze" | "Execute"
    public int Calls { get; set; }                      // LLM turns; the agent's real turn count
    public long DurationMs { get; set; }                // time inside this model's calls
    public string? FinishReasons { get; set; }          // e.g. "stop x5, length" - "length" means truncated

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
