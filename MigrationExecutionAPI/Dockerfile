# The API for Docker Compose (see ../docker-compose.yml).
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY MigrationExecutionAPI.csproj ./
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:9.0
# git: /execute resets a job's workspace and the Code Changes view runs `git diff`. Pull
# requests go through GitHub's API (Octokit), so git needs no identity or credentials here.
RUN apt-get update && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*
# Run as uid 1000, the same uid as n8n's `node` user. Both containers read and write the same
# job workspaces: with different owners, git refuses a repository n8n cloned ("dubious
# ownership"), and n8n cannot rewrite a file this container re-created.
RUN useradd --uid 1000 --create-home migrator \
    && mkdir -p /data /projects && chown 1000:1000 /data /projects
USER 1000
WORKDIR /app
COPY --from=build /app .
ENV ASPNETCORE_URLS=http://+:5153
EXPOSE 5153
ENTRYPOINT ["dotnet", "MigrationExecutionAPI.dll"]
