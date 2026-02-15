#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(pwd)"

echo "[full-gate] Starting Full Gate in ${ROOT_DIR}"

if ! command -v node >/dev/null 2>&1; then
  echo "[full-gate] Error: node is not installed or not in PATH."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "[full-gate] Error: npm is not installed or not in PATH."
  exit 1
fi

if [[ ! -f package.json ]]; then
  echo "[full-gate] Error: package.json not found in ${ROOT_DIR}."
  exit 1
fi

has_script() {
  local script_name="$1"
  node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    process.exit(pkg.scripts && pkg.scripts['${script_name}'] ? 0 : 1);
  "
}

echo "[full-gate] Installing dependencies"
if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
fi

echo "[full-gate] 1/6 lint"
npm run lint

echo "[full-gate] 2/6 typecheck"
if ! has_script "typecheck"; then
  echo "[full-gate] Error: required script 'typecheck' is missing in package.json"
  exit 1
fi
npm run typecheck

echo "[full-gate] 3/6 build"
npm run build

echo "[full-gate] 4/6 test"
if ! has_script "test"; then
  echo "[full-gate] Error: required script 'test' is missing in package.json"
  exit 1
fi
npm run test

echo "[full-gate] 5/6 validate structure"
npm run validate:structure

echo "[full-gate] 6/6 security audit"
if has_script "security:audit"; then
  npm run security:audit
else
  npm audit --audit-level=high
fi

echo "[full-gate] Full Gate passed"
