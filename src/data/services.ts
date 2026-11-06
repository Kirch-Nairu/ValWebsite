import type { ServiceCategoryItem } from './types';
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
