#!/bin/sh
# One-shot n8n setup, run by `docker compose up` before n8n itself starts (the `n8n-setup`
# service). It replaces the manual steps: creating the OpenRouter credential, importing the four
# pipeline workflows and activating them. Safe to rerun - it updates what it created last time,
# which also means edits made to these workflows in n8n's editor are replaced on the next `up`.
set -eu

# Fresh Docker volumes belong to root. n8n runs as `node` (uid 1000) and the API container as
# uid 1000 too; both must be able to write the job workspaces and n8n its own data.
chown 1000:1000 /projects /home/node/.n8n /home/node/.nuget

# Everything below runs as `node`, so the database and config n8n creates belong to it.
exec su node -s /bin/sh -c '
  set -eu
  node /setup/prepare.js
  n8n import:credentials --input=/tmp/n8n-setup/credentials.json
  n8n import:workflow --separate --input=/tmp/n8n-setup/workflows
  while read -r id; do
    [ -n "$id" ] && n8n publish:workflow --id="$id"
  done < /tmp/n8n-setup/workflow-ids.txt
  rm -rf /tmp/n8n-setup
  echo "n8n setup complete."
'
