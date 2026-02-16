TITLE: SKILL_QA_VALIDATION

REQUIRED_CHECKS:
- Run full test suite.
- Validate deterministic test behavior.
- Run validate:skills.
- Run pipelines/full-gate.sh from repository root.

FAILURE_ACTIONS:
- Mark blocker in docs/_tasks.md.
- Fix unstable tests before merge.
