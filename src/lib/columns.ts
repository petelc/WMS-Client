import { GridColDef } from '@mui/x-data-grid';

/**
 * @typedef {GridColDef<rows[number]>} GridColDef
 * @property {string} field - The field name of the column
 * @property {string} headerName - The display name of the column
 * @property {number} width - The width of the column
 * @name columns
 * @description Columns for the requests table
 * @returns {GridColDef<rows[number]>[]}
 * @constructs GridColDef
 * @param {GridColDef<rows[number]>[]} columns
 */
export const columns: GridColDef<rows[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'requestDate', headerName: 'Request Date', width: 150 },
  { field: 'requestTitle', headerName: 'Request Title', width: 200 },
  { field: 'requestedBy', headerName: 'Requested By', width: 150 },
  { field: 'requestType', headerName: 'Request Type', width: 150 },
  { field: 'priority', headerName: 'Priority', width: 150 },
];

export type rows = [
  {
    id: number;
    requestDate: Date;
    requestTitle: string;
    requestedBy: string;
    requestType: string;
    priority: string;
  },
];
