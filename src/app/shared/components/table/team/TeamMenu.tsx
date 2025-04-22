import { Save, ViewList, AddComment, ViewAgenda } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import {
  TableCell,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Tooltip,
  IconButton,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import {
  useFetchApprovalStatusesQuery,
  useFetchStatusesQuery,
} from '../../../api/lookupApi';
import { ApprovalStatus, RequestStatus } from '../../../../../lib/types/types';
import { Request } from '../../../../models/request';

type Props = {
  request: Request;
  openMode: boolean; // State to control the collapse
  isUpdating: boolean; // State to control the updating status
  openModal: boolean; // State to control the modal
  handleOpenModal: () => void; // Function to open the modal
  handleCloseModal: () => void; // Function to close the modal
  handleViewRequest: () => void; // Function to view request
};

type approvalStatusOptions = ApprovalStatus[];

type requestStatusOptions = RequestStatus[];

export default function TeamMenu({
  request,
  openMode,
  isUpdating,
  handleOpenModal,
  handleViewRequest,
}: Props) {
  const [approvalStatus, setApprovalStatus] = useState<number>(
    request.approvalStatus.id
  );
  const [requestStatus, setRequestStatus] = useState<number>(
    request.requestStatus.id
  );
  const { data: approvalStatuses } = useFetchApprovalStatusesQuery();
  const { data: statuses } = useFetchStatusesQuery();

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

  return (
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
      <Collapse in={openMode} timeout='auto' unmountOnExit>
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
                <TableCell align='center'>Assign to Team Member</TableCell>
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
                  <Tooltip title='Assign to Team Member'>
                    <IconButton
                      edge='end'
                      aria-label='assign'
                      onClick={handleOpenModal}
                      disabled={isUpdating}
                    >
                      <ShareIcon color='info' />
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
  );
}
