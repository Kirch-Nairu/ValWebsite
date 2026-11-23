# Design System — BARUG VALENCIA (`VAL-R2`)

## 1. Aesthetic Direction & Calibration
Applied `.agents/skills/frontend-design/SKILL.md` calibrated strictly to the Valencia municipal brief:
- **What We Reject:**
  1. Cinematic historical storybook / film-trailer layouts with giant poetic blocks and fake SVG landscapes.
  2. Generic "Better connected" SaaS/helpdesk templates with giant dark right-hand help boxes, numbered `01/02/03/04` link lists, and repetitive uniform card walls.
  3. Internal research/agent disclaimers (`Independent prototype`, `Source ID: S026`, `Awaiting approved original`, `In this prototype`) splashed across the public UI.
- **What We Deliver:**
  - **Industrial-Clean Civic Architecture Specific to Valencia, Bohol:** Crisp structural grid lines, authoritative municipal masthead (`Municipality of Valencia, Bohol` + `BARUG VALENCIA`), authentic photographs of Valencia's parish church, town gateway arch, public market, and civic plaza, and purpose-built layouts for each content type.

## 2. Color Tokens (6 Core Hex Values)
- `--civic-forest: #0F352E` — Deep coastal-and-upland forest green for primary masthead accents, structural headers, and primary actions.
- `--civic-pine: #1B4D43` — Secondary interactive green for active states and badges.
- `--molave-gold: #B88428` — Warm hardwood accent referencing Valencia's 1882 molave-and-tindalo church floor and municipal gold star motifs.
- `--surface-paper: #FFFFFF` — Crisp primary background for high-contrast civic legibility.
- `--surface-stone: #F3F5F3` — Cool limestone-tinted secondary surface for structured data bands and directories.
- `--ink-primary: #13201D` / `--ink-secondary: #4A5A55` / `--border-hairline: #D5DFDA` — High-contrast typographic hierarchy and disciplined structural dividers.

## 3. Typography
- **Primary Sans (`--font-sans`):** `'Plus Jakarta Sans', 'Inter', 'Segoe UI', system-ui, sans-serif` — Clean, high-legibility geometric-humanist sans-serif for civic headings, navigation, tables, and service guidance.
- **Display Accent (`--font-display`):** `'Instrument Serif', 'Georgia', serif` — Used with restraint for key place-identity moments without turning the site into a museum brochure.
- **Line Lengths & Scale:** Body copy constrained to `60ch–72ch` with `1.65` line height; tabular numerals (`font-variant-numeric: tabular-nums`) on all dates, populations, and PSGC codes.

## 4. Layout & Component Differentiation
- **First Viewport (Homepage):** 12-column asymmetric split — left column (6 cols) with `BARUG VALENCIA` civic badge, concise `Valencia, Bohol` heading, clear 2-sentence municipal introduction, primary CTAs (`Municipal Services`, `Explore Valencia`), and key municipal facts (`28,535` Population, `35` Barangays, `3rd District`); right column (6 cols) featuring a framed, real photograph of Valencia (`Sr. Santo Niño Parish Church & Plaza` + inset of `Valencia Public Market` and `Welcome to Valencia` gateway) with clean location caption.
- **Civic Action Bar:** 4-column structural bar directly beneath the hero for immediate resident wayfinding (`Municipal Services`, `Office Directory`, `News & Announcements`, `Transparency & Records`).
- **Services:** Structured 2x2 architectural index grid with responsible office, key guidance points, and direct link—not tall empty cards with giant `01` numbers.
- **News & Announcements:** Editorial ledger with prominent publication date column, category pill, headline, concise summary, and publisher attribution.
- **Projects & Progress:** Tabular civic register with location, status badge (`Completed`, `Launched`, `Proposed Program`, `In Coordination`), implementing agency, and partner/donor.
- **Tourism & Culture:** Photo-driven showcase pairing real Valencia photography with barangay location, classification badge, and visitor guidance.
