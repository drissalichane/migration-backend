# Database snapshot

`migration-snapshot-2026-09-24.db` is a point-in-time copy of the API's SQLite database
(`MigrationExecutionAPI/migration.db`), taken on 2026-09-24. It holds the 104 migration jobs,
their logs and the measured telemetry behind the evaluation in the project report
(LegacyTestApp runs: jobs 83-104).

It was sanitised before being committed: `Users.GitHubToken` is emptied and
`Users.PasswordHash` is blank, and the file was vacuumed so the removed values are gone
from its pages. It is a read-only reference, not the live database; the API keeps using
its own `migration.db`, which stays untracked (`*.db` is git-ignored).

Open it with any SQLite client, for example:

    sqlite3 data/migration-snapshot-2026-09-24.db "SELECT Id, Status, TargetFramework FROM MigrationJobs ORDER BY Id DESC LIMIT 10;"
