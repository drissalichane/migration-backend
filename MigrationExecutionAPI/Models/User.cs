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
}
