"use client";
import { ExerciseContext } from "@/app/Provider";
import { FC, useContext, useState } from "react";

type SelectProps = {
  name: string;
  label?: string;
  value?: string;
  className?: string;
  isDisabled?: boolean;
};

const ExerciseSelect: FC<SelectProps> = ({
  name,
  label,
  value,
  className,
  isDisabled = false,
}) => {
  const [valueState, setValueState] = useState(value);
  const { exercises } = useContext(ExerciseContext);

  return (
    <label
      className={`flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {label ? label : name}
      <select
        className={`bg-black border-2 ${
          isDisabled
            ? "border-gray-400 text-gray-400"
            : "border-pink-400 text-white"
        } rounded mt-1 px-2 py-1`}
        name={name}
        value={valueState}
        onChange={(e) => setValueState(e.target.value)}
        disabled={isDisabled}
      >
        {exercises.map(({ id, name }) => (
          <option className="capitalize" key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ExerciseSelect;
