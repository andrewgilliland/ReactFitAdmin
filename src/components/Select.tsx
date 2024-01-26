"use client";

import { ChangeEvent, FC, useState } from "react";
import EditButton from "./EditButton";

type SelectProps = {
  name: string;
  options: readonly string[];
  value: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  isEditable?: boolean;
};

const Select: FC<SelectProps> = ({
  name,
  options,
  value,
  onChange,
  className,
  isEditable = false,
}) => {
  const [disabled, setDisabled] = useState(isEditable);

  return (
    <label
      className={`relative flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {name}
      <select
        className={`bg-black border-2 ${
          disabled
            ? "border-gray-400 text-gray-400"
            : "border-pink-400 text-white"
        } rounded mt-1 px-2 py-1`}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
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
      {isEditable && (
        <EditButton
          className="absolute bottom-1 right-5"
          onClick={() => setDisabled(!disabled)}
        />
      )}
    </label>
  );
};

export default Select;
