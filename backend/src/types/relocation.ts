export interface IRelocationSite {
  siteName: string;
  location: string;
  coordinates: [number, number];
  availableCapacity: number;
  totalCapacity: number;
  infrastructureReadiness: number;
}
