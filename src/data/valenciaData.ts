export type ReadinessStatus = 'established' | 'potential' | 'status_pending_verification';

export type VisualMotif =
  | 'panangatan-hero'
  | 'sang-at-dance'
  | 'church-floor'
  | 'badiang-spring'
  | 'highland-peaks'
  | 'kinawa-falls'
  | 'caves-karst'
  | 'tabu-market'
  | 'anoyon-classroom'
  | 'pangian-livelihood'
  | 'ancestral-house'
  | 'danao-lake';

export interface MediaSlotSpec {
  slotId: string;
  candidateId: string;
  title: string;
  subject: string;
  barangay: string;
  motif: VisualMotif;
  aspectRatio: '16:9' | '4:3' | '3:2' | '4:5';
  approvalStatus: 'NOT_APPROVED';
  statusLabel: string;
  creditLine: string;
  approvedDropInPath: string;
  acquisitionNote: string;
}

export interface DestinationItem {
  slug: string;
  name: string;
  alternateName?: string;
  barangay: string;
  category: 'Spring & Coast' | 'Heritage & Architecture' | 'Highlands & Peaks' | 'Falls & Lakes' | 'Karst Caves';
  readiness: ReadinessStatus;
  readinessLabel: string;
  ppdoPage: string;
  sourceIds: string[];
  mediaSlotId: string;
  summary: string;
  editorialBody: string[];
  visitorNotice: string;
  sensitivityNote?: string;
  hasDedicatedDetail: boolean;
}

export interface StoryItem {
  slug: string;
  route: string;
  kicker: string;
  title: string;
  subtitle: string;
  barangayOrPlace: string;
  eventOrRecordDate: string;
  reviewDate: string;
  sourceIds: string[];
  mediaSlotId: string;
  editorialStatus: string;
  conflictDisclosure?: string;
  summary: string;
  body: string[];
}

export interface ProgressItem {
  slug: string;
  title: string;
  dateLabel: string;
  sortDate: string;
  barangay: string;
  statusCategory: 'verified_completed' | 'verified_launched' | 'proposed_concept' | 'lead_pending_verification';
  statusBadge: string;
  implementingBody: string;
  partnerOrDonor: string;
  sourceIds: string[];
  sourceUrl?: string;
  mediaSlotId: string;
  summary: string;
  details: string[];
  verificationNote: string;
}

export interface UpdateItem {
  slug: string;
  title: string;
  publishedDate: string;
  eventDate: string;
  category: 'Cultural Milestone' | 'Education & Civic' | 'Governance & Digital' | 'Heritage Record';
  recordState: 'Archival / Source-Referenced Record' | 'Verified Historical Milestone';
  publisher: string;
  sourceId: string;
  sourceUrl?: string;
  summary: string;
  keyFacts: string[];
  cautionNote: string;
}

export interface BarangayItem {
  psgc: string;
  name: string;
  zone: 'Poblacion & Coastal' | 'Upland & Interior';
  notableFeatures: string;
}

export interface ServiceCategoryItem {
  id: string;
  title: string;
  office: string;
  summary: string;
  charterStatus: string;
  publicGuidance: string[];
  officialChannelNote: string;
}

export interface SearchDocument {
  id: string;
  title: string;
  section: 'Page' | 'Discover' | 'Culture & Stories' | 'Progress' | 'Updates' | 'Government';
  url: string;
  badge: string;
  summary: string;
  keywords: string;
}

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

