import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel, TextField } from '@mui/material';
import { Employee } from '../../../models/employee';

type Props = {
  handleCloseModal: () => void;
  handleOpenModal: () => void; // If you have a function to perform additional actions when opening the modal);
  openModal: boolean; // This should be a boolean to control the visibility of the modal
  teamMembers: Employee[]; // Optional prop to pass team members directly if needed
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function TeamMemberModal({
  handleCloseModal,
  openModal,
  teamMembers,
}: Props) {
  const [manager, setManager] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof manager>) => {
    const {
      target: { value },
    } = event;
    setManager(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <Dialog disableEscapeKeyDown open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Send to Appropriate Team Lead</DialogTitle>
        <DialogContent>
          <Box
            component='form'
            sx={{ display: 'flex', flexWrap: 'wrap', width: 525 }}
          >
            <FormControl sx={{ m: 1, width: 500 }}>
              <InputLabel>Team Member</InputLabel>
              <Select
                id='demo-multiple-checkbox'
                value={manager}
                onChange={handleChange}
                input={<OutlinedInput label='Team Member' />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {teamMembers?.map((name) => {
                  const { id, displayName } = name; // Destructure the id and email from the team member object

                  return (
                    <MenuItem key={id} value={displayName}>
                      {name.displayName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id='notes'
                label='Notes'
                placeholder='Add any additional notes here...'
                multiline
                variant='outlined'
                minRows={4}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleCloseModal}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
