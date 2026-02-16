TITLE: SKILL_FRONTEND_VALIDATION

REQUIRED_CHECKS:
- Run lint.
- Run typecheck.
- Run build.
- Run tests.
- Run validate:skills.
- Run pipelines/full-gate.sh from repository root.

FAILURE_ACTIONS:
- Reproduce failure with minimal path.
- Patch and re-run complete gate.
