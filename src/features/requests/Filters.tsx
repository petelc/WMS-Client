import { Box, Button, Paper } from '@mui/material';
import Search from './Search';
import RadioButtonGroup from '../../app/shared/components/RadioButtonGroup';
import { useAppDispatch, useAppSelector } from '../../app/store/store';
import {
  setOrderBy,
  setPriority,
  setRequestType,
  resetParams,
} from './requestSlice';
import CheckboxButtons from '../../app/shared/components/CheckboxButtons';

const sortOptions = [
  { value: 'name', label: 'Alphabetical' },
  { value: 'date', label: 'Submitted Date: Low to High' },
  { value: 'date', label: 'Submitted Date: High to Low' },
  { value: 'priority', label: 'Priority' },
  { value: 'status', label: 'Status' },
  { value: 'type', label: 'Type' },
];

type Props = {
  filtersData: { priority: string[]; requestType: string[] };
};

export default function Filters({ filtersData }: Props) {
  const { orderBy, priority, requestType } = useAppSelector(
    (state) => state.request
  );
  const dispatch = useAppDispatch();
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <Paper>
        <Search />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <RadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={(e) => dispatch(setOrderBy(e.target.value))}
        />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckboxButtons
          items={filtersData.priority}
          checked={priority}
          onChange={(items: string[]) => dispatch(setPriority(items))}
        />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckboxButtons
          items={filtersData.requestType}
          checked={requestType}
          onChange={(items: string[]) => dispatch(setRequestType(items))}
        />
      </Paper>
      <Button onClick={() => dispatch(resetParams())}>Reset</Button>
    </Box>
  );
}
