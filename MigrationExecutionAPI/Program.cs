using MigrationExecutionAPI.Interfaces;
using MigrationExecutionAPI.Services;
using Scalar.AspNetCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using MigrationExecutionAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Job workspaces ({root}/migration-{id}) and the debug logs live under one root. See WorkspacePaths.
MigrationExecutionAPI.Utilities.WorkspacePaths.Configure(builder.Configuration["Workspaces:Root"], builder.Environment.ContentRootPath);
var logsDirectory = MigrationExecutionAPI.Utilities.WorkspacePaths.LogsDirectory;

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    })
    .ConfigureApiBehaviorOptions(options =>
    {
        options.InvalidModelStateResponseFactory = context =>
        {
            var errors = context.ModelState
                .Where(e => e.Value != null && e.Value.Errors.Count > 0)
                .Select(e => $"{e.Key}: {string.Join(", ", e.Value!.Errors.Select(x => x.ErrorMessage))}")
                .ToList();
            var errorString = string.Join(" | ", errors);
            // Debug aid only. It used to throw when the folder did not exist, which turned every
            // validation 400 into a 500 on any machine but the original one.
            try
            {
                System.IO.Directory.CreateDirectory(logsDirectory);
                System.IO.File.AppendAllText($"{logsDirectory}/validation.log", $"\n[{DateTime.UtcNow}] Validation Error: {errorString}\n");
            }
            catch { }
            
            return new Microsoft.AspNetCore.Mvc.BadRequestObjectResult(context.ModelState);
        };
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        b => b.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddOpenApi();

// Dependency Injection for our services
builder.Services.AddScoped<IFileService, FileService>();
builder.Services.AddScoped<ISearchService, SearchService>();
builder.Services.AddScoped<ICsprojService, CsprojService>();
builder.Services.AddScoped<IBuildService, BuildService>();
builder.Services.AddScoped<IGitService, GitService>();
builder.Services.AddScoped<GitHubService>();

// Real pipeline telemetry: n8n records the provider's own token counts and per-node timings for
// every execution, and its REST API hands them back. Singletons so the OpenRouter price
// catalogue is fetched once and cached rather than per request.
builder.Services.AddHttpClient();
builder.Services.AddSingleton<MigrationExecutionAPI.Services.OpenRouterPricing>();
builder.Services.AddSingleton<MigrationExecutionAPI.Services.N8nTelemetryService>();

builder.Services.AddDbContext<MigrationDbContext>(options => {
    // Docker Compose points this at a volume (ConnectionStrings__Default); a dev run keeps the
    // database next to the project, as before.
    options.UseSqlite(builder.Configuration.GetConnectionString("Default") ?? "Data Source=migration.db", o => o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery));
    options.ConfigureWarnings(warnings => warnings.Ignore(Microsoft.EntityFrameworkCore.Diagnostics.RelationalEventId.PendingModelChangesWarning));
});

// Secrets are never in appsettings.json - it is committed, and the repo is public. They come from
// user-secrets on a dev machine (dotnet user-secrets set "<key>" "<value>") or from environment
// variables (Jwt__Key, Authentication__GitHub__ClientId, ...). There is deliberately no fallback:
// the old hardcoded JWT key was public, so anyone could have minted a valid token.
static string RequiredSetting(IConfiguration config, string key, string hint) =>
    string.IsNullOrWhiteSpace(config[key])
        ? throw new InvalidOperationException(
            $"Missing setting '{key}'. {hint} Set it with: dotnet user-secrets set \"{key}\" \"<value>\" " +
            $"(run in MigrationExecutionAPI/), or the environment variable {key.Replace(":", "__")}.")
        : config[key]!;

var jwtKey = RequiredSetting(builder.Configuration, "Jwt:Key",
    "Any long random string (32+ characters); it signs the dashboard's login tokens.");
var gitHubClientId = RequiredSetting(builder.Configuration, "Authentication:GitHub:ClientId",
    "Create a GitHub OAuth app with callback http://localhost:5153/api/auth/github/callback.");
var gitHubClientSecret = RequiredSetting(builder.Configuration, "Authentication:GitHub:ClientSecret",
    "The client secret of that GitHub OAuth app.");

builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddCookie(options =>
    {
        options.Cookie.SameSite = SameSiteMode.Lax;
    })
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtKey)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    })
    .AddGitHub(options =>
    {
        options.ClientId = gitHubClientId;
        options.ClientSecret = gitHubClientSecret;
        options.CallbackPath = "/api/auth/github/callback";
        options.Scope.Add("repo"); // We need repo scope to commit and push
        options.SaveTokens = true;
        options.CorrelationCookie.SameSite = SameSiteMode.Lax;
    });

var app = builder.Build();

// Ensure database is created (We will rely on EF Migrations instead)
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<MigrationDbContext>();
    db.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

// One file per request, for debugging the n8n pipeline. On by default only in Development (a
// `dotnet run`); Docker Compose runs Production, so nothing is written there unless
// RequestLog:Enabled is set. Authorization and Cookie are redacted: the JWT carries the user's
// GitHub token as a plain base64 claim, and these files used to hold one per request.
var requestLogEnabled = builder.Configuration.GetValue<bool?>("RequestLog:Enabled") ?? app.Environment.IsDevelopment();
if (requestLogEnabled)
{
    System.IO.Directory.CreateDirectory(logsDirectory);
    app.Use(async (context, next) =>
    {
        context.Request.EnableBuffering();
        using var reader = new StreamReader(context.Request.Body, leaveOpen: true);
        var body = await reader.ReadToEndAsync();
        context.Request.Body.Position = 0;

        try {
            var headers = string.Join("\n", context.Request.Headers.Select(h =>
                h.Key.Equals("Authorization", StringComparison.OrdinalIgnoreCase) || h.Key.Equals("Cookie", StringComparison.OrdinalIgnoreCase)
                    ? $"{h.Key}: [redacted]"
                    : $"{h.Key}: {h.Value}"));
            System.IO.File.WriteAllText($"{logsDirectory}/req_{Guid.NewGuid()}.log",
                $"\n[{DateTime.UtcNow}] {context.Request.Method} {context.Request.Path}\nHeaders:\n{headers}\nBody Length: {body.Length}\nBody: {body}\n");
        } catch { }

        await next();
    });
}

// app.UseHttpsRedirection();

app.UseCors("AllowAll");

// This allows for easily adding Authentication later
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
