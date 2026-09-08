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
            System.IO.File.AppendAllText("C:/Users/grandy/projects/logs/validation.log", $"\n[{DateTime.UtcNow}] Validation Error: {errorString}\n");
            
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

builder.Services.AddDbContext<MigrationDbContext>(options => {
    options.UseSqlite("Data Source=migration.db", o => o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery));
    options.ConfigureWarnings(warnings => warnings.Ignore(Microsoft.EntityFrameworkCore.Diagnostics.RelationalEventId.PendingModelChangesWarning));
});

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
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration["Jwt:Key"] ?? "ThisIsASuperSecretKeyForJwtAuthentication123!")),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    })
    .AddGitHub(options =>
    {
        options.ClientId = builder.Configuration["Authentication:GitHub:ClientId"]!;
        options.ClientSecret = builder.Configuration["Authentication:GitHub:ClientSecret"]!;
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

app.Use(async (context, next) =>
{
    context.Request.EnableBuffering();
    using var reader = new StreamReader(context.Request.Body, leaveOpen: true);
    var body = await reader.ReadToEndAsync();
    context.Request.Body.Position = 0;
    
    try {
        var headers = string.Join("\n", context.Request.Headers.Select(h => $"{h.Key}: {h.Value}"));
        System.IO.File.WriteAllText($"C:/Users/grandy/projects/logs/req_{Guid.NewGuid()}.log", 
            $"\n[{DateTime.UtcNow}] {context.Request.Method} {context.Request.Path}\nHeaders:\n{headers}\nBody Length: {body.Length}\nBody: {body}\n");
    } catch { }
        
    await next();
});

// app.UseHttpsRedirection();

app.UseCors("AllowAll");

// This allows for easily adding Authentication later
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
