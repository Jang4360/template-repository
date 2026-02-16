TITLE: PIPELINES

SCRIPTS:
- full-gate.sh: local/CI shared quality gate.
- docs-gate.sh: optional docs request processing gate.
- preflight.sh: pre-development environment checks.

FULL_GATE_STEPS:
- lint
- typecheck
- build
- test
- validate:structure
- security audit
- validate:skills
- routes:check

USAGE_LOCAL:
- Run from repository root: ./pipelines/full-gate.sh
- The script enters templates/b2c-subscription-next internally.

USAGE_CI:
- Use the same root command in CI: ./pipelines/full-gate.sh

INSTALL_POLICY:
- Prefer npm ci when package-lock.json exists.
- If npm ci/npm install fails due transient filesystem issues (for example ENOTEMPTY), retry after cleaning node_modules.

SECURITY_AUDIT_POLICY:
- Always execute security audit in Full Gate.
- If npm registry DNS is unavailable in local environments, Full Gate logs a skip warning.
- CI is expected to run with network and enforce full audit.
