# BARUG VALENCIA — Municipality of Valencia, Bohol Website Prototype (`VAL-M01B`)

> **Independent Prototype Notice:** This repository contains an independent, static-first place-brand and municipal information prototype for the **Municipality of Valencia, Province of Bohol** (PSGC `0701247000`, 3rd Congressional District; 2024 PSA Census population: **28,535** across **35 barangays**). It is **not** an official live municipal service and does not claim formal LGU endorsement.

- **Municipal Catchphrase:** `BARUG VALENCIA` (user-confirmed; reported in October 2026 local press as *"Better, Affectionate, Responsive and Unifying Governance"* — official LGU style manual confirmation pending).
- **Narrative Direction:** *"Behold Valencia"* describes the internal storytelling and visual-impact experience only, never a replacement slogan or brand title.
- **Media & Insignia Governance:** **0** unlicensed third-party photographs or unauthorized municipal seals are embedded in this prototype. All visual slots are rendered through `src/components/ValenciaMediaSlot.astro` with custom Valencia-specific SVG art direction, explicit `"Valencia image awaiting approved original"` badges, candidate references (`R001`–`R021`), and drop-in replacement paths (`public/media/approved/*.jpg`).

---

## Quick Start (Windows PowerShell)

### 1. One-Command Persistent Local Launch
From `C:\ValWebsite`, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\Start-Valencia.ps1 -OpenBrowser
```

- Automatically verifies `node_modules`, checks if `127.0.0.1:4321` is available (or selects a free fallback port `4322–4335` if occupied), launches the Astro server as a persistent background process, verifies `HTTP 200`, writes process metadata to `.valencia-server.json`, and opens your default Windows browser.

### 2. Stop the Local Server
```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\Stop-Valencia.ps1
```
- Safely terminates only the recorded Valencia server process ID stored in `.valencia-server.json`.

### 3. Standard NPM Commands
```powershell
npm install          # Install dependencies
npm run check        # Run Astro + strict TypeScript validation (0 errors)
npm run build        # Build static production output into dist/
npm run dev          # Run interactive Astro dev server on http://127.0.0.1:4321
npx playwright test  # Run E2E route, accessibility, responsive overflow, and screenshot suite
```

---

## Implemented Routes & Architecture

### Eight Top-Level Pages
1. `/` — **Home (Flagship):** Immersive `BARUG VALENCIA` coastal/estuary hero, visual manifesto, *The Valencia Edit* asymmetric story grid, Sang-at Festival spotlight, PPDO destination preview, verified progress cards, dated updates, and public service gateway.
2. `/discover` — **Discover Valencia:** Interactive filterable directory of all **14 Bohol PPDO CY2025 Tourism Profile attractions** (printed pages 192–195), separating *Established Landmarks* from *Potential Ecotourism Sites* with zero invented fees or hours.
3. `/culture` — **Culture & Heritage:** Hub for the Sang-at Festival, the 1882 Sto. Niño Parish Church wooden floor (Important Cultural Property), Dr. Canuto Lim Ancestral House, and cultural sensitivity safeguards.
4. `/valencia` — **Our Valencia:** Municipal profile, Panangatan etymology (`sang-at`), transparent disclosure of the 1867 vs. October 27, 1869 founding records, `BARUG VALENCIA` identity audit, and a filterable directory of all **35 PSA PSGC-verified barangays** (`071247001`–`071247035`).
5. `/progress` — **Progress & Development:** Filterable institutional ledger separating verified completed turnovers (March 2026 Anoyon High School classroom building via Embassy of Japan GGP, `S003`) and launches (March 2026 Paleng-QR PH Plus, `S007`) from proposed concepts (October 2026 BARUG CARENav / Poverty Early Warning proposals, `S026`) and search leads (`S029`, `S030`).
6. `/updates` — **Updates, News & Event Archive:** Filterable dated archive (2023–2026) clearly labeled as archival/source-referenced records so past events are never mistaken for live emergency advisories.
7. `/government` — **Government & Services:** Core municipal service categories, RA 11032 Citizen’s Charter status disclosures (warning against using the obsolete 2015 Yumpu charter for current fees), DILG Full Disclosure Policy (FDP) portal gateway, and neutral leadership record.
8. `/contact` — **Contact & Official Channels:** Direct links to the three user-supplied Facebook pages (`FB-001` LGU Valencia, `FB-002` Sang-at Festival, `FB-003` SK Federation), PIO brand/photo clearance checklist, and media slot replacement manifest.

### Ten Connected Detail Pages
- `/culture/sang-at` — Full documentary feature on the Sang-at Festival (`ST02`).
- `/stories/panangatan-origin` — Origin essay: From Barrio Panangatan to Valencia (`ST01`).
- `/stories/sto-nino-wooden-floor` — 1882 Tindalo & Molave Hardwood Floor of Santo Niño Parish (`ST03`).
- `/stories/sunday-tabu-and-crafts` — Sunday Tabu, Paleng-QR, and Rural Livelihoods (`ST09`/`ST10`).
- `/discover/badiang-spring` — Badiang Spring Resort and Hotel (`Barangay Anas`).
- `/discover/sto-nino-parish-church` — Sr. Santo Niño Parish Church & Convent (`Poblacion Occidental`).
- `/discover/lim-ancestral-house` — Dr. Canuto Lim Ancestral House (`Poblacion Occidental`).
- `/discover/kinawa-falls` — Kinawa Falls (`Barangay Tausi-on`).
- `/discover/banderahan-ugjong-highlands` — Banderahan Peak, Ugjong Peak & Kabotbot Hills (`Banderahan & Limocon`).
- `/discover/valencia-karst-caves` — Inland Karst Cave System: Cabjawan, Maubo, Taculing & Ughob Caves.

---

## Media Replacement Guide (Swapping Approved Originals)

1. Obtain written publication permission and high-resolution originals (≥3000px) from the LGU PIO, parish office, or credited photographer (`research/photo-request-list.md`).
2. Save the approved image file under `public/media/approved/<slot-id>.jpg` (see `/contact` or `src/data/valenciaData.ts` for exact paths).
3. Update the corresponding entry in `MEDIA_SLOTS` inside `src/data/valenciaData.ts` with the verified photographer credit and license reference.
4. Update `src/components/ValenciaMediaSlot.astro` to render the `<img>` when `approvalStatus === 'APPROVED'`.
