export interface IRiskAssessment {
  habitationId: string;
  zoneClassification: 'green' | 'yellow' | 'orange' | 'red';
  hazardExposureScore: number;
  carryingCapacityDeficit: number;
  relocationUrgency: 'low' | 'medium' | 'high' | 'immediate';
}
