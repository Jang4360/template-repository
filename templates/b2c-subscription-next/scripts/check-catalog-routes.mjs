import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(appRoot, '..', '..');

function run(cmd, args, cwd) {
  const res = spawnSync(cmd, args, {
    cwd,
    stdio: 'inherit'
  });
  return res.status ?? 1;
}

const syncCode = run(process.execPath, ['scripts/sync-catalog-routes.mjs'], appRoot);
if (syncCode !== 0) {
  process.exit(syncCode);
}

const diffCode = run('git', ['diff', '--exit-code'], repoRoot);
if (diffCode !== 0) {
  console.error('Routes are out of sync. Run: npm run routes:sync');
  process.exit(1);
}

process.exit(0);
