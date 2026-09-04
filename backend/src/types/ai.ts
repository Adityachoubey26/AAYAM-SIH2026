export interface IAIAnalysisPayload {
  habitationId: string;
  parameters?: Record<string, unknown>;
}

export interface IAIAnalysisResponse {
  score: number;
  explanation: string;
  recommendations: string[];
}
