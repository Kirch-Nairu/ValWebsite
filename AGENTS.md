# KIRION Forge Agent Constitution — BARUG VALENCIA (`Kirch-Nairu/ValWebsite`)

## Repository Identity & Technical Authority
- **Repository:** `Kirch-Nairu/ValWebsite`
- **Project:** Municipality of Valencia, Province of Bohol (`PSGC 0701247000`) — `BARUG VALENCIA`
- **Technical Authority:** Kirch Ivan Balite
- **Governance Doctrine:** `Kirch-Nairu/KIRION-FORGE`
- **Active Mission:** `VAL-R2-ONE-SHOT-FRONTEND-DESIGN-REBUILD` (Issue #5)
- **Immutable Source Anchor:** `f43e3d917f836098127961fafbe64af1e515530e` (`nox/valencia-municipal-frontend-r1`)
- **Working Branch:** `design/valencia-r2-antigravity-one-shot` (Draft PR targeting `nox/valencia-municipal-frontend-r1`)

## Core Operating Laws
1. **Observable State Outranks Memory:** Repository files, verified source manifests (`research/*.csv`), build outputs, HTTP responses, and actual browser screenshots outrank assumptions.
2. **Public UI Copy Discipline:** Public-facing pages must read like an official municipal communications and design team wrote them. Never expose internal agent/research jargon (`prototype`, `source-backed`, `verified record`, `awaiting approval`, `photo slot`, `S001`, `R014`, `municipal catchphrase`, `in this prototype`, `AI-generated`) in the rendered UI. Keep source IDs, rights status, and verification boundaries in `.forge/` and `src/data/` engineering metadata.
3. **Authentic Visual & Media Integrity:**
   - Render real photographs of Valencia, Bohol across the interface.
   - Commit only license-cleared, redistributable assets (`public/media/valencia/*`) to the Git repository, with clear author/license attribution in the media credits register.
   - Keep unapproved or rights-restricted local preview assets strictly in gitignored local storage (`public/media/local-preview/`).
   - Never pass off unrelated Bohol towns as Valencia or fabricate documentary photography.
4. **Mandatory Visual Acceptance:** Passing `astro check`, `astro build`, and Playwright tests is necessary but insufficient. Every major route must be rendered in a real local browser at desktop (`1440x900`), tablet (`768x900`), and mobile (`390x844`) viewports and visually inspected via `view_file` to eliminate layout, typography, spacing, or imagery defects.
5. **Publication Boundaries:** Do not merge to `main`, do not overwrite `nox/valencia-municipal-frontend-r1`, do not deploy publicly, and do not modify DNS.

## Progressive Loading Map
- [`.forge/NEST.md`](file:///c:/ValWebsite/.forge/NEST.md) — Project identity, inherited baseline, and maturity level.
- [`.forge/AUTHORITY.md`](file:///c:/ValWebsite/.forge/AUTHORITY.md) — Technical authority, source hierarchy, and publication gates.
- [`.forge/SSOT_CURRENT.md`](file:///c:/ValWebsite/.forge/SSOT_CURRENT.md) — Accepted stack, routes, and real media inventory.
- [`.forge/ARCHITECTURE.md`](file:///c:/ValWebsite/.forge/ARCHITECTURE.md) — Astro 5 static architecture, route map, and media pipeline.
- [`.forge/DESIGN_SYSTEM.md`](file:///c:/ValWebsite/.forge/DESIGN_SYSTEM.md) — Industrial-clean municipal design tokens, typography, and layout rules.
- [`.forge/ACTIVE_WORK.md`](file:///c:/ValWebsite/.forge/ACTIVE_WORK.md) — Current writer execution scope (`VAL-R2-ONE-SHOT-FRONTEND-DESIGN-REBUILD`).
- [`.forge/VALIDATION.md`](file:///c:/ValWebsite/.forge/VALIDATION.md) — Typecheck, build, Playwright, live runtime, and visual inspection evidence.
