namespace MigrationExecutionAPI.DTOs;

public class BaseResponse
{
    public bool Success { get; set; }
    public string? Message { get; set; }
}

public class FileContentResponse : BaseResponse
{
    public string? Content { get; set; }
}

public class SearchResultDto
{
    public required string FilePath { get; set; }
    public int LineNumber { get; set; }
    public required string LineContent { get; set; }
}

public class SearchResponse : BaseResponse
{
    public List<SearchResultDto> Results { get; set; } = new();
}

public class CommandResponse : BaseResponse
{
    public int ExitCode { get; set; }
    public string? StdOut { get; set; }
    public string? StdErr { get; set; }
}

public class PaginatedFileContentResponse
{
    public string FilePath { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public int TotalLines { get; set; }
    public int ReturnedLines { get; set; }
    public bool Truncated { get; set; }
}

public class GrepMatchDto
{
    public string FilePath { get; set; } = string.Empty;
    public int LineNumber { get; set; }
    public string Line { get; set; } = string.Empty;
}

public class GrepResponse
{
    public List<GrepMatchDto> Matches { get; set; } = new();
    public bool Truncated { get; set; }
}
