import { useState } from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material';
import dayjs from 'dayjs';

import { useUpdateRequestMutation } from '../../../../../features/requests/requestsApi';
import { Request } from '../../../../models/request';
import TeamMenu from './TeamMenu';
// import { RequestStatus, ApprovalStatus } from '../../../../lib/types/types';

type Props = {
  request: Request;
  handleOpenModal: () => void; // Function to open the modal
  openModal: boolean; // State to control the modal
  //setOpenModal: (open: boolean) => void; // Function to set the modal state
};

export default function TeamTableRow({
  request,
  openModal,
  handleOpenModal,
}: Props) {
  const [open, setOpen] = useState(false);
  const [updateRequest, { isLoading: isUpdating }] = useUpdateRequestMutation();
  console.log(updateRequest);

  const handleViewRequest = () => {
    // TODO : Implement the view request logic here
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
        <TeamMenu
          request={request}
          openMode={open}
          openModal={openModal}
          isUpdating={isUpdating}
          handleOpenModal={handleOpenModal}
          handleViewRequest={handleViewRequest}
        />
      </TableRow>
    </>
  );
}
