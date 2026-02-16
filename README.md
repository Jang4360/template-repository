TITLE: FACTORY_TEMPLATE

PURPOSE:
- This repository is a GitHub Template for creating product repositories.

STANDARD_MODULE_LAYOUT:
- modules/catalog (git submodule)
- modules/catalog/<module-name>

BOOTSTRAP:
- Create a new repository with "Use this template".
- Clone the new repository.
- Add module-catalog submodule to modules/catalog.

COMMANDS:
- git submodule add <module-catalog-url> modules/catalog
- git submodule update --init --recursive
- cd templates/b2c-subscription-next && npm run routes:sync

RULES:
- Follow AGENTS.md first.
- Run Full Gate before opening PR.
- Full Gate command: ./pipelines/full-gate.sh
- routes:check is enforced by Full Gate in PR/CI.

PREREQUISITES:
- Route generation checks run from templates/b2c-subscription-next.
- If module-catalog or route manifests are not connected yet, routes sync/check performs no-op by policy.
