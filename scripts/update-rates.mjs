import { readFile, writeFile } from 'node:fs/promises';

const file = new URL('../public/data/rates.json', import.meta.url);
const data = JSON.parse(await readFile(file, 'utf8'));
const now = new Date();
const nextMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
const target = process.env.TARGET_MONTH || `${nextMonth.getUTCFullYear()}-${String(nextMonth.getUTCMonth() + 1).padStart(2, '0')}`;
const urls = {
  tepco: 'https://www.tepco.co.jp/ep/private/fuelcost2/new/index-j.html',
  enepal: 'https://enepal.co.jp/palpower-energy/power-procurument/',
  enepalRates: 'https://enepal.co.jp/palpower-energy/area-price/kanto/'
};
const fetchText = async url => {
  const response = await fetch(url, { headers: { 'user-agent': 'electricity-cost-compare/1.0 (+GitHub Actions)' } });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.text();
};
const [tepco, enepal, enepalRates] = await Promise.all(Object.values(urls).map(fetchText));
const compact = text => text.replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ');
const checks = {
  tepcoTargetPublished: compact(tepco).includes(`${Number(target.slice(0,4))}年${Number(target.slice(5))}月分`),
  enepalTargetMentioned: compact(enepal).includes(`${Number(target.slice(0,4))}年${Number(target.slice(5))}月`),
  fixedRatePageAvailable: /パル|プレミアム/.test(compact(enepalRates))
};
const row = data.variable.find(item => item.month === target);
if (!row) data.variable.push({ month: target, tepcoFuel: null, enepalFuel: 0, enepalProcurement: null, support: null, renewable: data.variable.at(-1)?.renewable ?? null, status: '公式値の確認待ち', sources: [urls.tepco, urls.enepal] });
data.variable.sort((a,b) => a.month.localeCompare(b.month));
data.updatedAt = now.toISOString().slice(0,10);
await writeFile(file, `${JSON.stringify(data, null, 2)}\n`);
await writeFile(new URL('../rate-check.json', import.meta.url), `${JSON.stringify({ checkedAt: now.toISOString(), target, checks, urls }, null, 2)}\n`);
console.log(JSON.stringify({ target, checks }));
if (checks.tepcoTargetPublished || checks.enepalTargetMentioned) console.log('Official information is available; verify values in the monthly GitHub issue.');
