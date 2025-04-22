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
import { blueGrey } from "@mui/material/colors";
import RefreshRounded from "@mui/icons-material/RefreshRounded";
import ShareIcon from "@mui/icons-material/Share";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { BarChart } from "@mui/x-charts/BarChart";

import {
  chartSettingsV,
  chartSettingsH,
} from "../../../lib/settings/barChartSettings";

export default function RequestChart() {
  const layout = "vertical";
  const radius = 10;

  return (
    <Card sx={{ maxWidth: 400 }} elevation={2}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }}>
            <BorderColorIcon fontSize="small" />
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title="Requests"
        subheader="Last 30 days"
      />
      <CardMedia sx={{ p: 2 }}>
        <BarChart
          series={[
            {
              dataKey: "approved",
              label: "Approved",
              layout,
              stack: "stack",
            },
            {
              dataKey: "denied",
              label: "Denied",
              layout,
              stack: "stack",
            },
          ]}
          {...(layout === "vertical" ? chartSettingsV : chartSettingsH)}
          borderRadius={radius}
          height={350}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Displays the number of requests approved and denied.
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
