# Valencia Website — Destination-led product and static-first architecture v0.2
Date: 2026-11-06. Status: PROPOSAL; no publication authority or production approval. Canonical creative direction: [BARUG VALENCIA](./03-behold-valencia-creative-brief.md). Research ledger: [M00 sources/media](./04-research-media-source-register.md). Agent missions: [Opus Low research](./05-antigravity-opus-low-research-mission.md), [Argon Low visual evaluation](./02-antigravity-evaluation-mission.md).

## 1. Vision and audiences
A high-end **place-brand + municipal presence** for Valencia, Bohol, faithful to the local catchphrase **BARUG VALENCIA** (user supplied; authoritative style assets pending): extraordinary visual and editorial presentation of the town's identity, culture, people, places, opportunities and real municipal progress, with fast, reliable government services in a clearly accessible secondary section. **Not** a citizen helpdesk homepage.

Approval audiences: mayor's office / municipal decision-makers (if formally authorized), council and partners, residents/diaspora, travelers, investors and local businesses. An excellent executive-demo must still serve a resident trying to find a notice.

### Five success journeys
- **Visitor:** visually recognize Valencia Bohol, explore Sang-at and a location-specific story, understand how to plan a visit from current verified material.
- **Mayor/decision-maker:** open strong home hero, cultural assets, sourced progress, quiet civic functions, and full mobile-quality demo in ~2 minutes.
- **Resident:** find current advisory, office or valid service requirements within no more than 2–3 interactions from an obvious Government/Services link.
- **Partner/investor:** read factually supported opportunities and actual projects, identify responsible contact only when confirmed.
- **Editor/PIO:** update a story, event or document with source/rights/approval trails, without technical debt or invented information.

## 2. Site navigation and routes
Top-level nav:
1. Discover — `/discover` and `/discover/[slug]` destination stories, conditions and imagery.
2. Culture & Heritage — `/culture`, `/culture/sang-at`, `/stories`, `/stories/[slug]`, `/people/[slug]`.
3. Our Valencia — `/valencia`, `/valencia/history`, `/valencia/barangays`, `/valencia/leadership` (once current role approved).
4. Progress — `/progress`, `/progress/[slug]`: evidence-backed development, civic initiatives, projects with current status.
5. Updates — `/updates`, `/updates/[slug]`, `/events`: dated, expiring advisories and events.
6. Government — `/government`, `/government/services`, `/government/services/[slug]`, `/government/offices`, `/government/documents`, `/government/transparency`, `/contact`.

Visible utility shortcuts: Search, Services, Contact. Important/current emergency advisories may appear in a discreet high-priority strip but never as decorative content. Strong footer with provenance, media credits, publication status and privacy/accessibility.

Homepage section order: (1) **BARUG VALENCIA** identity and photographic hero (the *behold Valencia* feeling is a storytelling brief, not a new slogan); (2) one-paragraph identity editorial; (3) curated place/heritage/people picture essay; (4) Sang-at and cultural calendar; (5) community and livelihoods; (6) real, documented municipal progress; (7) official quick facts and travel context; (8) recent updates and a practical government gateway; (9) approved leadership/contact/footer. See creative brief for more.

## 3. Design constraints
- Distinct local identity from first viewport; avoid generic Bohol photography masquerading as Valencia, templated card UI, municipal-desk dashboards or fake cinematic overlays.
- Three design studies: cinematic editorial, curated heritage, contemporary destination-government. One coherent system chosen after actual screenshots and human review.
- Real photography with licenses; no image from Facebook just because publicly viewable; no AI-generated fake Valencia views.
- Photographs get metadata, alt, accurate captions, photographer credit and verified location/date.
- Cultural narrative authentic to Valencia, where Sang-at Festival and place-name histories are anchors. Aerial/video is optional and rights/performance-gated.
- Typography expressive display and readable body; 390px is first-class; no excessive JS, mandatory motion or scroll-hijacking.
- Municipal seal only in official use after authorization; independently owned project must not impersonate LGU.
- All factual/effective service info must be current and approved. 'Behold Valencia' is **only the internal storytelling intent**, never a proposed tagline. The user identifies 'Barug Valencia' as the actual catchphrase; confirm official brand artwork and usage before publishing.

## 4. Technology — intentionally simple
**Astro + strict TypeScript**, static pre-rendering, content collections (Markdown/MDX), schemas (Zod), Tailwind CSS 4 or scoped CSS design tokens, responsive Astro/Sharp images, Pagefind static search. Use JS islands only where needed for navigation, gallery or lightweight filters. No React app runtime, database, server API, login or live-admin backend in V1. A React island is possible only with a genuine component need and performance review.

