"use client";
import { capitalize } from "@/lib/utils";
import Input from "../Input";
import { Set, SetType, setTypes } from "@/types";
import { FC, useState } from "react";

type SupersetSetInputProps = {
  supersetIndex: number;
  setIndex: number;
  exerciseNames: [string, string];
  set?: Set;
  className?: string;
};

const SupersetSetInput: FC<SupersetSetInputProps> = ({
  supersetIndex,
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

  const [setType, setSetType] = useState<[SetType, SetType]>([
    "repetitions",
    "repetitions",
  ]);

  return (
    <div className={className}>
      <div className="border-2 border-pink-400 rounded mt-1 p-4">
        <div className="text-sm text-gray-500">{`Set ${setIndex}`}</div>
        <div className="flex flex-col">
          {exerciseNames.map((name, index) => {
            const setTypeIdentifier = `superset-${supersetIndex}-exercise-${
              index + 1
            }-set-${setIndex}`;
            const setIdentifier = `${setTypeIdentifier}-${setType[index]}`;

            return (
              <div className={`mt-4`} key={`${name}-${index}`}>
                <div className="text-sm text-gray-500">
                  {exerciseNames[index] || `Exercise ${index + 1}`}
                </div>
                <div className="flex mt-2">
                  <fieldset className="mx-4">
                    <legend className="text-sm text-gray-500">Set Type</legend>
                    <div className="bg-pink-400 text-black font-semibold border border-pink-400 rounded-md max-w-min mt-1 p-1">
                      {setTypes.map((type, i) => (
                        <label
                          key={type}
                          className={`text-sm text-grey-500 px-2 py-1 transition-all 
                          ${
                            setType[index] === type
                              ? "bg-black text-pink-400"
                              : ""
                          }
                    ${i ? "rounded-r-md" : "rounded-l-md"}`}
                        >
                          <span>{`${capitalize(type)}`}</span>
                          <input
                            className="hidden"
                            type="radio"
                            name={setTypeIdentifier}
                            value={type}
                            checked={setType[index] === type}
                            onChange={() =>
                              setSetType((prev) => {
                                const newSetType: [SetType, SetType] = [
                                  ...prev,
                                ];
                                newSetType[index] = type;
                                return newSetType;
                              })
                            }
                          />
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <Input
                    value={setValue}
                    label={setType[index]}
                    name={setIdentifier}
                    type="number"
                    className="mt-1"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SupersetSetInput;
