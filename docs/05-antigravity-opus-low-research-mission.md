# M01-A — Antigravity Opus Low: Valencia research and media-rights discovery
Mission ID: `VAL-M01A-OPUS-LOW-SOURCE-MEDIA-DISCOVERY`
Status: **ORDERED / NOT RUN** (needs the user to run it in the local Antigravity desktop). Date: 2026-11-06.
Target: `Kirch-Nairu/ValWebsite`. Planning baseline branch: `planning/m00-discovery-architecture-antigravity`.
Purpose: build a credible research library and media candidate catalog for a **BARUG VALENCIA** town website, pursuing an immersive **'behold Valencia' narrative** rather than using 'Behold Valencia' as the visible brand or slogan with municipal progress and civic utility as secondary functions.

## Authorized execution
- **Executor:** Antigravity app, user selects **Claude Opus — Low reasoning effort** if that control is actually available. If not, report exact available option; do not silently substitute Opus Medium and pretend it was Low.
- **Reviewer/maintainer:** Kirch plus ChatGPT reviewing PRs, provenance and visual quality; no claim of direct ChatGPT desktop-agent control.
- **Mode:** WEB RESEARCH / LOCAL CONTENT INVENTORY / RIGHTS-AWARE ASSET CATALOG / DOCUMENTATION-ONLY GITHUB WRITE ON ISOLATED BRANCH. No frontend implementation, production deployment, or merge.
- **Source:** read the planning PR's `docs/00`, `docs/01`, `docs/02`, `docs/03`, `docs/04` before researching. `docs/03` defines creative priority; previous “citizen help portal first” copy is **superseded**.
- **Base:** fetch the planning branch and branch from an explicit immutable HEAD. Suggested candidate: `research/val-m01a-opus-low-discovery`. Never modify `main`; no force push. Stop if git dirty with unrelated edits; preserve user's work.
- **Model assignments:** all models run at **Low**, no Medium/High by default. Opus Low handles research/source synthesis first. **Gemini Argon Low** is a subsequent independent frontend/visual spike, not a current source of municipal facts. A different low model may perform secondary verification with documented provenance.

## A. Research fieldwork — priority order
0. **First inspect user-confirmed research targets in the public Antigravity browser**: LGU Valencia `https://www.facebook.com/lguvalofficialpage`; Sang-at Festival `https://www.facebook.com/profile.php?id=61595179684543`; SK Federation `https://www.facebook.com/skfederationvalenciabohol`. Try opening each URL directly. Record current page title/handle, authenticity markers, visible recent posts and exact dated canonical post URLs, original authors and photographic credits. If login-blocked, explicitly record `direct_access_blocked` and do not invent a post inventory. Read `docs/06-barug-valencia-brand-and-social-sources.md` for the verification checklist.