Content types and required metadata:
- `Destination`: canonical slug, exact barangay, GPS or location accuracy, photo IDs, access state, sensitivity, safety, transport, original sourced copy, review date; current hours/fees only if verified.
- `Story`: headline, category, author/editor, event date, source refs, image rights IDs, people consent and approvals, publish/review dates.
- `FestivalEdition`: festival name, year, historic program vs upcoming event, organizer, official schedule URL, permission-cleared media and archive reference.
- `Project/Progress`: status (planned/in progress/completed), exact date, implementing agency, partner/donor, source URLs, facts and image rights, approved public copy.
- `Official`: role, effective-from/through, current acting/appointment basis, verified official source, approved portrait; never derive current role only from election results.
- `Service`: published Citizen's Charter edition and revision, office, requirements, processing time, fee, complaints, source/approval, last reviewed.
- `Advisory`: issuing entity, verified issued and expiry dates, priority, archived state, official link.
- `Document`: title, effective date, authority, signed/publication date, pdf/source link, supersedes reference, accessibility and status.
- `MediaAsset`: photographer, original page/file, place, date, owner, rights evidence, credit, subject release, crop and aspect, approval date.

All published records fail CI if necessary source/approval fields are missing; draft-only items never appear in static output. Historical content cannot masquerade as live.

## 5. Content and administration
**V1 Git-backed content** with PR reviews, static build and traceable edits. Use conventional directory structure:
```
src/content/{destinations,stories,events,progress,officials,services,advisories,documents}/
src/data/{barangays,source-register,media-approvals}/
public/media/approved/
research/   # text-only discovery leads
research-local/  # gitignored research cache, screenshots and unlicensed images
```
Editors do not need a custom DB. Evaluate a Git-based CMS UI later only after interviewing staff who will maintain the published site. If staff cannot use PR workflows, plan permissioned editorial interface and staged approval, not unsupervised public editing.

Publication workflow: discover -> primary-source verified -> copyright/consent check -> draft -> editorial review -> appointed municipal approver (when official) -> PR visual/code check -> staging preview -> authorized publish -> review/expiry/archive. Emergency advisories require a real assigned publisher and quick safe deployment process.

## 6. Deployment
Static `dist/` artifact on **authorized** Linux infrastructure after domain/municipal permission established, not automatically assumed on any existing Kirjane VPS or domain. CI builds from protected main; staging preview; manual production approval; atomic release swap; TLS; rollback; scoped credentials and pinned host fingerprint. No long-running Node SSR needed. Cache immutable images/JS, short HTML. Do not change DNS or publish until approved.

SEO: unique metadata/canonical/sitemap per route; social cards with genuine licensed images; use Place/WebSite/Article schema as appropriate, GovernmentOrganization only when verified official. Accessible metadata for local history and locations, no fake review or rating schema.

## 7. Quality acceptance
- 1440px/390px actual full-page screenshots; tablet 768px and 1024px; browser console/network and keyboard/screen-reader checks.
- WCAG 2.2 AA target, color contrast, focus, semantic headings, accessible mobile nav, reduced motion and photo alt text.
- Core Web Vitals goal: LCP <= 2.5s, INP <=200ms (only assert from field evidence when available), CLS <= 0.1, image/video restraint.
- Playwright mobile/desktop flows: homepage -> festival story; story -> discover -> place details; homepage -> progress; homepage -> government services; urgent advisory; document search/version; official status and source attribution.
- Broken-link/expired-content scans, indexed content verification, `astro check`, build, lint; accessibility and Lighthouse automated checks with raw reports.
- Hard fail: wrong Valencia, unrelated location image portrayed as local, unlicensed photo/seal, invented achievements, fake mayor position, inaccessible hero, broken mobile menu, undocumented tests, premature deploy.

## 8. Sequence and ownership
| Gate | Result | Required acceptance |
| --- | --- | --- |
| M00 source discovery | confirmed tourism/municipal facts, brand authority, shot list, rights plan | creative focus approved; uncertain claims clearly marked |
| M01-A Opus Low | original source and FB/social links, media candidates, story briefs | evidence-checked research-only PR, no unsupported assets |
| M01-B Argon Low | visual designs/prototypes and true Playwright captures | executive and mobile storyboard accepted; exact diff/logs |
| M02 foundation | Astro structure, collections, CI, theme, routes | clean build and schema checks |
| M03 flagship homepage | licensed immersive hero and editorial stories | actual photograph + rights and 390/1440 acceptance |
| M04 culture/discover/progress | story/visitor/project libraries | original Valencia content and functional journeys |
| M05 practical government | services, verified directory, documents, updates | current official source and review process |
| M06 content/design/QA | exhaustive browser, accessibility, SEO, perf, copyright | blockers closed |
| M07 controlled launch | authorized domain, static host, TLS, rollback | municipal/owner approval, release audit and monitoring |

One agent/writer per isolated branch and bounded task; maintainer reviews code/claims/media evidence; no auto merge or source owner overlap. Model effort for Antigravity: **Low always** per project instruction. Opus Low handles source collection, Argon Low handles visual frontend once research/assets are ready; compare only with evidence, not hearsay.

## 9. Deferred
No residence database, login, online permit application, payment gateway, tourist booking, proprietary CMS server, AI chatbot, user accounts, heavy GIS/3D stack or mandatory video player. Add only after validated demand and security/privacy review.
