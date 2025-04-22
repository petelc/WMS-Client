import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorHandling } from '../../api/baseApi';
import { TeamManager } from '../../../lib/types/types';
import { User } from '../../models/user';
import { Employee } from '../../models/employee';

export const lookupApi = createApi({
  reducerPath: 'lookupApi',
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ['Lookup'],
  endpoints: (builder) => ({
    fetchPriorities: builder.query<{ priorities: [] }, void>({
      query: () => '/lookup/priorities',
    }),
    fetchRequestTypes: builder.query<{ requestTypes: [] }, void>({
      query: () => '/lookup/request-types',
    }),
    fetchApprovalStatuses: builder.query<{ approvalStatuses: [] }, void>({
      query: () => '/lookup/approval-statuses',
    }),
    fetchStatuses: builder.query<{ statuses: [] }, void>({
      query: () => '/lookup/request-statuses',
    }),
    fetchTeamManagers: builder.query<{ teamManagers: TeamManager[] }, void>({
      query: () => '/lookup/team-managers',
    }),
    fetchTeamMembers: builder.query<{ teamMembers: User[] }, number>({
      query: (id: number) => `/lookup/team-employees?employeeId=${id}`,
    }),
    employeeInfo: builder.query<Employee, number>({
      query: (id: number) => `/lookup/team-employees?employeeId=${id}`,
    }),
  }),
});

export const {
  useFetchPrioritiesQuery,
  useFetchRequestTypesQuery,
  useFetchApprovalStatusesQuery,
  useFetchStatusesQuery,
  useFetchTeamManagersQuery,
  useFetchTeamMembersQuery,
} = lookupApi;
