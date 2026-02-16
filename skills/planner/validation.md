TITLE: SKILL_PLANNER_VALIDATION

REQUIRED_CHECKS:
- Plan file exists for non-trivial task.
- Plan includes exact file paths.
- Plan includes validation and rollback.
- Task entry created in docs/_tasks.md.

FAILURE_ACTIONS:
- Block execution.
- Request missing details.