export const MEDIA_SLOTS: Record<string, MediaSlotSpec> = {
  'hero-panangatan': {
    slotId: 'hero-panangatan',
    candidateId: 'R004 / R020',
    title: 'Panangatan River Mouth & Coastal Horizon at Dawn',
    subject: 'Where fishermen lifted (sang-at) their bancas onto nipa-lined riverbanks during the southwest habagat monsoon',
    barangay: 'Poblacion Coastal Corridor, Valencia, Bohol',
    motif: 'panangatan-hero',
    aspectRatio: '16:9',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed architectural placeholder · Target: Commissioned coastal/river-mouth aerial (Ref R004)',
    approvedDropInPath: '/media/approved/hero-panangatan.jpg',
    acquisitionNote: 'Request LGU PIO drone/coastal original or commission dawn shoot at Panangatan river mouth.'
  },
  'sang-at-street-dance': {
    slotId: 'sang-at-street-dance',
    candidateId: 'R007 / R011 / R019',
    title: 'Tribung Hamiling Sang-at — Street Dance & Boat-Lifting Choreography',
    subject: 'School and community contingents performing the story of Panangatan boat shelter and Valencianhon resilience',
    barangay: 'Poblacion Streets, Valencia (and Sandugo 2026 Provincial Showcase)',
    motif: 'sang-at-dance',
    aspectRatio: '16:9',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed festival composition · Ref R007 (PIA 2026-07-26) & R019 (Bohol Times 2023-11-05)',
    approvedDropInPath: '/media/approved/sang-at-street-dance.jpg',
    acquisitionNote: 'Obtain written permission and high-res originals from LGU Tourism Office / Sang-at Festival Committee.'
  },
  'sto-nino-floor': {
    slotId: 'sto-nino-floor',
    candidateId: 'R002 / R005',
    title: '1882 Two-Tone Hardwood Floor of Sr. Santo Niño Parish Church',
    subject: 'Alternating dark tindalo (balayong) and light molave (tugas) planks forming an eight-pointed flower at the transept crossing and herringbone down the nave',
    barangay: 'Poblacion Occidental, Valencia, Bohol',
    motif: 'church-floor',
    aspectRatio: '4:3',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed geometric study · Ref R005 (PIA ICP Marker Turnover, 2023-09-12)',
    approvedDropInPath: '/media/approved/sto-nino-floor.jpg',
    acquisitionNote: 'Request parish photography authorization and National Museum ICP marker documentation.'
  },
  'badiang-spring-sea': {
    slotId: 'badiang-spring-sea',
    candidateId: 'R021',
    title: 'Badiang Spring Waterfall Cascading Toward the Bohol Sea',
    subject: 'Cold subterranean freshwater spring emerging from coastal limestone cliffs beside warm marine waters',
    barangay: 'Barangay Anas, Valencia, Bohol',
    motif: 'badiang-spring',
    aspectRatio: '16:9',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed coastal spring study · Ref PPDO CY2025 p. 192 & R021',
    approvedDropInPath: '/media/approved/badiang-spring-sea.jpg',
    acquisitionNote: 'Commission golden-hour shoot at Barangay Anas with resort management clearance.'
  },
  'highland-ridges': {
    slotId: 'highland-ridges',
    candidateId: 'PPDO-HIGHLANDS',
    title: 'Banderahan Peak, Ugjong Peak & Kabotbot Hills Ridgeline',
    subject: 'Elevated limestone and grassy ridgelines overlooking southern Bohol and neighboring Garcia Hernandez',
    barangay: 'Barangays Banderahan & Limocon, Valencia, Bohol',
    motif: 'highland-peaks',
    aspectRatio: '16:9',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed topographic study · Ref PPDO CY2025 pp. 192–195',
    approvedDropInPath: '/media/approved/highland-ridges.jpg',
    acquisitionNote: 'Commission ridge panorama from Limocon and Banderahan after trail verification.'
  },
  'kinawa-cauldron': {
    slotId: 'kinawa-cauldron',
    candidateId: 'PPDO-KINAWA',
    title: 'Kinawa Falls — Forest Cauldron Basin & Cold Spring Stream',
    subject: 'Cauldron-shaped rock basin (from Cebuano kawa) shaded by forest canopy in interior Valencia',
    barangay: 'Barangay Tausi-on ( & Omjon), Valencia, Bohol',
    motif: 'kinawa-falls',
    aspectRatio: '4:3',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed waterfall study · Ref PPDO CY2025 p. 193',
    approvedDropInPath: '/media/approved/kinawa-cauldron.jpg',
    acquisitionNote: 'Potential ecotourism site; photograph only with municipal tourism guide.'
  },
  'karst-caves': {
    slotId: 'karst-caves',
    candidateId: 'PPDO-CAVES',
    title: 'Inland Karst Chambers — Cabjawan, Maubo, Taculing & Ughob Caves',
    subject: 'Stalactites, stalagmites, and limestone cave portals identified in the municipal ecotourism inventory',
    barangay: 'Barangays Nailo, Maubo, Banderahan & Botong',
    motif: 'caves-karst',
    aspectRatio: '4:3',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed geological study · Ref PPDO CY2025 pp. 192–195',
    approvedDropInPath: '/media/approved/karst-caves.jpg',
    acquisitionNote: 'Requires DENR/LGU environmental clearance and community consultation before entry.'
  },
  'sunday-tabu-market': {
    slotId: 'sunday-tabu-market',
    candidateId: 'R014',
    title: 'Sunday Tabu Market & Traditional Weaving / Pottery Livelihoods',
    subject: 'Weekly Sunday community market gathering farm produce, coastal catch, and traditional household crafts',
    barangay: 'Poblacion Public Market, Valencia, Bohol',
    motif: 'tabu-market',
    aspectRatio: '3:2',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed market study · Archival ref R014 (Wikimedia Commons 2009 CC BY-SA 3.0, P199 — held pending current shoot)',
    approvedDropInPath: '/media/approved/sunday-tabu-market.jpg',
    acquisitionNote: '2009 Commons file R014 is outdated; commission current Sunday Tabu and Paleng-QR vendor photography with consent.'
  },
  'anoyon-classroom': {
    slotId: 'anoyon-classroom',
    candidateId: 'R006',
    title: 'Anoyon High School Two-Storey, Four-Classroom Building Turnover',
    subject: 'Official March 18, 2026 classroom turnover funded through the Embassy of Japan Grassroots Human Security Projects (GGP)',
    barangay: 'Barangay Anoyon, Valencia, Bohol',
    motif: 'anoyon-classroom',
    aspectRatio: '16:9',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed architectural elevation · Ref R006 / S003 (Embassy of Japan release, 2026-03-19)',
    approvedDropInPath: '/media/approved/anoyon-classroom.jpg',
    acquisitionNote: 'Request written photo reuse clearance from Embassy of Japan in the Philippines / DepEd Bohol.'
  },
  'pangian-livelihood': {
    slotId: 'pangian-livelihood',
    candidateId: 'S029-MEDIA',
    title: 'Agricultural Recovery & Community Farming in Interior Barangays',
    subject: 'Smallholder farmer associations, rice and coconut terraces, and the Barangay Pangi-an Swine Industry Recovery initiative',
    barangay: 'Barangay Pangi-an & Interior Barangays, Valencia',
    motif: 'pangian-livelihood',
    aspectRatio: '3:2',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed agricultural study · Ref S029 (DA INSPIRE / BaPaSFA lead)',
    approvedDropInPath: '/media/approved/pangian-livelihood.jpg',
    acquisitionNote: 'Coordinate with Municipal Agriculture Office and BaPaSFA officers for consented field portraits.'
  },
  'lim-ancestral-house': {
    slotId: 'lim-ancestral-house',
    candidateId: 'PPDO-LIM',
    title: 'Dr. Canuto Lim Ancestral House — Preserved Timber Heritage',
    subject: 'Multi-generational heritage residence in Poblacion Occidental featuring preserved hardwood flooring above street-level commerce',
    barangay: 'Poblacion Occidental, Valencia, Bohol',
    motif: 'ancestral-house',
    aspectRatio: '4:3',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed architectural study · Ref PPDO CY2025 p. 193',
    approvedDropInPath: '/media/approved/lim-ancestral-house.jpg',
    acquisitionNote: 'Private family residence; exterior/interior photography requires explicit Lim family permission.'
  },
  'danao-lake': {
    slotId: 'danao-lake',
    candidateId: 'PPDO-DANAO',
    title: 'Danao Lake — Inland Tilapia Aquaculture & Forested Basin',
    subject: 'Irregularly shaped inland lake surrounded by dense vegetation supporting barangay tilapia cage livelihoods',
    barangay: 'Barangay Danao, Valencia, Bohol',
    motif: 'danao-lake',
    aspectRatio: '4:3',
    approvalStatus: 'NOT_APPROVED',
    statusLabel: 'Valencia image awaiting approved original',
    creditLine: 'Art-directed inland water study · Ref PPDO CY2025 p. 193',
    approvedDropInPath: '/media/approved/danao-lake.jpg',
    acquisitionNote: 'Coordinate with Barangay Danao fisherfolk association before visiting.'
  }
};

