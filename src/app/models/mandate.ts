export type Mandate = {
  id: number;
  mandateBy: string;
  mandateTitle: string;
  mandateDescription: string;
  requiredComplianceDate: Date;
  codeRuleNums: string[];
};
