import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import RefreshRounded from "@mui/icons-material/RefreshRounded";
import ShareIcon from "@mui/icons-material/Share";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { LineChart } from "@mui/x-charts";

const cData = [40, 27]; // Changes
const pData = [24, 39]; // Projects
const xLabels = ["Projects", "Changes"];

export default function WorkChart() {
  return (
    <Card sx={{ maxWidth: 400 }} elevation={2}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }}>
            <AccountTreeIcon fontSize="small" />
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title="Projects to Changes"
        subheader="Last 30 days"
      />
      <CardMedia sx={{ p: 2 }}>
        <LineChart
          series={[
            {
              data: cData,
              label: "changes",
              area: true,
              stack: "total",
              showMark: false,
            },
            {
              data: pData,
              label: "projects",
              area: true,
              stack: "total",
              showMark: false,
            },
          ]}
          xAxis={[
            {
              data: xLabels,
              scaleType: "point",
            },
          ]}
          grid={{ vertical: true, horizontal: true }}
          height={300}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Displays the percentage of requests by type.
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
