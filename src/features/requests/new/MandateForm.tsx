//import { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { RequestSchema } from "../../../lib/schemas/requestSchema";

type Props = {
  requestData: RequestSchema;
  handleChange: (
    input: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function MandateForm({ requestData, handleChange }: Props) {
  //const [inputValue, setInputValue] = useState<string[]>([mandates[0].title]);
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
            <Typography variant="h6">Mandate By</Typography>
            <Typography variant="caption">(Check all that apply)</Typography>
          </Box>
        </Grid2>
        <Grid2 size={12}>
          <Box display="flex" flexDirection="row" gap={2}>
            <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
              <FormLabel component="legend" id="mandate-by-label">
                Mandate By
              </FormLabel>
              <FormGroup sx={{ flexDirection: "row" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={requestData.mandateBy.includes("ORC")}
                      onChange={(event) => handleChange("mandateBy", event)}
                      name="ORC"
                    />
                  }
                  label="ORC"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={requestData.mandateBy.includes("AR")}
                      onChange={(event) => handleChange("mandateBy", event)}
                      name="AR"
                    />
                  }
                  label="AR"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={requestData.mandateBy.includes("Director")}
                      onChange={(event) => handleChange("mandateBy", event)}
                      name="Director"
                    />
                  }
                  label="Director"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={requestData.mandateBy.includes(
                        "External Compliance Standard",
                      )}
                      onChange={(event) => handleChange("mandateBy", event)}
                      name="External Compliance Standard"
                    />
                  }
                  label="External Compliance Standard"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 6 }}>
          <TextField
            fullWidth
            label="Mandate Title"
            value={requestData.mandateTitle}
            onChange={(event) => handleChange("mandateTitle", event)}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 2 }}>
          <TextField
            fullWidth
            label="ORC #"
            value={requestData.codeRuleNums}
            onChange={(event) => handleChange("codeRuleNums", event)}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 4 }}>
          <DatePicker
            label="Compliance Date"
            slotProps={{ textField: { helperText: "Required" } }}
            value={dayjs(requestData.requiredComplianceDate)}
            //onChange={() => handleChange('requiredComplianceDate', null)}
          />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            fullWidth
            label="Mandate Description"
            multiline
            rows={4}
            value={requestData.mandateDescription}
            onChange={(event) => handleChange("mandateDescription", event)}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
