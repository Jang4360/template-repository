TITLE: TASK_REGISTRY

FORMAT:
- [ ] TASK_ID: description
  - status: pending|in_progress|blocked|done
  - related_files:
  - validation:
  - notes:

RULES:
- Every context execution must update one task.
- Completed tasks marked [x].
- Blocked tasks must specify blocker.
