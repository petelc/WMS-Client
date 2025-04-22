import { Box, Grid2, Typography, TextField } from "@mui/material";
import { RequestSchema } from "../../../lib/schemas/requestSchema";

type Props = {
  requestData: RequestSchema;
  handleChange: (
    input: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function ScopeForm({ requestData, handleChange }: Props) {
  return (
    <Box
      component="form"
      width="100%"
      display="flex"
      flexDirection="column"
      gap={3}
      marginY={3}
    >
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Box display="flex" flexDirection="row" gap={2} alignItems="center">
            <Typography variant="subtitle1">Project Scope</Typography>
          </Box>
        </Grid2>
        <Grid2 size={12}>
          <TextField
            fullWidth
            label="Objectives/Purpose: (what is to be accomplished and its benefits)"
            multiline
            rows={4}
            value={requestData.objectives}
            onChange={(event) => handleChange("objectives", event)}
          />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            fullWidth
            label="Requirements: Specify what items and/or functionality is needed to fulfill the request (e.g. forms, buisiness flow, reports, data sharing, etc.)"
            multiline
            rows={4}
            value={requestData.requirements}
            onChange={(event) => handleChange("requirements", event)}
          />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            fullWidth
            label="List resources and/or equipment needed (hardware, software, licenses, etc.)"
            multiline
            rows={4}
            value={requestData.resources}
            onChange={(event) => handleChange("resources", event)}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
