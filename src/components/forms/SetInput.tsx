"use client";
import { FC, useState } from "react";
import Input from "../Input";
import { Set, SetType } from "@/types";

type SetInputProps = {
  exerciseIndex: number;
  setIndex: number;
  set?: Set;
  className?: string;
};

const SetInput: FC<SetInputProps> = ({
  exerciseIndex,
  setIndex,
  set = { repetitions: 10, duration: null },
  className,
}) => {
  // Remove null values from set object
  const filteredSet = Object.entries(set)
    .filter(([_, value]) => value !== null)
    .flat() as [SetType, number];
  const setValue = filteredSet[1];
  const setIdentifier = `exercise-${exerciseIndex}-set-${setIndex}`;

  const [setType, setSetType] = useState<SetType>(filteredSet[0]);

  return (
    <div className={className}>
      <div className="text-sm text-gray-500">{`Set ${setIndex}`}</div>
      <div className="border-2 border-pink-400 rounded mt-1 p-4">
        <fieldset className="border-2 border-pink-400 rounded px-4 pb-2">
          <legend className="text-sm text-gray-500">Set Type</legend>
          <label className="text-sm text-grey-500">
            Repetitions
            <input
              className="ml-1"
              type="radio"
              name={setIdentifier}
              value="repetitions"
              checked={setType === "repetitions"}
              onChange={() => setSetType("repetitions")}
            />
          </label>
          <label className="text-sm text-grey-500 ml-4">
            Duration
            <input
              className="ml-1"
              type="radio"
              name={setIdentifier}
              value="duration"
              checked={setType === "duration"}
              onChange={() => setSetType("duration")}
            />
          </label>
        </fieldset>
        <Input
          value={setValue}
          label={setType}
          name={`${setIdentifier}-${setType}`}
          type="number"
          className="mt-1"
        />
      </div>
    </div>
  );
};

export default SetInput;