export const DESTINATIONS: DestinationItem[] = [
  {
    slug: 'badiang-spring',
    name: 'Badiang Spring Resort and Hotel',
    alternateName: 'Also listed as Badian Spring in older PPDO web tables (spelling variation documented in conflicts register)',
    barangay: 'Barangay Anas',
    category: 'Spring & Coast',
    readiness: 'established',
    readinessLabel: 'Established Destination · Confirm Current Operations',
    ppdoPage: 'Bohol PPDO CY2025 Tourism Profile, printed p. 192 (PDF p. 196)',
    sourceIds: ['S001', 'S024', 'S025', 'S036'],
    mediaSlotId: 'badiang-spring-sea',
    summary:
      'Valencia’s signature coastal spring in Barangay Anas where cold subterranean freshwater gushes out of limestone rock, fills swimming pools, cascades down a waterfall, and pours directly into the Bohol Sea.',
    editorialBody: [
      'Documented in the Bohol PPDO CY2025 Tourism Profile (p. 192), Badiang Spring Resort and Hotel in Barangay Anas is the municipality’s best-known natural attraction because it pairs two distinct water environments within a few steps: cold subterranean freshwater from coastal rocks and the open marine waters of the Bohol Sea.',
      'The continuously flowing spring feeds two concrete swimming pools (for adults and children) and cascades as a waterfall before draining straight into the sea below. According to provincial inventory descriptions, the site includes cottages, function rooms, and accommodation spaces along a 1,250-square-meter shore lot.',
      'Editorial & Visitor Integrity Note: While Badiang Spring is an established destination along the southern coastal highway, this prototype intentionally omits unverified entrance fees, cottage rates, and operating hours until the current resort management provides an authorized 2026 schedule.'
    ],
    visitorNotice:
      'Operating status, entrance fees, cottage reservations, and lifeguard schedules are not asserted in this prototype. Verify directly with municipal tourism authorities before travel.',
    hasDedicatedDetail: true
  },
  {
    slug: 'sto-nino-parish-church',
    name: 'Sr. Santo Niño Parish Church & Convent',
    barangay: 'Poblacion Occidental (Sawang)',
    category: 'Heritage & Architecture',
    readiness: 'established',
    readinessLabel: 'Established Heritage Landmark · Important Cultural Property',
    ppdoPage: 'Bohol PPDO CY2025 Tourism Profile, printed p. 195 (PDF p. 199)',
    sourceIds: ['S001', 'S008', 'S014', 'S024', 'S025'],
    mediaSlotId: 'sto-nino-floor',
    summary:
      'Established as an independent parish in 1871 and completed in 1882 with an extraordinary two-tone hardwood parquet floor of dark tindalo and light molave planks; recognized with National Museum Important Cultural Property (ICP) markers in September 2023.',
    editorialBody: [
      'Separated spiritually from Dimiao as an independent parish in 1871 under the Augustinian Recollects, the construction of Valencia’s cruciform church began under Fray Mariano Cornago (1870–1877) and reached completion in 1882 under Fray Francisco Arraya.',
      'Its most celebrated architectural treasure is the 1882 hardwood floor laid by Fray Arraya: alternating dark tindalo (balayong) and light molave (tugas) wood planks arranged in a dramatic eight-pointed flower motif at the transept crossing and herringbone patterns throughout the nave. Unusually among Bohol churches, the interior remains largely unpainted, framing neoclassical retablos, while the historic convent sits across the street rather than beside the nave.',
      'On September 12, 2023, the National Museum of the Philippines (NMP) formally turned over Important Cultural Property (ICP) markers for the church and convent complex (PIA Bohol, S008). Note: Secondary blog claims calling the church a "National Cultural Treasure" are unconfirmed in primary NMP press records and are withheld here.'
    ],
    visitorNotice:
      'Active Roman Catholic parish church. Respect liturgical schedules, dress modestly, and request parish office permission before conducting commercial or tripod photography.',
    hasDedicatedDetail: true
  },
  {
    slug: 'lim-ancestral-house',
    name: 'Dr. Canuto Lim Ancestral House',
    barangay: 'Poblacion Occidental (Sawang)',
    category: 'Heritage & Architecture',
    readiness: 'status_pending_verification',
    readinessLabel: 'Private Family Heritage Structure · Exterior View Only',
    ppdoPage: 'Bohol PPDO CY2025 Tourism Profile, printed p. 193 (PDF p. 197)',
    sourceIds: ['S001', 'S024'],
    mediaSlotId: 'lim-ancestral-house',
    summary:
      'A multi-generational family ancestral residence in Poblacion Occidental recognized by the provincial tourism inventory for its preserved historic wooden flooring and role in town center history.',
    editorialBody: [
      'Listed in the Bohol PPDO CY2025 Tourism Profile (p. 193) under History and Culture, the Dr. Canuto Lim Ancestral House in Poblacion Occidental has been owned and preserved by the same family across several generations.',
      'The upper residential level retains its well-preserved historic hardwood flooring, while the ground floor has historically accommodated local business establishments in the town center.',
      'Because this landmark remains a privately owned residence with active commercial tenants, it is presented as an architectural heritage reference rather than a public museum.'
    ],
    visitorNotice:
      'Private property. Interior access is not open to the general public without explicit invitation and consent from the Lim family.',
    hasDedicatedDetail: true
  },
  {
    slug: 'kinawa-falls',
    name: 'Kinawa Falls',
    barangay: 'Barangay Tausi-on',
    category: 'Falls & Lakes',
    readiness: 'potential',
    readinessLabel: 'Potential Ecotourism Site · 2023 SOMA Priority',
    ppdoPage: 'Bohol PPDO CY2025 Tourism Profile, printed pp. 193–194 (PDF pp. 197–198)',
    sourceIds: ['S001', 'S024'],
    mediaSlotId: 'kinawa-cauldron',
    summary:
      'An ice-cold forest waterfall in Barangay Tausi-on whose rock basin resembles a traditional cauldron (Cebuano kawa), highlighted in the 2023 State of the Municipality Address as one of 14 potential ecotourism sites.',
    editorialBody: [
      'Situated in Barangay Tausi-on, Kinawa Falls takes its name from the Visayan root word kawa (cauldron), describing the natural stone basin carved beneath the falls and surrounded by large rock formations and forest canopy.',
      'According to the Bohol PPDO CY2025 Tourism Profile (pp. 193–194), Kinawa Falls was specifically cited in the 2023 State of the Municipality Address (SOMA) as one of fourteen (14) potential tourist sites identified to expand Valencia’s inland ecotourism corridor.',
      'Because the site is categorized as a potential attraction rather than a developed resort, trail grading, safety signage, and local guide protocols must be verified with the Municipal Tourism Office prior to any visit.'
    ],
    visitorNotice:
      'Categorized by PPDO as a potential ecotourism site. Trail safety, river conditions during rainfall, and local guide requirements are unverified.',
    hasDedicatedDetail: true
  },
  {
    slug: 'anislag-spring',
    name: 'Anislag Spring',
    barangay: 'Barangay Omjon',
    category: 'Spring & Coast',
    readiness: 'potential',
    readinessLabel: 'Potential Site · Community-Maintained Since 2014',
    ppdoPage: 'Bohol PPDO CY2025 Tourism Profile, printed p. 192 (PDF p. 196)',
    sourceIds: ['S001', 'S024'],
    mediaSlotId: 'kinawa-cauldron',
    summary:
      'A crystal-clear cold spring nestled in a lush rainforest pocket of Barangay Omjon, named after the surrounding Anislag trees and maintained by the local community since 2014.',
    editorialBody: [
      'Located in Barangay Omjon, Anislag Spring is a natural cold spring shaded by rainforest vegetation and named after the Anislag trees abundant in the area.',
      'The Bohol PPDO CY2025 Tourism Profile (p. 192) notes that Barangay Omjon residents have actively maintained the spring since 2014 and lists it among Valencia’s fourteen (14) potential sites identified to boost local tourism.'
    ],
    visitorNotice:
      'Potential community ecotourism site. Coordinate with Barangay Omjon officials before visiting; no commercial hours or fees are published.',
    hasDedicatedDetail: false
  },
  {
    slug: 'banderahan-ugjong-highlands',
    name: 'Banderahan Peak, Ugjong Peak & Kabotbot Hills',
    barangay: 'Barangays Banderahan & Limocon',
    category: 'Highlands & Peaks',
    readiness: 'potential',
    readinessLabel: 'Potential Highland Sites · Panorama & Trail Corridor',
    ppdoPage: 'Bohol PPDO CY2025 Tourism Profile, printed pp. 192, 193, 195',
    sourceIds: ['S001', 'S024'],
    mediaSlotId: 'highland-ridges',
    summary:
      'Three upland viewpoints in Barangays Banderahan and Limocon offering sweeping panoramas over Valencia and Garcia Hernandez, WWII lookout history, camping ridges, and motor-trail terrain.',
    editorialBody: [
      'Valencia’s interior rises to 485 meters above sea level, forming a scenic highland belt documented across three entries in the Bohol PPDO CY2025 Tourism Profile:',
      '1. Banderahan Peak (Barangay Banderahan, p. 192): The highest vantage point in its sector, offering views across Valencia and neighboring Garcia Hernandez. During World War II, Japanese forces utilized the peak as a strategic lookout post.',
      '2. Ugjong Peak (Barangay Limocon, p. 195): A panoramic ridge overlooking rolling hills and nearby municipalities, frequented by local campers, hikers, and mountain bikers.',
      '3. Kabotbot Hills (Barangay Limocon, p. 193): Interconnected curved hills known locally as a venue for motor-trail events and identified among Valencia’s 14 potential tourism sites.'
    ],
    visitorNotice:
      'Upland ridges with unverified trail markers and weather exposure. WWII historical notes from PPDO await archival corroboration.',
    hasDedicatedDetail: true
  },
  {
    slug: 'danao-lake',
    name: 'Danao Lake',
    barangay: 'Barangay Danao',
    category: 'Falls & Lakes',
    readiness: 'status_pending_verification',
    readinessLabel: 'Livelihood & Nature Basin · Status Pending Verification',
    ppdoPage: 'Bohol PPDO CY2025 Tourism Profile, printed p. 193 (PDF p. 197)',
    sourceIds: ['S001', 'S024'],
    mediaSlotId: 'danao-lake',
    summary:
      'An irregularly shaped inland lake in Barangay Danao framed by trees and utilized by residents for tilapia fish-cage aquaculture.',
    editorialBody: [
      'Recorded on page 193 of the Bohol PPDO CY2025 Tourism Profile, Danao Lake in Barangay Danao features greenish waters shaped by natural algae growth and surrounding forest plants.',
      'Beyond its scenic character, the lake functions as an active community livelihood resource where local residents maintain tilapia fish cages.'
    ],
    visitorNotice:
      'Active community aquaculture site. Visitor facilities and public access routes are not yet established.',
    hasDedicatedDetail: false
  },
  {
    slug: 'valencia-karst-caves',
    name: 'Inland Karst Cave System: Cabjawan, Maubo, Taculing & Ughob Caves',
    barangay: 'Barangays Nailo, Maubo, Banderahan & Botong',
    category: 'Karst Caves',
    readiness: 'potential',
    readinessLabel: 'Prospective Cave Sites · Environmental & Cultural Safeguards Apply',
    ppdoPage: 'Bohol PPDO CY2025 Tourism Profile, printed pp. 192–195',
    sourceIds: ['S001', 'S024'],
    mediaSlotId: 'karst-caves',
    summary:
      'Four limestone caves recorded in the PPDO CY2025 inventory—Cabjawan (Nailo), Maubo (Maubo), Taculing (Banderahan), and Ughob (Botong)—featuring stalactites, balinsasayaw swiftlets, WWII history, and sensitive folk-healing traditions.',
    editorialBody: [
      'The Bohol PPDO CY2025 Tourism Profile documents four distinct inland caves among Valencia’s fourteen (14) prospective ecotourism sites:',
      '• Cabjawan Cave (Barangay Nailo, p. 192–193): Surrounded by ornamental plants and trees with a narrow single-person entrance leading to stalactite/stalagmite chambers and resident bat colonies.',
      '• Maubo Cave (Barangay Maubo, p. 194): Home to cave-dwelling balinsasayaw birds and limestone formations; documented as a site where traditional folk healers (tambalan or meriko) perform Lenten dangkoy-dangkoy healing rituals.',
      '• Taculing Cave (Barangay Banderahan, p. 195): Used as a hideout during the Japanese occupation in World War II; PPDO notes the presence of human bone traces inside the chamber (unverified community treasure rumors mentioned in the profile are excluded from factual promotion).',
      '• Ughob Cave (Barangay Botong, p. 195): Vegetated cave mouth where stalactites, stalagmites, and dripping mineral water are visible from the entrance chamber.'
    ],
    visitorNotice:
      'Do not enter caves without LGU/DENR authorization and trained guides. Respect bat/swiftlet habitats, WWII remains at Taculing Cave, and living spiritual practices at Maubo Cave.',
    sensitivityNote:
      'High cultural & archaeological sensitivity: Maubo Cave involves living Lenten healing practices, and Taculing Cave contains reported WWII human remains. Community and heritage consultation is required before public promotion.',
    hasDedicatedDetail: true
  }
];

