export interface Habitation {
  id: string;
  name: string;
  district: string;
  state: string;
  coordinates: [number, number];
  population: number;
  householdCount: number;
  carryingCapacityScore: number;
  vulnerabilityIndex: number;
  status: 'stable' | 'monitored' | 'relocation_needed';
}
