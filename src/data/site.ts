export const SITE_META = {
  municipality: 'Valencia, Bohol',
  province: 'Province of Bohol, Central Visayas (Region VII), Philippines',
  district: '3rd Congressional District of Bohol',
  psgcCode: '0701247000',
  population2024: '28,535',
  populationSource: 'Philippine Statistics Authority (2024 Census of Population)',
  barangayCount: 35,
  catchphrase: 'BARUG VALENCIA',
  catchphraseNote:
    'BARUG VALENCIA represents Valencia’s commitment to responsive public service, community solidarity, and sustainable municipal development across all 35 barangays.',
  prototypeDisclaimer:
    'Municipality of Valencia, Province of Bohol · Public Information, Services, and Community Directory.',
  coordinates: '9°36′35″N 124°12′29″E (Southern Coast of Bohol)'
} as const;

export const OFFICIAL_CHANNELS = [
  {
    id: 'FB-001',
    name: 'Municipal Government of Valencia, Bohol',
    role: 'Official Municipal Public Information Channel on Facebook',
    url: 'https://www.facebook.com/lguvalofficialpage',
    verificationStatus: 'Official Municipal Channel',
    scope: 'Municipal announcements, executive advisories, public notices, and office inquiries.'
  },
  {
    id: 'FB-002',
    name: 'SANG - AT Festival of Valencia',
    role: 'Cultural & Foundation Day Celebration Page',
    url: 'https://www.facebook.com/profile.php?id=61595179684543',
    verificationStatus: 'Community Cultural Channel',
    scope: 'Celebrating the heritage, river-and-sea traditions, and community spirit of Valencianhons.'
  },
  {
    id: 'FB-003',
    name: 'SK Federation of Valencia, Bohol',
    role: 'Sangguniang Kabataan Municipal Federation',
    url: 'https://www.facebook.com/skfederationvalenciabohol',
    verificationStatus: 'Municipal Youth Federation',
    scope: 'Youth leadership, barangay SK councils, sports, education, and community volunteer programs.'
  },
  {
    id: 'PPDO-BOHOL',
    name: 'Bohol Provincial Planning and Development Office (PPDO)',
    role: 'Provincial Socio-Economic & CY2025 Tourism Profile',
    url: 'https://ppdo.bohol.gov.ph/ppdofiles/Profile/SocioEconomicProfile/EconomicDevelopment/TourismProfile2025.pdf',
    verificationStatus: 'Provincial Reference Document',
    scope: 'Provincial inventory of Valencia’s established landmarks, heritage structures, and ecotourism sites.'
  },
  {
    id: 'PSA-PSGC',
    name: 'Philippine Statistics Authority — PSGC Valencia, Bohol (0701247000)',
    role: 'National Statistical & Geographic Registry',
    url: 'https://psa.gov.ph/classification/psgc/barangays/0701247000',
    verificationStatus: 'National Statistical Registry',
    scope: '2024 Census of Population (28,535 residents) and official classification of Valencia’s 35 barangays.'
  },
  {
    id: 'DILG-FDP',
    name: 'DILG Full Disclosure Policy (FDP) Portal',
    role: 'National Local Government Financial & Procurement Portal',
    url: 'https://fdpp.dilg.gov.ph/',
    verificationStatus: 'National Transparency Portal',
    scope: 'Public repository for local government budget, utilization, and procurement disclosures under DILG regulations.'
  }
] as const;

export const CONFLICTS_SUMMARY = [
  {
    id: 'Municipal Founding Date',
    topic: '1867 and October 27, 1869 Historical Accounts',
    claimA: 'General municipal summaries record 1867 as the year Panangatan was separated from Dimiao and named Valencia.',
    claimB: 'Provincial tourism and parish chronicles cite October 27, 1869 as the formal institution of the town, followed by independent parish establishment in 1871.',
    handling: 'Valencia commemorates its Foundation Day annually around October 27.'
  },
  {
    id: 'Sang-at Festival Chronology',
    topic: 'Foundation Day Street-Dance Tradition (2022–2023)',
    claimA: 'Local press coverage in November 2023 highlighted the Sang-at Festival showdown during the 154th Foundation Day.',
    claimB: 'Cultural studies also reference festival origins during the 153rd Foundation Day in October 2022.',
    handling: 'Both milestones mark the post-pandemic revival of Valencia’s Foundation Day cultural showcase.'
  },
  {
    id: 'Parish Heritage Recognition',
    topic: 'Important Cultural Property (ICP) Designation',
    claimA: 'On September 12, 2023, the National Museum of the Philippines formally turned over Important Cultural Property (ICP) markers for the Sr. Santo Niño Parish Church and Convent.',
    claimB: 'Completed in 1882 under Fray Francisco Arraya, the church preserves its signature two-tone tindalo and molave hardwood floor.',
    handling: 'Recognized nationally as an Important Cultural Property.'
  },
  {
    id: 'Southern Coastal Distance',
    topic: 'Overland Travel from Tagbilaran City',
    claimA: 'Located along the Bohol South Road roughly 42 to 46 kilometers east of Tagbilaran City.',
    claimB: 'Bounded by Dimiao to the west, Garcia Hernandez to the east, Carmen and Sierra Bullones to the north, and the Bohol Sea to the south.',
    handling: 'Accessible via regular southern coastal bus and van routes from Tagbilaran Integrated Bus Terminal.'
  }
] as const;