export const STORIES: StoryItem[] = [
  {
    slug: 'sang-at-festival',
    route: '/culture/sang-at',
    kicker: 'Flagship Cultural Feature · ST02',
    title: 'Sang-at: How a Riverbank Shelter Became Valencia’s Cultural Signature',
    subtitle:
      'From fishermen lifting boats onto nipa riverbanks during the habagat monsoon to street-dance showdowns in Poblacion and on the provincial Sandugo stage.',
    barangayOrPlace: 'Poblacion & Panangatan River Corridor, Valencia, Bohol',
    eventOrRecordDate: ' commemorated annually around October 27 (Sandugo showcase July 26, 2026)',
    reviewDate: '2026-11-06',
    sourceIds: ['S002', 'S004', 'S022', 'S024', 'S027', 'S032'],
    mediaSlotId: 'sang-at-street-dance',
    editorialStatus: 'Verified Cultural Narrative · Chronology Conflict Disclosed',
    conflictDisclosure:
      'Inaugural Year Conflict (C2): The Bohol Times (Nov 5, 2023, S027) reports the "first-ever Sang-at Festival" capped the 154th Foundation Day in late October 2023, while an academic summary (S032) cites establishment at the 153rd anniversary on October 27, 2022. Both dates are disclosed pending LGU Tourism Office confirmation.',
    summary:
      'Rooted in the Cebuano verb sang-at ("to put up on an elevated place"), the Sang-at Festival dramatizes how early fishermen sheltered their boats along the Panangatan River—uniting schools, barangays, and youth performers.',
    body: [
      'Before Valencia bore the name of a Spanish coastal city, the settlement was known as Panangatan—a barrio of neighboring Dimiao shaped by the rhythm of the Bohol Sea and the southwest monsoon (habagat). When rough waves threatened coastal waters, fishermen from Dimiao and Lila navigated into the mouth of the Panangatan River and lifted (sang-at) their wooden outrigger boats onto the elevated, nipa-lined riverbanks so the tide could not sweep them away.',
      'That practical act of collective preservation—lifting what matters onto higher ground when the storm arrives—is the heart of the Sang-at Festival. Celebrated in late October to mark Valencia’s Foundation Day anniversary, the festival transforms town streets into a choreographed narrative of fishing bancas, nipa palms, agricultural harvest, and devotion to Sr. Santo Niño.',
      'In the November 5, 2023 report by The Bohol Times (S027), the 154th Foundation Day celebration featured "Suroy sa Valencia," a Bike Challenge, the "Pasundayag sa Chibugan" food and trade fair, a Senior Citizens’ grand parade, the "Sadsad sa Dalan" street parade, and the "Painsayaw" ritual dance showdown—where the Valencia Technical Vocational High School (VTVHS) contingent claimed top honors followed by Valencia Central Elementary School (VCES).',
      'By July 26, 2026, Valencia’s cultural contingent—performing as Tribung Hamiling Sang-at—brought this local river-and-sea heritage to the provincial stage during Bohol’s Sandugo Street Dancing showcase in Tagbilaran City, as featured by the Philippine Information Agency (PIA, September 7, 2026, S002). Note: In accordance with source discipline, participation is verified; no competitive placement is inferred.'
    ]
  },
  {
    slug: 'panangatan-origin',
    route: '/stories/panangatan-origin',
    kicker: 'Origin & Identity Essay · ST01',
    title: 'Where the Boats Were Lifted: From Barrio Panangatan to the Municipality of Valencia',
    subtitle:
      'Tracing the coastal geography, monsoon shelter, and 19th-century parish foundations that separated Valencia from Dimiao.',
    barangayOrPlace: 'Panangatan River & Poblacion, Valencia, Bohol',
    eventOrRecordDate: '1867 / October 27, 1869 (Historical Record)',
    reviewDate: '2026-11-06',
    sourceIds: ['S001', 'S024', 'S025'],
    mediaSlotId: 'hero-panangatan',
    editorialStatus: 'Sourced Historical Feature · Founding Year Variance Noted',
    conflictDisclosure:
      'Founding Year Variance (C1): The Bohol PPDO CY2025 Tourism Profile (p. 194–195) and church histories state that Panangatan and adjacent barrios were instituted as a town on October 27, 1869 (and a separate parish in 1871), whereas Wikipedia’s general history paragraph cites 1867 when a Spanish priest renamed the town after Valencia, Spain. Both dates are preserved here awaiting official Sangguniang Bayan historical resolution.',
    summary:
      'Why Valencia’s geography—a coastal plain backed by 485-meter limestone ridges and bisected by the Panangatan River—explains both its pre-colonial name and its modern identity.',
    body: [
      'Every meaningful story in Valencia begins where freshwater meets the Bohol Sea. Along the southern coast roughly 42 to 46 kilometers east of Tagbilaran City, the Panangatan River offered a natural harbor bordered by thick nipa palms. Fishermen from adjacent coastal settlements used its elevated banks to haul up (sang-at) their boats during the southwest monsoon—giving rise to the place name Panangatan.',
      'Throughout the early Spanish colonial period, Panangatan remained a barrio under the jurisdiction of Dimiao to the west. In the late 1860s (recorded as 1867 in general municipal summaries and October 27, 1869 in the Bohol PPDO CY2025 Tourism Profile and parish chronicles), Panangatan was conjoined with neighboring barrios to form an independent municipality, renamed Valencia by its assigned Spanish recollect priest after Valencia on Spain’s coast.',
      'By 1871, the community became an independent parish dedicated to the Holy Child, Sr. Santo Niño, and by 1879 the young municipality recorded a population of 7,009 residents. Today, per the 2024 Philippine Statistics Authority census (PSGC 0701247000), Valencia encompasses 35 barangays and 28,535 residents bridging coastal fishing communities and upland farming villages.'
    ]
  },
  {
    slug: 'sto-nino-wooden-floor',
    route: '/stories/sto-nino-wooden-floor',
    kicker: 'Architectural Heritage Essay · ST03',
    title: 'Tindalo and Molave: Inside the 1882 Hardwood Floor of Santo Niño Parish',
    subtitle:
      'How Fray Francisco Arraya wove indigenous Philippine hardwoods into an eight-pointed crossing star and herringbone nave that earned Important Cultural Property recognition.',
    barangayOrPlace: 'Poblacion Occidental, Valencia, Bohol',
    eventOrRecordDate: '1870–1882 construction · September 12, 2023 ICP Marker Turnover',
    reviewDate: '2026-11-06',
    sourceIds: ['S008', 'S014', 'S024', 'S025'],
    mediaSlotId: 'sto-nino-floor',
    editorialStatus: 'Verified Heritage Record · ICP Status Confirmed',
    conflictDisclosure:
      'Heritage Designation Precision (C3): Primary government reporting from the Philippine Information Agency (September 12, 2023, S008) verifies that the National Museum of the Philippines turned over Important Cultural Property (ICP) markers for the Valencia Church and Convent. Secondary travel blog references claiming "National Cultural Treasure" status are not corroborated by the primary PIA record and are not asserted.',
    summary:
      'While most Bohol colonial churches are famous for ceiling murals or coral-stone facades, Valencia’s parish church looks downward—preserving an extraordinary 19th-century wooden parquet floor.',
    body: [
      'Step across the threshold of the Sr. Santo Niño Parish Church in Poblacion Occidental and the first masterpiece you encounter lies directly underfoot. Completed in 1882 by Fray Francisco Arraya—following earlier structural work begun by Fray Mariano Cornago between 1870 and 1877—the floor is crafted from contrasting indigenous hardwoods: dark reddish-brown tindalo (locally called balayong) and lighter golden molave (tugas).',
      'Along the length of the cruciform nave, the planks are fitted in a tight herringbone weave that guides the eye toward the sanctuary. Directly beneath the pyramidal crossing tower, the carpentry shifts into an intricate eight-pointed floral star medallion. Unlike many neighboring Bohol churches, Valencia’s interior walls remain unpainted, allowing the warmth of the timber floor and the neoclassical altars to define the space.',
      'Across the street stands the 19th-century parish convent—positioned opposite rather than adjacent to the church. On September 12, 2023, the National Museum of the Philippines formally unveiled Important Cultural Property (ICP) markers for both the church and convent (PIA, S008), affirming their national architectural significance.'
    ]
  },
  {
    slug: 'sunday-tabu-and-crafts',
    route: '/stories/sunday-tabu-and-crafts',
    kicker: 'Community & Livelihood Feature · ST09 & ST10',
    title: 'Sunday Tabu, Paleng-QR, and the Living Economy of Valencia’s 35 Barangays',
    subtitle:
      'Where upland coconut, rice, and corn growers meet coastal fishers every Sunday—now pairing traditional market day culture with digital payments and agricultural recovery.',
    barangayOrPlace: 'Poblacion Public Market & Barangay Pangi-an, Valencia',
    eventOrRecordDate: 'March 2026 Paleng-QR Launch & 2026 Livelihood Initiatives',
    reviewDate: '2026-11-06',
    sourceIds: ['S007', 'S012', 'S014', 'S025', 'S029'],
    mediaSlotId: 'sunday-tabu-market',
    editorialStatus: 'Sourced Community Brief · Field Interviews Recommended',
    conflictDisclosure:
      'Comparative Claim Caution: Local news (The Bohol Tribune, March 22, 2026, S007) reported Valencia’s Paleng-QR PH Plus launch; any comparative claim of being "first" requires primary Bangko Sentral ng Pilipinas (BSP) confirmation before official assertion.',
    summary:
      'From the weekly Sunday Tabu market in Poblacion to smallholder farmer associations in Barangay Pangi-an, Valencia’s economy blends traditional probinsya trade with 2026 modernization.',
    body: [
      'In southern Bohol, each municipality keeps its own weekly market day—known locally as Tabu—when upland farmers and coastal households converge in the town center. In Valencia, Tabu falls on Sunday (S025): early morning stalls fill with upland rice, coconuts, corn, root crops, bananas, live poultry, and freshly landed fish from the Bohol Sea, alongside traditional household weaving and pottery.',
      'In March 2026, Valencia’s public market vendors and local transport operators became part of the Paleng-QR PH Plus cashless payment rollout covered by The Bohol Tribune (March 22, 2026, S007), introducing QR Ph digital payment acceptance to everyday market transactions.',
      'Meanwhile, in interior barangays such as Barangay Pangi-an, community associations like the Barangay Pangi-an Small Farmers’ Association (BaPaSFA) are working with the Department of Agriculture’s Swine Industry Recovery Project (SIRP) to rebuild livestock livelihoods after African Swine Fever impacts (S029)—demonstrating how traditional rural solidarity underpins Valencia’s modern recovery.'
    ]
  }
];

