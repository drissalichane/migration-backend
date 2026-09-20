/**
 * The Upgrade Assistant's JSON report is ~3MB for a 12-file repo - unusable as
 * LLM context. Almost all of it is repetition: 3086 rule instances collapse to
 * 16 unique (rule, description) pairs, and one rule (Api.0001) accounts for
 * 2501 of them with no description at all.
 *
 * This distils the report to the part worth handing to the Research Agent:
 * each distinct finding, how many times it occurs, and the doc links.
 *
 * Usage: node scripts/distill_ua_report.js <report.json>
 */
const fs = require('fs');

const file = process.argv[2];
if (!file) {
  console.error('usage: node distill_ua_report.js <report.json>');
  process.exit(1);
}

const j = JSON.parse(fs.readFileSync(file, 'utf8'));
const out = [];

const summary = (j.stats && j.stats.summary) || {};
const severity = (j.stats && j.stats.charts && j.stats.charts.severity) || {};
out.push(`=== UPGRADE ASSISTANT (target ${(j.settings && j.settings.targetDisplayName) || '?'}) ===`);
out.push(`projects=${summary.projects} issues=${summary.issues} incidents=${summary.incidents} ` +
  `severity=${JSON.stringify(severity)}`);
out.push('');

const findings = new Map();
for (const p of j.projects || []) {
  for (const inst of p.ruleInstances || []) {
    const desc = (inst.description || '').trim();
    if (!desc) continue;                       // Api.0001 carries no description: pure noise
    const key = inst.ruleId + '|' + desc;
    if (!findings.has(key)) {
      const links = ((inst.location && inst.location.links) || [])
        .map((l) => l.url)
        .filter((u) => u && !/api-docs|\/dotnet\/api\//i.test(u));   // keep breaking-change links, drop per-API pages
      findings.set(key, { rule: inst.ruleId, desc, count: 0, links: [...new Set(links)].slice(0, 2), symbols: new Set() });
    }
    const f = findings.get(key);
    f.count++;
    const sym = inst.location && inst.location.snippet;
    if (sym && f.symbols.size < 4) f.symbols.add(sym);
  }
}

const ordered = [...findings.values()].sort((a, b) => b.count - a.count);
out.push(`${ordered.length} distinct findings (descriptions are the tool's own wording):`);
for (const f of ordered) {
  out.push(`- [${f.rule} x${f.count}] ${f.desc}`);
  if (f.symbols.size) out.push(`    symbols: ${[...f.symbols].join(', ')}`);
  if (f.links.length) out.push(`    ${f.links.join(' ')}`);
}

const text = out.join('\n');
console.log(text);
console.error(`\n[distilled ${fs.statSync(file).size} bytes -> ${text.length} chars]`);
