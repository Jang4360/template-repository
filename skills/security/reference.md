TITLE: SKILL_SECURITY_REFERENCE

STEPS:
- Audit secret exposure paths.
- Verify authorization and role boundaries.
- Validate webhook signature and replay safety.
- Review data handling for sensitive fields.

PROHIBITIONS:
- Do not commit secrets.
- Do not accept unsigned webhook payloads.
- Do not weaken authorization checks.
