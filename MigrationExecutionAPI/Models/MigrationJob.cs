namespace MigrationExecutionAPI.Models;

public class MigrationJob
{
    public int Id { get; set; }
    public string RepositoryUrl { get; set; } = string.Empty;
    public string Status { get; set; } = "Pending Plan Approval";
    public string MigrationPlanJson { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string CreatedBy { get; set; } = string.Empty;

    public string? BranchName { get; set; }
    public string? PrUrl { get; set; }
    public string? CommitHash { get; set; }

    public string? TargetBranch { get; set; }
    public string? TargetCommit { get; set; }
    
    public string? TargetFramework { get; set; }
    public string? SourceFramework { get; set; }
    public string? CustomPrompt { get; set; }
    public string? CustomBranchName { get; set; }

    public int? ProjectId { get; set; }
    public Project? Project { get; set; }

    public ICollection<FileChange> FileChanges { get; set; } = new List<FileChange>();
    public string? RepositoryProfileJson { get; set; }
    public RepositoryProfile? RepositoryProfile { get; set; }

    public ICollection<MigrationTask> MigrationTasks { get; set; } = new List<MigrationTask>();

    public int? TeamId { get; set; }
    public Team? Team { get; set; }
    public int? AssignedToUserId { get; set; }
    public User? AssignedToUser { get; set; }

    public string? ExecutionReport { get; set; }
    
    public bool IsArchived { get; set; } = false;
    public string? MergeCommitSha { get; set; }
    public string? RevertPrUrl { get; set; }
    
    // Quantitative Metrics
    // n8n's own execution ids for this job's two pipeline runs. They are what lets the backend
    // pull the provider's real token counts and per-node timings back out of n8n's API; the
    // workflows report them in their webhook response.
    public string? N8nExecutionIdPhase1 { get; set; }
    public string? N8nExecutionIdPhase2 { get; set; }

    public long? ExecutionTimeMs { get; set; }
    public long? Phase1ExecutionTimeMs { get; set; }
    public long? Phase2ExecutionTimeMs { get; set; }
    public int? InitialErrorCount { get; set; }
    public int? ResidualErrorCount { get; set; }
    public int? ErrorFixerIterations { get; set; }
    public double? SuccessRate { get; set; }
    public double? RegressionRate { get; set; }

    public bool? Phase1Success { get; set; }
    public bool? Phase2Success { get; set; }
    public bool? IsSuccess { get; set; }

    // NuGet resolver v5.1 fields
    public string? NugetWarnings { get; set; }
    public string? NugetVulnerabilities { get; set; }

    public ICollection<JobLog> JobLogs { get; set; } = new List<JobLog>();
    public ICollection<LlmUsageLog> LlmUsageLogs { get; set; } = new List<LlmUsageLog>();
    public ICollection<NodeExecutionLog> NodeExecutionLogs { get; set; } = new List<NodeExecutionLog>();
    public ICollection<ApprovalRecord> ApprovalRecords { get; set; } = new List<ApprovalRecord>();
}

public class JobLog
{
    public int Id { get; set; }
    public int MigrationJobId { get; set; }
    public MigrationJob MigrationJob { get; set; } = null!;
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    public string Level { get; set; } = "info"; // info, warning, error
    public string Message { get; set; } = string.Empty;
    public string? Phase { get; set; } 
    public string? Details { get; set; }
}
