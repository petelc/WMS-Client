import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

import { RequestParams } from "../../app/models/requestParams";
import { Pagination } from "../../app/models/pagination";
import { Request } from "../../app/models/request";
import { filterEmptyValues } from "../../lib/util";

// TODO : Create endpoints for
// TODO :     1. Fetching all requests by team manager
// ! TODO :   1. Fetching all teams
// ! TODO :   2. Fetching a single team
// ! TODO :   3. Creating a new team
// ! TODO :   4. Updating a team
// ! TODO :   5. Deleting a team
// ! TODO :   6. Fetching team members
// ! TODO :   7. Adding a member to a team
// ! TODO :   8. Removing a member from a team
// ! TODO :   9. Fetching team managers
// ! TODO :   10. Adding a manager to a team
// ! TODO :   11. Removing a manager from a team
// ! TODO :   12. Fetching team projects
// ! TODO :   13. Adding a project to a team
// ! TODO :   14. Removing a project from a team
// ! TODO :   15. Fetching team work items
// ! TODO :   16. Adding a work item to a team
// ! TODO :   17. Removing a work item from a team
// ! TODO :   18. Fetching team changes
// ! TODO :   19. Adding a change to a team
// ! TODO :   20. Removing a change from a team
// ! TODO :   21. Fetching team requests
// ! TODO :   22. Adding a request to a team
// ! TODO :   23. Removing a request from a team
// ! TODO :   24. Fetching team boards

export const teamApi = createApi({
  reducerPath: "teamApi",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["Team"],
  endpoints: (builder) => ({
    fetchTeamRequests: builder.query<
      { items: Request[]; pagination: Pagination },
      RequestParams
    >({
      query: (requestParams) => ({
        url: "/team/requests/team-managers",
        params: filterEmptyValues(requestParams),
      }),
      transformResponse: (items: Request[], meta) => {
        const paginationHeader = meta?.response?.headers.get("Pagination");
        const pagination = paginationHeader
          ? JSON.parse(paginationHeader)
          : null;
        return { items, pagination };
      },
    }),
  }),
});

export const { useFetchTeamRequestsQuery } = teamApi;
