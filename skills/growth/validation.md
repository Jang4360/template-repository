TITLE: SKILL_GROWTH_VALIDATION

REQUIRED_CHECKS:
- Validate event payload consistency.
- Run tests for experiment toggle behavior.
- Run validate:skills.
- Run pipelines/full-gate.sh from repository root.

FAILURE_ACTIONS:
- Disable experiment path.
- Record issue in docs/_tasks.md.
