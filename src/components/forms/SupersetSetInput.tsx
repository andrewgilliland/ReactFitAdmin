"use client";
import { capitalize } from "@/lib/utils";
import Input from "../Input";
import { Set, SetType, setTypes } from "@/types";
import { FC, useState } from "react";

type SupersetSetInputProps = {
  exerciseIndex: number;
  setIndex: number;
  exerciseNames: [string, string];
  set?: Set;
  className?: string;
};

const SupersetSetInput: FC<SupersetSetInputProps> = ({
  exerciseIndex,
  setIndex,
  exerciseNames,
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
      <div className="border-2 border-pink-400 rounded mt-1 p-4">
        <div className="text-sm text-gray-500">{`Set ${setIndex}`}</div>
        <div className="flex flex-col border">
          {exerciseNames.map((name, index) => (
            <div className={`flex mt-4`} key={`${name}-${index}`}>
              <div className="flex-1 text-sm text-gray-500">
                {exerciseNames[index]}
              </div>
              <fieldset className="mx-4">
                <legend className="text-sm text-gray-500">Set Type</legend>
                <div className="bg-pink-400 text-black font-semibold border border-pink-400 rounded-md max-w-min mt-1 p-1">
                  {setTypes.map((type, index) => (
                    <label
                      key={type}
                      className={`text-sm text-grey-500 px-2 py-1 transition-all ${
                        setType === type ? "bg-black text-pink-400" : ""
                      }
                    ${index ? "rounded-r-md" : "rounded-l-md"}`}
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
                className="mt-1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupersetSetInput;
