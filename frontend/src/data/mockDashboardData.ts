export interface Habitation {
  id: string;
  name: string;
  district: string;
  state: string;
  population: number;
  riskScore: number; // 0 - 100
  riskLevel: 'Critical' | 'High' | 'Moderate' | 'Lower';
  vulnerabilityScore: number;
  priority: 'IMMEDIATE' | 'HIGH' | 'MEDIUM' | 'LOW';
  hazardExposure: number;
  terrainRisk: number;
  rainfallExposure: number;
  accessibility: 'Severely Restricted' | 'Restricted' | 'Moderate' | 'Good';
  primaryHazard: 'Landslide' | 'Flash Flood' | 'Cloudburst' | 'Slope Creep' | 'Glacial Outburst';
  lat: number;
  lng: number;
  status: 'Active Alert' | 'Monitoring' | 'Relocation Staged' | 'Stable';
  demographics: {
    children: number;
    elderly: number;
    disabled: number;
    households: number;
  };
  egressRoads: number;
  nearestShelterDistanceKm: number;
  updatedAt: string;
}

export interface RelocationSite {
  id: string;
  name: string;
  code: string;
  district: string;
  suitability: 'Suitable' | 'Moderate suitability' | 'Capacity insufficient';
  isBestRecommendation?: boolean;
  maxCapacity: number;
  currentOccupancy: number;
  availableCapacity: number;
  safetyScore: number; // 0 - 100
  accessibilityScore: number; // 0 - 100
  waterSupplyScore: number; // 0 - 100
  shelterScore: number; // 0 - 100
  medicalSupportScore: number; // 0 - 100
  foodLogisticsScore: number; // 0 - 100
  hazardExposureScore: number; // lower is safer
  lat: number;
  lng: number;
  medicalBeds: number;
  roadConnectivity: 'Paved Highway' | 'All-Weather Road' | 'Graded Track';
  powerBackup: boolean;
  waterSource: 'Deep Aquifer Well' | 'Piped Municipal' | 'Gravity Spring';
  notes: string;
}

export interface HazardCategory {
  id: string;
  name: 'Flood' | 'Landslide' | 'Heavy Rainfall' | 'Cloudburst' | 'Others';
  severity: 'Critical' | 'Severe' | 'Elevated' | 'Moderate';
  percentage: number;
  affectedAreaSqKm: number;
  habitationsExposed: number;
  historicalOccurrences: number;
  trend: 'Increasing' | 'Stable' | 'Decreasing';
  primaryDriver: string;
  accentColor: string;
}

export interface DashboardAlert {
  id: string;
  title: string;
  habitationName: string;
  district: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  changeText?: string;
  recommendedAction: string;
  timestamp: string;
  timeAgo: string;
  read: boolean;
}

export interface UpcomingAction {
  id: string;
  title: string;
  target: string;
  schedule: string;
  priority: 'Immediate' | 'Scheduled';
}

// -------------------------------------------------------------
// MOCK DATA STORE
// -------------------------------------------------------------

