import { Grid2, Paper } from "@mui/material";

import RequestChart from "./charts/RequestChart";
import DivisionsChart from "./charts/DivisionsChart";
import WorkChart from "./charts/WorkChart";

export default function DashboardPage() {
  return (
    <Grid2 container spacing={0}>
      <Grid2 size={12}>
        <Paper sx={{ maxWidth: "100%", height: "100vh", pt: 1, pl: 2, pr: 2 }}>
          <h1>Dashboard</h1>
          <hr />
          <Grid2
            container
            direction="row"
            sx={{
              justifyContent: "space-evenly",
              alignItems: "top",
            }}
          >
            <RequestChart />
            <DivisionsChart />
            <WorkChart />
          </Grid2>
        </Paper>
      </Grid2>
    </Grid2>
  );
}
