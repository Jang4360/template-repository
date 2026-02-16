#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
APP_DIR="${REPO_ROOT}/templates/b2c-subscription-next"
ORIGINAL_DIR="$(pwd)"

cd "${APP_DIR}"
trap 'cd "${ORIGINAL_DIR}"' EXIT

echo "[full-gate] Repo root: ${REPO_ROOT}"
echo "[full-gate] App directory: ${APP_DIR}"

if ! command -v node >/dev/null 2>&1; then
  echo "[full-gate] Error: node is not installed or not in PATH."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "[full-gate] Error: npm is not installed or not in PATH."
  exit 1
fi

if [[ ! -f package.json ]]; then
  echo "[full-gate] Error: package.json not found in ${APP_DIR}."
  exit 1
fi

echo "[full-gate] Installing dependencies"
npm ci

echo "[full-gate] 1/8 lint"
npm run lint

echo "[full-gate] 2/8 typecheck"
npm run typecheck

echo "[full-gate] 3/8 build"
npm run build

echo "[full-gate] 4/8 test"
npm run test

echo "[full-gate] 5/8 validate structure"
npm run validate:structure

echo "[full-gate] 6/8 security audit"
npm run security:audit

echo "[full-gate] 7/8 validate skills"
npm run validate:skills

echo "[full-gate] 8/8 routes check"
npm run routes:check

echo "[full-gate] Full Gate passed"
