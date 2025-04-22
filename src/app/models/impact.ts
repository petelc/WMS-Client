export type Impact = {
  id: number;
  internalUserCount: number;
  externalUserCount: number;
  newAutomationExplain: string;
  explainCostSavings: string;
  impactedClassifications: string[];
  impactedExternalJobTypes: string[];
};
