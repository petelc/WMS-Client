import { HighlightOptions } from "@mui/x-charts";

export const requestTypes = [
  { name: "Projects", value: 100 },
  { name: "Changes", value: 200 },
];

export const lineChartsParams = {
  series: [
    {
      id: "projects",
      dataKey: "Projects",
      label: "Projects",
      area: true,
      stack: "total",
      highlightScope: {
        highlight: "item" as HighlightOptions,
      },
    },
    {
      id: "changes",
      dataKey: "Changes",
      label: "Changes",
      area: true,
      stack: "total",
      highlightScope: {
        highlight: "item" as HighlightOptions,
      },
    },
  ],
  xAxis: [
    {
      data: [0, 3, 6, 9, 12],
      scaleType: "linear",
      id: "axis1",
    },
  ],
  height: 300,
  tooltip: {
    shared: true,
    show: true,
  },
};
