TITLE: ENGINEERING_POLICY

SECTION: FILE_DISCOVERY
- Always search before writing.
- Never create duplicate logic.
- Identify related symbols and call paths before modification.

SECTION: LOCATION_DISCIPLINE
- Business logic: lib/
- API routes: app/api/
- DB schema: db/
- External integrations: services/

SECTION: IMPLEMENTATION_RULES
- Keep modules composable and explicit.
- Use public interfaces.
- Avoid internal coupling.
- Do not hardcode business rules.

SECTION: VALIDATION_RULES
- Run lint, typecheck, build, test, validate:structure, and security audit.
- Record validation results in docs/_tasks.md.

SECTION: ULTRA_WORK_TRIGGER
- If prompt contains "Ultra Work":
  - Force deep repository scan.
  - Generate PLAN first.
  - No execution without plan approval.
  - Show exact code location before writing.

END.
