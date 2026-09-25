// Builds what the n8n CLI imports on `docker compose up` (see setup.sh):
//
//   /tmp/n8n-setup/credentials.json   the OpenRouter credential, from OPENROUTER_API_KEY
//   /tmp/n8n-setup/workflows/*.json   the four pipeline workflows, each with a fixed id
//
// Fixed ids are what make setup safe to rerun: importing a workflow whose id already exists
// updates it in place instead of adding a copy, and `n8n publish:workflow` needs to know the id.
// The repo files themselves stay id-less (see CLAUDE.md: importing an id through the n8n UI once
// replaced another workflow in place) - the ids are added to temporary copies only.
//
// The credential takes the id and name the workflows already reference, so every LLM node is
// linked to it without anyone opening n8n. If a regenerated workflow ever references a different
// credential, this stops with an error rather than leaving nodes unlinked.
'use strict';
const fs = require('fs');
const path = require('path');

const SOURCE = '/workflows'; // migration_backend/new_workflows, mounted read-only
const OUT = '/tmp/n8n-setup';

// The workflows the pipeline runs today. Update this list together with the backend's webhook
// paths when a new version ships.
const WORKFLOWS = [
  { file: 'DotNet_Migration_Pipeline_v7_0_Part_1_Analyze.json', id: 'dnmigPart1Analyz' },
  { file: 'DotNet_Migration_Pipeline_v5_8_Part_2_Execute.json', id: 'dnmigPart2Execut' },
  { file: 'DotNet_Migration_Build_Tool.json', id: 'dnmigBuildTool00' },
  { file: 'DotNet_Migration_Package_API.json', id: 'dnmigPackageApi0' },
];

const apiKey = (process.env.OPENROUTER_API_KEY || '').trim();
if (!apiKey) {
  console.error('OPENROUTER_API_KEY is empty. Put your OpenRouter key in .env (see .env.example) and run `docker compose up` again.');
  process.exit(1);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'workflows'), { recursive: true });

const credentialRefs = new Map(); // id -> name
for (const w of WORKFLOWS) {
  const doc = JSON.parse(fs.readFileSync(path.join(SOURCE, w.file), 'utf8'));
  doc.id = w.id;
  // Published explicitly by setup.sh; an import never activates anything on its own.
  doc.active = false;
  delete doc.tags; // n8n creates tags on import and fails on a name that already exists
  for (const node of doc.nodes) {
    const ref = node.credentials && node.credentials.openRouterApi;
    if (ref) credentialRefs.set(ref.id, ref.name);
  }
  fs.writeFileSync(path.join(OUT, 'workflows', w.file), JSON.stringify(doc));
  console.log(`workflow  ${w.id}  ${doc.name}  (${doc.nodes.length} nodes)`);
}

if (credentialRefs.size !== 1) {
  console.error(`Expected every LLM node to use one OpenRouter credential, found ${credentialRefs.size}: ` +
    JSON.stringify([...credentialRefs]));
  process.exit(1);
}
const [[credId, credName]] = [...credentialRefs];
fs.writeFileSync(path.join(OUT, 'credentials.json'), JSON.stringify([{
  id: credId,
  name: credName,
  type: 'openRouterApi',
  data: { apiKey, url: 'https://openrouter.ai/api/v1' },
}]));
console.log(`credential ${credId}  "${credName}"  (OpenRouter)`);

fs.writeFileSync(path.join(OUT, 'workflow-ids.txt'), WORKFLOWS.map((w) => w.id).join('\n') + '\n');
