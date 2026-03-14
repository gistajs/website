---
description: Scaffold a new route with the correct filename and auth pattern.
---

# Scaffold a new route page

Use this when the user wants one new route or layout file. If they want list/create/edit pages for a resource, use `/crud` instead.

## Required inputs

- URL path
- Whether this is a page route or layout route
- Whether it needs auth protection

## Instructions

1. Ask the user for the URL path (e.g., `/app/notes`, `/about`).
2. Ask whether it is a page route or a layout route.
3. Ask if it needs auth protection.
4. Create the route file using dot notation for nested segments:
   - `/app/notes` -> `app/routes/app/notes.tsx` (if `app/` folder exists)
   - `/app/notes/:id` -> `app/routes/app/notes.$id.tsx`
   - `/about` -> `app/routes/about.tsx`
   - `/oauth/google/callback` -> `app/routes/oauth/google.callback.ts`

## Route file pattern

**Protected route (under an existing middleware layout):**

```tsx
import { requireUser } from '~/.server/auth/middlewares'

export async function loader({ context }) {
  let user = requireUser(context)
  return { user }
}

export default function Page({ loaderData: { user } }) {
  return (
    <main>
      <h1>Page Title</h1>
    </main>
  )
}
```

**Public route (no auth):**

```tsx
export default function Page() {
  return (
    <main>
      <h1>Page Title</h1>
    </main>
  )
}
```

**Layout route (wraps child routes):**

```tsx
import { Outlet } from 'react-router'

export default function Layout() {
  return <Outlet />
}
```

## Rules

- Prefer a single route file unless the user explicitly wants a layout.
- Default export must be named `Page` (or `Layout` for layout files).
- Layout files are named `_layout.tsx`.
- Colocated helpers go in a `+/` folder at the same level.
- Routes under `app/routes/app/` are already protected by the middleware in `app/routes/app/_layout.tsx` — use `requireUser(context)` in loaders, not `requireUser(request)`.
- Routes outside `app/` that need auth should use `requireUser(request)` from `~/.server/auth/cookie` directly.
- If the route does not need loader data, do not add a loader.
- Do not invent extra folders like `index.tsx` or nested route directories for normal pages in this starter.
- Do not create schema, model, or multi-page CRUD flows here.
- Use daisyUI classes for styling. No inline styles.
