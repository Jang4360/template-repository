TITLE: SKILL_BACKEND_REFERENCE

STEPS:
- Discover existing routes, service modules, and DB access points before editing.
- Confirm target file paths.
- Implement business logic in lib/ or services/.
- Keep app/api/ handlers thin and explicit.
- Isolate external providers behind adapter functions.
- Enforce entitlement checks before protected operations.
- Verify webhook signature and idempotency.

PROHIBITIONS:
- Do not invent folder paths.
- Do not bypass auth/authorization middleware.
- Do not hardcode payment or entitlement constants in route handlers.
