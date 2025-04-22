import { useState } from 'react';
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from '@mui/material';
import EnhancedTableHead, { Order } from './enhancedTableHead';
import { EnhancedTableToolbar } from './enhancedTableToolbar';
import EnhancedTableRow from './enhancedTableRow';
import { Request } from '../../../models/request';
import TeamManagerDialog from '../modals/TeamManagerDialog';
import { useFetchTeamManagersQuery } from '../../api/lookupApi';

type Props = {
  rows: Request[];
  refetch?: () => void;
};

export function EnhancedTable({ rows, refetch }: Props) {
  const [order, setOrder] = useState<Order>('asc');
  const [openModal, setOpenModal] = useState(false);
  const [orderBy, setOrderBy] = useState<string>('requestTitle');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { data: teamManagers } = useFetchTeamManagersQuery();

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: string | number | symbol
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property.toString());
  };

  // @ts-check event is ok
  // @ts-expect-error event is ok
  const handleChangePage = (event: unknown, newPage: number) => {
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 4 }} square={false} elevation={1}>
        <EnhancedTableToolbar numSelected={0} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={0}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row) => {
                return (
                  <EnhancedTableRow
                    key={row.id}
                    request={row}
                    refetch={refetch}
                    handleOpenModal={handleOpenModal}
                  />
                );
              })}
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
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          colSpan={3}
          component='div'
          count={rows.length}
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
