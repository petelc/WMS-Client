import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

import { RequestSchema } from "../../../lib/schemas/requestSchema";
import { RequestType } from "../../../lib/types/types";

type Props = {
  requestData: RequestSchema;
  handleChange: (
    input: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  requestTypes: RequestType[];
};

export default function RequestForm({
  requestData,
  handleChange,
  requestTypes,
}: Props) {
  const [policy, setPolicy] = useState<string[]>([]);
  const [newPolicy, setNewPolicy] = useState("");
  const [project, setProject] = useState<string[]>([]);
  const [newProject, setNewProject] = useState("");
  const [requestDate, setRequestDate] = useState<Dayjs | null>(dayjs());
  const [requestType, setRequestType] = useState<string>("");

  // ? Form Action Functions
  const handlePolicyTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewPolicy(event.target.value);
  };

  const handleProjectTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewProject(event.target.value);
  };

  const handleAddPolicy = () => {
    requestData.policies.push(newPolicy);
    setPolicy((prev: string[]) => [...prev, newPolicy]);
    setNewPolicy("");
  };

  const handleAddProject = () => {
    requestData.relatedProjects.push(newProject);
    setProject((prev: string[]) => [...prev, newProject]);
    setNewProject("");
  };

  const handleDateChange = (date: Dayjs | null) => {
    setRequestDate(dayjs(date));
  };

  const handleDeleteProject = (index: number) => {
    const newProjectList = [...project];
    newProjectList.splice(index, 1);
    setProject(newProjectList);
  };

  const handleDeletePolicy = (index: number) => {
    const newPolicyList = [...policy];
    newPolicyList.splice(index, 1);
    setPolicy(newPolicyList);
  };

  const handleRequestTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    requestData.requestType = {
      id: Number(event.target.value),
      requestTypeName: requestTypes.filter(
        (type) => type.id === Number(event.target.value),
      )[0].requestTypeName,
    };
    setRequestType(event.target.value);
  };

  // ? Form Actions
  // const createFormData = (items: FieldValues) => {
  //   const formData = new FormData();
  //   for (const key in items) {
  //     formData.append(key, items[key]);
  //   }

  //   return formData;
  // };

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={3} marginY={3}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6, md: 8 }}>
          <TextField
            fullWidth
            label="Title"
            name="requestTitle"
            value={requestData.requestTitle}
            onChange={(event) => handleChange("requestTitle", event)}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <TextField fullWidth label="Project #" disabled />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 6 }}>
          <TextField
            fullWidth
            label="Requested By"
            name="requestedBy"
            value={requestData.requestedBy}
            onChange={(event) => handleChange("requestedBy", event)}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 2 }}>
          <TextField
            fullWidth
            label="Department"
            name="department"
            value={requestData.department}
            onChange={(event) => handleChange("department", event)}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <DatePicker
            label="Request Date"
            name="requestDate"
            value={requestDate}
            onChange={handleDateChange}
          />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            fullWidth
            label="Explain Impact"
            name="explainImpact"
            value={requestData.explainImpact}
            multiline
            rows={4}
            onChange={(event) => handleChange("explainImpact", event)}
          />
        </Grid2>
        <Grid2 size={12}>
          <Divider variant="middle" sx={{ mt: 4, mb: 4 }} />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 6 }}>
          <FormControl id="requestTypeGroup">
            <FormLabel component="legend">Request Type</FormLabel>
            <RadioGroup
              name="requestTypeGroup"
              value={requestType}
              onChange={handleRequestTypeChange}
              row
            >
              {requestTypes?.map((type) => {
                const { id, requestTypeName } = type;

                return (
                  <FormControlLabel
                    key={id}
                    value={id}
                    control={<Radio />}
                    label={requestTypeName}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <FormControl id="stakeHolderGroup">
            <FormLabel component="legend">
              Have stakeholders conferred on this project?
            </FormLabel>
            <RadioGroup
              name="stakeHolderGroup"
              value={requestData.stakeHolders}
              onChange={(event) => handleChange("stakeHolders", event)}
              row
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid2>
        <Grid2 container size={12} spacing={8} sx={{ mt: 4 }}>
          <Grid2 size={{ xs: 6, md: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              List any DRC Policies that apply
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box display="flex" flexDirection="row" gap={2}>
                <TextField
                  label="Policy"
                  id="policy"
                  value={newPolicy}
                  onChange={handlePolicyTextChange}
                />
                <Button variant="contained" onClick={handleAddPolicy}>
                  Add
                </Button>
              </Box>
              <List>
                {policy.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={item} />
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeletePolicy(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              List any related projects
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box display="flex" flexDirection="row" gap={2}>
                <TextField
                  label="Related Projects"
                  id="relatedProjects"
                  value={newProject}
                  onChange={handleProjectTextChange}
                />
                <Button variant="contained" onClick={handleAddProject}>
                  Add
                </Button>
              </Box>
              <List>
                {project.map((item, index) => (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDeleteProject(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="end"
              gap={2}
            ></Box>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