export const MOCK_HABITATIONS: Habitation[] = [
  {
    id: 'hab-1',
    name: 'Village A',
    district: 'Chamoli',
    state: 'Uttarakhand',
    population: 2840,
    riskScore: 92,
    riskLevel: 'Critical',
    vulnerabilityScore: 89,
    priority: 'IMMEDIATE',
    hazardExposure: 94,
    terrainRisk: 91,
    rainfallExposure: 88,
    accessibility: 'Severely Restricted',
    primaryHazard: 'Landslide',
    lat: 30.552,
    lng: 79.564,
    status: 'Active Alert',
    demographics: { children: 610, elderly: 480, disabled: 74, households: 520 },
    egressRoads: 1,
    nearestShelterDistanceKm: 14.2,
    updatedAt: '12 mins ago',
  },
  {
    id: 'hab-2',
    name: 'Village B',
    district: 'Joshimath',
    state: 'Uttarakhand',
    population: 3120,
    riskScore: 87,
    riskLevel: 'Critical',
    vulnerabilityScore: 84,
    priority: 'IMMEDIATE',
    hazardExposure: 89,
    terrainRisk: 95,
    rainfallExposure: 82,
    accessibility: 'Restricted',
    primaryHazard: 'Slope Creep',
    lat: 30.558,
    lng: 79.578,
    status: 'Relocation Staged',
    demographics: { children: 720, elderly: 530, disabled: 88, households: 590 },
    egressRoads: 1,
    nearestShelterDistanceKm: 11.8,
    updatedAt: '25 mins ago',
  },
  {
    id: 'hab-3',
    name: 'Village C',
    district: 'Pithoragarh',
    state: 'Uttarakhand',
    population: 1890,
    riskScore: 78,
    riskLevel: 'High',
    vulnerabilityScore: 75,
    priority: 'HIGH',
    hazardExposure: 79,
    terrainRisk: 81,
    rainfallExposure: 86,
    accessibility: 'Restricted',
    primaryHazard: 'Cloudburst',
    lat: 29.583,
    lng: 80.218,
    status: 'Monitoring',
    demographics: { children: 410, elderly: 290, disabled: 42, households: 340 },
    egressRoads: 2,
    nearestShelterDistanceKm: 18.5,
    updatedAt: '1 hour ago',
  },
  {
    id: 'hab-4',
    name: 'Village D',
    district: 'Bageshwar',
    state: 'Uttarakhand',
    population: 2430,
    riskScore: 72,
    riskLevel: 'High',
    vulnerabilityScore: 70,
    priority: 'HIGH',
    hazardExposure: 74,
    terrainRisk: 68,
    rainfallExposure: 84,
    accessibility: 'Restricted',
    primaryHazard: 'Flash Flood',
    lat: 29.841,
    lng: 79.771,
    status: 'Monitoring',
    demographics: { children: 540, elderly: 390, disabled: 51, households: 460 },
    egressRoads: 2,
    nearestShelterDistanceKm: 9.4,
    updatedAt: '2 hours ago',
  },
  {
    id: 'hab-5',
    name: 'Village E',
    district: 'Rudraprayag',
    state: 'Uttarakhand',
    population: 1560,
    riskScore: 61,
    riskLevel: 'Moderate',
    vulnerabilityScore: 58,
    priority: 'MEDIUM',
    hazardExposure: 62,
    terrainRisk: 59,
    rainfallExposure: 67,
    accessibility: 'Moderate',
    primaryHazard: 'Landslide',
    lat: 30.285,
    lng: 78.981,
    status: 'Monitoring',
    demographics: { children: 310, elderly: 220, disabled: 29, households: 280 },
    egressRoads: 2,
    nearestShelterDistanceKm: 8.0,
    updatedAt: '3 hours ago',
  },
  {
    id: 'hab-6',
    name: 'Village F',
    district: 'Uttarkashi',
    state: 'Uttarakhand',
    population: 2150,
    riskScore: 84,
    riskLevel: 'Critical',
    vulnerabilityScore: 81,
    priority: 'IMMEDIATE',
    hazardExposure: 88,
    terrainRisk: 86,
    rainfallExposure: 90,
    accessibility: 'Severely Restricted',
    primaryHazard: 'Cloudburst',
    lat: 30.726,
    lng: 78.435,
    status: 'Active Alert',
    demographics: { children: 480, elderly: 340, disabled: 45, households: 390 },
    egressRoads: 1,
    nearestShelterDistanceKm: 16.0,
    updatedAt: '4 hours ago',
  },
  {
    id: 'hab-7',
    name: 'Village G',
    district: 'Tehri',
    state: 'Uttarakhand',
    population: 1740,
    riskScore: 49,
    riskLevel: 'Moderate',
    vulnerabilityScore: 47,
    priority: 'MEDIUM',
    hazardExposure: 48,
    terrainRisk: 52,
    rainfallExposure: 51,
    accessibility: 'Good',
    primaryHazard: 'Landslide',
    lat: 30.386,
    lng: 78.481,
    status: 'Stable',
    demographics: { children: 360, elderly: 240, disabled: 22, households: 310 },
    egressRoads: 3,
    nearestShelterDistanceKm: 5.5,
    updatedAt: '5 hours ago',
  },
  {
    id: 'hab-8',
    name: 'Village H',
    district: 'Almora',
    state: 'Uttarakhand',
    population: 2650,
    riskScore: 38,
    riskLevel: 'Lower',
    vulnerabilityScore: 35,
    priority: 'LOW',
    hazardExposure: 36,
    terrainRisk: 40,
    rainfallExposure: 44,
    accessibility: 'Good',
    primaryHazard: 'Flash Flood',
    lat: 29.597,
    lng: 79.659,
    status: 'Stable',
    demographics: { children: 520, elderly: 380, disabled: 34, households: 480 },
    egressRoads: 3,
    nearestShelterDistanceKm: 4.2,
    updatedAt: '7 hours ago',
  },
];

