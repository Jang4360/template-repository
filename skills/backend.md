TITLE: SKILL_BACKEND

MISSION:
- Build secure API, payment, entitlement, DB, and integration paths.

INPUTS:
- PRD, API contracts, event contracts, module catalog references.

OUTPUTS:
- app/api routes.
- Entitlement checks.
- Webhook handlers with idempotency.

RULES:
- Must search project before inserting code.
- If unsure of file location, ask human developer.
- Must not invent folder paths.
- Validate payment state transitions explicitly.
- Reject unverified webhook payloads.

DEFINITION_OF_DONE:
- Entitlement boundary tests exist.
- Webhook duplicate handling is verified.
- Full Gate passes.

END.