export const PROGRESS_ITEMS: ProgressItem[] = [
  {
    slug: 'anoyon-high-school-classrooms',
    title: 'Anoyon High School Two-Storey, Four-Classroom Building Handover',
    dateLabel: 'March 18–19, 2026',
    sortDate: '2026-03-19',
    barangay: 'Barangay Anoyon',
    statusCategory: 'verified_completed',
    statusBadge: 'Verified Completed Turnover (Primary Donor Release)',
    implementingBody: 'Municipality of Valencia / Anoyon High School (DepEd Bohol)',
    partnerOrDonor: 'Embassy of Japan in the Philippines (Grant Assistance for Grassroots Human Security Projects - GGP)',
    sourceIds: ['S003'],
    sourceUrl: 'https://www.ph.emb-japan.go.jp/itpr_en/11_000001_02194.html',
    mediaSlotId: 'anoyon-classroom',
    summary:
      'Formal turnover of a new two-storey, four-classroom school building at Anoyon High School funded under Japan’s Official Development Assistance (ODA) Grassroots Human Security Projects.',
    details: [
      'Documented directly by an official press release of the Embassy of Japan in the Philippines dated March 19, 2026 (S003), the handover ceremony took place on March 18, 2026 in Barangay Anoyon.',
      'The project provides safe, purpose-built secondary school classrooms for students in Valencia’s upland barangays.',
      'Media Rights Note: Official ceremony photographs on the Embassy website remain copyright-protected; high-resolution reuse permission is queued in the photo request register (R006).'
    ],
    verificationNote: 'Primary official donor release verified (S003).'
  },
  {
    slug: 'paleng-qr-ph-plus-launch',
    title: 'Paleng-QR PH Plus Digital Payment Rollout in Valencia Public Market',
    dateLabel: 'March 22, 2026 (Report Date)',
    sortDate: '2026-03-22',
    barangay: 'Poblacion Public Market',
    statusCategory: 'verified_launched',
    statusBadge: 'Verified Local Press Report · Primary BSP Citation Pending',
    implementingBody: 'Municipal Government of Valencia & Public Market Vendors',
    partnerOrDonor: 'Bangko Sentral ng Pilipinas (BSP) / DILG Paleng-QR PH Plus Framework',
    sourceIds: ['S007'],
    sourceUrl: 'https://theboholtribune.com/2026/03/22/bisaya-news-145/',
    mediaSlotId: 'sunday-tabu-market',
    summary:
      'Launch of QR Ph digital payment acceptance for market vendors and local transport in Valencia, reported by The Bohol Tribune in March 2026.',
    details: [
      'Reported by The Bohol Tribune on March 22, 2026 (S007), the initiative introduces cashless QR Ph payment options at the Valencia Public Market.',
      'Discipline Note: Secondary reporting describes Valencia as a pioneering municipality in Bohol for the Plus rollout; comparative "first" claims are held pending primary BSP/DILG confirmation.'
    ],
    verificationNote: 'Secondary news article verified (S007); comparative superlative withheld.'
  },
  {
    slug: 'dap-ai-governance-and-carenav-proposals',
    title: 'DAP AI Governance Training & Proposed BARUG CARENav Service Ecosystem',
    dateLabel: 'October 25, 2026',
    sortDate: '2026-10-25',
    barangay: 'Municipal-wide (35 Barangays)',
    statusCategory: 'proposed_concept',
    statusBadge: 'Training Verified · CARENav / Poverty Early Warning are PROPOSED Concepts',
    implementingBody: 'Office of the Municipal Mayor / LGU Valencia',
    partnerOrDonor: 'Development Academy of the Philippines (DAP) AI Course',
    sourceIds: ['S020', 'S026'],
    sourceUrl: 'https://boholislandnews.com/2026/10/25/mayor-balite-lone-local-chief-executive-in-first-3-batches-of-dap-ai-course/',
    mediaSlotId: 'hero-panangatan',
    summary:
      'Participation in the Development Academy of the Philippines (DAP) artificial intelligence governance training, alongside proposed digital social-protection concepts under the BARUG Valencia agenda.',
    details: [
      'Per Bohol Island News (October 25, 2026, S026, full article text verified), Mayor Dionisio Neil A. Balite completed training among the first three batches of the DAP AI course for public sector leaders.',
      'The article outlines proposed—not yet deployed—initiatives under the BARUG Valencia agenda ("Better, Affectionate, Responsive and Unifying Governance"): the BARUG Valencia CARENav Ecosystem, a Poverty Early Warning System, and "Care Uber" community outreach coordination.',
      'Strict Accuracy Boundary: In this prototype, CARENav and the Poverty Early Warning System are explicitly labeled as proposed policy concepts rather than active municipal services.'
    ],
    verificationNote: 'Article text visited and verified (S026); proposals strictly separated from live operations.'
  },
  {
    slug: 'october-2026-inter-agency-project-discussions',
    title: 'Municipal Infrastructure & Inter-Agency Project Alignment Discussions',
    dateLabel: 'October 4, 2026',
    sortDate: '2026-10-04',
    barangay: 'Municipal-wide',
    statusCategory: 'proposed_concept',
    statusBadge: 'Verified Planning Discussion · Pre-Implementation',
    implementingBody: 'Municipal Government of Valencia Officials',
    partnerOrDonor: 'National & Provincial Partner Agencies',
    sourceIds: ['S006'],
    sourceUrl: 'https://theboholtimes.com/?p=19834',
    mediaSlotId: 'highland-ridges',
    summary:
      'Documented October 2026 coordination meetings by Valencia municipal officials covering prospective infrastructure and community programs.',
    details: [
      'Reported by The Bohol Times on October 4, 2026 (S006), municipal officials held project alignment discussions for upcoming development priorities.',
      'Presented as an institutional planning record; individual project budgets and completion dates are withheld until signed notices of award or official LGU disclosures are published.'
    ],
    verificationNote: 'Secondary news article verified (S006); treated as planning discussion only.'
  },
  {
    slug: 'pangian-swine-industry-recovery-project',
    title: 'Barangay Pangi-an Swine Industry Recovery Project (SIRP) Facility Groundbreaking',
    dateLabel: 'January 8, 2026 (Search Lead)',
    sortDate: '2026-01-08',
    barangay: 'Barangay Pangi-an',
    statusCategory: 'lead_pending_verification',
    statusBadge: 'Public Search Lead · Direct PIA Permalink & Completion Status Pending',
    implementingBody: 'Barangay Pangi-an Small Farmers’ Association (BaPaSFA)',
    partnerOrDonor: 'Department of Agriculture (DA INSPIRE / National Livestock Program) & ATI-7',
    sourceIds: ['S029'],
    mediaSlotId: 'pangian-livelihood',
    summary:
      'Reported January 8, 2026 groundbreaking for a 40-head swine production package in Barangay Pangi-an under the DA Swine Industry Recovery Project (SIRP) to help smallholder farmers recover from ASF.',
    details: [
      'Identified through Philippine Information Agency (PIA) / ATI-7 search summaries (S029), the project supports the Barangay Pangi-an Small Farmers’ Association (BaPaSFA) with a 40-head facility, piglets, feed allocation, and a rolling pass-on repayment-in-kind scheme.',
      'Transparency Note: Because the exact PIA permalink was not directly resolved during the unauthenticated research pass, this item is clearly marked as a pending-verification lead until the Municipal Agriculture Office confirms current operational status.'
    ],
    verificationNote: 'Search-summary lead (S029); requires direct PIA URL and current completion check.'
  },
  {
    slug: 'rpt-collection-efficiency-recognition',
    title: 'Real Property Tax (RPT) Collection Efficiency Recognition — LGU Bohol Awards',
    dateLabel: 'May 2026 (Search Lead)',
    sortDate: '2026-05-15',
    barangay: 'Municipal Treasury Office',
    statusCategory: 'lead_pending_verification',
    statusBadge: 'Public Search Lead · Exact Award Citation Pending Verification',
    implementingBody: ' Valencia Municipal Treasury Office',
    partnerOrDonor: 'Provincial Government of Bohol',
    sourceIds: ['S030'],
    mediaSlotId: 'lim-ancestral-house',
    summary:
      'Reported May 2026 recognition of Valencia’s municipal treasury team for Real Property Tax (RPT) collection efficiency during the LGU Bohol Awards.',
    details: [
      'Surfaced via Provincial Government of Bohol (bohol.gov.ph) search results (S030) highlighting fiscal management performance in May 2026.',
      'Marked as pending verification of the exact provincial award citation, rank, and certificate text from the Municipal Treasurer’s Office.'
    ],
    verificationNote: 'Search-summary lead (S030); requires official certificate text before live claim.'
  }
];

