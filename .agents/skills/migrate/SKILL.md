---
description: Atlas declarative schema apply reference (not history-based migrations).
disable-model-invocation: true
---

## Required inputs

- Which environment the user means: local or production
- The schema change they made, if they want help interpreting the plan
- The Atlas error output, if they are debugging

## Commands

- **Local:** `pnpm atlas` — runs `atlas schema apply --env dev` against `data/dev.db`
- **Production:** `pnpm prod:atlas` — runs `dotenv -- atlas schema apply --env prod` (requires `DB_URL` and `DB_AUTH_TOKEN`)

Atlas reads the Drizzle schema, compares it to the database, shows a plan, and asks for confirmation.

## Common scenarios

**New table added:** Atlas will show `CREATE TABLE ...` — safe to apply.

**Column added to existing table:** Atlas will show `ALTER TABLE ... ADD COLUMN ...` — safe to apply. SQLite limitations mean some alterations (renaming, changing types) require Atlas to recreate the table.

**Column removed:** Atlas will show the column being dropped. This deletes data in that column.

**Fresh start:** Delete `data/dev.db` and run `pnpm atlas` again to recreate from scratch.

## Rules

- NEVER run `atlas`, `drizzle-kit`, or any migration command yourself. The user runs these manually.
- Prefer `pnpm atlas` and `pnpm prod:atlas` when instructing the user, since those are the starter's package scripts.
- If the user reports an Atlas error, help debug by reading the schema and the error message.
