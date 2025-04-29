import { Box, Paper, TableContainer, TablePagination } from '@mui/material';
import { Request } from '../../../models/request';
import TeamManagerDialog from '../modals/TeamManagerDialog';
import TeamMemberModal from '../modals/TeamMemberModal';
import { useState } from 'react';
import {
  useFetchTeamManagersQuery,
  useFetchTeamMembersQuery,
} from '../../api/lookupApi';
import RequestTableToolbar from './TableToolbar';
import { useUserInfoQuery } from '../../../../features/account/accountApi';
import TeamTableToolbar from './team/TeamTableToolbar';

type Props = {
  requests: Request[];
  type?: string; // Optional table type prop
  children?: React.ReactNode; // Add children with the correct type
};

export default function RequestTable({ requests, type, children }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data: user } = useUserInfoQuery();
  const { data: teamManagers } = useFetchTeamManagersQuery();
  const { data: teamMembers } = useFetchTeamMembersQuery(user?.employeeId || 0);

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
        {type === 'request' ? (
          <RequestTableToolbar numSelected={0} />
        ) : (
          <TeamTableToolbar numSelected={0} />
        )}
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
        {openModal && type === 'request' && (
          <TeamManagerDialog
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
            openModal={openModal}
            // @ts-expect-error this is ok
            teamManagers={teamManagers} // Pass the team managers to the modal
          />
        )}
        {openModal && type === 'team' && (
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
  );
}
