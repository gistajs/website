---
description: Scaffold a new resource table, validators, and model.
---

# Scaffold a new database model

Use this when the user needs a new persisted resource. This skill stops at schema and model creation. It does not create route files or UI.

## Required inputs

- Resource name
- Extra columns beyond the standard fields
- Whether the resource belongs to a user

## Instructions

1. Ask the user what the resource is (e.g., "notes", "posts", "projects").
2. Ask what columns it needs beyond the defaults.
3. Ask whether the resource belongs to a user.
4. Create the table, insert/update schemas, and model.

## Step 1: Add table to schema

Edit `app/.server/db/schema.ts`. Import helpers from `./helpers` and add:

```ts
export const notes = sqliteTable(
  'notes',
  {
    id: id(),
    public_id: defaultHex(),
    user_id: foreign(() => users),
    title: text().notNull(),
    body: text(),
    bag: text({ mode: 'json' }).$type<NoteBag>(),
    created_at: defaultNow(),
    updated_at: defaultNow(),
  },
  (t) => [idx(t, 'user_id'), idx(t, 'created_at')],
)

export type NoteBag = {
  // add fields here as needed
}
```

**Column helpers from `./helpers`:**

- `id()` — auto-increment integer primary key
- `defaultHex(length?)` — unique hex string (default 12 chars), for public-facing IDs
- `defaultNow()` — timestamp that defaults to current time
- `timestamp()` — nullable timestamp
- `foreign(() => table)` — integer FK with cascade delete
- `idx(t, col)` — index on a column
- `unq(t, col)` — unique index on a column

**Always include:** `id`, `public_id`, `bag`, `created_at`, `updated_at`. Add `user_id: foreign(() => users)` if the resource belongs to a user.

**`bag` column:** A catch-all JSON column (`text({ mode: 'json' }).$type<{Resource}Bag>()`) included on every resource table. Use it to store loosely-structured data before the use case stabilizes — avoids ALTER TABLE churn. Define a `{Resource}Bag` type exported next to the table and add fields as needed.

Keep the schema minimal. Do not add columns, indexes, or custom model methods the user did not ask for.

## Step 2: Add validators

Create `app/.server/db/validators/{name}.ts` and re-export from `app/.server/db/validators.ts`.

```ts
// app/.server/db/validators/notes.ts
import { createInsertSchema } from 'drizzle-zod'
import { notes } from '../schema'

export const noteInsertSchema = createInsertSchema(notes, {
  title: (z) => z.trim().min(1, 'Title is required'),
  body: (z) => z.trim(),
})

export const noteUpdateSchema = noteInsertSchema
  .pick({ title: true, body: true })
  .partial()
```

Then add the re-export to `app/.server/db/validators.ts`:

```ts
export * from './validators/notes'
```

Use `createInsertSchema` for the base, then derive the update schema with `.pick().partial()` instead of `createUpdateSchema`.

## Step 3: Create the model

Create `app/models/.server/{name}.ts`:

```ts
import { notes } from '~/.server/db/schema'
import { createModel } from './base'

const base = createModel(notes)

export const Note = {
  ...base,
}
```

Add custom methods only if the user needs them. The base model provides: `findBy`, `findByID`, `findByPublicID`, `findByOrThrow`, `findAll`, `findAllBy`, `newest`, `oldest`, `create`, `createMany`, `update`, `delete`, `count`.

## Rules

- Do not create route files here. Use `/page` or `/crud` for that.
- Reuse helpers from `app/.server/db/helpers.ts`. Do not hand-roll IDs, timestamps, or FKs.
- Keep validators in `app/.server/db/validators/{name}.ts`, re-exported from `validators.ts`.
- Keep custom model methods out unless the user asked for behavior beyond the base model.
