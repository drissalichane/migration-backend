using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MigrationExecutionAPI.Data;
using MigrationExecutionAPI.Services;
using Octokit;

namespace MigrationExecutionAPI.Controllers;

public class MergeRequestModel {
    public string? MergeMethod { get; set; }
    public string? CommitTitle { get; set; }
    public int? JobId { get; set; }
    public bool DeleteBranch { get; set; }
}

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class GitHubController : ControllerBase
{
    private readonly GitHubService _gitHubService;
    private readonly MigrationDbContext _context;

    private readonly GitHubTokenStore _tokens;

    public GitHubController(GitHubService gitHubService, MigrationDbContext context, GitHubTokenStore tokens)
    {
        _gitHubService = gitHubService;
        _context = context;
        _tokens = tokens;
    }

    // The GitHub sign-in's token, else the personal access token saved in Settings.
    private Task<string?> GetToken() => _tokens.ResolveAsync(User);

    [HttpGet("repos")]
    public async Task<IActionResult> GetRepositories()
    {
        var token = await GetToken();
        if (string.IsNullOrEmpty(token)) return Unauthorized("No GitHub token found.");

        try 
        {
            var repos = await _gitHubService.GetUserRepositoriesAsync(token);
            
            return Ok(repos.Select(r => new { 
                r.Id, 
                r.Name, 
                r.FullName, 
                r.HtmlUrl, 
                r.CloneUrl,
                r.Language,
                Owner = r.Owner.Login
            }));
        }
        catch (AuthorizationException ex)
        {
            return Unauthorized(ex.Message);
        }
        catch (Exception ex)
        {
            return BadRequest($"Failed to fetch repositories: {ex.Message}");
        }
    }

    [HttpGet("repos/{owner}/{repo}/branches")]
    public async Task<IActionResult> GetBranches(string owner, string repo)
    {
        var token = await GetToken();
        if (string.IsNullOrEmpty(token)) return Unauthorized("No GitHub token found.");

        try
        {
            var branches = await _gitHubService.GetBranchesAsync(token, owner, repo);
            return Ok(branches.Select(b => new {
                Name = b.Name,
                CommitSha = b.Commit.Sha
            }));
        }
        catch (AuthorizationException ex)
        {
            return Unauthorized(ex.Message);
        }
        catch (Exception ex)
        {
            return BadRequest($"Failed to fetch branches: {ex.Message}");
        }
    }

    [HttpGet("repos/{owner}/{repo}/commits")]
    public async Task<IActionResult> GetCommits(string owner, string repo, [FromQuery] string? branch = null)
    {
        var token = await GetToken();
        if (string.IsNullOrEmpty(token)) return Unauthorized("No GitHub token found.");

        try
        {
            var commits = await _gitHubService.GetRecentCommitsAsync(token, owner, repo, branch);
            return Ok(commits.Select(c => new {
                c.Sha,
                Message = c.Commit.Message,
                Author = c.Commit.Author.Name,
                Date = c.Commit.Author.Date,
                Url = c.HtmlUrl
            }));
        }
        catch (AuthorizationException ex)
        {
            return Unauthorized(ex.Message);
        }
        catch (Exception ex)
        {
            return BadRequest($"Failed to fetch commits: {ex.Message}");
        }
    }

    [HttpGet("repos/{owner}/{repo}/commits/{sha}")]
    public async Task<IActionResult> GetCommit(string owner, string repo, string sha)
    {
        var token = await GetToken();
        if (string.IsNullOrEmpty(token)) return Unauthorized("No GitHub token found.");

        try
        {
            var commit = await _gitHubService.GetCommitAsync(token, owner, repo, sha);
            return Ok(new {
                commit.Sha,
                Message = commit.Commit.Message,
                Author = commit.Commit.Author.Name,
                Date = commit.Commit.Author.Date,
                Url = commit.HtmlUrl,
                Files = commit.Files.Select(f => new {
                    f.Filename,
                    f.Status,
                    f.Patch,
                    f.Additions,
                    f.Deletions,
                    f.Changes
                })
            });
        }
        catch (AuthorizationException ex)
        {
            return Unauthorized(ex.Message);
        }
        catch (Exception ex)
        {
            return BadRequest($"Failed to fetch commit details: {ex.Message}");
        }
    }

    [HttpGet("repos/{owner}/{repo}/contents")]
    public async Task<IActionResult> GetFileContent(string owner, string repo, [FromQuery] string path, [FromQuery] string refBranch)
    {
        var token = await GetToken();
        if (string.IsNullOrEmpty(token)) return Unauthorized("No GitHub token found.");
        try {
            var content = await _gitHubService.GetFileContentAsync(token, owner, repo, path, refBranch);
            return Ok(new { content });
        } catch (AuthorizationException ex) {
            return Unauthorized(ex.Message);
        } catch (Exception ex) {
            return BadRequest($"Failed to fetch file content: {ex.Message}");
        }
    }

    [HttpGet("repos/{owner}/{repo}/commits/{sha}/status")]
    public async Task<IActionResult> GetCommitStatus(string owner, string repo, string sha)
    {
        var token = await GetToken();
        if (string.IsNullOrEmpty(token)) return Unauthorized("No GitHub token found.");
        try {
            var status = await _gitHubService.GetCombinedCommitStatusAsync(token, owner, repo, sha);
            return Ok(new {
                status.State,
                status.TotalCount,
                Statuses = status.Statuses.Select(s => new {
                    s.State,
                    s.Description,
                    s.Context,
                    s.TargetUrl
                })
            });
        } catch (AuthorizationException ex) {
            return Unauthorized(ex.Message);
        } catch (Exception ex) {
            return BadRequest($"Failed to fetch commit status: {ex.Message}");
        }
    }

    [HttpGet("repos/{owner}/{repo}/pulls/{pullNumber}")]
    public async Task<IActionResult> GetPullRequest(string owner, string repo, int pullNumber)
    {
        var token = await GetToken();
        if (string.IsNullOrEmpty(token)) return Unauthorized("No GitHub token found.");
        try {
            var pr = await _gitHubService.GetPullRequestStatusAsync(token, owner, repo, pullNumber);
            return Ok(new {
                State = pr.State.StringValue,
                pr.Merged,
                pr.HtmlUrl,
                pr.Title
            });
        } catch (AuthorizationException ex) {
            return Unauthorized(ex.Message);
        } catch (Exception ex) {
            return BadRequest($"Failed to fetch PR: {ex.Message}");
        }
    }

    [HttpPost("repos/{owner}/{repo}/pulls/{pullNumber}/merge")]
    public async Task<IActionResult> MergePullRequest(string owner, string repo, int pullNumber, [FromBody] MergeRequestModel req)
    {
        var token = await GetToken();
        if (string.IsNullOrEmpty(token)) return Unauthorized("No GitHub token found.");
        try {
            var result = await _gitHubService.MergePullRequestAsync(token, owner, repo, pullNumber, req.MergeMethod ?? "squash", req.CommitTitle);
            
            if (req.JobId.HasValue) {
                var job = await _context.MigrationJobs.FindAsync(req.JobId.Value);
                if (job != null) {
                    job.Status = "Merged";
                    await _context.SaveChangesAsync();
                }
            }

            if (req.DeleteBranch) {
                try {
                    var pr = await _gitHubService.GetPullRequestStatusAsync(token, owner, repo, pullNumber);
                    await _gitHubService.DeleteBranchAsync(token, owner, repo, pr.Head.Ref);
                } catch {
                    // Ignore branch deletion errors
                }
            }
            
            return Ok(new {
                result.Sha,
                result.Merged,
                result.Message
            });
        } catch (AuthorizationException ex) {
            return Unauthorized(ex.Message);
        } catch (Exception ex) {
            return BadRequest($"Failed to merge PR: {ex.Message}");
        }
    }

    public class RevertRequestModel {
        public int JobId { get; set; }
    }

    [HttpPost("repos/{owner}/{repo}/pulls/{pullNumber}/revert")]
    public async Task<IActionResult> RevertPullRequest(string owner, string repo, int pullNumber, [FromBody] RevertRequestModel req)
    {
        var token = await GetToken();
        if (string.IsNullOrEmpty(token)) return Unauthorized("No GitHub token found.");
        
        try {
            var newPrUrl = await _gitHubService.RevertPullRequestAsync(token, owner, repo, pullNumber);
            
            var job = await _context.MigrationJobs.FindAsync(req.JobId);
            if (job != null) {
                if (job.Status == "Reverted") {
                    job.PrUrl = newPrUrl;
                    job.RevertPrUrl = null;
                    job.Status = "Pending PR Merge";
                } else {
                    job.RevertPrUrl = newPrUrl;
                }
                await _context.SaveChangesAsync();
            }

            return Ok(new { url = newPrUrl });
        } catch (AuthorizationException ex) {
            return Unauthorized(ex.Message);
        } catch (Exception ex) {
            return BadRequest($"Failed to revert PR: {ex.Message}");
        }
    }
}
