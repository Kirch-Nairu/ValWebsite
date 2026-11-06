export const SITE_META = {
  municipality: 'Valencia, Bohol',
  province: 'Province of Bohol, Central Visayas (Region VII), Philippines',
  district: '3rd Congressional District of Bohol',
  psgcCode: '0701247000',
  population2024: '28,535',
  populationSource: 'Philippine Statistics Authority (2024 POPCEN / PSGC 0701247000)',
  barangayCount: 35,
  catchphrase: 'BARUG VALENCIA',
  catchphraseNote:
    'Actual municipal catchphrase supplied by project owner and documented in local governance reporting. In October 2026 coverage (Bohol Island News, S026), BARUG is expanded as "Better, Affectionate, Responsive and Unifying Governance" (earlier reports also use "Unified" — official LGU style guide confirmation pending).',
  prototypeDisclaimer:
    'Independent prototype — not an official live municipal service. Prepared for design, architecture, and editorial evaluation using cited public records (Bohol PPDO CY2025, PSA, PIA, Embassy of Japan, and local press). Official municipal seal, photography licenses, and current Citizen’s Charter schedules await formal LGU authorization.',
  coordinates: '9°36′35″N 124°12′29″E (Coastal Southern Bohol)'
} as const;

export const OFFICIAL_CHANNELS = [
  {
    id: 'FB-001',
    name: 'Municipal Government of Valencia, Bohol (Official Facebook Page)',
    role: 'Primary user-supplied LGU public communication channel (21,852 followers verified in page metadata on 2026-11-06)',
    url: 'https://www.facebook.com/lguvalofficialpage',
    verificationStatus: 'Page Identity Verified (Metadata) · Post Timeline Requires Login',
    scope: 'Official municipal announcements, executive activities, public notices, and PIO inquiries.'
  },
  {
    id: 'FB-002',
    name: 'SANG - AT Festival (Facebook Page)',
    role: 'User-supplied cultural festival page (797 followers verified in page metadata on 2026-11-06)',
    url: 'https://www.facebook.com/profile.php?id=61595179684543',
    verificationStatus: 'Page Identity Verified (Metadata) · Organizer Attribution Pending',
    scope: 'Celebrating the rich culture, vibrant traditions, and enduring pride of Valencianhons through the Sang-at Festival of Valencia.'
  },
  {
    id: 'FB-003',
    name: 'SK Federation of Valencia, Bohol (Facebook Page)',
    role: 'Official Sangguniang Kabataan Municipal Federation Page (4,848 followers verified in page metadata on 2026-11-06)',
    url: 'https://www.facebook.com/skfederationvalenciabohol',
    verificationStatus: 'Page Identity Verified (Metadata) · Minor Consent Rules Apply',
    scope: 'Youth leadership, barangay SK councils, sports, education, and youth volunteer initiatives.'
  },
  {
    id: 'PPDO-BOHOL',
    name: 'Bohol Provincial Planning and Development Office (PPDO)',
    role: 'Authoritative provincial socio-economic, map, and CY2025 Tourism Profile source',
    url: 'https://ppdo.bohol.gov.ph/ppdofiles/Profile/SocioEconomicProfile/EconomicDevelopment/TourismProfile2025.pdf',
    verificationStatus: 'Verified Primary Provincial Document (S001 / S024)',
    scope: 'Source of truth for Valencia’s 14 documented tourist attraction and potential site profiles (printed pp. 192–195).'
  },
  {
    id: 'PSA-PSGC',
    name: 'Philippine Statistics Authority — PSGC Valencia, Bohol (0701247000)',
    role: 'Authoritative national statistical and geographic registry',
    url: 'https://psa.gov.ph/classification/psgc/barangays/0701247000',
    verificationStatus: 'Verified Primary National Registry (S013)',
    scope: '2024 Census of Population (28,535 residents) and official list of 35 barangays.'
  },
  {
    id: 'DILG-FDP',
    name: 'DILG Full Disclosure Policy (FDP) Portal',
    role: 'National LGU financial and procurement transparency portal',
    url: 'https://fdpp.dilg.gov.ph/',
    verificationStatus: 'Authoritative National Transparency Gateway',
    scope: 'Official repository for LGU budget, utilization, and procurement disclosures required under DILG rules.'
  }
] as const;

export const CONFLICTS_SUMMARY = [
  {
    id: 'C1',
    topic: 'Municipal Founding Year',
    claimA: '1867 — Wikipedia general History section (S025)',
    claimB: 'October 27, 1869 — Bohol PPDO CY2025 Tourism Profile (pp. 194–195, S024) & parish histories',
    handling: 'Both dates are explicitly cited on /valencia and /stories/panangatan-origin pending LGU historical ordinance confirmation.'
  },
  {
    id: 'C2',
    topic: 'Sang-at Festival Inaugural Year',
    claimA: '2023 (154th Foundation Day, reported as "first-ever" by The Bohol Times, Nov 5, 2023, S027)',
    claimB: 'October 27, 2022 (153rd Foundation Day, cited in academic search summary, S032)',
    handling: 'Disclosed transparently on /culture and /culture/sang-at.'
  },
  {
    id: 'C3',
    topic: 'Sr. Santo Niño Parish Church Heritage Designation',
    claimA: 'Important Cultural Property (ICP) — verified by PIA September 12, 2023 marker turnover report (S008)',
    claimB: '"National Cultural Treasure" — unverified secondary blog claim (S034)',
    handling: 'Only Important Cultural Property (ICP) status is asserted; NCT claim is withheld.'
  },
  {
    id: 'C4',
    topic: 'BARUG Acronym Expansion',
    claimA: '"Better, Affectionate, Responsive and Unifying Governance" — Bohol Island News, Oct 25, 2026 (S026)',
    claimB: '"Unified" variant in other secondary mentions (S020)',
    handling: 'Quoted with exact attribution to October 2026 press copy pending official LGU brand manual.'
  },
  {
    id: 'C5',
    topic: 'Current Municipal Officeholder Status',
    claimA: 'Outdated May 2024 suspension note still visible on Wikipedia infobox (S025)',
    claimB: 'June 2025 oath-taking (S005) and October 2026 press coverage (S006, S026) of Mayor Dionisio Neil A. Balite',
    handling: 'No unverified live roster is asserted as official; historical/press dates are cited neutrally.'
  },
  {
    id: 'C6',
    topic: 'Badiang vs. Badian Spelling & Tagbilaran Distance',
    claimA: 'Badiang Spring Resort (PPDO CY2025 p. 192) · 46 km from Tagbilaran (Wikipedia)',
    claimB: 'Badian Spring (older PPDO table) · ~42 km (travel blogs)',
    handling: 'Both spellings and distance range (42–46 km) are noted.'
  }
] as const;
