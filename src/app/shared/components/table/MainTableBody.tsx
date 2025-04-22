import { Table } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export default function MainTableBody({ children }: Props) {
  return (
    <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={'medium'}>
      {children}
    </Table>
  );
}
