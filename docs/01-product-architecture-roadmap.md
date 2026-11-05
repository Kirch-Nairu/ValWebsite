# Valencia Website — Product, information architecture, engineering, and release blueprint v0.1
Date: 2026-11-06. Status: **proposal, not approved for production**. Parent discovery: [M00](./00-discovery-source-register.md).

## 1. Product positioning
Build a **fast, trustworthy, mobile-first Valencia, Bohol public information website**, giving residents a path to services, documents, and advisories, while presenting authentic local identity to visitors. Prioritize functional public value over web-app complexity. It must not pretend to be an official government website until authorized by the municipality.

**Audience / priority**
1. Residents: service requirements, where to go, office hours, contact, important notices.
2. Business owners: permits, requirements, responsible office, verified government links.
3. Residents researching accountability: ordinances, budgets, FDP, procurement and plans.
4. Visitors / diaspora: heritage, local culture, places, how to visit, community.
5. Municipal editors: safe, reproducible content updating, no developer intervention for every article after handover.

**Success journeys:** find a common service in ≤3 navigation steps; locate relevant office and validated contact; find the date/effectivity of a PDF; distinguish current notices from archives; learn one real heritage story from an attributed source. No user login required to browse.

## 2. Recommended primary navigation and routes
| Top-level | Routes and purpose |
| --- | --- |
| Home | `/` — town identity, alert band, search, service shortcuts, recent notices, heritage |
| Municipality | `/municipality`, `/municipality/history`, `/municipality/barangays`, `/municipality/offices` — verified profile, 35 barangays, organizational office directory |
| Services | `/services`, `/services/[slug]` — category filters and current Citizen's Charter facts; PDF links and office owner |
| News & Advisories | `/updates`, `/updates/[slug]` — dated notices, events and public advisories; archive and expiry |
| Transparency | `/transparency`, `/documents`, `/documents/[slug]` — FDP links, ordinances, resolutions, plans, procurement and searchable records with supersession |
| Discover Valencia | `/discover`, `/discover/[slug]` — authentic photo-led heritage, community and visitor guide |
| Contact | `/contact` — verified directory, hours, map and emergency links; no collection of PII until explicitly commissioned |

Footer: accessibility, privacy, site status/ownership, last reviewed/published, archives, source/attribution, government links, website feedback option (no unsecured personal data).

**Mobile navigation:** 6 clear labels, sticky compact header, keyboard-compatible menu, visible search and CTA to services. Do not hide critical advisories below giant images. Provide source dates and location labels.

## 3. Homepage information hierarchy
1. Utility strip: municipality identity (qualified if unofficial), language choice as available, accessibility link, search.
2. Alert strip: only when approved, active and not expired; emergency vs ordinary notices visually distinct.
3. Editorial hero: authentic licensed Valencia imagery, legible concise headline (working line: “Valencia, Bohol — Our Community, Within Reach”), two actions: **Find a Service** and **Discover Valencia**. Slogan is not an official municipal tagline.
4. “What do you need today?” direct service cards (e.g. business permits, civil registry, building/zoning, social services) only as categories pending signed/current instructions.
5. Latest Advisories: date, source/issuing office, clear archive link, never fake recency.
6. Discover Valencia: heritage/landscape/people tiles with approved images and source credit.
7. Quick facts: official PSA 2024 data with label **2024 census**; link to source, not fake live counters.
8. Official public documents / transparency: strong link to searchable archive and FDP where approved.
9. Contact/footer: validated directory and content update date.

**Visual strategy:** professional civic editorial, generous whitespace, precise typography, restrained movement, documentary photography, not generic government-template clutter or a travel-agency hero full of empty claims. Suggested visual exploration: warm off-white, deep coastal blue/green, stone gray, restrained terracotta/sunlight accent. **All branding provisional** until actual municipal seal and visual authority are received. Avoid AI-generated representative people or landmarks.

## 4. Technical decision: static-first architecture
- **Astro + TypeScript (strict)**: HTML produced at build time, content-driven routes and minimal client JS. This is a better first fit than a client-rendered React SPA for mostly public information.
- **Tailwind CSS 4** or maintainable scoped CSS variables for design tokens; choose one convention in M01.
- **Astro content collections** with schema validation: services, advisories, documents, destinations, offices and barangays. Markdown/MDX as appropriate; Zod rules and required provenance fields.
- Astro image pipeline + Sharp for local optimized image derivatives; serve responsive `srcset`, lazy-load below fold, explicit dimensions.
- **Pagefind** for build-time local search; no search service, server or DB.
- Static generated sitemap, canonical URLs, robots, Open Graph, JSON-LD (`GovernmentOrganization` ONLY if official authorization is established; otherwise safe `WebSite`/`Place` content), accessible semantic HTML.
- Optional lightweight client islands only for menu/search filters, never hydration of the whole site.
- ESLint, Prettier, typecheck, content-schema validation, Playwright, axe-core, Lighthouse CI. Add unit tests around content transformations where valuable.
- No server-side auth, payments, personal-data forms, chatbots, resident accounts, or admin database in V1.
- Language architecture: English first with valid local language review; do not auto-machine-translate service requirements or pretend all locales exist. Future translation key routes after editorial signoff.

## 5. Content-management strategy
**V1:** Git-backed Markdown/MDX with PR-driven editorial approval. This is deliberately less fragile than operating an exposed CMS for mostly static material. One content file is one auditable published item; images and signed documents have source identifiers. Scheduled removal can be enforced at build time using `published_at / expires_at` but does not replace required republishing; urgent alerts require an emergency publishing owner.

