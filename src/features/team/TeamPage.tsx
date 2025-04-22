import { useState } from 'react';
import {
  Box,
  Grid2,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';

import TableHeader, {
  Order,
} from '../../app/shared/components/table/TableHeader';
import MainTableBody from '../../app/shared/components/table/MainTableBody';
import TeamTableRow from '../../app/shared/components/table/team/TeamTableRow';
import { useFetchTeamMembersQuery } from '../../app/shared/api/lookupApi';
import { useAppSelector } from '../../app/store/store';
import { useFetchRequestsQuery } from '../requests/requestsApi';
import TeamMemberModal from '../../app/shared/components/modals/TeamMemberModal';
import { useUserInfoQuery } from '../account/accountApi';
import TeamTableToolbar from '../../app/shared/components/table/team/TeamTableToolbar';

export default function TeamPage() {
  const requestParams = useAppSelector((state) => state.request);
  const { data: requests, isLoading } = useFetchRequestsQuery(requestParams);
  const { data: user } = useUserInfoQuery();
  const { data: teamMembers } = useFetchTeamMembersQuery(user?.employeeId || 0);

  const [order, setOrder] = useState<Order>('asc');
  const [openModal, setOpenModal] = useState(false);
  const [orderBy, setOrderBy] = useState<string>('requestTitle');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: string | number | symbol
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property.toString());
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    // handleOpenModal(); // If you have a function to perform additional actions when opening the modal
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (isLoading || !requests) return <div>Loading...</div>;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - requests.items.length)
      : 0;

  const visibleRows = requests.items.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper
      sx={{ maxWidth: '100%', height: '100vh', pt: 1, pl: 2, pr: 2 }}
      square={false}
    >
      <Grid2 container spacing={4}>
        <Grid2 size={12}>
          {requests?.items && requests.items.length > 0 ? (
            <Box sx={{ width: '100%' }}>
              <Paper sx={{ width: '100%', mb: 4 }} square={false} elevation={1}>
                <TeamTableToolbar numSelected={0} />
                <TableContainer>
                  <MainTableBody>
                    <TableHeader
                      order='asc'
                      orderBy='requestTitle'
                      onRequestSort={handleRequestSort}
                      numSelected={0}
                      rowCount={0}
                    />
                    <TableBody>
                      {visibleRows.map((request) => (
                        <TeamTableRow
                          key={request.id}
                          request={request}
                          handleOpenModal={handleOpenModal}
                          handleCloseModal={handleCloseModal}
                          openModal={openModal}
                        />
                      ))}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: 53 * emptyRows,
                          }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </MainTableBody>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  colSpan={3}
                  component='div'
                  count={requests.items.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  slotProps={{
                    select: {
                      inputProps: {
                        'aria-label': 'rows per page',
                      },
                      native: true,
                    },
                  }}
                />
                {openModal && (
                  <TeamMemberModal
                    handleCloseModal={handleCloseModal}
                    handleOpenModal={handleOpenModal}
                    openModal={openModal}
                    // @ts-expect-error this is ok
                    teamMembers={teamMembers} // Pass the team members to the modal
                  />
                )}
              </Paper>
            </Box>
          ) : (
            <Typography variant='h5'>No requests found</Typography>
          )}
        </Grid2>
      </Grid2>
    </Paper>
  );
}
