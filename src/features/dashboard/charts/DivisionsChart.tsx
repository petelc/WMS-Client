import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import RefreshRounded from "@mui/icons-material/RefreshRounded";
import ShareIcon from "@mui/icons-material/Share";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { PieChart } from "@mui/x-charts/PieChart";
import { blueGrey } from "@mui/material/colors";

import {
  divisions,
  valueFormatter,
} from "../../../lib/settings/pieChartSettings";

export default function DivisionsChart() {
  return (
    <Card sx={{ maxWidth: 400 }} elevation={2}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }}>
            <AccountTreeIcon fontSize="small" />
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title="Divisions"
        subheader="Last 30 days"
      />
      <CardMedia sx={{ p: 2 }}>
        <PieChart
          series={[
            {
              data: divisions,
              highlightScope: { fade: "global", highlight: "item" },
              faded: {
                innerRadius: 30,
                additionalRadius: -30,
                color: "gray",
              },
              valueFormatter,
            },
          ]}
          slotProps={{
            legend: {
              direction: "row",
              position: { vertical: "bottom", horizontal: "middle" },
              padding: 1,
              itemMarkWidth: 10,
              itemMarkHeight: 10,
              markGap: 5,
              itemGap: 5,
              labelStyle: {
                fontSize: 12,
                fontWeight: 400,
              },
            },
          }}
          height={350}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Displays the percentage of requests by division.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="refresh">
          <RefreshRounded />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