**V1.1 only if nontechnical staff need editing:** evaluate a Git-based editorial UI (e.g. Pages CMS / equivalent) with GitHub permission boundaries and actual staff UAT. This is a candidate, not a decided dependency. **Do not add public WordPress, SQL, headless GraphQL or bespoke admin infrastructure without a demonstrated requirement.**

Conceptual content contracts:
```ts
type Provenance = {
  sourceTitle: string;
  sourceUrl?: string;
  sourceFileId?: string;
  publisher: string;
  checkedAt: string;        // ISO date
  status: 'verified' | 'awaiting-approval';
  approvedBy?: string;
  approvedAt?: string;
};
type Service = {
  slug: string; title: string; category: string; officeId: string;
  audience: string[]; requirements: string[]; steps: string[];
  fees: { label: string; amountPhp?: number }[];
  processingTime: string; complaintChannel: string;
  validFrom: string; reviewedAt: string; source: Provenance;
  published: boolean;
};
type PublicDocument = {
  id: string; title: string; category: string; issuingOffice: string;
  signedAt?: string; effectiveAt?: string; version: string;
  supersedesId?: string; source: Provenance; approvedPdfPath: string;
  accessibilityChecked: boolean; published: boolean;
};
type Advisory = {
  slug: string; title: string; severity: 'info'|'important'|'emergency';
  publishedAt: string; expiresAt?: string; issuingOffice: string;
  source: Provenance; published: boolean;
};
type MediaAsset = {
  id: string; originalOwner: string; licenseEvidence: string;
  subjectLocation: string; capturedAt?: string;
  alt: string; credit: string; approved: boolean;
};
```
Production build must reject published service/advisory/document records lacking required provenance/approval or required dates. Dated items must not appear “current” after expiry. Do not expose unpublished draft content in prerender output.

## 6. Static production hosting on authorized infrastructure
Use a dedicated site hostname and deploy target **only after domain ownership and publishing authority are confirmed**. Do not assume any existing company domain or VPS automatically belongs to the municipality.
- GitHub `main` -> verified build artifact -> deploy immutable `dist` to an authorized Linux host -> atomically swap active release symlink -> HTTPS via Caddy or Nginx + ACME, whichever operations team approves.
- Use scoped deploy credentials, verified host key, protected environments, no secrets in git. Prefer CI build and server static serving; do not run a long-lived Node service for public pages.
- Cache fingerprinted assets long; HTML short/controlled; Brotli/Gzip; HSTS after TLS proven; strict CSP tested against actual assets; HTTP security headers; no third-party trackers by default.
- Health: uptime check, cert-expiry alert, broken-link crawl, log volume, rollback to prior immutable release. Store at least two releases. Separate staging preview from production.
- Production release requires human approval and documented DNS owner; do not set up DNS or deploy automatically in M00/M01.

## 7. Quality targets & acceptance
- CWV lab targets: LCP ≤2.5 s, INP ≤200 ms (field if available), CLS ≤0.1. Measure on representative mobile conditions; do not invent field INP without RUM.
- WCAG 2.2 AA goal; keyboard navigation, meaningful focus, accessible forms and PDFs, text contrast, reduced motion, usable 320px.
- Lighthouse CI and browser-based real-device-style breakpoints: 360, 390, 768, 1024, 1440. Test Chrome/Firefox/WebKit, keyboard and screen reader spot checks.
- Zero published fictional services, unverified numbers, unapproved seal, fabricated photo, or dead-end official CTA.
- Every critical journey must pass Playwright screenshot, semantic, keyboard, link and content-verification tests. Artifact URLs and exact git SHA stored with review.

## 8. Milestones, ownership and exit gates
| Gate | Deliverable | Exit criteria |
| --- | --- | --- |
| M00 discovery | evidence register, scope, official-status determination, content matrix, shot brief, sitemap | approved authority/scope classification and documented blockers |
| M01 Antigravity capability evaluation + visual direction | three bounded design spikes / artifacts, tested against same task | reproducible artifacts and accepted design direction; no production changes |
| M02 foundation | Astro repo, content collections, routing, design tokens, CI checks, testing harness | clean build, validation gates and six primary route shells |
| M03 homepage | real hero and key utility sections | mobile/desktop visual review, real photo license, source provenance |
| M04 public information | municipality, services, updates, documents and transparency | actual user journeys + editorial ownership verified |
| M05 discover/media | destination stories, licensed gallery, responsive assets | rights/credits/alt, photo QA, locality checked |
| M06 acceptance | exhaustive role-free navigation, content and SEO audits | WCAG, screenshot, broken-link and performance gates pass |
| M07 controlled launch | dedicated domain, SSL, backups/rollback, editorial runbook | publication authority + DNS owner signoff + monitored smoke test |

**Parallelism:** avoid agents editing the same route/layout simultaneously. One writer per bounded branch; maintainers review before merge. No `main` writes from Antigravity, no automatic merge, no production deploy unless explicitly approved.

## 9. Scope discipline
Deferred: e-services login, payment gateway, citizen records, online application workflow, AI chatbot, personalized dashboards, GIS portal, custom CMS backend, native app, visitor booking. These may become separate procurement/product requirements, not M01 conveniences.

**Immediate next action:** run [Antigravity M01 bounded mission](./02-antigravity-evaluation-mission.md) only after reading this document. Capture results in its own draft PR; do not merge until the maintainer evaluates evidence.
