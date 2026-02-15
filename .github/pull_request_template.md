## Summary
- What changed and why (problem, intent, solution)

## Impact Scope (check)
- [ ] UI/UX
- [ ] API/Server logic
- [ ] DB/Migrations
- [ ] Payments/Subscription/Entitlements
- [ ] LLM calls/Prompts
- [ ] Cost impact (SSR increase, call volume increase, cache removal)
- [ ] Security-sensitive (tokens, webhooks, personal data, authorization)

## Full Gate (required)
- [ ] Ran locally: `./pipelines/full-gate.sh` (attach logs)
- [ ] CI passed

### Full Gate Logs
```text
(paste logs here)
```

## Docs Gate (required when triggered)
- [ ] Added docs request under `docs/_requests/` or documented why not needed

## Task Traceability
- [ ] TASK_ID included (from docs/_tasks.md)
- [ ] PLAN file linked for feature-level change (`docs/_plans/...`)
