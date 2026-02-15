TITLE: GIT_PR_POLICY

SECTION: BRANCH_RULES
- main must stay deployable.
- Use feat/* for features.
- Use fix/* for bug fixes.
- Use chore/* for maintenance.

SECTION: COMMIT_RULES
- Use prefix: feat|fix|chore|docs.
- Keep one purpose per PR.

SECTION: PR_REQUIREMENTS
- PR must reference TASK_ID.
- PR without TASK_ID is rejected.
- PR must include scope, risk, and validation summary.
- PLAN file required for feature-level change.

SECTION: GATE_REQUIREMENTS
- Full Gate log is required.
- Docs Gate review is required for payment, entitlement, security, or cost-impacting changes.

END.
