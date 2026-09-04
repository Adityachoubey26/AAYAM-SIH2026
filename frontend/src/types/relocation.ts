export interface RelocationSite {
  id: string;
  siteName: string;
  location: string;
  coordinates: [number, number];
  availableCapacity: number;
  totalCapacity: number;
  infrastructureReadiness: number;
  safetyScore: number;
  suitabilityScore: number;
}
