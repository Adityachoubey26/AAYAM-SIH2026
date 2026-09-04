export interface IHabitation {
  name: string;
  district: string;
  state: string;
  coordinates: [number, number];
  population: number;
  householdCount: number;
  carryingCapacityScore: number;
  vulnerabilityIndex: number;
}
