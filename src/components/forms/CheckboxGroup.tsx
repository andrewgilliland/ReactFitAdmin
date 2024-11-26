"use client";
import { ChangeEvent, FC, use, useEffect, useState } from "react";
import { MuscleGroup } from "@/types";

type CheckboxGroupProps = {
  name: string;
  options: readonly MuscleGroup[]; // Todo: Make this a generic type value has to be the same type
  value?: MuscleGroup[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isDisabled?: boolean;
};

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  name,
  options,
  value = [],
  className,
  isDisabled = false,
}) => {
  const [valueState, setValueState] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    event.target.checked
      ? setValueState([event.target.id as MuscleGroup, ...valueState])
      : setValueState(valueState.filter((item) => item !== event.target.id));

  return (
    <fieldset
      name={name}
      className={`relative ${
        isDisabled ? "border-gray-500" : ""
      } rounded ${className}`}
    >
      <legend className="flex flex-col capitalize text-sm text-neutral-400">
        {name}
      </legend>
      <div className="flex flex-wrap gap-2 mt-1">
        {options.map((option, index) => (
          <div
            key={`${option}-${index}`}
            className={`bg-neutral-800 rounded-xl ${
              valueState.includes(option) && "bg-orange-600"
            }`}
          >
            <label
              htmlFor={option}
              className="relative flex items-center font-semibold text-sm text-neutral-100 p-3 rounded-full cursor-pointer"
            >
              {option}
              <div className="flex ml-2">
                <input
                  type="checkbox"
                  className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-neutral-100 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:bg-orange-600 checked:before:bg-orange-600 hover:before:opacity-10`}
                  checked={valueState.includes(option)}
                  onChange={handleChange}
                  id={option}
                  name={`${name}-${option}`}
                  disabled={isDisabled}
                />
                <span className="absolute text-neutral-100 transition-opacity opacity-0 pointer-events-none top-2/4 right-3.5 -translate-y-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CheckboxGroup;
