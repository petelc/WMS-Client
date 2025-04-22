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
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TeamManager } from '../../../../lib/types/types';
import { InputLabel, TextField } from '@mui/material';

type Props = {
  handleCloseModal: () => void;
  handleOpenModal: () => void; // If you have a function to perform additional actions when opening the modal);
  openModal: boolean; // This should be a boolean to control the visibility of the modal
  teamManagers: TeamManager[] | []; // Optional prop to pass team managers directly if needed
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

export default function TeamManagerDialog({
  handleCloseModal,
  openModal,
  teamManagers,
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
        <DialogTitle>Send to Appropriate Team</DialogTitle>
        <DialogContent>
          <Box
            component='form'
            sx={{ display: 'flex', flexWrap: 'wrap', width: 525 }}
          >
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id='modal-modal-title'>Team Manager</InputLabel>
              <Select
                labelId='modal-modal-title'
                id='demo-multiple-checkbox'
                multiple
                value={manager}
                onChange={handleChange}
                input={<OutlinedInput label='Tag' />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {teamManagers?.map((name) => {
                  const { id, displayName } = name; // Destructure the id and email from the team manager object

                  return (
                    <MenuItem key={id} value={displayName}>
                      <Checkbox checked={manager.includes(displayName)} />
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
