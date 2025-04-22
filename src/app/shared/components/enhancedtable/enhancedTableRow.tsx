import { useState } from 'react';
import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  Select,
  MenuItem,
  SelectChangeEvent,
  Tooltip,
} from '@mui/material';
import {
  AddBusiness,
  AddComment,
  AddTask,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Save,
  ViewAgenda,
  ViewList,
} from '@mui/icons-material';
import dayjs from 'dayjs';

import {
  useFetchApprovalStatusesQuery,
  useFetchStatusesQuery,
} from '../../api/lookupApi';
import { useUpdateRequestMutation } from '../../../../features/requests/requestsApi';
import { Request } from '../../../models/request';
import { RequestStatus, ApprovalStatus } from '../../../../lib/types/types';

type Props = {
  request: Request;
  refetch?: () => void;
  handleOpenModal: () => void; // Function to open the modal
};

type approvalStatusOptions = ApprovalStatus[];

type requestStatusOptions = RequestStatus[];

export default function EnhancedTableRow({
  request,
  refetch,
  handleOpenModal,
}: Props) {
  const [open, setOpen] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState<number>(
    request.approvalStatus.id
  );
  const [requestStatus, setRequestStatus] = useState<number>(
    request.requestStatus.id
  );
  const { data: approvalStatuses } = useFetchApprovalStatusesQuery();
  const { data: statuses } = useFetchStatusesQuery();
  const [updateRequest, { isLoading: isUpdating }] = useUpdateRequestMutation();

  // TODO : Handle the populating the dropdowns here

  // LEC - Request Status
  // @ts-expect-error - TS complains about the type of statuses
  const rs: requestStatusOptions = statuses || [];

  const handleRequestStatusChange = (event: SelectChangeEvent) => {
    setRequestStatus(+event.target.value);
  };

  // LEC - Approval Status
  /// @ts-expect-error - TS complains about the type of approvalStatuses
  const ap: approvalStatusOptions = approvalStatuses || [];

  const handleApprovalStatusChange = (event: SelectChangeEvent) => {
    setApprovalStatus(+event.target.value);
  };

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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 4 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Request Details
              </Typography>
              <Table size='small' aria-label='statuses'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'>Request Status</TableCell>
                    <TableCell align='center'>Approval Status</TableCell>
                    <TableCell align='center'>View Request</TableCell>
                    <TableCell align='center'>CAB board</TableCell>
                    <TableCell align='center'>Team Manager</TableCell>
                    <TableCell align='center'>Comment</TableCell>
                    <TableCell align='center'>View Comments</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={request.id}>
                    <TableCell align='center'>
                      <Tooltip title='Save'>
                        <IconButton>
                          <Save color='primary' />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell component='th' scope='row' align='center'>
                      <Select
                        id='requestStatus'
                        value={requestStatus.toString()}
                        onChange={handleRequestStatusChange}
                        autoWidth
                      >
                        {rs.map((rs) => (
                          <MenuItem key={rs.id} value={rs.id}>
                            {rs.requestStatusName}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell align='center'>
                      <Select
                        id='approvalStatus'
                        value={approvalStatus.toString()}
                        onChange={handleApprovalStatusChange}
                      >
                        {ap.map((ap) => (
                          <MenuItem key={ap.id} value={ap.id}>
                            {ap.approvalStatusName}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell align='center'>
                      <Tooltip title='View Request'>
                        <IconButton onClick={handleViewRequest}>
                          <ViewList color='primary' />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell align='center'>
                      <Tooltip title='Send to CAB board'>
                        <IconButton
                          onClick={handleSendToCABBoard}
                          disabled={isUpdating}
                        >
                          <AddBusiness color='secondary' />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell align='center'>
                      <Tooltip title='Send to Team Manager'>
                        <IconButton onClick={handleOpenModal}>
                          <AddTask color='success' />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell align='center'>
                      <Tooltip title='Comment'>
                        <IconButton>
                          <AddComment color='info' />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell align='center'>
                      <Tooltip title='View Comments'>
                        <IconButton>
                          <ViewAgenda color='info' />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
