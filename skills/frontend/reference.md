TITLE: SKILL_FRONTEND_REFERENCE

STEPS:
- Discover existing UI components and route boundaries before editing.
- Keep entitlement messaging explicit and state-driven.
- Separate upgrade prompts from failure messages.
- Route external calls through API layer.
- Keep UI text deterministic and testable.

PROHIBITIONS:
- Do not mix entitlement states with generic network errors.
- Do not call external providers directly from client components.
