"use client";
import { FC, useState } from "react";

type SelectProps = {
  name: string;
  options: readonly string[];
  value?: string;
  className?: string;
  isDisabled?: boolean;
};

const Select: FC<SelectProps> = ({
  name,
  options,
  value,
  className,
  isDisabled = false,
}) => {
  const [valueState, setValueState] = useState(value);

  return (
    <label
      className={`flex flex-col capitalize text-sm text-neutral-400 ${className}`}
    >
      {name}
      <select
        className={`bg-neutral-800 ${
          isDisabled
            ? "border-gray-400 text-gray-400"
            : "border-pink-400 text-white"
        } rounded-xl mt-1 p-2`}
        name={name}
        value={valueState}
        onChange={(e) => setValueState(e.target.value)}
        disabled={isDisabled}
      >
        {options.map((option, index) => (
          <option
            className="capitalize"
            key={`${option}-${index}`}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
