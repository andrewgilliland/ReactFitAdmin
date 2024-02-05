"use client";
import { ChangeEvent, FC, useState } from "react";

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
      className={`relative flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {name}
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
