using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.Models;

namespace MigrationExecutionAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly MigrationDbContext _context;
    private readonly IConfiguration _configuration;

    public AuthController(MigrationDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    [HttpGet("github")]
    public IActionResult LoginWithGitHub()
    {
        var properties = new AuthenticationProperties { RedirectUri = "/api/auth/github/callback-endpoint" };
        return Challenge(properties, "GitHub");
    }

    [HttpGet("github/callback-endpoint")]
    public async Task<IActionResult> GitHubCallback()
    {
        var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        if (!result.Succeeded)
            return BadRequest("GitHub authentication failed.");

        var githubId = result.Principal.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var githubLogin = result.Principal.FindFirst("urn:github:login")?.Value ?? result.Principal.FindFirst(ClaimTypes.Name)?.Value;
        var avatarUrl = result.Principal.FindFirst("urn:github:avatar")?.Value; // Custom claim if available
        var accessToken = result.Properties.GetTokenValue("access_token");

        if (githubId == null || githubLogin == null)
            return BadRequest("Could not retrieve GitHub details.");

        var user = await _context.Users.FirstOrDefaultAsync(u => u.GitHubId == githubId);
        if (user == null)
        {
            user = new User
            {
                Username = githubLogin,
                Role = "Admin",
                GitHubId = githubId,
                GitHubToken = accessToken, // In MVP storing raw, in prod we encrypt
                AvatarUrl = avatarUrl
            };
            _context.Users.Add(user);
        }
        else
        {
            user.GitHubToken = accessToken; // Update token
            user.Username = githubLogin; // Update name
        }
        
        await _context.SaveChangesAsync();

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"] ?? throw new InvalidOperationException("Jwt:Key is not configured."));
        
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim("id", user.Id.ToString()),
                new Claim("github_token", accessToken ?? "") // We pass it in JWT for the frontend to use if needed, or backend can extract it from db. Actually let's put it in JWT so backend doesn't constantly query DB.
            }),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        
        var jwt = tokenHandler.CreateToken(tokenDescriptor);
        var tokenString = tokenHandler.WriteToken(jwt);

        // Redirect back to frontend with the token and profile info
        return Redirect($"http://localhost:5173/login?token={tokenString}&role={user.Role}&name={Uri.EscapeDataString(user.Username)}&avatar={Uri.EscapeDataString(user.AvatarUrl ?? "")}&userId={user.Id}&teamId={user.TeamId}");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == request.Username);
        if (user == null || !await VerifyPasswordAsync(user, request.Password))
            return Unauthorized("Invalid credentials");

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"] ?? throw new InvalidOperationException("Jwt:Key is not configured."));
        
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim("id", user.Id.ToString())
            }),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return Ok(new { token = tokenHandler.WriteToken(token), role = user.Role, userId = user.Id, teamId = user.TeamId });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        if (await _context.Users.AnyAsync(u => u.Username == request.Username))
            return BadRequest("Username already exists");

        var user = new User
        {
            Username = request.Username,
            // Chosen by the user on purpose while the platform is being tested; see Login.tsx.
            Role = request.Role // Dev, Manager, Admin
        };

        user.PasswordHash = Hasher.HashPassword(user, request.Password);
        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "User registered successfully." });
    }

    // ---- Settings: GitHub personal access token -----------------------------------------------

    /// <summary>Whether this user can reach GitHub, and how: their GitHub sign-in, or a saved token.</summary>
    [HttpGet("github-token")]
    [Microsoft.AspNetCore.Authorization.Authorize]
    public async Task<IActionResult> GetGitHubTokenStatus([FromServices] Services.GitHubTokenStore tokens)
    {
        var user = await tokens.FindUserAsync(User);
        if (user == null) return Unauthorized();
        var saved = tokens.Unprotect(user.GitHubPatEncrypted) != null;
        var fromLogin = !string.IsNullOrEmpty(User.FindFirst("github_token")?.Value);
        return Ok(new
        {
            linked = saved || fromLogin,
            source = fromLogin ? "github-login" : saved ? "token" : null,
            login = fromLogin ? user.Username : user.GitHubPatLogin,
            savedToken = saved,
            // A token saved before the encryption keys were lost can no longer be read.
            unreadable = !saved && !string.IsNullOrEmpty(user.GitHubPatEncrypted)
        });
    }

    /// <summary>Checks a personal access token with GitHub, then stores it encrypted.</summary>
    [HttpPost("github-token")]
    [Microsoft.AspNetCore.Authorization.Authorize]
    public async Task<IActionResult> SaveGitHubToken([FromBody] SaveGitHubTokenRequest request, [FromServices] Services.GitHubTokenStore tokens)
    {
        var user = await tokens.FindUserAsync(User);
        if (user == null) return Unauthorized();
        var token = (request.Token ?? "").Trim();
        if (token.Length == 0) return BadRequest(new { message = "Paste a GitHub personal access token." });

        var (login, error) = await tokens.ValidateAsync(token);
        if (error != null) return BadRequest(new { message = error });

        user.GitHubPatEncrypted = tokens.Protect(token);
        user.GitHubPatLogin = login;
        await _context.SaveChangesAsync();
        return Ok(new { linked = true, source = "token", login });
    }

    [HttpDelete("github-token")]
    [Microsoft.AspNetCore.Authorization.Authorize]
    public async Task<IActionResult> RemoveGitHubToken([FromServices] Services.GitHubTokenStore tokens)
    {
        var user = await tokens.FindUserAsync(User);
        if (user == null) return Unauthorized();
        user.GitHubPatEncrypted = null;
        user.GitHubPatLogin = null;
        await _context.SaveChangesAsync();
        return Ok(new { linked = false });
    }

    // ---- Settings: password ---------------------------------------------------------------------

    /// <summary>
    /// Changes the password. The current one is required when there is one; an account created by
    /// GitHub sign-in has none, so it can set a first password here and log in with it too.
    /// </summary>
    [HttpPost("change-password")]
    [Microsoft.AspNetCore.Authorization.Authorize]
    public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest request, [FromServices] Services.GitHubTokenStore tokens)
    {
        var user = await tokens.FindUserAsync(User);
        if (user == null) return Unauthorized();
        if (string.IsNullOrEmpty(request.NewPassword) || request.NewPassword.Length < 8)
            return BadRequest(new { message = "The new password must be at least 8 characters." });

        var hasPassword = !string.IsNullOrEmpty(user.PasswordHash) && user.PasswordHash != SeedPlaceholder;
        if (hasPassword && !await VerifyPasswordAsync(user, request.CurrentPassword))
            return BadRequest(new { message = "The current password is wrong." });

        user.PasswordHash = Hasher.HashPassword(user, request.NewPassword);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Password updated." });
    }

    // Passwords are stored as ASP.NET Core Identity hashes (PBKDF2, salted, versioned).
    private static readonly PasswordHasher<User> Hasher = new();

    // The seeded "admin" row ships with this placeholder in HasData, i.e. in the public repo.
    // While passwords were compared as plain text it logged in as Admin on every install.
    private const string SeedPlaceholder = "hashed_pw_here";

    /// <summary>
    /// Checks a password and upgrades a legacy plain-text one to a hash on success. A user with no
    /// password (created by GitHub sign-in) or the seed placeholder can never log in this way.
    /// </summary>
    private async Task<bool> VerifyPasswordAsync(User user, string? password)
    {
        if (string.IsNullOrEmpty(password) || string.IsNullOrEmpty(user.PasswordHash) || user.PasswordHash == SeedPlaceholder)
            return false;

        try
        {
            var result = Hasher.VerifyHashedPassword(user, user.PasswordHash, password);
            if (result == PasswordVerificationResult.SuccessRehashNeeded)
            {
                user.PasswordHash = Hasher.HashPassword(user, password);
                await _context.SaveChangesAsync();
            }
            if (result != PasswordVerificationResult.Failed) return true;
        }
        catch (FormatException)
        {
            // Not a hash: an account registered before hashing existed. Fall through.
        }

        // Legacy plain text: accept once, then store the hash in its place.
        var stored = Encoding.UTF8.GetBytes(user.PasswordHash);
        var given = Encoding.UTF8.GetBytes(password);
        if (stored.Length != given.Length || !System.Security.Cryptography.CryptographicOperations.FixedTimeEquals(stored, given))
            return false;
        user.PasswordHash = Hasher.HashPassword(user, password);
        await _context.SaveChangesAsync();
        return true;
    }
}

public class RegisterRequest
{
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Role { get; set; } = "Dev";
}

public class LoginRequest
{
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class SaveGitHubTokenRequest
{
    public string? Token { get; set; }
}

public class ChangePasswordRequest
{
    public string? CurrentPassword { get; set; }
    public string NewPassword { get; set; } = string.Empty;
}
