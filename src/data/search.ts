import type { SearchDocument } from './types';
import { DESTINATIONS } from './destinations';
import { STORIES } from './culture';
import { PROGRESS_ITEMS } from './projects';
import { UPDATES } from './news';
import { SERVICE_CATEGORIES } from './services';
import { BARANGAYS } from './municipality';

export const SEARCH_INDEX: SearchDocument[] = [
  {
    id: 'page-home',
    title: 'Municipality of Valencia, Bohol — BARUG VALENCIA',
    section: 'Page',
    url: '/',
    badge: 'Home',
    summary: 'Official gateway to municipal services, barangay directory, public announcements, development projects, and tourism in Valencia, Bohol.',
    keywords: 'barug valencia bohol home panangatan sang-at badiang sto nino'
  },
  {
    id: 'page-municipality',
    title: 'Municipality & 35 Barangays — Geography, History & Directory',
    section: 'Page',
    url: '/municipality',
    badge: 'Municipality',
    summary: '2024 Census profile (28,535 residents), Panangatan origin, geographical boundaries, and searchable directory of all 35 barangays.',
    keywords: 'municipality valencia profile geography census 28535 35 barangays psgc 0701247000'
  },
  {
    id: 'page-government',
    title: 'Government & Municipal Offices — Executive, Legislative & Departments',
    section: 'Page',
    url: '/government',
    badge: 'Government',
    summary: 'Office of the Municipal Mayor, Sangguniang Bayan, BARUG Valencia governance framework, and municipal department directory.',
    keywords: 'government offices mayor sangguniang bayan departments civil registry bplo'
  },
  {
    id: 'page-services',
    title: 'Municipal Services — Civil Registry, Permits, Treasury, Health & Agriculture',
    section: 'Page',
    url: '/services',
    badge: 'Services',
    summary: 'Guide to municipal services, responsible offices, and documentary preparation at Valencia Municipal Hall.',
    keywords: 'services civil registry birth certificate business permit rpt mswdo agriculture'
  },
  {
    id: 'page-news',
    title: 'News & Public Announcements — Municipal Updates & Community Milestones',
    section: 'Page',
    url: '/news',
    badge: 'News',
    summary: 'Dated reports and community announcements covering governance, education, digital payments, and cultural heritage in Valencia.',
    keywords: 'news updates announcements advisories 2026 sandugo pia'
  },
  {
    id: 'page-projects',
    title: 'Projects & Municipal Progress — Infrastructure & Development Programs',
    section: 'Page',
    url: '/projects',
    badge: 'Projects',
    summary: 'Completed school buildings, Paleng-QR digital payment rollout, agricultural recovery, and BARUG Valencia development initiatives.',
    keywords: 'projects progress development anoyon japan classroom paleng-qr carenav swine pangi-an'
  },
  {
    id: 'page-tourism',
    title: 'Tourism, Culture & Heritage — Discover Valencia, Bohol',
    section: 'Page',
    url: '/tourism',
    badge: 'Tourism & Culture',
    summary: 'Explore Badiang Spring, the 1882 Sr. Santo Niño Parish Church hardwood floor, Kinawa Falls, upland peaks, karst caves, and the Sang-at Festival.',
    keywords: 'discover tourism attractions springs caves hills waterfalls sang-at church'
  },
  {
    id: 'page-transparency',
    title: 'Transparency, Public Records & Media Credits',
    section: 'Page',
    url: '/transparency',
    badge: 'Transparency',
    summary: 'DILG Full Disclosure Policy portal, Philippine Statistics Authority registry, Bohol PPDO profile, and photograph attribution.',
    keywords: 'transparency dilg fdp psa ppdo records disclosures credits'
  },
  {
    id: 'page-contact',
    title: 'Contact & Official Channels — Municipal Hall & Visitor Directions',
    section: 'Page',
    url: '/contact',
    badge: 'Contact',
    summary: 'Official LGU Valencia Facebook channel, Sang-at Festival page, SK Federation page, and overland travel directions from Tagbilaran City.',
    keywords: 'contact facebook lguvalofficialpage sang-at sk federation directions'
  },
  ...DESTINATIONS.map((d) => ({
    id: `dest-${d.slug}`,
    title: `${d.name} (${d.barangay})`,
    section: 'Discover' as const,
    url: `/tourism/${d.slug}`,
    badge: d.readinessLabel,
    summary: d.summary,
    keywords: `${d.name} ${d.barangay} ${d.category} ${d.readiness}`.toLowerCase()
  })),
  ...STORIES.map((s) => ({
    id: `story-${s.slug}`,
    title: s.title,
    section: 'Culture & Stories' as const,
    url: s.route,
    badge: s.kicker,
    summary: s.summary,
    keywords: `${s.title} ${s.subtitle} ${s.barangayOrPlace}`.toLowerCase()
  })),
  ...PROGRESS_ITEMS.map((p) => ({
    id: `prog-${p.slug}`,
    title: p.title,
    section: 'Progress' as const,
    url: `/projects/${p.slug}`,
    badge: p.statusBadge,
    summary: p.summary,
    keywords: `${p.title} ${p.barangay} ${p.implementingBody} ${p.partnerOrDonor} ${p.dateLabel}`.toLowerCase()
  })),
  ...UPDATES.map((u) => ({
    id: `upd-${u.slug}`,
    title: `${u.title} (${u.publishedDate})`,
    section: 'Updates' as const,
    url: `/news/${u.slug}`,
    badge: `${u.category} · ${u.publishedDate}`,
    summary: u.summary,
    keywords: `${u.title} ${u.publisher} ${u.category} ${u.publishedDate}`.toLowerCase()
  })),
  ...SERVICE_CATEGORIES.map((sc) => ({
    id: `svc-${sc.id}`,
    title: `${sc.title} — ${sc.office}`,
    section: 'Government' as const,
    url: `/services/${sc.id}`,
    badge: sc.office,
    summary: sc.summary,
    keywords: `${sc.title} ${sc.office} ${sc.summary}`.toLowerCase()
  })),
  ...BARANGAYS.map((b) => ({
    id: `brgy-${b.psgc}`,
    title: `Barangay ${b.name} (PSGC ${b.psgc})`,
    section: 'Page' as const,
    url: '/municipality#barangays',
    badge: b.zone,
    summary: `${b.name} (${b.zone}) — ${b.notableFeatures}.`,
    keywords: `barangay ${b.name} ${b.psgc} ${b.zone} ${b.notableFeatures}`.toLowerCase()
  }))
];
