TITLE: SKILL_RELEASE_VALIDATION

REQUIRED_CHECKS:
- Verify deployment variables.
- Run smoke tests.
- Confirm Full Gate pass artifact exists.
- Run validate:skills.

FAILURE_ACTIONS:
- Stop release.
- Record blocker and rollback execution state.
