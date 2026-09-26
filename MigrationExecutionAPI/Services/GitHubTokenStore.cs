using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text.Json.Nodes;
using Microsoft.AspNetCore.DataProtection;
using MigrationExecutionAPI.Data;

namespace MigrationExecutionAPI.Services;

/// <summary>
/// Which GitHub token a request acts with, and the personal access token a user can save in Settings.
///
/// Signing in with GitHub puts an OAuth token in the login itself (the github_token claim). An
/// account made with a username and password has none, so it could not open a pull request, list
/// repositories or sync a PR. Such a user can paste a personal access token in Settings instead:
/// it is checked against GitHub, encrypted with ASP.NET Data Protection and stored on the user row,
/// and every GitHub feature falls back to it when the login carries no token.
///
/// The encryption keys must outlive a restart or the saved tokens become unreadable: on Windows they
/// live in the user profile by default; in Docker Compose DataProtection:KeysDirectory points them
/// at the API's data volume (see Program.cs).
/// </summary>
public class GitHubTokenStore
{
    private readonly MigrationDbContext _db;
    private readonly IDataProtector _protector;
    private readonly IHttpClientFactory _httpFactory;

    public GitHubTokenStore(MigrationDbContext db, IDataProtectionProvider dataProtection, IHttpClientFactory httpFactory)
    {
        _db = db;
        _protector = dataProtection.CreateProtector("GitHubPersonalAccessToken.v1");
        _httpFactory = httpFactory;
    }

    /// <summary>The token to use for this request: the GitHub sign-in's own, else the saved one.</summary>
    public async Task<string?> ResolveAsync(ClaimsPrincipal principal)
    {
        var fromLogin = principal.FindFirst("github_token")?.Value;
        if (!string.IsNullOrEmpty(fromLogin)) return fromLogin;

        var user = await FindUserAsync(principal);
        return user is null ? null : Unprotect(user.GitHubPatEncrypted);
    }

    public async Task<Models.User?> FindUserAsync(ClaimsPrincipal principal)
    {
        var id = principal.FindFirst("id")?.Value;
        return int.TryParse(id, out var userId) ? await _db.Users.FindAsync(userId) : null;
    }

    public string Protect(string token) => _protector.Protect(token);

    /// <summary>Null when nothing is saved, or when it was encrypted with keys that no longer exist.</summary>
    public string? Unprotect(string? encrypted)
    {
        if (string.IsNullOrEmpty(encrypted)) return null;
        try { return _protector.Unprotect(encrypted); }
        catch (System.Security.Cryptography.CryptographicException) { return null; }
    }

    /// <summary>
    /// Asks GitHub who the token belongs to. Returns the GitHub login, or an error to show the user.
    /// A classic token also reports its scopes, and one without "repo" cannot open pull requests.
    /// </summary>
    public async Task<(string? Login, string? Error)> ValidateAsync(string token)
    {
        using var http = _httpFactory.CreateClient();
        using var req = new HttpRequestMessage(HttpMethod.Get, "https://api.github.com/user");
        req.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
        req.Headers.UserAgent.ParseAdd("MigrationExecutionAPI");
        req.Headers.Accept.ParseAdd("application/vnd.github+json");

        using var res = await http.SendAsync(req);
        if (res.StatusCode == System.Net.HttpStatusCode.Unauthorized)
            return (null, "GitHub rejected this token: it is wrong, expired or revoked.");
        if (!res.IsSuccessStatusCode)
            return (null, $"GitHub answered HTTP {(int)res.StatusCode} while checking the token. Try again.");

        // Fine-grained tokens send no scope header; their repository access is checked when used.
        if (res.Headers.TryGetValues("X-OAuth-Scopes", out var scopeHeaders))
        {
            var scopes = string.Join(",", scopeHeaders).Split(',', StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries);
            if (!scopes.Contains("repo") && !scopes.Contains("public_repo"))
                return (null, "This token has no \"repo\" scope, so it cannot open pull requests. Create one with the \"repo\" scope.");
        }

        var body = JsonNode.Parse(await res.Content.ReadAsStringAsync());
        return (body?["login"]?.ToString(), null);
    }
}
