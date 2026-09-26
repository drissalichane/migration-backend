namespace MigrationExecutionAPI.Models;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string Role { get; set; } = "Dev"; // Dev, Manager, Admin
    
    public string? GitHubId { get; set; }
    public string? GitHubToken { get; set; }
    public string? AvatarUrl { get; set; }

    // A personal access token saved in Settings, for accounts that did not sign in with GitHub.
    // Encrypted with ASP.NET Data Protection; see Services/GitHubTokenStore.
    public string? GitHubPatEncrypted { get; set; }
    public string? GitHubPatLogin { get; set; }   // the GitHub account the token belongs to

    public int? TeamId { get; set; }
    public Team? Team { get; set; }
}
