TITLE: FRESH_BOOTSTRAP_STABILITY_PLAN

SCOPE:
- Reproduce route manifest and install instability failures.
- Decide template policy for missing manifest and implement consistently.
- Harden dependency install in full-gate for fresh clones and ENOTEMPTY-like conditions.
- Keep CI and local behavior aligned.
- Update docs for run location and prerequisites.

FILES:
- /Users/jangjooyoon/Desktop/JooYoon/side-project/template-repository/templates/b2c-subscription-next/scripts/sync-catalog-routes.mjs
- /Users/jangjooyoon/Desktop/JooYoon/side-project/template-repository/templates/b2c-subscription-next/scripts/check-catalog-routes.mjs
- /Users/jangjooyoon/Desktop/JooYoon/side-project/template-repository/templates/b2c-subscription-next/package.json
- /Users/jangjooyoon/Desktop/JooYoon/side-project/template-repository/pipelines/full-gate.sh
- /Users/jangjooyoon/Desktop/JooYoon/side-project/template-repository/.github/workflows/ci.yml
- /Users/jangjooyoon/Desktop/JooYoon/side-project/template-repository/templates/b2c-subscription-next/README.md
- /Users/jangjooyoon/Desktop/JooYoon/side-project/template-repository/README.md
- /Users/jangjooyoon/Desktop/JooYoon/side-project/template-repository/docs/_tasks.md

RISKS:
- No-op policy for missing manifests can hide catalog wiring issues.
- install retries can increase gate time.
- routes:check based on git diff can fail when tree is dirty.

VALIDATION:
- cd templates/b2c-subscription-next && npm run routes:sync
- cd templates/b2c-subscription-next && npm run routes:check
- cd /Users/jangjooyoon/Desktop/JooYoon/side-project/HistoryChat && ./pipelines/full-gate.sh
- cd /Users/jangjooyoon/Desktop/JooYoon/side-project/template-repository && ./pipelines/full-gate.sh

ROLLBACK:
- Revert edited files in this plan.
