export type MainRequest = {
  id: number;
  requestedDate: Date;
  requestTitle: string;
  description: string;
  requestedBy: string;
  department: string;
  explainImpact: string;
  hasStakeholderConferred: boolean;
  proposedImpDate: Date;
  boardDate: Date;
  approvalDate: Date;
  denialDate: Date;
  policies: string[];
  relatedProjects: string[];
  isNew: boolean;
  isActive: boolean;
  sendToBoard: boolean;
  //approvalStatus: string;
  approvalStatus: {
    id: number;
    approvalStatusName: string;
  };
  // priority: string;
  priority: {
    id: number;
    priorityName: string;
    priorityLevel: number;
  };
  // requestType: string;
  requestType: {
    id: number;
    requestTypeName: string;
  };
  //requestStatus: string;
  requestStatus: {
    id: number;
    requestStatusName: string;
  };
  mandateBy: string[];
  mandateTitle: string;
  mandateDescription: string;
  requiredComplianceDate: Date;
  codeRuleNums: string[];
  internalUserCount: number;
  externalUserCount: number;
  newAutomationExplain: string;
  explainCostSavings: string;
  impactedClassifications: string[];
  impactedExternalJobTypes: string[];
  objectives: string;
  requirements: string;
  resources: string;
};
