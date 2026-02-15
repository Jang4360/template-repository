#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const requiredDirs = ['app', 'app/api', 'lib', 'services', 'db', 'tests', 'scripts'];
const scanExtensions = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']);
const excludedDirs = new Set(['node_modules', '.next', '.git', 'dist', 'build', 'coverage']);

const violations = [];

function existsDir(relPath) {
  const abs = path.join(root, relPath);
  return fs.existsSync(abs) && fs.statSync(abs).isDirectory();
}

function walk(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const abs = path.join(dirPath, entry.name);
    const rel = path.relative(root, abs);

    if (entry.isDirectory()) {
      if (excludedDirs.has(entry.name)) continue;
      walk(abs);
      continue;
    }

    if (!scanExtensions.has(path.extname(entry.name))) continue;
    const content = fs.readFileSync(abs, 'utf8');
    validateFile(rel, content);
  }
}

function validateFile(relPath, content) {
  const lines = content.split(/\r?\n/);

  lines.forEach((line, idx) => {
    const n = idx + 1;

    if (/\bconsole\.log\s*\(/.test(line)) {
      violations.push(`${relPath}:${n} console.log is not allowed`);
    }

    if (/\bTODO\b/.test(line)) {
      violations.push(`${relPath}:${n} TODO is not allowed`);
    }

    if (/(const|let|var)\s+[A-Z0-9_]*(PRICE|PLAN|TIER|LIMIT|QUOTA)[A-Z0-9_]*\s*=\s*['"`\d]/.test(line)) {
      violations.push(`${relPath}:${n} possible hardcoded business rule detected`);
    }

    if (/\b(entitlement|subscription|billing)\b/i.test(line) && /\b=\s*['"`]\w+['"`]/.test(line)) {
      violations.push(`${relPath}:${n} possible hardcoded business identifier detected`);
    }
  });
}

for (const dir of requiredDirs) {
  if (!existsDir(dir)) {
    violations.push(`structure missing required directory: ${dir}`);
  }
}

walk(root);

if (violations.length > 0) {
  console.error('[validate:structure] failed');
  for (const v of violations) {
    console.error(`- ${v}`);
  }
  process.exit(1);
}

console.log('[validate:structure] passed');
