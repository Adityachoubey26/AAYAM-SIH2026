export type RiskZoneClassification = 'green' | 'yellow' | 'orange' | 'red';

export interface RiskAssessment {
  id: string;
  habitationId: string;
  zoneClassification: RiskZoneClassification;
  hazardExposureScore: number;
  carryingCapacityDeficit: number;
  relocationUrgency: 'low' | 'medium' | 'high' | 'immediate';
  calculatedAt: string;
}
