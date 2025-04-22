import { BarChartProps, axisClasses } from "@mui/x-charts";

export const dataset = [
  [3, 7, "Projects"],
  [13, 23, "Changes"],
].map(([approved, denied, order]) => ({
  approved,
  denied,
  order,
}));

export const chartSettingsH: Partial<BarChartProps> = {
  dataset,
  height: 250,
  yAxis: [{ scaleType: "band", dataKey: "order" }],
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(0px)",
    },
  },
  slotProps: {
    legend: {
      direction: "row",
      position: { vertical: "bottom", horizontal: "middle" },
      padding: -5,
    },
  },
};

export const chartSettingsV: Partial<BarChartProps> = {
  ...chartSettingsH,
  xAxis: [{ scaleType: "band", dataKey: "order" }],
  yAxis: undefined,
};
