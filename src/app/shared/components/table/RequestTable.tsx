import { Box, Paper, TableContainer, TablePagination } from '@mui/material';
import { Request } from '../../../models/request';
import TeamManagerDialog from '../modals/TeamManagerDialog';
import { useState } from 'react';
import { useFetchTeamManagersQuery } from '../../api/lookupApi';
import RequestTableToolbar from './TableToolbar';

type Props = {
  requests: Request[];
  children?: React.ReactNode; // Add children with the correct type
};

export default function RequestTable({ requests, children }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { data: teamManagers } = useFetchTeamManagersQuery();

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    // handleOpenModal(); // If you have a function to perform additional actions when opening the modal
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 4 }} square={false} elevation={1}>
        <RequestTableToolbar numSelected={0} />
        <TableContainer>{children}</TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          colSpan={3}
          component='div'
          count={requests.length}
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
          <TeamManagerDialog
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
            openModal={openModal}
            // @ts-expect-error this is ok
            teamManagers={teamManagers} // Pass the team managers to the modal
          />
        )}
      </Paper>
    </Box>
  );
}
