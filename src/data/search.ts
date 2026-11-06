import type { SearchDocument } from './types';
import { DESTINATIONS } from './destinations';
import { STORIES } from './culture';
import { PROGRESS_ITEMS } from './projects';
import { UPDATES } from './news';
import { SERVICE_CATEGORIES } from './services';
export const SEARCH_INDEX: SearchDocument[] = [
  {
    id: 'page-home',
    title: 'BARUG VALENCIA — Flagship Place & Municipal Overview',
    section: 'Page',
    url: '/',
    badge: 'Flagship Home',
    summary: 'Immersive introduction to Valencia, Bohol: Panangatan river heritage, Sang-at Festival, Sto. Niño Church, Badiang Spring, and documented municipal progress.',
    keywords: 'barug valencia bohol home panangatan sang-at badiang sto nino'
  },
  {
    id: 'page-discover',
    title: 'Discover Valencia — 14 PPDO-Documented Attractions & Prospective Sites',
    section: 'Page',
    url: '/discover',
    badge: 'Destination Guide',
    summary: 'Complete directory of established landmarks and potential ecotourism sites from the Bohol PPDO CY2025 Tourism Profile (pp. 192–195).',
    keywords: 'discover tourism attractions springs caves hills waterfalls ppdo 2025'
  },
  {
    id: 'page-culture',
    title: 'Culture & Heritage — Sang-at, 1882 Church Floor & Living Traditions',
    section: 'Page',
    url: '/culture',
    badge: 'Culture Hub',
    summary: 'Cultural storytelling anchored by the Sang-at Festival, the 1882 tindalo-and-molave floor of Santo Niño Parish, and Sunday Tabu traditions.',
    keywords: 'culture heritage sang-at church floor tindalo molave tabu festival'
  },
  {
    id: 'page-valencia',
    title: 'Our Valencia — Municipal Profile, Geography & All 35 Barangays (names under verification)',
    section: 'Page',
    url: '/valencia',
    badge: 'Municipal Profile',
    summary: 'PSA 2024 census facts (28,535 population), Panangatan etymology, 1867/1869 founding records, and the research-compiled directory of 35 barangays, pending canonical PSGC confirmation.',
    keywords: 'our valencia profile geography census 28535 35 barangays psgc 0701247000'
  },
  {
    id: 'page-progress',
    title: 'Progress & Development — Verified Milestones vs. Proposed Initiatives',
    section: 'Page',
    url: '/progress',
    badge: 'Development Ledger',
    summary: 'Evidence-backed development registry separating completed turnovers (Anoyon High School) and launches (Paleng-QR) from proposed concepts (BARUG CARENav).',
    keywords: 'progress development projects anoyon japan classroom paleng-qr carenav swine pangi-an'
  },
  {
    id: 'page-updates',
    title: 'Updates, News & Historical Event Archive (2023–2026)',
    section: 'Page',
    url: '/updates',
    badge: 'News Archive',
    summary: 'Filterable archive of verified press and agency releases from PIA, Embassy of Japan, Bohol Island News, Bohol Times, and Bohol Tribune.',
    keywords: 'updates news events announcements archive 2026 sandugo pia'
  },
  {
    id: 'page-government',
    title: 'Government & Public Services — Citizen’s Charter Status & Transparency',
    section: 'Page',
    url: '/government',
    badge: 'Public Utility',
    summary: 'Service categories, RA 11032 Citizen’s Charter status disclosures, DILG Full Disclosure Policy gateway, and BARUG governance overview.',
    keywords: 'government services citizens charter transparency dilg civil registry bplo'
  },
  {
    id: 'page-contact',
    title: 'Contact, Official Channels & Source Provenance',
    section: 'Page',
    url: '/contact',
    badge: 'Official Channels',
    summary: 'Verified links to the LGU Valencia Facebook page, Sang-at Festival page, SK Federation page, and photo/brand permission request workflow.',
    keywords: 'contact facebook lguvalofficialpage sang-at sk federation pio permissions'
  },
  ...DESTINATIONS.map((d) => ({
    id: `dest-${d.slug}`,
    title: `${d.name} (${d.barangay})`,
    section: 'Discover' as const,
    url: d.hasDedicatedDetail ? `/discover/${d.slug}` : `/discover#${d.slug}`,
    badge: d.readinessLabel,
    summary: d.summary,
    keywords: `${d.name} ${d.barangay} ${d.category} ${d.readiness} ${d.ppdoPage}`.toLowerCase()
  })),
  ...STORIES.map((s) => ({
    id: `story-${s.slug}`,
    title: s.title,
    section: 'Culture & Stories' as const,
    url: s.route,
    badge: s.kicker,
    summary: s.summary,
    keywords: `${s.title} ${s.subtitle} ${s.barangayOrPlace} ${s.sourceIds.join(' ')}`.toLowerCase()
  })),
  ...PROGRESS_ITEMS.map((p) => ({
    id: `prog-${p.slug}`,
    title: p.title,
    section: 'Progress' as const,
    url: `/progress#${p.slug}`,
    badge: p.statusBadge,
    summary: p.summary,
    keywords: `${p.title} ${p.barangay} ${p.implementingBody} ${p.partnerOrDonor} ${p.dateLabel}`.toLowerCase()
  })),
  ...UPDATES.map((u) => ({
    id: `upd-${u.slug}`,
    title: `${u.title} (${u.publishedDate})`,
    section: 'Updates' as const,
    url: `/updates#${u.slug}`,
    badge: `${u.category} · ${u.publishedDate}`,
    summary: u.summary,
    keywords: `${u.title} ${u.publisher} ${u.category} ${u.publishedDate} ${u.sourceId}`.toLowerCase()
  })),
  ...SERVICE_CATEGORIES.map((sc) => ({
    id: `svc-${sc.id}`,
    title: `${sc.title} — ${sc.office}`,
    section: 'Government' as const,
    url: `/government#${sc.id}`,
    badge: sc.charterStatus,
    summary: sc.summary,
    keywords: `${sc.title} ${sc.office} ${sc.summary}`.toLowerCase()
  }))
];
