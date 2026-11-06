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
  | 'danao-lake'
  | 'pottery-craft'
  | 'market-commercial'
  | 'market-night'
  | 'anislag-spring'
  | 'banderahan-locator'
  | 'municipal-hall-night'
  | 'lgu-banner';

export interface MediaSlotSpec {
  slotId: string;
  candidateId: string;
  title: string;
  subject: string;
  barangay: string;
  motif: VisualMotif;
  aspectRatio: '16:9' | '4:3' | '3:2' | '4:5';
  approvalStatus: 'APPROVED_REDISTRIBUTABLE' | 'LOCAL_PREVIEW_ONLY' | 'NOT_APPROVED';
  statusLabel: string;
  creditLine: string;
  approvedDropInPath: string;
  acquisitionNote: string;
  imageSrc: string;
  imageAlt: string;
  photographer?: string;
  license?: string;
  sourceUrl?: string;
}

export interface DestinationItem {
  slug: string;
  name: string;
  alternateName?: string;
  barangay: string;
  category: 'Spring & Coast' | 'Heritage & Architecture' | 'Highlands & Peaks' | 'Falls & Lakes' | 'Karst Caves' | 'Living Traditions & Artisanal Craft';
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
  recordState: string;
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
  categoryTag?: 'Coastal Waters' | 'Poblacion Center' | 'Highland & Peaks' | 'Springs & Waterways' | 'Pottery & Crafts' | 'Agricultural Heart';
  notableFeatures: string;
  quickLink?: {
    label: string;
    href: string;
  };
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
