"use client";
import { FC, useState } from "react";
import { Exercise } from "@/types";
import SetInput from "./SetInput";
import Button from "../Button";

type ExerciseInputProps = {
  exerciseIndex: number;
  exercises: Exercise[];
};

const ExerciseInput: FC<ExerciseInputProps> = ({
  exerciseIndex,
  exercises,
}) => {
  const [setCount, setSetCount] = useState(1);
  const selectName = `exercise-${exerciseIndex}`;

  return (
    <div className={`${exerciseIndex ? "mt-4" : ""}`} key={selectName}>
      <div className="text-sm text-gray-500">{`Exercise ${exerciseIndex}`}</div>
      <div className="border-2 border-yellow-400 rounded mt-1 p-4">
        <label className={`flex flex-col capitalize text-sm text-gray-500`}>
          {"Exercise"}
          <select
            className={`bg-black border-2 border-pink-400 text-white rounded mt-1 px-2 py-1`}
            name={selectName}
          >
            {exercises.map(({ id, name }) => (
              <option className="capitalize" key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-4">
          <div className="text-sm text-gray-500">Sets</div>
          <div className="border-2 border-pink-400 rounded mt-1 p-4">
            {new Array(setCount).fill(null).map((_, index) => (
              <SetInput
                className={`${index ? "mt-3" : ""}`}
                exerciseIndex={exerciseIndex}
                setIndex={index + 1}
                key={index + 1}
              />
            ))}
            <Button
              className="mt-4"
              onClick={(event) => {
                event?.preventDefault();
                setSetCount(setCount + 1);
              }}
            >
              Add Set
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseInput;