export const UPDATES: UpdateItem[] = [
  {
    slug: 'dap-ai-course-october-2026',
    title: 'Valencia Mayor Completes DAP AI Governance Course; Outlines BARUG CARENav Proposals',
    publishedDate: '2026-10-25',
    eventDate: 'October 2026',
    category: 'Governance & Digital',
    recordState: 'Archival / Source-Referenced Record',
    publisher: 'Bohol Island News',
    sourceId: 'S026',
    sourceUrl: 'https://boholislandnews.com/2026/10/25/mayor-balite-lone-local-chief-executive-in-first-3-batches-of-dap-ai-course/',
    summary:
      'Coverage of Valencia’s participation in the Development Academy of the Philippines AI course and proposed data-assisted social outreach concepts under the BARUG Valencia framework.',
    keyFacts: [
      'Published October 25, 2026 by Bohol Island News (article text inspected in M01-A).',
      'Defines BARUG in press copy as "Better, Affectionate, Responsive and Unifying Governance."',
      'Mentions proposed BARUG Valencia CARENav Ecosystem and Poverty Early Warning System concepts.'
    ],
    cautionNote: 'Demo source record: CARENav items are proposed concepts, not live municipal services.'
  },
  {
    slug: 'officials-project-discussions-october-2026',
    title: 'Valencia Officials Convene for October 2026 Development & Project Discussions',
    publishedDate: '2026-10-04',
    eventDate: 'October 2026',
    category: 'Governance & Digital',
    recordState: 'Archival / Source-Referenced Record',
    publisher: 'The Bohol Times',
    sourceId: 'S006',
    sourceUrl: 'https://theboholtimes.com/?p=19834',
    summary:
      'Local press report on October 2026 project coordination discussions involving Valencia municipal leadership.',
    keyFacts: [
      'Published October 4, 2026 by The Bohol Times (S006).',
      'Documents ongoing inter-office planning discussions.'
    ],
    cautionNote: 'Historical news reference; verify current official roles and project status with LGU PIO.'
  },
  {
    slug: 'sang-at-sandugo-2026-feature',
    title: 'Tribung Hamiling Sang-at Represents Valencia at Sandugo 2026 Street Dance Showcase',
    publishedDate: '2026-09-07',
    eventDate: 'July 26, 2026 (Sandugo Event)',
    category: 'Cultural Milestone',
    recordState: 'Verified Historical Milestone',
    publisher: 'Philippine Information Agency (PIA)',
    sourceId: 'S002',
    sourceUrl: 'https://pia.gov.ph/features/salt-caves-and-carabao-how-bohol-towns-put-local-heritage-on-the-street',
    summary:
      'PIA feature article highlighting how Bohol municipalities—including Valencia’s Sang-at contingent—brought local town history and livelihoods to the July 2026 Sandugo street dancing event.',
    keyFacts: [
      'Published September 7, 2026 by the Philippine Information Agency (S002).',
      'Documents Valencia’s participation in the July 26, 2026 provincial showcase.',
      'Note: Past event (July 2026); not an upcoming schedule.'
    ],
    cautionNote: 'Verified participation record; do not infer competition placement or photo reuse rights.'
  },
  {
    slug: 'paleng-qr-ph-plus-march-2026',
    title: 'Valencia Rolls Out Paleng-QR PH Plus Cashless Market Initiative',
    publishedDate: '2026-03-22',
    eventDate: 'March 18, 2026',
    category: 'Governance & Digital',
    recordState: 'Archival / Source-Referenced Record',
    publisher: 'The Bohol Tribune',
    sourceId: 'S007',
    sourceUrl: 'https://theboholtribune.com/2026/03/22/bisaya-news-145/',
    summary:
      'Cebuano news report on the rollout of QR Ph digital payments for Valencia public market vendors and local transport.',
    keyFacts: [
      'Published March 22, 2026 by The Bohol Tribune (S007).',
      'Supports digital payment adoption during weekly Tabu and daily market trade.'
    ],
    cautionNote: 'Comparative "first in Bohol" claim requires primary BSP verification before official use.'
  },
  {
    slug: 'anoyon-classroom-turnover-march-2026',
    title: 'Embassy of Japan Hands Over New Two-Storey Classroom Building at Anoyon High School',
    publishedDate: '2026-03-19',
    eventDate: 'March 18, 2026',
    category: 'Education & Civic',
    recordState: 'Verified Historical Milestone',
    publisher: 'Embassy of Japan in the Philippines',
    sourceId: 'S003',
    sourceUrl: 'https://www.ph.emb-japan.go.jp/itpr_en/11_000001_02194.html',
    summary:
      'Official donor release confirming the completion and handover of a four-classroom building in Barangay Anoyon under Japan’s GGP grant program.',
    keyFacts: [
      'Published March 19, 2026 by the Embassy of Japan in the Philippines (S003).',
      'Ceremony held March 18, 2026 at Anoyon High School, Valencia, Bohol.'
    ],
    cautionNote: 'Primary official release verified; photographs require separate Embassy permission.'
  },
  {
    slug: 'inaugural-sang-at-festival-november-2023',
    title: 'Inaugural Sang-at Festival Dance Showdown Caps Valencia’s 154th Founding Anniversary',
    publishedDate: '2023-11-05',
    eventDate: 'Late October 2023',
    category: 'Cultural Milestone',
    recordState: 'Verified Historical Milestone',
    publisher: 'The Bohol Times',
    sourceId: 'S004 / S027',
    sourceUrl: 'https://theboholtimes.com/?p=8403',
    summary:
      'Archival coverage of Valencia’s 154th Foundation Day celebration featuring Suroy sa Valencia, Pasundayag sa Chibugan, Sadsad sa Dalan, and the Painsayaw showdown won by VTVHS.',
    keyFacts: [
      'Published November 5, 2023 by The Bohol Times (full article text verified in M01-A, S027).',
      'Valencia Technical Vocational High School (VTVHS) won champion; Valencia Central Elementary School (VCES) placed first runner-up.'
    ],
    cautionNote: 'Archival 2023 festival report; note 2022 vs 2023 inaugural year variance in conflicts register.'
  },
  {
    slug: 'nmp-icp-markers-sto-nino-church-2023',
    title: 'National Museum Turns Over Important Cultural Property (ICP) Markers for Valencia Church & Convent',
    publishedDate: '2023-09-12',
    eventDate: 'September 2023',
    category: 'Heritage Record',
    recordState: 'Verified Historical Milestone',
    publisher: 'Philippine Information Agency (PIA)',
    sourceId: 'S008',
    sourceUrl: 'https://mirror.pia.gov.ph/news/2023/09/12/nmp-mitugyan-sa-icp-markers-sa-simbahan-kombento-sa-valencia-bohol',
    summary:
      'Cebuano government news report documenting the turnover of Important Cultural Property markers by the National Museum of the Philippines for the Sr. Santo Niño Parish Church and Convent in Valencia.',
    keyFacts: [
      'Published September 12, 2023 by PIA Bohol (S008).',
      'Confirms ICP marker recognition for the 1882 church and 19th-century convent.'
    ],
    cautionNote: 'Verified primary heritage milestone; parish and NMP photo permissions required for imagery.'
  }
];

