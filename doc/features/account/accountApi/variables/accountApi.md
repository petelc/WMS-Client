[**client v0.0.1**](../../../../README.md)

***

[client](../../../../README.md) / [features/account/accountApi](../README.md) / accountApi

# Variable: accountApi

> `const` **accountApi**: `Api`\<(`args`, `api`, `extraOptions`) => `Promise`\<`QueryReturnValue`\<`unknown`, `FetchBaseQueryError`, `FetchBaseQueryMeta`\>\>, \{ `employeeInfo`: `QueryDefinition`\<`number`, (`args`, `api`, `extraOptions`) => `Promise`\<`QueryReturnValue`\<`unknown`, `FetchBaseQueryError`, `FetchBaseQueryMeta`\>\>, `"UserInfo"`, [`Employee`](../../../../app/models/employee/type-aliases/Employee.md), `"accountApi"`\>; `login`: `MutationDefinition`\<\{ `email`: `string`; `password`: `string`; \}, (`args`, `api`, `extraOptions`) => `Promise`\<`QueryReturnValue`\<`unknown`, `FetchBaseQueryError`, `FetchBaseQueryMeta`\>\>, `"UserInfo"`, `void`, `"accountApi"`\>; `logout`: `MutationDefinition`\<`any`, (`args`, `api`, `extraOptions`) => `Promise`\<`QueryReturnValue`\<`unknown`, `FetchBaseQueryError`, `FetchBaseQueryMeta`\>\>, `"UserInfo"`, `any`, `"accountApi"`\>; `register`: `MutationDefinition`\<`object`, (`args`, `api`, `extraOptions`) => `Promise`\<`QueryReturnValue`\<`unknown`, `FetchBaseQueryError`, `FetchBaseQueryMeta`\>\>, `"UserInfo"`, `void`, `"accountApi"`\>; `userInfo`: `QueryDefinition`\<`void`, (`args`, `api`, `extraOptions`) => `Promise`\<`QueryReturnValue`\<`unknown`, `FetchBaseQueryError`, `FetchBaseQueryMeta`\>\>, `"UserInfo"`, [`User`](../../../../app/models/user/type-aliases/User.md), `"accountApi"`\>; \}, `"accountApi"`, `"UserInfo"`, *typeof* `coreModuleName` \| *typeof* `reactHooksModuleName`\>

Defined in: [src/features/account/accountApi.ts:11](https://github.com/petelc/WMS/blob/0ba5e61a5ede3de744df1a5839724fa19a2a534f/client/src/features/account/accountApi.ts#L11)
