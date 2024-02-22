"use client";
import { FC, use, useEffect, useState } from "react";
import ExerciseSelect from "./ExerciseSelect";
import Button from "../Button";
import SupersetSetInput from "./SupersetSetInput";

type SupersetInputProps = {
  supersetIndex: number;
  value?: string;
};

const SupersetInput: FC<SupersetInputProps> = ({ supersetIndex, value }) => {
  const [setCount, setSetCount] = useState(1);
  const [setNames, setSetNames] = useState<[string, string]>(["", ""]);

  //   const [exerciseId, setExerciseId] = useState(value);
  //   const { exercises } = useContext(ExerciseContext);

  //   useEffect(() => {
  //     exercises.length && setExerciseId(exercises[0]?.id);
  //   }, [exercises]);

  useEffect(() => {
    console.log("setNames: ", setNames);
  }, [setNames]);

  return (
    <div className="mt-4" key={supersetIndex}>
      <div className="text-sm text-gray-500">{`Superset ${supersetIndex}`}</div>
      <div className="border-2 border-yellow-400 rounded mt-1 p-4">
        {new Array(2).fill(null).map((_, index) => {
          const exerciseIndex = index + 1;
          const exerciseName = `superset-${supersetIndex}-exercise-${exerciseIndex}`;

          return (
            <ExerciseSelect
              key={exerciseName}
              label={`Exercise ${exerciseIndex}`}
              name={exerciseName}
              onChange={(name) => {
                setSetNames((prev) => {
                  console.log("supersetinput: ", name);
                  console.log("index: ", index);
                  const newSetNames: [string, string] = [...prev];
                  newSetNames[index] = name;
                  return newSetNames;
                });
              }}
              className={index ? "mt-3" : ""}
            />
          );
        })}
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500">Sets</div>
        <div className="border-2 border-pink-400 rounded mt-1 p-4">
          {new Array(setCount).fill(null).map((_, index) => (
            <SupersetSetInput
              className={`${index ? "mt-3" : ""}`}
              exerciseIndex={supersetIndex}
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
  );
};

export default SupersetInput;
