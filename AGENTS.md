TITLE: AI_OPERATION_MANUAL

SECTION: EXECUTION_MODEL
- One context executes exactly one task.
- Every task must create or update a checklist entry in docs/_tasks.md.
- No silent assumptions.
- If required information is missing, stop and request clarification.
- If "Ultra Work" keyword is present, switch to DEEP_ANALYSIS mode.

SECTION: DEEP_ANALYSIS_MODE
- Identify exact file paths before writing code.
- Search repository for related symbols before modification.
- Validate dependencies and side effects.
- Produce PLAN document before execution.
- Execution allowed only after PLAN is confirmed.

SECTION: WORKFLOW
STEP 1: USER_INTERVIEW
- Ask clarifying questions.
- Confirm constraints.
- Confirm scope.
STEP 2: PLAN_DOCUMENT
- Create docs/_plans/NNN-plan.md.
- Include file paths to modify.
- Include risks.
- Include validation steps.
STEP 3: EXECUTION
- Modify only declared files.
STEP 4: VALIDATION
- Run pipelines/full-gate.sh.
- Fix all violations.
STEP 5: DOCUMENTATION
- Update docs/_tasks.md checklist.
- Update docs/_evidence if needed.

SECTION: ERROR_POLICY
- If partial work remains, continue until task is completed.
- Never stop mid-task unless blocked.
- If blocked, record blocker in docs/_tasks.md.

SECTION: CONVENTIONS
- No hardcoded business rules.
- DB schema must be versioned.
- API contracts must be explicit.
- State transitions must be validated.

SECTION: SELF_IMPROVEMENT
- If repeated mistake is detected, update this file.
- Keep language compressed and parse-friendly.

END.