export const BARANGAYS: BarangayItem[] = [
  { psgc: '071247001', name: 'Adlawan', zone: 'Upland & Interior', notableFeatures: 'Interior agricultural community' },
  { psgc: '071247002', name: 'Anas', zone: 'Poblacion & Coastal', notableFeatures: 'Home to Badiang Spring Resort and Hotel along the coastal cliff' },
  { psgc: '071247003', name: 'Anonang', zone: 'Upland & Interior', notableFeatures: 'Interior farming barangay' },
  { psgc: '071247004', name: 'Anoyon', zone: 'Upland & Interior', notableFeatures: 'Site of Anoyon High School March 2026 Japan GGP classroom turnover (S003)' },
  { psgc: '071247005', name: 'Balingasao', zone: 'Upland & Interior', notableFeatures: 'Rural agricultural settlement' },
  { psgc: '071247035', name: 'Banderahan (Upper Ginopolan)', zone: 'Upland & Interior', notableFeatures: 'Banderahan Peak panoramic lookout & Taculing Cave (PPDO CY2025)' },
  { psgc: '071247006', name: 'Botong', zone: 'Upland & Interior', notableFeatures: 'Site of Ughob Cave in PPDO CY2025 inventory' },
  { psgc: '071247007', name: 'Buyog', zone: 'Upland & Interior', notableFeatures: 'Interior agricultural barangay' },
  { psgc: '071247008', name: 'Canduao Occidental', zone: 'Poblacion & Coastal', notableFeatures: 'Western Canduao community' },
  { psgc: '071247009', name: 'Canduao Oriental', zone: 'Poblacion & Coastal', notableFeatures: 'Eastern Canduao community' },
  { psgc: '071247010', name: 'Canlusong', zone: 'Upland & Interior', notableFeatures: 'Upland farming community' },
  { psgc: '071247011', name: 'Canmanico', zone: 'Upland & Interior', notableFeatures: 'Interior highland barangay' },
  { psgc: '071247012', name: 'Cansibao', zone: 'Upland & Interior', notableFeatures: 'Interior agricultural barangay' },
  { psgc: '071247013', name: 'Catug-a', zone: 'Upland & Interior', notableFeatures: 'Rural farming community' },
  { psgc: '071247014', name: 'Cutcutan', zone: 'Poblacion & Coastal', notableFeatures: 'Coastal-corridor barangay' },
  { psgc: '071247015', name: 'Danao', zone: 'Upland & Interior', notableFeatures: 'Home to Danao Lake and community tilapia aquaculture (PPDO CY2025)' },
  { psgc: '071247016', name: 'Genoveva', zone: 'Upland & Interior', notableFeatures: 'Interior agricultural community' },
  { psgc: '071247017', name: 'Ginopolan (Ginopolan Proper)', zone: 'Upland & Interior', notableFeatures: 'Ginopolan proper rural community' },
  { psgc: '071247018', name: 'La Victoria', zone: 'Poblacion & Coastal', notableFeatures: 'Coastal-corridor community' },
  { psgc: '071247019', name: 'Lantang', zone: 'Upland & Interior', notableFeatures: 'Upland agricultural barangay' },
  { psgc: '071247020', name: 'Limocon', zone: 'Upland & Interior', notableFeatures: 'Ugjong Peak camping ridge & Kabotbot Hills motor-trail terrain (PPDO CY2025)' },
  { psgc: '071247021', name: 'Loctob', zone: 'Poblacion & Coastal', notableFeatures: 'Coastal barangay' },
  { psgc: '071247022', name: 'Magsaysay', zone: 'Upland & Interior', notableFeatures: 'Interior farming barangay' },
  { psgc: '071247023', name: 'Marawis', zone: 'Upland & Interior', notableFeatures: 'Active SK community; drainage inspection site July 2026 (S031)' },
  { psgc: '071247024', name: 'Maubo', zone: 'Upland & Interior', notableFeatures: 'Site of Maubo Cave (PPDO CY2025)' },
  { psgc: '071247025', name: 'Nailo', zone: 'Upland & Interior', notableFeatures: 'Site of Cabjawan Cave (PPDO CY2025)' },
  { psgc: '071247026', name: 'Omjon', zone: 'Upland & Interior', notableFeatures: 'Home to community-maintained Anislag Cold Spring (PPDO CY2025)' },
  { psgc: '071247027', name: 'Pangi-an', zone: 'Upland & Interior', notableFeatures: 'Barangay Pangi-an Small Farmers’ Association (BaPaSFA) swine recovery site (S029)' },
  { psgc: '071247028', name: 'Poblacion Occidental (Sawang)', zone: 'Poblacion & Coastal', notableFeatures: 'Town center, Sr. Santo Niño Parish Church (1882), Dr. Canuto Lim Ancestral House' },
  { psgc: '071247029', name: 'Poblacion Oriental (Sur)', zone: 'Poblacion & Coastal', notableFeatures: 'Eastern town center & civic/commercial corridor' },
  { psgc: '071247030', name: 'Simang', zone: 'Upland & Interior', notableFeatures: 'Interior farming barangay' },
  { psgc: '071247031', name: 'Taug', zone: 'Poblacion & Coastal', notableFeatures: 'Coastal barangay' },
  { psgc: '071247032', name: 'Tausi-on', zone: 'Upland & Interior', notableFeatures: 'Home to Kinawa Falls ("cauldron" falls, PPDO CY2025 p. 193)' },
  { psgc: '071247033', name: 'Taytay', zone: 'Upland & Interior', notableFeatures: 'Interior agricultural community' },
  { psgc: '071247034', name: 'Ticum', zone: 'Poblacion & Coastal', notableFeatures: 'Coastal barangay' }
];

