# Changelog

Release history for the Website starter.

## 2026-11-05

Upgrade to React Router 8 and TypeScript 7

- pnpm now waits three days after a dependency version is published before selecting it for an install or update.
- The auth, form, and ai starters use the npm version of vite-plugin-devtools-json for local development.
- After sign-in, users return to the protected page they opened during client-side navigation.

Breaking change.

Upgrade notes:
Update your local and deployment runtimes to the latest Node.js 24.x patch (24.22.2 as of this release). When upgrading from React Router 7, remove future.v8_middleware from react-router.config.ts. If your middleware, loaders, or actions build a return path from request.url, use the pathname of the url argument instead, because request.url keeps the React Router .data suffix on client navigations.

Unified route and model skills under `/gistajs`

- The `/gistajs` skill now selects CRUD, authentication, and database guidance based on the capabilities in your project.

Breaking change.

Upgrade notes:
For an existing project:

1. Read `gistajs.pin` in your project's `package.json` for the starter name and current release key. Run `npx gistajs diff <starter> <current-release-key> 2026-11-05-002` with those values. This displays the diff between releases. You apply the changes to your project.
2. Use the diff from step 1 to create the files under `.agents/skills/gistajs/`. For a rename, copy the old file to the new path and apply the edits shown. Use this mapping to carry over your custom instructions, including when Git shows a deletion and an addition. All paths in the table are relative to `.agents/skills/`.

   | Old file | New home for custom instructions |
   | --- | --- |
   | `route/SKILL.md` | `gistajs/SKILL.md` |
   | `model/SKILL.md` | `gistajs/SKILL.md` for when to use the skill; `gistajs/references/model.md` for model implementation |
   | `route/page.md` | `gistajs/references/page.md` |
   | `route/crud.md` | `gistajs/references/crud.md` |
   | `route/protect.md` | `gistajs/references/protect.md` |
   | `model/migrate.md` | `gistajs/references/migrate.md` |

3. Update project instructions that invoke `/route` or `/model` to use `/gistajs`. Verify that your agent can load the new skill, then remove the two old skill directories.
4. After reviewing and applying the starter changes you want from this release, run `npx gistajs pin 2026-11-05-002`. This records the release as the baseline for your next diff.

## 2026-09-12

Made starter TypeScript configuration compatible with TypeScript 7

- Removed the obsolete baseUrl option while preserving relative import alias mappings.

## 2026-05-19

Refreshed starter dependencies and formatting tooling

- Updated starter dependencies across React Router, React, Tailwind CSS, Vite, and related build/runtime packages.
- Updated starter formatting tooling to `oxfmt` 0.50.
- Switched starter Tailwind files back to the DaisyUI plugin package entry for compatibility with the refreshed CSS toolchain.

## 2026-04-25

Fixed DaisyUI CSS builds with newer Vite releases

- DaisyUI is now loaded through its explicit package entry point, avoiding the Vite package resolution issue tracked in vitejs/vite#22323.

## 2026-04-17

Smaller starter install footprint

- Starter repos no longer ship a committed `pnpm-lock.yaml`, so your first `pnpm install` generates a fresh lockfile pinned to the current versions.
- Some starters no longer depend on `vite-plugin-devtools-json`; the Chrome DevTools workspace endpoint is now served by a small built-in plugin.

## 2026-04-09

Simplified starter Vite path resolution

- Starter projects now rely on Vite's built-in tsconfig path resolution for `~/*` imports instead of an extra plugin dependency.
- New starter installs no longer include `vite-tsconfig-paths`, reducing one piece of Vite setup to maintain.

## 2026-04-05

Standardized Claude instructions across starters

- Starter repos now consistently include `CLAUDE.md`, so Claude can find the same project instructions already provided in `AGENTS.md`.

Simplified starter route skills

- Starter skills now use a single `/route` entry point for single-route scaffolding, CRUD route flows, and auth protection guidance.
- The `/model` skill now points Atlas setup and apply guidance to a colocated migration reference.

## 2026-04-03

Upgraded all starters to Vite 8

- New starter projects now ship with Vite 8
- Companion tooling was refreshed alongside the Vite upgrade so starter dev, build, and typecheck workflows stay aligned.

## 2026-04-02

Starter templates now ship upgrade pin metadata

- Exported starter `package.json` files now include `gistajs.pin`, so projects created from GitHub templates and CLI scaffolds start with the same upgrade baseline metadata.

## 2026-03-30

Added name field to starter skills for CLI compatibility

- Skills now include a `name` field in SKILL.md frontmatter, required by `npx skills add` for discovery and installation.

## 2026-03-27

Added the Form starter and shared auth composition

- Added a new free `form` starter with forms, submissions, public fill pages, and analytics.
- `auth` and `form` now share the same auth foundation and auth flow behavior.
- Added sync and release coverage for `gistajs/form`.

Added starter release tags and sync polish

- Starter repos now publish release tags.
- Removed generated README timestamps so unchanged starter exports can skip no-op branch publishes.
- Starter READMEs now direct contributors to open issues and not direct PRs.

## 2026-03-17

Updated starter skills

- Updated route and CRUD skills to prefer grouped folders for route clusters.
- Clarified dynamic route param naming, including when to use `$id` versus descriptive snake_case params.
- Documented that simple `$id` params often map to `public_id` in Gista.js starters.

## 2026-03-16

Started publishing starter changelogs

- Added generated CHANGELOG.md output to exported starter repos.
