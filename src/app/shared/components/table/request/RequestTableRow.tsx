import { useState } from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material';
import dayjs from 'dayjs';

import { useUpdateRequestMutation } from '../../../../../features/requests/requestsApi';
import { Request } from '../../../../models/request';

import RequestMenu from './RequestMenu';

type Props = {
  request: Request;
  refetch?: () => void;
  handleOpenModal: () => void; // Function to open the modal
};

export default function RequestTableRow({
  request,
  refetch,
  handleOpenModal,
}: Props) {
  const [open, setOpen] = useState(false);
  const [updateRequest, { isLoading: isUpdating }] = useUpdateRequestMutation();

  const handleViewRequest = () => {
    // TODO : Implement the view request logic here
  };

  const handleSendToCABBoard = () => {
    updateRequest({
      id: request.id,
      data: {
        ...request,
        sendToBoard: true,
        boardDate: dayjs(new Date()).toDate(),
      },
    }).unwrap();
    if (refetch) {
      refetch();
    }
  };

  return (
    <>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' },
        }}
      >
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {request.id}
        </TableCell>
        <TableCell align='left'>
          {dayjs(request.requestedDate).format('MM/DD/YYYY')}
        </TableCell>
        <TableCell align='left'>{request.requestTitle}</TableCell>
        <TableCell align='left'>{request.requestedBy}</TableCell>
        <TableCell align='left'>
          {request.requestType.requestTypeName}
        </TableCell>
        <TableCell align='left'>{request.priority.priorityName}</TableCell>
      </TableRow>
      <TableRow>
        <RequestMenu
          request={request}
          openMode={open}
          isUpdating={isUpdating}
          handleOpenModal={handleOpenModal}
          handleViewRequest={handleViewRequest}
          handleSendToCABBoard={handleSendToCABBoard}
        />
      </TableRow>
    </>
  );
}
