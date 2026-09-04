export interface AIProvider {
  analyzeRisk(payload: unknown): Promise<unknown>;
}

export const aiProvider: AIProvider = {
  async analyzeRisk() {
    // AI provider integration placeholder
    return null;
  },
};