1. Establish exact **Valencia, Bohol** identity and eliminate Bukidnon / Negros Oriental contamination using barangay/municipality context.
2. Read [Bohol PPDO 2025 Tourism Profile](https://ppdo.bohol.gov.ph/ppdofiles/Profile/SocioEconomicProfile/EconomicDevelopment/TourismProfile2025.pdf), printed pages 192–196; catalog named attractions, locations, descriptions, whether truly visitor-ready or only prospective. This is the authoritative **starting list**, not final current operating info.
3. Gather recent 2024–2026 local culture and event records, especially Sang-at Festival and 2026 Sandugo participation; distinguish dated past events from calendar-upcoming.
4. Find official or original municipal accounts for “Municipal Government of Valencia, Bohol”, Sang-at Festival, the municipal tourism/culture office, DILG Valencia, SK federation / barangays, public information office, youth/education/investment units. Use the publicly accessible Facebook UI when available; log the direct canonical URL, page name, posting date, authenticity assessment, post type and claims. Third-party mirrors are lead-finders only. Avoid misleading accounts for the wrong Valencia.
5. Build municipality profile and useful decision-maker evidence: current leadership official records (reverify **acting status** on research and publication dates), major projects, civic/education developments, partnerships, tourism promotion efforts and verified civic milestones. Use politically neutral reporting. Do not promote any candidate or fabricate endorsements.
6. Explore original Valencia photography: dramatic high-quality landscape, coast/springs, Sto. Niño Church, Sang-at and local people, streets, market, farmland/fishing, original municipal projects. Only original high-resolution works and documented rights are considered publishable.
7. Locate the municipal official seal/flag/vector/brand color references; determine actual publishing authority and accepted rules. A Commons flag and Facebook image of a flag are **leads**, not authority to edit/use an official seal in this prototype.
8. Build 8–12 distinctive, Valencia-specific story outlines, each with primary URL, date, place, suggested authorized photo, anecdote needing local interview and publishing status.
9. Report sources that conflict (founding date; springs' names; elected vs acting officials; outdated vs current festival details). Never silently choose the most convenient claim.

## B. Browser and Facebook discipline
- Browser automation can open public pages and screenshots as research evidence only. No fake account, login bypass, automated mass-scrape, prohibited data gathering, or scraping private groups.
- If Facebook cannot be accessed through browser, report `inaccessible / permission_required` and leave original permalink unresolved. NEVER claim the posts were directly visited when they were discovered via a mirror or news report.
- Do not copy Facebook images or copyrighted stock/editorial photos into public GitHub. Do not hotlink or embed Facebook CDN URLs in code. Reference URL, original author, date and permission contact in the manifest. User may later provide written rights or own originals.
- Personal details and minors: do not compile attendee lists, extract private contact info, store identifiable minors or publish unauthorized portraits. Obtain specific releases for editorial use of recognizable people when appropriate.
- Screenshots of source pages, if collected for internal verification, stay in an explicitly local private research folder `research-local/` (gitignored) unless screenshots can lawfully be shared; do not accidentally commit them.

## C. Required output artifacts
**Expand the seeded `research/sources.csv` and `research/media-candidates.csv` instead of overwriting them, and create the remaining missing reports** on the isolated research branch:
```
research/
  sources.csv                # one entry per candidate source, including source type, publisher, URL, date, checked date, accuracy/conflict status
  stories.csv                # topics, evidence refs, local angle, status and missing interviews
  media-candidates.csv       # source image URLs, subject, photographer, page date, rights status, location confidence, usage candidate
  brand-seal-provenance.md   # candidate link(s), who created them, official permission questions
  facebook-public-leads.md  # verified public permalinks vs mirror-only / login-blocked
  2026-valencia-trends.md   # verified developments and local celebrations with dates
  discovery-findings.md     # best hero candidates, 8 stories, unknowns, decision-maker presentation themes
  conflicts-and-gaps.md     # contradictory facts and unresolved permissions
```
CSV required minimum fields:
- `sources.csv`: `id,topic,title,publisher,source_type,url,published_date,checked_date,municipality_confirmed,primary_or_secondary,verification_status,notes`
- `media-candidates.csv`: `id,subject,barangay_or_location,source_page_url,original_media_url,attribution,photographer,license_or_permission_status,license_evidence,photo_date,resolution,aspect_ratio,location_confidence,intended_use,publication_status,notes`.
No “approved” status unless written media/license evidence exists.

**Coverage target, not fake completion gate:** >=40 distinct source leads; >=25 unique high-quality image candidates; >=8 well-grounded story briefs; >=3 authentic candidate brand/seal provenance links if available; >=5 verified 2026 items. If fewer exist, report actual count, quality gaps and where to obtain originals. Quantity never overrides credibility.

## D. Delivery and PR
1. Keep each discovered record traceable to original URL and specific date. No data from other Valencias.
2. Verify the planning branch's existing `.gitignore` excludes `research-local/`; preserve all research sources and media candidate seed records. Do not introduce app scaffold, image binary, login secrets or data scraping scripts.
3. Commit research-only files on own isolated branch; push and open a **draft PR targeted to planning branch** while planning PR remains unmerged, otherwise to main. Never auto-merge.
4. Include actual exact `base SHA`, `head SHA`, number of unique verified primary/secondary sources, original Facebook links vs mirrors, image candidates rights-cleared count, unresolved flags, research process and exact browser/tool limitations.
5. Show 10 strongest Valencia-specific visuals in a **local-only** rights-aware research contact sheet if source rights/access allow; otherwise markdown table with original reference URLs. Clearly distinguish downloadable website assets from image-search references.
6. Deliver an executive two-page narrative: “Why Valencia deserves this website,” three best visual hero/story combinations, six candidate homepage sections, specific image requests to municipality, photographer/PIO contact questions.

**Hard-fail:** invented content; copying local copyrighted Facebook image binaries into repository; using a lookalike seal; confusing Valencia Bohol with other provinces; fabricating permission; fake screenshots/test runs; leaving research-only assets in production/public folders; publishing unverified current official status.

## E. Execution-order prompt (copy into Antigravity)
> Execute mission `VAL-M01A-OPUS-LOW-SOURCE-MEDIA-DISCOVERY` in `Kirch-Nairu/ValWebsite` using **Claude Opus with Low effort** if available. Read `docs/00`–`docs/05` and the existing `research/*.csv` seed files on `planning/m00-discovery-architecture-antigravity` first. The actual catchphrase is BARUG VALENCIA. 'Behold Valencia' is **the narrative tone only**, not a proposed new slogan. The vision is a visually extraordinary, destination-led place-brand website for Valencia, Bohol, with culture, natural attractions, community, municipal progress and official utility. First verify Git workspace/tools, then create isolated `research/val-m01a-opus-low-discovery` from a recorded planning HEAD. Begin with user-supplied Facebook URLs `https://www.facebook.com/lguvalofficialpage`, `https://www.facebook.com/profile.php?id=61595179684543` and `https://www.facebook.com/skfederationvalenciabohol`, then research official provincial tourism sources, recent 2026 local sources, and other permitted public posts. Do not treat a direct URL as proof of current page activity or image licenses. Record 40+ source leads, 25+ media candidates and at least 8 story briefs as traceable CSVs/Markdown; report actual honest counts if fewer. Never copy photos/seal into public git absent reuse rights, never bypass Facebook access or create fake local details. Do not implement frontend, merge, deploy or change DNS. Push research-only branch and open a draft PR with exact SHA, evidence and gaps. Return a decision-maker storytelling recommendation.
