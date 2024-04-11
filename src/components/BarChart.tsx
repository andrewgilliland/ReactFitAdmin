"use client";
import { pink } from "@/styles/colors";
import { FC } from "react";
import { gray } from "tailwindcss/colors";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryThemeDefinition,
} from "victory";

type BarChartProps = {
  data: any;
};

const BarChart: FC<BarChartProps> = ({ data }) => {
  console.log("data: ", data);

  const chartTheme: VictoryThemeDefinition = {
    axis: {
      style: {
        tickLabels: {
          fill: gray[400],
        },
        axis: {
          stroke: gray[400],
        },
      },
    },
    bar: {
      style: {
        data: {
          fill: pink[400],
          width: 20,
        },
      },
    },
  };

  return (
    <div className="max-w-sm">
      <VictoryChart theme={chartTheme}>
        <VictoryAxis label="Muscle Group" />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
        <VictoryBar data={data} x="muscleGroup" y="amount" />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