export const SERVICE_CATEGORIES: ServiceCategoryItem[] = [
  {
    id: 'civil-registry',
    title: 'Civil Registry & Vital Records',
    office: 'Office of the Municipal Civil Registrar (MCR)',
    summary:
      'Birth, marriage, and death registration, certified transcriptions, delayed registration guidance, and PSA endorsement requests.',
    charterStatus: 'Awaiting Current RA 11032 Citizen’s Charter Schedule',
    publicGuidance: [
      'Bring valid government-issued identification and supporting hospital, parish, or barangay certification when inquiring in person.',
      'Fee schedules, processing times, and window numbers from the historical 2015 Citizen’s Charter (Yumpu archive) are obsolete and intentionally omitted to prevent resident misinformation.'
    ],
    officialChannelNote: 'Verify current requirements in person at the Municipal Hall or via the official LGU Valencia Facebook page.'
  },
  {
    id: 'treasury-business-permits',
    title: 'Business Permits, Licensing & Municipal Treasury',
    office: 'Business Permits and Licensing Office (BPLO) & Office of the Municipal Treasurer',
    summary:
      'Mayor’s Permit applications and renewals, Real Property Tax (RPT) assessment and payment, community tax certificates (cedula), and Paleng-QR market stall coordination.',
    charterStatus: 'Awaiting Current Revenue Code & BPLO Charter Table',
    publicGuidance: [
      'Real Property Tax (RPT) and business renewal schedules follow statutory quarterly and January deadlines.',
      'In March 2026, Paleng-QR PH Plus digital payment support was launched for public market trade (S007).',
      'Never send tax or permit payments to unverified personal accounts; transact only at official Municipal Treasury windows.'
    ],
    officialChannelNote: 'Consult the Municipal Treasurer’s Office at Valencia Municipal Hall for official assessment computation.'
  },
  {
    id: 'social-welfare-health',
    title: 'Social Welfare, Senior Citizens, Youth & Municipal Health',
    office: 'MSWDO, Rural Health Unit (RHU), MYDO & SK Federation',
    summary:
      'Social assistance referrals, senior citizen and PWD affairs, primary rural health consultations, and Sangguniang Kabataan youth development programs.',
    charterStatus: 'Awaiting Current MSWDO / RHU Service Directory',
    publicGuidance: [
      'Note on BARUG CARENav: The BARUG Valencia CARENav Ecosystem and Poverty Early Warning System reported in October 2026 news (S026) are proposed policy concepts under development, not yet live online application portals.',
      'Youth and barangay volunteer initiatives are coordinated through the Municipal Youth Development Office and the SK Federation of Valencia, Bohol.'
    ],
    officialChannelNote: 'Coordinate directly with Barangay Health Workers, MSWDO, or the SK Federation page for active community programs.'
  },
  {
    id: 'agriculture-environment-tourism',
    title: 'Agriculture, Fisheries, Eco-Tourism & Engineering',
    office: 'Municipal Agriculture Office (MAO), Tourism Office & Municipal Engineering Office',
    summary:
      'Farmer and fisherfolk registration (RSBSA), livestock recovery programs, building/zoning clearances, and visitor guidance for Valencia’s 14 potential ecotourism sites.',
    charterStatus: 'Awaiting Current Office Directory & Ecotourism Guidelines',
    publicGuidance: [
      'Smallholder farmer associations (such as BaPaSFA in Barangay Pangi-an) coordinate livestock and crop support through the Municipal Agriculture Office.',
      'Visitors and researchers planning trips to potential caves, springs, or peaks listed in the PPDO CY2025 Tourism Profile should register with the Municipal Tourism Office first.'
    ],
    officialChannelNote: 'Inquire at the Municipal Hall in Poblacion for engineering, agriculture, and tourism permits.'
  }
];

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
    title: 'Our Valencia — Municipal Profile, Geography & All 35 Verified Barangays',
    section: 'Page',
    url: '/valencia',
    badge: 'Municipal Profile',
    summary: 'PSA 2024 census facts (28,535 population), Panangatan etymology, 1867/1869 founding records, and the complete PSGC directory of 35 barangays.',
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
