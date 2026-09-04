import { RiskZoneClassification } from '../types/risk';

export const getRiskZoneColor = (zone: RiskZoneClassification): string => {
  switch (zone) {
    case 'red':
      return '#ef4444';
    case 'orange':
      return '#f97316';
    case 'yellow':
      return '#eab308';
    case 'green':
    default:
      return '#22c55e';
  }
};
