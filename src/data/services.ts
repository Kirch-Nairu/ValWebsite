import type { ServiceCategoryItem } from './types';

export const SERVICE_CATEGORIES: ServiceCategoryItem[] = [
  {
    id: 'civil-registry',
    title: 'Civil Registry & Vital Records',
    office: 'Office of the Municipal Civil Registrar (MCR)',
    summary:
      'Birth, marriage, and death registration, certified true copies, delayed registration guidance, and Philippine Statistics Authority (PSA) endorsement requests.',
    charterStatus: 'In-Person Transaction at Municipal Hall',
    publicGuidance: [
      'Bring valid government-issued identification and supporting hospital, parish, or barangay certification when requesting or registering civil records.',
      'For delayed registration or clerical corrections under Republic Act No. 9048 / 10172, consult the Municipal Civil Registrar for documentary requirements prior to filing.'
    ],
    officialChannelNote: 'Visit the Office of the Municipal Civil Registrar at Valencia Municipal Hall during regular weekday government hours.'
  },
  {
    id: 'treasury-business-permits',
    title: 'Business Permits, Licensing & Municipal Treasury',
    office: 'Business Permits and Licensing Office (BPLO) & Office of the Municipal Treasurer',
    summary:
      'Mayor’s Permit applications and renewals, Real Property Tax (RPT) assessment and payment, community tax certificates (cedula), and public market vendor coordination.',
    charterStatus: 'In-Person Assessment & Treasury Windows',
    publicGuidance: [
      'Real Property Tax (RPT) payments and annual business permit renewals follow statutory January and quarterly municipal schedules.',
      'Public market vendors and local transport operators may also coordinate QR Ph digital payment acceptance under the Paleng-QR PH Plus program launched in March 2026.',
      'All tax assessments and permit fee payments are transacted exclusively at official Municipal Treasury windows.'
    ],
    officialChannelNote: 'Coordinate directly with the Municipal Treasurer’s Office and BPLO at Valencia Municipal Hall.'
  },
  {
    id: 'social-welfare-health',
    title: 'Social Welfare, Health & Youth Development',
    office: 'MSWDO, Rural Health Unit (RHU), MYDO & SK Federation',
    summary:
      'Social welfare assistance referrals, senior citizen and PWD affairs, primary rural health consultations, and Sangguniang Kabataan youth development programs.',
    charterStatus: 'Municipal Hall & Barangay Health Stations',
    publicGuidance: [
      'Bring barangay certification, valid identification, and medical or social case documentation when requesting assistance through the Municipal Social Welfare and Development Office (MSWDO).',
      'Primary healthcare, maternal care, and immunization schedules are coordinated through the Rural Health Unit (RHU) and Barangay Health Workers across all 35 barangays.',
      'Youth leadership, sports, and volunteer initiatives are coordinated with the Municipal Youth Development Office (MYDO) and the SK Federation of Valencia, Bohol.'
    ],
    officialChannelNote: 'Inquire at the MSWDO, Rural Health Unit, or Youth Development Office in Poblacion.'
  },
  {
    id: 'agriculture-environment-tourism',
    title: 'Agriculture, Fisheries, Eco-Tourism & Engineering',
    office: 'Municipal Agriculture Office (MAO), Tourism Office & Municipal Engineering Office',
    summary:
      'Farmer and fisherfolk registration (RSBSA), livestock and crop programs, building and zoning clearances, and visitor coordination for Valencia’s natural landmarks.',
    charterStatus: 'Municipal Hall Technical & Field Offices',
    publicGuidance: [
      'Smallholder farmer and fisherfolk associations coordinate crop, fishery, and livestock recovery programs through the Municipal Agriculture Office.',
      'Building permits, locational clearances, and municipal infrastructure inquiries are handled by the Office of the Municipal Engineer and MPDC.',
      'Visitors and groups planning trips to inland waterfalls, highland ridges, or karst caves should coordinate with the Municipal Tourism Office and barangay officials before travel.'
    ],
    officialChannelNote: 'Visit the Agriculture, Tourism, and Engineering offices at Valencia Municipal Hall.'
  }
];
