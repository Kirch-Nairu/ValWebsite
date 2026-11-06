# Single Source of Truth (SSOT) — Current State

## Stack & Runtime
- **Framework:** Astro `^5.5.0` + strict TypeScript (`astro/tsconfigs/strict`)
- **Output Mode:** Static (`dist/`)
- **Verification:** `astro check`, `astro build`, Playwright Chromium E2E (`@playwright/test`), and visual screenshot inspection (`1440x900`, `768x900`, `390x844`).
- **Local Launcher Scripts:** `scripts/Start-Valencia.ps1` and `scripts/Stop-Valencia.ps1` (persistent detached Windows process on `http://127.0.0.1:4321`).

## Installed Design Skill
- **Path:** `.agents/skills/frontend-design/SKILL.md` and `.agents/skills/frontend-design/LICENSE.txt`
- **Upstream Commit:** `anthropics/skills@ca45fc496a3436251f191354091d557da31c15b5` (Apache-2.0)

## Real Valencia Media Inventory
### A. Publicly Redistributable Assets (`public/media/valencia/` — Committed to Git)
1. `valencia-church-plaza.jpg` (`1600x1200`, CC BY 2.5, Author: Pinay06 via Wikimedia Commons `File:Valenciachurch_bohol.jpg`) — Front architectural elevation of Sr. Santo Niño Parish Church and plaza palms in Poblacion Occidental, Valencia, Bohol.
2. `santo-nino-parish-arch.jpg` (`1440x900`, CC BY-SA 4.0, Author: Southlens62 via Wikimedia Commons `File:Santo_Niño_Parish_Church_(Valencia,_Bohol)_2017.jpg`) — High-resolution architectural detail of the twin bell towers and flame tree canopy of Sr. Santo Niño Parish Church.
3. `valencia-public-market.jpg` (`1420x925`, CC BY-SA 3.0, Author: P199 via Wikimedia Commons `File:Valencia_Bohol_2.jpg`, `R014`) — Valencia Public Market and motorcab transport corridor in Poblacion, Valencia, Bohol.
4. `valencia-town-view.jpg` (`1112x732`, Public Domain, Author: P199 via Wikimedia Commons `File:Valencia_Bohol_1.jpg`, `R013`) — "Welcome to Valencia" highway gateway arch along the southern Bohol coastal road.
5. `valencia-cristo-rey.jpg` (`1600x1200`, CC BY 2.5, Author: pinay06 via Wikimedia Commons `File:Valenciachurch.jpg`) — Historic Cristo Rey monument on the parish plaza grounds in Poblacion Occidental, Valencia, Bohol.
6. `bohol-locator-valencia.png` (`300x300`, CC BY-SA 3.0, Author: Mike Gonzalez / TheCoffee via Wikimedia Commons `File:Ph_locator_bohol_valencia.png`) — Locator map of the Municipality of Valencia within the Province of Bohol.

### B. Local-Only Non-Redistributable Preview Assets (`public/media/local-preview/` — Gitignored)
1. `boholtimes-oct2026-2f.jpg` (`The Bohol Times`, Oct 4, 2026 `S006`) — Valencia municipal officials during October 2026 project coordination discussions. Kept strictly local and excluded from Git commits.
2. `flag-valencia-bohol.png` & `seal-valencia-bohol.png` (`R001` / `S011`) — Municipal flag and seal reference files held locally pending formal LGU insignia authorization.
