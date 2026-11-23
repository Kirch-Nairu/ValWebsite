# Architecture & Information Hierarchy — `Kirch-Nairu/ValWebsite`

## 1. Route Map (39 Static Endpoints + Redirects)
- **Primary Civic & Place Routes:**
  - `/` — Homepage: Municipal identity masthead, balanced first viewport with real Valencia photography, `BARUG VALENCIA`, primary actions (`Municipal Services`, `Explore Valencia`), 4-column civic action bar, dated announcements ledger, verified municipal projects table, photograph-led Discover Valencia & Sang-at heritage feature, municipal profile & barangay finder callout, and official contact channels.
  - `/municipality` — Municipal geography, Panangatan origin, PSA 2024 census profile (`28,535` population, `PSGC 0701247000`), Bohol locator map, town gateway photography, and live searchable/filterable directory of all 35 barangays (`#barangays`).
  - `/government` — Executive & Legislative structure, BARUG Valencia governance framework, and functional municipal office directory.
  - `/services` and `/services/[id]` (4 detail routes) — Service orientation guides by office (`civil-registry`, `treasury-business-permits`, `social-welfare-health`, `agriculture-environment-tourism`).
  - `/news` and `/news/[slug]` (7 detail routes) — Dated news and public announcements with category filter and search.
  - `/projects` and `/projects/[slug]` (6 detail routes) — Public infrastructure, digital modernization, and agricultural recovery projects with status filter.
  - `/tourism` and `/tourism/[slug]` (8 detail routes) — All 14 Bohol PPDO CY2025 Tourism Profile sites (established destinations and potential ecotourism sites) + Sang-at cultural feature.
  - `/culture/sang-at` and `/stories/[slug]` (3 detail routes) — Sang-at Festival & Panangatan riverbank heritage, 1882 Santo Niño hardwood floor, and Sunday Tabu market economy.
  - `/transparency` — DILG Full Disclosure Policy, PSA PSGC, and Bohol PPDO primary records, plus media credits and historical record notes.
  - `/contact` — Official LGU Valencia, Sang-at Festival, and SK Federation public channels, Municipal Hall location, and overland travel corridors.
  - `/search` — Full-page search interface supporting `?q=` query parameters alongside the global `Ctrl+K` / header search modal.
- **Preserved Deep-Link Redirects:**
  - `/valencia` → `/municipality`
  - `/progress` → `/projects`
  - `/updates` → `/news`
  - `/discover` → `/tourism`
  - `/discover/[slug]` → `/tourism/[slug]`
  - `/culture` → `/tourism#culture`

## 2. Media & Rights Architecture
- `src/data/media.ts` maps every visual subject to its verified photograph (`imageSrc`, `imageAlt`, `credit`, `license`, `isPublicRedistributable`).
- `src/components/MediaPanel.astro` renders authentic `<img>` elements with responsive aspect ratios, `loading="lazy"` (or `eager` for hero), and clean architectural captions—eliminating geometric placeholder boxes and internal research codes from the UI.
