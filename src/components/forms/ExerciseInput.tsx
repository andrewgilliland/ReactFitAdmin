"use client";
import { FC, useContext, useEffect, useState } from "react";
import { Set } from "@/types";
import SetInput from "./SetInput";
import Button from "../Button";
import { ExerciseContext } from "@/app/Provider";

type ExerciseInputProps = {
  exerciseIndex: number;
  value?: number;
  sets?: Set[];
};

const ExerciseInput: FC<ExerciseInputProps> = ({
  exerciseIndex,
  value,
  sets,
}) => {
  const [setCount, setSetCount] = useState(sets?.length || 1);
  const [exerciseId, setExerciseId] = useState(value);
  const { exercises } = useContext(ExerciseContext);

  useEffect(() => {
    exercises.length && !value && setExerciseId(exercises[0]?.id);
  }, [exercises, value]);

  const selectName = `exercise-${exerciseIndex}`;

  return (
    <div className="mt-4">
      <div className="mt-1 rounded-lg bg-black p-4">
        {/** Hidden input name needed for formatExercise function in workout server action */}
        <input type="hidden" name="exercise" />
        <label className="flex flex-col text-sm capitalize text-neutral-500">
          {`Exercise ${exerciseIndex}`}
          <select
            className="mt-1 rounded-lg border-2 border-orange-600 bg-black px-2 py-1 text-neutral-200"
            name={selectName}
            value={exerciseId}
            onChange={(e) => setExerciseId(Number(e.target.value))}
          >
            {exercises &&
              exercises.map(({ id, name }) => (
                <option className="capitalize" key={id} value={id}>
                  {name}
                </option>
              ))}
          </select>
        </label>
        <div className="mt-4">
          <div className="text-sm text-neutral-500">Sets</div>
          <div className="mt-1 rounded-xl bg-neutral-900 p-4">
            {new Array(setCount).fill(null).map((_, index) => (
              <SetInput
                className={`${index ? "mt-3" : ""}`}
                exerciseIndex={exerciseIndex}
                setIndex={index + 1}
                key={index + 1}
                set={sets?.[index]}
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
