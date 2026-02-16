TITLE: SKILL_SECURITY_VALIDATION

REQUIRED_CHECKS:
- Run security audit.
- Verify auth/authorization tests.
- Verify webhook signature checks.
- Run validate:skills.
- Run pipelines/full-gate.sh from repository root.

FAILURE_ACTIONS:
- Mark security blocker in docs/_tasks.md.
- Patch and re-run complete gate.
