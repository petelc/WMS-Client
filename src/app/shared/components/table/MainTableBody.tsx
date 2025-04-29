import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import TableHeader, { Order } from './TableHeader';
import { Request } from '../../../models/request';
import { useState } from 'react';

import RequestTableRow from './request/RequestTableRow';
import TeamTableRow from './team/TeamTableRow';

type Props = {
  type?: string; // Optional table type prop
  requests: Request[];
  handleOpenModal?: () => void; // Optional function to handle modal opening
  openModal: boolean;
  page: number; // Optional page number prop
  rowsPerPage: number; // Optional rows per page prop
};

export default function MainTableBody({
  type,
  requests,
  openModal,
  handleOpenModal,
  page,
  rowsPerPage,
}: Props) {
  const [orderBy, setOrderBy] = useState<string>('requestTitle');
  const [order, setOrder] = useState<Order>('asc');

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: string | number | symbol
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property.toString());
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - requests.length) : 0;

  const visibleRows = requests.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={'medium'}>
      {type === 'request' ? (
        <>
          <TableHeader
            order={order}
            orderBy='reuestTitle'
            numSelected={0}
            rowCount={0}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {visibleRows.map((request) => {
              return (
                <RequestTableRow
                  key={request.id}
                  request={request}
                  handleOpenModal={handleOpenModal || (() => {})} // Default to a no-op function if not provided
                />
              );
            })}
            {emptyRows > 0 && (
              <tr style={{ height: 53 * emptyRows }}>
                <td colSpan={6} />
              </tr>
            )}
          </TableBody>
        </>
      ) : (
        <>
          <TableHeader
            order={order}
            orderBy='requestTitle'
            numSelected={0}
            rowCount={0}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {visibleRows.map((request) => (
              <TeamTableRow
                key={request.id}
                request={request}
                handleOpenModal={handleOpenModal || (() => {})} // Default to a no-op function if not provided
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
        </>
      )}
    </Table>
  );
}
