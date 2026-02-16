TITLE: SKILL_BACKEND_VALIDATION

REQUIRED_CHECKS:
- Run lint.
- Run typecheck.
- Run build.
- Run tests.
- Run security audit.
- Run validate:structure.
- Run validate:skills.
- Run pipelines/full-gate.sh from repository root.

FAILURE_ACTIONS:
- Stop merge.
- Record failure and blocker in docs/_tasks.md.
- Fix root cause and re-run all checks.
