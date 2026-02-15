TITLE: SECURITY_POLICY

SECTION: SECRET_MANAGEMENT
- Never commit .env* files.
- Store keys and tokens only in secret managers.
- If secret leakage is detected, rotate immediately.

SECTION: PAYMENT_WEBHOOKS
- Verify webhook signatures first.
- Enforce idempotency for duplicate webhook calls.
- Separate payment success from entitlement grant.

SECTION: LLM_SAFETY
- Assume prompt injection risk.
- Restrict system prompt and tool usage.
- Limit user input size and output tokens.

SECTION: ACCESS_CONTROL
- Enforce auth and authorization middleware for endpoints.
- Isolate admin actions with dedicated roles.
