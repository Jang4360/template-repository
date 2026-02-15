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

RULES:
- Follow AGENTS.md first.
- Run Full Gate before opening PR.
- Full Gate command: ./pipelines/full-gate.sh
