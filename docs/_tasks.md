TITLE: TASK_REGISTRY

FORMAT:
- [ ] TASK_ID: description
  - status: pending|in_progress|blocked|done
  - related_files:
  - validation:
  - notes:

RULES:
- One context owns exactly one TASK_ID.
- Set one task to in_progress at context start.
- At context end, set the same task to done or blocked.
- Completed tasks marked [x].
- Blocked tasks must include blocker and next action.
