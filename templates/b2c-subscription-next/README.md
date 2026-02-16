TITLE: TEMPLATE_APP_GUIDE

CATALOG_SETUP:
1) Add module-catalog submodule at modules/catalog.
- git submodule add <module-catalog-url> modules/catalog

2) Sync API route re-exports from manifests.
- npm run routes:sync

ROUTES_POLICY:
- Policy selected: Option 2 (no-op/skip when catalog or manifest is missing).
- Reason: fresh template repositories must pass local checks before catalog wiring.
- Once module-catalog and manifest files exist, routes:sync generates/updates/deletes auto-generated app/api/**/route.ts files.

CI_AND_PR:
- PR and CI run routes:check automatically via Full Gate.
- If routes are out of sync, run npm run routes:sync and commit changes.

EXECUTION_LOCATION:
- Run route commands in templates/b2c-subscription-next.
- Run Full Gate at repository root: ./pipelines/full-gate.sh

DEPENDENCY_INSTALL:
- Full Gate uses npm ci when package-lock.json exists.
- If install fails due filesystem conflicts (for example ENOTEMPTY/EPERM), Full Gate retries after cleaning node_modules.
