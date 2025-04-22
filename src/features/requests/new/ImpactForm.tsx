/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useState } from "react";
import { Autocomplete, Box, Grid2, TextField, Typography } from "@mui/material";
import { Titles } from "../../../lib/titles";
import { RequestSchema } from "../../../lib/schemas/requestSchema";

type Props = {
  requestData: RequestSchema;
  handleChange: (
    input: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function ImpactForm({ requestData, handleChange }: Props) {
  const [internal, setInternal] = useState<string[]>([Titles[0].title]);
  const [external, setExternal] = useState<string[]>([Titles[0].title]);

  const handleInternalChange = (newInputValue: { title: string }[]) => {
    requestData.impactedClassifications = newInputValue.map(
      (item) => item.title,
    );
    setInternal(newInputValue.map((item) => item.title));
  };

  const handleExternalChange = (newInputValue: { title: string }[]) => {
    requestData.impactedExternalJobTypes = newInputValue.map(
      (item) => item.title,
    );
    setExternal(newInputValue.map((item) => item.title));
  };

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
            <Typography variant="subtitle1">Impact</Typography>
          </Box>
        </Grid2>
        <Grid2 size={12}>
          <Box display="flex" flexDirection="row" gap={2}>
            <TextField
              type="number"
              label="How many internal staff will be impacted?"
              value={requestData.internalUserCount}
              onChange={(event) => handleChange("internalUserCount", event)}
            />
            <TextField
              type="number"
              label="How many external staff will be impacted?"
              value={requestData.externalUserCount}
              onChange={(event) => handleChange("externalUserCount", event)}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 6 }}>
          <Autocomplete
            multiple
            id="internal"
            options={Titles}
            getOptionLabel={(option) => option.title}
            value={Titles.filter((title) => internal.includes(title.title))}
            onChange={(_event, newInputValue) =>
              handleInternalChange(newInputValue)
            }
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Identify the impacted internal users by job classification"
                placeholder="Job Titles"
              />
            )}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 6 }}>
          <Autocomplete
            multiple
            id="external"
            options={Titles}
            getOptionLabel={(option) => option.title}
            value={Titles.filter((title) => external.includes(title.title))}
            onChange={(_event, newInputValue) =>
              handleExternalChange(newInputValue)
            }
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Identify the impacted internal users by job classification"
                placeholder="Job Titles"
              />
            )}
          />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            fullWidth
            label="Explain if the project will create a new automation or correct a current system"
            multiline
            rows={4}
            value={requestData.newAutomationExplain}
            onChange={(event) => handleChange("newAutomationExplain", event)}
          />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            fullWidth
            label="Explain if there is a cost saving (include a breakdown of the estimated amount)"
            multiline
            rows={4}
            value={requestData.explainCostSavings}
            onChange={(event) => handleChange("explainCostSavings", event)}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
