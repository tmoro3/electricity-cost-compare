import { readFile } from 'node:fs/promises';

const data = JSON.parse(await readFile(new URL('../public/data/rates.json', import.meta.url), 'utf8'));
const fail = message => { throw new Error(message); };
if (!/^\d{4}-\d{2}-\d{2}$/.test(data.updatedAt)) fail('updatedAt must be YYYY-MM-DD');
if (!Array.isArray(data.variable) || !data.variable.length) fail('variable rates are missing');
if (!Array.isArray(data.fixed) || data.fixed.length < 2) fail('fixed rate history is missing');
if (!Array.isArray(data.events)) fail('events must be an array');
for (const row of data.variable) {
  if (!/^\d{4}-\d{2}$/.test(row.month)) fail(`invalid month: ${row.month}`);
  for (const key of ['tepcoFuel','enepalFuel','enepalProcurement','support','renewable']) {
    if (row[key] !== null && (!Number.isFinite(row[key]) || Math.abs(row[key]) > 100)) fail(`invalid ${key} for ${row.month}`);
  }
  if (!Array.isArray(row.sources) || row.sources.some(url => !url.startsWith('https://'))) fail(`invalid sources for ${row.month}`);
}
for (const event of data.events) {
  if (!/^\d{4}-\d{2}(-\d{2})?$/.test(event.date)) fail(`invalid event date: ${event.date}`);
  if (!event.kind || !event.title || !event.detail) fail(`invalid event: ${event.date}`);
  if (event.source && !event.source.startsWith('https://')) fail(`invalid event source: ${event.date}`);
}
for (const row of data.fixed) {
  if (!['TEPCO','エネパル'].includes(row.company) || row.tiers?.length !== 3) fail('invalid fixed rate row');
  for (const key of ['lightBase','powerKw','powerBase','powerSummer','powerOther','stabilityLight','stabilityPower']) if (!Number.isFinite(row[key]) || row[key] < 0) fail(`invalid ${key}`);
}
console.log(`Validated ${data.variable.length} variable month(s) and ${data.fixed.length} fixed-rate period(s).`);