export const MOCK_RELOCATION_SITES: RelocationSite[] = [
  {
    id: 'site-a',
    name: 'Site A (Gauchar Plateau Base)',
    code: 'REL-SITE-01',
    district: 'Chamoli',
    suitability: 'Capacity insufficient',
    isBestRecommendation: false,
    maxCapacity: 1500,
    currentOccupancy: 1280,
    availableCapacity: 220,
    safetyScore: 88,
    accessibilityScore: 92,
    waterSupplyScore: 68,
    shelterScore: 54,
    medicalSupportScore: 78,
    foodLogisticsScore: 84,
    hazardExposureScore: 18,
    lat: 30.288,
    lng: 79.155,
    medicalBeds: 45,
    roadConnectivity: 'Paved Highway',
    powerBackup: true,
    waterSource: 'Piped Municipal',
    notes: 'High terrain safety, but current vacancy (220) cannot accommodate Village A (2,840 people). Overcapacity hazard.',
  },
  {
    id: 'site-b',
    name: 'Site B (Karanprayag Greenfield Haven)',
    code: 'REL-SITE-02',
    district: 'Chamoli',
    suitability: 'Suitable',
    isBestRecommendation: true,
    maxCapacity: 4500,
    currentOccupancy: 1100,
    availableCapacity: 3400,
    safetyScore: 94,
    accessibilityScore: 88,
    waterSupplyScore: 92,
    shelterScore: 90,
    medicalSupportScore: 86,
    foodLogisticsScore: 89,
    hazardExposureScore: 12,
    lat: 30.261,
    lng: 79.219,
    medicalBeds: 120,
    roadConnectivity: 'All-Weather Road',
    powerBackup: true,
    waterSource: 'Deep Aquifer Well',
    notes: 'Highest recommendation: 3,400 available capacity, verified deep aquifer, 120 emergency beds, outside landslide & flood cones.',
  },
  {
    id: 'site-c',
    name: 'Site C (Pipalkoti Transit Enclave)',
    code: 'REL-SITE-03',
    district: 'Chamoli',
    suitability: 'Moderate suitability',
    isBestRecommendation: false,
    maxCapacity: 3000,
    currentOccupancy: 1950,
    availableCapacity: 1050,
    safetyScore: 76,
    accessibilityScore: 70,
    waterSupplyScore: 74,
    shelterScore: 68,
    medicalSupportScore: 62,
    foodLogisticsScore: 75,
    hazardExposureScore: 28,
    lat: 30.435,
    lng: 79.431,
    medicalBeds: 50,
    roadConnectivity: 'All-Weather Road',
    powerBackup: true,
    waterSource: 'Gravity Spring',
    notes: 'Moderate: Available capacity is 1,050; partial secondary runoff risk on northern perimeter during high rainfall.',
  },
];

export const MOCK_HAZARDS: HazardCategory[] = [
  {
    id: 'haz-1',
    name: 'Heavy Rainfall',
    severity: 'Critical',
    percentage: 76,
    affectedAreaSqKm: 1420,
    habitationsExposed: 58,
    historicalOccurrences: 34,
    trend: 'Increasing',
    primaryDriver: 'Monsoonal cloudburst concentration over upper catchment basins',
    accentColor: '#8b5cf6', // purple
  },
  {
    id: 'haz-2',
    name: 'Flood',
    severity: 'Severe',
    percentage: 68,
    affectedAreaSqKm: 980,
    habitationsExposed: 42,
    historicalOccurrences: 28,
    trend: 'Increasing',
    primaryDriver: 'River swelling along Alaknanda & Mandakini corridors',
    accentColor: '#3b82f6', // blue
  },
  {
    id: 'haz-3',
    name: 'Landslide',
    severity: 'Severe',
    percentage: 52,
    affectedAreaSqKm: 760,
    habitationsExposed: 37,
    historicalOccurrences: 46,
    trend: 'Increasing',
    primaryDriver: 'Steep slope shear failure and weathered overburden saturation',
    accentColor: '#f97316', // orange
  },
  {
    id: 'haz-4',
    name: 'Cloudburst',
    severity: 'Elevated',
    percentage: 34,
    affectedAreaSqKm: 340,
    habitationsExposed: 19,
    historicalOccurrences: 14,
    trend: 'Stable',
    primaryDriver: 'Localized convective orographic precipitation spikes (>100mm/hr)',
    accentColor: '#06b6d4', // cyan
  },
  {
    id: 'haz-5',
    name: 'Others',
    severity: 'Moderate',
    percentage: 21,
    affectedAreaSqKm: 210,
    habitationsExposed: 11,
    historicalOccurrences: 8,
    trend: 'Decreasing',
    primaryDriver: 'Seismic micro-tremors and secondary debris blockages',
    accentColor: '#64748b', // slate
  },
];

