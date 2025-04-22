export const divisions = [
  {
    label: "AppDev",
    value: 42.72,
    color: "#0088FE",
  },
  {
    label: "Server",
    value: 36.38,
    color: "#00C49F",
  },
  {
    label: "Network",
    value: 24.98,
    color: "#00D52D",
  },
  {
    label: "Telecom",
    value: 10.83,
    color: "#FFBB28",
  },
  {
    label: "Security",
    value: 12.42,
    color: "#FF8042",
  },
  {
    label: "Video",
    value: 9.65,
    color: "#EB5021",
  },
];

const normalize = (v: number, v2: number) =>
  Number.parseFloat(((v * v2) / 100).toFixed(2));

export const divisionsDRC = [
  ...divisions.map((v) => ({
    ...v,
    label: v.label === "Other" ? "Other (Division)" : v.label,
    value: normalize(v.value, 1),
  })),
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
