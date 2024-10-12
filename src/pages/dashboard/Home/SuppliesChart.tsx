import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Example chartData
const chartData = [
  { month: "January", supply: 186 },
  { month: "February", supply: 305 },
  { month: "March", supply: 237 },
  { month: "April", supply: 73 },
  { month: "May", supply: 209 },
  { month: "June", supply: 214 },
];

// Chart configuration for supply
const chartConfig = {
  supply: {
    label: "Supply",
    color: "hsl(var(--chart-1))",
  },
};

export function SuppliesChart() {
  return (
    <Card className="dark:bg-slate-900">
      <CardHeader>
        <CardTitle>Supplies Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="supply"
              fill={chartConfig.supply.color}
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={1}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