export const MOCK_ALERTS: DashboardAlert[] = [
  {
    id: 'alt-1',
    title: 'Critical Risk Change Detected',
    habitationName: 'Village A',
    district: 'Chamoli',
    severity: 'CRITICAL',
    changeText: 'HIGH → CRITICAL',
    recommendedAction: 'Trigger immediate priority relocation planning and deploy ground verification convoy.',
    timestamp: '2025-08-04T08:24:00Z',
    timeAgo: '2 hours ago',
    read: false,
  },
  {
    id: 'alt-2',
    title: 'Heavy Rainfall Forecast Spike',
    habitationName: 'Chamoli District Multi-sector',
    district: 'Chamoli',
    severity: 'HIGH',
    changeText: 'Precipitation index +48mm/h projected',
    recommendedAction: 'Pre-position emergency water filtration and field surgical kits at Site B.',
    timestamp: '2025-08-04T05:24:00Z',
    timeAgo: '5 hours ago',
    read: false,
  },
  {
    id: 'alt-3',
    title: 'Access Route Blocked Warning',
    habitationName: 'Village D',
    district: 'Bageshwar',
    severity: 'MEDIUM',
    changeText: 'State Highway 11 milepost 44 rockfall',
    recommendedAction: 'Divert evacuation corridor via Southern Graded Ridge bypass Route 4B.',
    timestamp: '2025-08-04T02:24:00Z',
    timeAgo: '8 hours ago',
    read: true,
  },
  {
    id: 'alt-4',
    title: 'Slope Displacement Telemetry Alert',
    habitationName: 'Village B',
    district: 'Joshimath',
    severity: 'CRITICAL',
    changeText: 'Radar ground displacement > 14mm in 24h',
    recommendedAction: 'Initiate phased triage relocation of vulnerable demographic tiers (elderly & pediatric).',
    timestamp: '2025-08-03T23:10:00Z',
    timeAgo: '11 hours ago',
    read: true,
  },
];

export const MOCK_UPCOMING_ACTIONS: UpcomingAction[] = [
  {
    id: 'act-1',
    title: 'Field assessment — Village A',
    target: 'NDRF Task Force Alpha',
    schedule: 'Today, 11:00 AM',
    priority: 'Immediate',
  },
  {
    id: 'act-2',
    title: 'Relocation site inspection — Site B',
    target: 'District Civil Surgeon & Water Board',
    schedule: 'Today, 02:00 PM',
    priority: 'Immediate',
  },
  {
    id: 'act-3',
    title: 'Review capacity status',
    target: 'State Disaster Mitigation Cell',
    schedule: 'Tomorrow, 10:00 AM',
    priority: 'Scheduled',
  },
  {
    id: 'act-4',
    title: 'District coordination meeting',
    target: 'District Magistrate & Armed Forces Liaison',
    schedule: 'Tomorrow, 04:00 PM',
    priority: 'Scheduled',
  },
];

export const MOCK_OVERVIEW_STATS = {
  criticalZones: { count: 12, delta: '+3 from last week', trend: 'up' },
  highRiskZones: { count: 27, delta: '+5 from last week', trend: 'up' },
  habitationsAssessed: { count: 146, delta: '+12 from last week', trend: 'up' },
  populationAtRisk: { count: 18420, delta: '-8% from last week', trend: 'down' },
  riskDistribution: [
    { name: 'Critical', value: 12, percentage: '8%', color: '#ef4444' },
    { name: 'High', value: 27, percentage: '18%', color: '#f97316' },
    { name: 'Moderate', value: 68, percentage: '47%', color: '#eab308' },
    { name: 'Lower', value: 39, percentage: '27%', color: '#10b981' },
  ],
};
