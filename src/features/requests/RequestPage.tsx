import { Grid2, Paper, Typography } from '@mui/material';

import { useFetchRequestsQuery } from './requestsApi';
//import Filters from './Filters';
import { useAppSelector } from '../../app/store/store';
import { EnhancedTable as RequestTable } from '../../app/shared/components/enhancedtable/enhancedTable';

export default function RequestPage() {
  const requestParams = useAppSelector((state) => state.request);
  const {
    data,
    isLoading: requestsLoading,
    refetch,
  } = useFetchRequestsQuery(requestParams);

  if (requestsLoading) return <div>Loading...</div>;

  return (
    <Paper
      sx={{ maxWidth: '100%', height: '100vh', pt: 1, pl: 2, pr: 2 }}
      square={false}
    >
      <Grid2 container spacing={4}>
        <Grid2 size={12}>
          {data?.items && data.items.length > 0 ? (
            <RequestTable rows={data.items} refetch={refetch} />
          ) : (
            <Typography variant='h5'>No requests found</Typography>
          )}
        </Grid2>
      </Grid2>
    </Paper>
  );
}
