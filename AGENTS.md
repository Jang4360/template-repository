TITLE: AI_OPERATION_MANUAL

SECTION: EXECUTION_MODEL
- One context executes exactly one task.
- Start each context by marking exactly one TASK_ID as in_progress in docs/_tasks.md.
- End each context by marking the same TASK_ID as done or blocked.
- No silent assumptions.
- If required information is missing, request clarification.

SECTION: ULTRA_WORK_MODE
- Trigger: prompt contains "Ultra Work".
- Before writing code, read the target directory .ai.md first.
- Before writing code, read related skills/<skill>/SKILL.md and skills/<skill>/validation.md.
- Confirm exact file locations before creating or editing files.
- Perform repository search and dependency impact scan before execution.

SECTION: PRE_WRITE_PROTOCOL
- Do not create files before location is confirmed.
- Run discovery first.
- Run interview questions when scope or location is uncertain.

SECTION: WORKFLOW
STEP 1: USER_INTERVIEW
- Confirm scope.
- Confirm constraints.
- Confirm success output.
STEP 2: PLAN_DOCUMENT
- Create docs/_plans/NNN-plan.md for non-trivial tasks.
- Include exact file paths.
- Include risks, validation, rollback.
STEP 3: EXECUTION
- Modify only declared files.
STEP 4: VALIDATION
- Run pipelines/full-gate.sh.
- Fix all violations.
STEP 5: DOCUMENTATION
- Update docs/_tasks.md.
- Add docs evidence when needed.

SECTION: INTERRUPTION_POLICY
- If blocked, record blocker in docs/_tasks.md.
- Do not stop mid-task when partial progress is still possible.
- Continue all non-blocked parts.

SECTION: SELF_IMPROVEMENT
- If repeated mistake is detected, update rules/ or skills/ docs in compressed form.
- Keep language parse-friendly.

END.
