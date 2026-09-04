export interface AIAnalysisRequest {
  habitationId: string;
  hazardFactors?: string[];
  simulationParams?: Record<string, unknown>;
}

export interface AIAnalysisResult {
  confidenceScore: number;
  projectedRiskLevel: string;
  summaryExplanation: string;
  recommendedActions: string[];
}
