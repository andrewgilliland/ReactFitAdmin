"use client";
import { capitalize } from "@/lib/utils";
import Input from "../Input";
import { Set, SetType, setTypes } from "@/types";
import { FC, useState } from "react";

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
      <div className="mt-1 items-start rounded-xl bg-neutral-950 p-4">
        <div className="text-sm text-neutral-500">{`Set ${setIndex}`}</div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <fieldset>
            <legend className="text-sm font-medium text-neutral-500">
              Type
            </legend>
            <div className="mt-1 max-w-min rounded-lg bg-orange-600 p-1.5 font-semibold text-black">
              {setTypes.map((type, index) => (
                <label
                  key={type}
                  className={`px-2 py-1 text-sm text-black transition-all ${
                    setType === type ? "bg-black text-orange-600" : ""
                  } ${index ? "rounded-r-lg" : "rounded-l-lg"}`}
                >
                  <span>{`${capitalize(type)}`}</span>
                  <input
                    className="hidden"
                    type="radio"
                    name={setIdentifier}
                    value={type}
                    checked={setType === type}
                    onChange={() => setSetType(type)}
                  />
                </label>
              ))}
            </div>
          </fieldset>
          <Input
            value={setValue}
            label={setType}
            name={`${setIdentifier}-${setType}`}
            type="number"
            className="w-14"
          />
        </div>
      </div>
    </div>
  );
};

export default SetInput;
