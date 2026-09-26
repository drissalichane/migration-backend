# .NET Migration Platform

Upgrades a .NET repository to a newer .NET version with an AI agent pipeline, and hands the result
back as a GitHub pull request. You point it at a repository, it analyses the code and proposes a
migration plan, you approve the plan, it applies and builds the changes, and you review the code
before it opens the pull request.

It runs entirely on your own machine, in Docker. This guide takes you from nothing to a finished
migration of a small test application, in about an hour, most of it waiting for downloads and
for the pipeline.

---

## What you need

| | |
|---|---|
| **Docker Desktop** | [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/). Give it at least 8 GB of memory (Settings → Resources) and keep about **12 GB of free disk space** — the pipeline's image carries three .NET SDKs. |
| **git** | [git-scm.com](https://git-scm.com/downloads) |
| **A GitHub account** | You sign in to the app with it, and the app opens pull requests with it. |
| **An OpenRouter account** | [openrouter.ai](https://openrouter.ai). The pipeline's AI models are called through it. New accounts get a small free allowance (reported as about $1), which may cover a few test runs: a migration of the test application costs roughly **$0.05 – $0.25**. For more, add credit — $5 is plenty. |

> **Public repositories only, for now.** The pipeline clones the repository without credentials, so a
> private repository cannot be migrated yet — even when you are signed in with GitHub. The test
> application below is public, and so is a fork of it.

> **About your code.** The pipeline sends the repository's source code to AI model providers
> (through OpenRouter). Use the test application below, or a repository you are allowed to share
> with third-party AI services — if the code belongs to an organisation, check its policy first.

---

## 1. Get the code

Both repositories go side by side, **with these folder names**:

```bash
mkdir dotnet-migration
cd dotnet-migration
git clone https://github.com/drissalichane/migration-backend.git migration_backend
git clone https://github.com/drissalichane/migration-dashboard.git migration_dashboard
```

## 2. Create a GitHub OAuth app

This is what lets you sign in with GitHub and lets the app open pull requests for you.

1. On GitHub: **Settings → Developer settings → OAuth Apps → New OAuth App**
   (direct link: [github.com/settings/applications/new](https://github.com/settings/applications/new)).
2. Fill in:
   - **Application name:** anything, e.g. `Migration Platform (local)`
   - **Homepage URL:** `http://localhost:5173`
   - **Authorization callback URL:** `http://localhost:5153/api/auth/github/callback` — exactly this.
3. Click **Register application**. Copy the **Client ID**.
4. Click **Generate a new client secret** and copy it right away (GitHub shows it only once).

## 3. Create an OpenRouter key

1. Sign up at [openrouter.ai](https://openrouter.ai). Your account starts with a small free allowance;
   the **Credits** page shows your balance, and is where you add more if it runs out. (The pipeline
   uses paid models, not OpenRouter's `:free` ones, so it runs on this balance.)
2. Go to **Keys → Create Key** and copy the key (it starts with `sk-or-`).

## 4. Fill in the settings file

In the `migration_backend` folder, copy the example settings file to `.env`:

```bash
cd migration_backend
cp .env.example .env        # Windows (cmd / PowerShell): copy .env.example .env
```

Open `.env` in a text editor and fill in:

| Setting | Value |
|---|---|
| `OPENROUTER_API_KEY` | the key from step 3 |
| `GITHUB_CLIENT_ID` | the Client ID from step 2 |
| `GITHUB_CLIENT_SECRET` | the client secret from step 2 |
| `JWT_KEY` | any long random text, 32 characters or more — see below |
| `N8N_API_KEY` | leave empty for now (step 6 explains it) |

To generate a `JWT_KEY`:

```powershell
# Windows PowerShell
[Convert]::ToBase64String((1..48 | ForEach-Object { Get-Random -Maximum 256 }))
```
```bash
# macOS / Linux
openssl rand -base64 48
```

`.env` holds your secrets. It is ignored by git — never commit it or send it to anyone.

## 5. Start everything

Still in `migration_backend`, with Docker Desktop running:

```bash
docker compose up -d --build
```

The **first** start builds the images and takes **15–25 minutes**. Later starts take seconds.

When it finishes, check that everything is up:

```bash
docker compose ps
```

You should see `dashboard`, `api` and `n8n` **running**. (`n8n-setup` is a one-time helper that
prepares n8n on every start and then exits — it does not appear in that list once it's done.)

Three addresses are now available:

| | |
|---|---|
| **http://localhost:5173** | the dashboard — where you work |
| **http://localhost:5678** | n8n — the engine that runs the AI pipeline |
| http://localhost:5153 | the API behind the dashboard (nothing to open here) |

## 6. Create your n8n account (once)

Open **http://localhost:5678** and create the owner account. The email and password stay on your
machine; nothing is sent to n8n's servers.

Everything else is already set up: the four pipeline workflows are imported and active, and your
OpenRouter key is connected. You don't need to change anything in n8n.

**Optional, recommended:** let the dashboard show exact token counts and timings for each run.

1. In n8n: **Settings → n8n API → Create an API key**, copy it.
2. Paste it into `.env` as `N8N_API_KEY=...`
3. Run `docker compose up -d` again.

## 7. Sign in to the dashboard

> **Recommended: sign in with GitHub.** It is the most complete and best-tested route through the app
> today. It works as soon as the OAuth app's `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` are in
> `.env` (steps 2 and 4), and it covers everything — browsing your repositories and opening pull
> requests — with no extra setup.

Open **http://localhost:5173** and click **Login with GitHub**. GitHub asks you to authorize your
OAuth app: it requests repository access because it opens pull requests on your behalf.

Every GitHub account that signs in gets the Admin role.

**Alternative: an account with a username and password** (*Sign up* on the login page). Choose the
**Admin** role to try every feature. Such an account needs one more step before it can open pull
requests or browse your repositories: in **Settings → GitHub Integration**, paste a GitHub
[personal access token](https://github.com/settings/tokens/new?scopes=repo&description=.NET%20Migration%20Platform)
with the `repo` scope. The app checks it with GitHub and stores it encrypted.

## 8. Create a project

The test application is [LegacyTestApp](https://github.com/drissalichane/LegacyTestApp): a small
.NET 6 solution full of APIs that are obsolete or removed in later .NET versions (BinaryFormatter,
`Thread.Abort`, `WebClient`, old AutoMapper and RestSharp, …).

1. **Fork it** to your own GitHub account (the **Fork** button on its GitHub page). The app has to
   be able to push a branch to the repository it migrates, so it must be yours. Keep the fork
   **public** (GitHub's default for a fork of a public repository) — private repositories are not
   supported yet.
2. In the dashboard, open **Projects → New Project**.
3. Give it a name, choose your fork under **Repository** (**Browse** lists your GitHub
   repositories, or paste its URL), and click **Import**.

## 9. Run a migration

1. Open **Dashboard** (the home page) and select your project.
2. Optionally pick a branch or commit. Choose the **Target .NET Framework** — `.NET 9` is a good
   first test.
3. Click **Create Migration PR**. You land on the job's page, which follows the run live.

The job then goes through these stages (the status is shown at the top of the page):

| Status | What happens | Your part |
|---|---|---|
| **Analyzing** (7–20 min) | Clones the repository, builds it, runs Microsoft's .NET Upgrade Assistant, then an AI agent researches each finding and writes a migration plan. | Watch the live log, or come back later. |
| **Pending Plan Approval** | The plan is ready: every change, the NuGet package upgrades, and any security advisories. | Review it. Each change is marked **MUST** (needed to compile or run on the new version) or **SHOULD** (deprecated but still working) — click the badge to switch. Only MUST changes are applied. Then **Approve & Execute**. |
| **Executing** (4–15 min) | Applies the changes, builds the result, and if the build fails, an AI "Error Fixer" repairs it and rebuilds. Then writes a report. | Watch or wait. |
| **Pending PR Review** | Every change is shown as a side-by-side diff. | Untick anything you don't want, edit a change by hand if needed, then **Approve Selected** to open the pull request. (**Reject & Save** keeps it as a draft instead; a draft can still become a pull request later with **Create PR**.) |
| **Pull request** | A branch and pull request appear on your fork on GitHub. | Review and merge it like any other PR. |

### Watching a run step by step in n8n

The job page shows the run's log. n8n shows the pipeline itself: every step, what went into it and
what came out, and which step failed. Open **http://localhost:5678**, sign in with your n8n account,
and use **Executions** in the left menu, or go straight to a workflow's run history:

| Workflow | Runs when | Run history |
|---|---|---|
| **Part 1 – Analyze** | the job is *Analyzing* | http://localhost:5678/workflow/dnmigPart1Analyz/executions |
| **Part 2 – Execute** | the job is *Executing* | http://localhost:5678/workflow/dnmigPart2Execut/executions |
| Build Tool | the Error Fixer rebuilds the code, or a reviewed PR is rebuilt | http://localhost:5678/workflow/dnmigBuildTool00/executions |
| Package API | the Error Fixer looks up a NuGet package's API | http://localhost:5678/workflow/dnmigPackageApi0/executions |

Click a run to open it: each step is shown on the canvas, green or red, and clicking a step shows its
input and output. The newest run is at the top. Its number is n8n's own counter, not the job number
shown in the dashboard; match them by the time they started.

---

## Everyday commands

Run these in the `migration_backend` folder.

| | |
|---|---|
| Start | `docker compose up -d` |
| Stop | `docker compose down` — your accounts, projects and runs are kept |
| See what's running | `docker compose ps` |
| Follow a service's log | `docker compose logs -f n8n` (or `api`, `dashboard`) |
| After editing `.env` | `docker compose up -d` |
| After pulling new code | `docker compose up -d --build` |
| **Wipe everything** and start fresh | `docker compose down -v` — deletes all data, including your n8n account |

## Troubleshooting

| Symptom | Fix |
|---|---|
| `docker compose up` stops with *"Set OPENROUTER_API_KEY in .env"* (or another setting) | That value is missing from `.env`. |
| *"port is already allocated"* | Something else uses port 5173, 5153 or 5678. Stop it, then `docker compose up -d` again. |
| GitHub says *"The redirect_uri is not associated with this application"* | The callback URL of your OAuth app is not exactly `http://localhost:5153/api/auth/github/callback`. |
| The dashboard shows errors or empty pages after a while | Your sign-in expired: log out and **Login with GitHub** again. |
| A job goes to **Failed** right at the start of *Analyzing*, on the clone step | The repository is private, or its URL is wrong. Only public repositories are supported for now. |
| A job goes to **Failed** a few minutes into *Analyzing* | Open the failed run in n8n (see *Watching a run step by step in n8n*): the red node says why. The most common cause is the OpenRouter key — wrong, or out of credit. Fix `.env`, run `docker compose up -d`, start a new migration. |
| `docker compose ps` does not show `n8n` | Run `docker compose logs n8n-setup` — it explains what it could not set up. |
| The first job is slower than later ones | Expected: the first build downloads ~370 MB of NuGet packages, which are kept for later runs. |

## Costs, and what the numbers mean

- Each run spends OpenRouter credit. **The exact amount billed is on OpenRouter's Activity page.**
- The job page's token counts and timings are measured (read from n8n's record of the run, once
  `N8N_API_KEY` is set). Its **cost column is an estimate** from OpenRouter's list prices.

## How it fits together

```
 browser ──► dashboard (:5173) ──► api (:5153) ──► n8n (:5678) ──► OpenRouter (AI models)
                                     ▲                │
                                     └──── file edits, logs ─┘
                                          both work on the same cloned repositories
```

- **dashboard** — the React web app.
- **api** — .NET 9: the database, GitHub sign-in and pull requests, and the file tools the AI agents
  use to read and edit code.
- **n8n** — runs the two pipeline workflows (Analyze, Execute) plus two helper tools, with the
  .NET 8, 9 and 10 SDKs and Microsoft's Upgrade Assistant inside the container.
- Data lives in Docker volumes: n8n's data, the API's database, and one cloned repository per job.
