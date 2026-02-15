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

USAGE_LOCAL:
- From target app root: ../../pipelines/full-gate.sh
- From repository root for current template app: cd templates/b2c-subscription-next && ../../pipelines/full-gate.sh

USAGE_CI:
- Use the same command in CI from template app working directory.
