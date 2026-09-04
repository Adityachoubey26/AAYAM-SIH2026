export interface IHazard {
  type: string;
  title: string;
  severity: string;
  coordinates: [number, number];
  radiusKm: number;
}
