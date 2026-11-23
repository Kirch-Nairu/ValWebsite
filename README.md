# Valencia, Bohol — Municipal Website Prototype

**Mission:** `NOX-VALENCIA-MUNICIPAL-FRONTEND-TAKEOVER-R1` · [Issue #5](https://github.com/Kirch-Nairu/ValWebsite/issues/5)

A source-backed, industrial-clean municipal information prototype built in **Astro 5 + TypeScript**. This is an independent project; **not an official municipal website or live service**. It never collects payments, documents, or applications.

## Local Windows launch

From the existing working checkout `C:\ValWebsite` (preserve any local changes before switching branches):

```powershell
cd C:\ValWebsite
git fetch origin
git switch nox/valencia-municipal-frontend-r1
npm ci
npm run check
npm run build
powershell -ExecutionPolicy Bypass -File .\scripts\Start-Valencia.ps1 -OpenBrowser
```

The start script first checks for a port, launches only this checkout's Astro process, validates HTTP 200, and writes `.valencia-server.json`. Default address `http://127.0.0.1:4321`. If 4321 is occupied, the script selects an available port between 4322–4335 and reports it. It **never kills or adopts** an unknown process.

To stop only the recorded, verified process:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\Stop-Valencia.ps1
```

If the checkout contains uncommitted work, **do not** switch branches without safeguarding it first. This repository update cannot act on your local Windows filesystem through the GitHub connector.

## Run browser acceptance

```powershell
npx playwright install chromium
npx playwright test
```

The suite checks top-level/detail URLs, CTA destinations, search, keyboard Escape and focus restoration, filters, 1440/768/390 width overflow, and captures desktop/mobile screenshots under `test-results/screenshots`. CI archives the evidence as a GitHub Actions artifact.

## Public-facing information architecture

Home · Municipality & Barangays · Government & Municipal Offices · Services and detail guides · News & Advisories with source detail · Projects & Progress with project detail · Tourism & Culture with destination detail · Transparency & Documents · Contact & Public Channels · Search. Compatibility URLs `/valencia`, `/discover`, `/progress`, `/updates`, and legacy destination/story paths remain supported.

## Code ownership

- `src/data/{site,municipality,services,news,projects,destinations,culture,media,search}.ts`: domain sources and source IDs; `valenciaData.ts` only re-exports for compatibility.
- `src/components`: accessible layout primitives, service cards, source-attributed lists, media and search.
- `src/layouts/BaseLayout.astro`: prototype disclosure, noindex, shared UI.
- `src/styles/global.css`: design tokens, 1280px grid, responsive typography and layout.

## Publication gates, deliberately not claimed

The source research included provisional barangay names/codes that must be reconciled with the PSA's canonical list. Online service requirements, office rosters, operating hours, current advisories, project budgets, municipal seal and image licensing await official authorization. The DILG Full Disclosure Policy portal is linked as an external authoritative gateway; this prototype does not fabricate municipal disclosure files.

**No merge, DNS edit or production publication is authorized by this prototype.**
