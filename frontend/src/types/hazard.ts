export type HazardType = 'landslide' | 'flood' | 'earthquake' | 'cyclone' | 'subsidence';
export type HazardSeverity = 'low' | 'moderate' | 'high' | 'critical';

export interface HazardEvent {
  id: string;
  type: HazardType;
  title: string;
  severity: HazardSeverity;
  coordinates: [number, number];
  radiusKm: number;
  detectedAt: string;
}
