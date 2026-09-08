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
        var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"] ?? "ThisIsASuperSecretKeyForJwtAuthentication123!");
        
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
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == request.Username && u.PasswordHash == request.Password);
        
        if (user == null)
            return Unauthorized("Invalid credentials");

        var tokenHandler = new JwtSecurityTokenHandler();
        // In a real app, use a secret from appsettings.json. Hardcoded here for the MVP.
        var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"] ?? "ThisIsASuperSecretKeyForJwtAuthentication123!");
        
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
            PasswordHash = request.Password, // MVP: raw string. Real app: hash it.
            Role = request.Role // Dev, Manager, Admin
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "User registered successfully." });
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
