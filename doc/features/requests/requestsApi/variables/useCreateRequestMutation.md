[**client v0.0.1**](../../../../README.md)

***

[client](../../../../README.md) / [features/requests/requestsApi](../README.md) / useCreateRequestMutation

# Variable: useCreateRequestMutation

> **useCreateRequestMutation**: `UseMutation`\<`MutationDefinition`\<\{ `approvalDate`: `Date`; `approvalStatus`: \{ `ApprovalStatusName`: `string`; `id`: `number`; \}; `boardDate`: `Date`; `codeRuleNums`: `string`; `denialDate`: `Date`; `department`: `string`; `explainCostSavings`: `string`; `explainImpact`: `string`; `externalUserCount`: `number`; `impactedClassifications`: `string`[]; `impactedExternalJobTypes`: `string`[]; `internalUserCount`: `number`; `isActive`: `boolean`; `isNew`: `boolean`; `mandateBy`: `string`[]; `mandateDescription`: `string`; `mandateTitle`: `string`; `newAutomationExplain`: `string`; `objectives`: `string`; `policies`: `string`[]; `priority`: \{ `id`: `number`; `PriorityLevel`: `number`; `PriorityName`: `string`; \}; `proposedImpDate`: `Date`; `relatedProjects`: `string`[]; `requestDate`: `Date`; `requestedBy`: `string`; `requestStatus`: \{ `id`: `number`; `RequestStatusName`: `string`; \}; `requestTitle`: `string`; `requestType`: \{ `id`: `number`; `requestTypeName`: `string`; \}; `requiredComplianceDate`: `Date`; `requirements`: `string`; `resources`: `string`; `sendToBoard`: `boolean`; `stakeHolders`: `string`; \}, (`args`, `api`, `extraOptions`) => `Promise`\<`QueryReturnValue`\<`unknown`, `FetchBaseQueryError`, `FetchBaseQueryMeta`\>\>, `"Request"`, [`Request`](../../../../app/models/request/type-aliases/Request.md), `"requestsApi"`\>\>

Defined in: [src/features/requests/requestsApi.ts:68](https://github.com/petelc/WMS/blob/0ba5e61a5ede3de744df1a5839724fa19a2a534f/client/src/features/requests/requestsApi.ts#L68)
