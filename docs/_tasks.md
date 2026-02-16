TITLE: TASK_REGISTRY

FORMAT:
- [ ] TASK_ID: description
  - status: pending|in_progress|blocked|done
  - related_files:
  - validation:
  - notes:

RULES:
- One context owns exactly one TASK_ID.
- Set one task to in_progress at context start.
- At context end, set the same task to done or blocked.
- Completed tasks marked [x].
- Blocked tasks must include blocker and next action.

- [x] TASK-20260216-fresh-bootstrap-stability: Stabilize routes and full-gate behavior for newly created repositories
  - status: done
  - related_files: docs/_plans/001-fresh-bootstrap-stability-plan.md, templates/b2c-subscription-next/scripts/sync-catalog-routes.mjs, templates/b2c-subscription-next/scripts/check-catalog-routes.mjs, templates/b2c-subscription-next/package.json, pipelines/full-gate.sh, .github/workflows/ci.yml, templates/b2c-subscription-next/README.md, README.md
  - validation: routes:sync pass (skip policy), routes:check pass (skip policy), template-repository root full-gate pass.
  - notes: Policy selected = no-op/skip when catalog or manifests are absent. HistoryChat full-gate command still fails there due local EPERM on existing node_modules/.DS_Store.
