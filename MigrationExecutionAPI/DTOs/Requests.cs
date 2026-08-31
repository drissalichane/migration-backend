namespace MigrationExecutionAPI.DTOs;

public class RepositoryRequest
{
    public required string RepositoryPath { get; set; }
}

public class ReadFileRequest : RepositoryRequest
{
    public required string FilePath { get; set; }
}

public class WriteFileRequest : RepositoryRequest
{
    public required string FilePath { get; set; }
    public required string Content { get; set; }
}

public class ReplaceFileContentRequest : RepositoryRequest
{
    public required string FilePath { get; set; }
    public required string TargetContent { get; set; }
    public required string ReplacementContent { get; set; }
}

public class SearchRequest : RepositoryRequest
{
    public required string Pattern { get; set; }
}

public class PackageReferenceDto
{
    public required string Name { get; set; }
    public required string Version { get; set; }
}

public class UpdateCsprojRequest : RepositoryRequest
{
    public required string ProjectFile { get; set; }
    public string? Framework { get; set; }
    public List<PackageReferenceDto>? Packages { get; set; }
    public string? Nullable { get; set; }
    public string? ImplicitUsings { get; set; }
}

public class BuildRequest : RepositoryRequest
{
}

public class TestRequest : RepositoryRequest
{
}

public class GitCommitRequest : RepositoryRequest
{
    public string? Message { get; set; }
}
