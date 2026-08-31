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
