TITLE: TEMPLATE_APP_GUIDE

CATALOG_SETUP:
1) Add module-catalog submodule at modules/catalog.
- git submodule add <module-catalog-url> modules/catalog

2) Sync API route re-exports from manifests.
- npm run routes:sync

CI_AND_PR:
- PR and CI run routes:check automatically via Full Gate.
- If routes are out of sync, run npm run routes:sync and commit changes.
