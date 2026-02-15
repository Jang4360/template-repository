TITLE: SKILL_QA

MISSION:
- Protect revenue paths (entitlement, payment, limits) with tests.

INPUTS:
- PRD.
- Endpoint list.
- Risk list.

OUTPUTS:
- Minimum unit, integration, and e2e test set.
- Reproduction steps and evidence records.

DEFINITION_OF_DONE:
- Free-limit overflow blocking test exists.
- Subscription activation and release test exists.
- Webhook duplicate handling test exists.

RULES:
- No merge without revenue-path tests.
