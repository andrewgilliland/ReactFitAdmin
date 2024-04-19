"use client";
import { FC } from "react";
import { gray, pink } from "@/styles/colors";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryThemeDefinition,
} from "victory";

type BarChartProps = {
  exercises: any[];
};

const BarChart: FC<BarChartProps> = ({ exercises }) => {
  const data = exercises.map((exercise) => {
    return {
      muscleGroup: exercise?.targetMuscleGroup,
      amount: 1,
    };
  });

  const chartTheme: VictoryThemeDefinition = {
    axis: {
      style: {
        axisLabel: {
          fill: gray[200],
        },
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
        <VictoryAxis dependentAxis />
        <VictoryBar data={data} x="muscleGroup" y="amount" />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
