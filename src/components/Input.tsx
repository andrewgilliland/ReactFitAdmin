"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import EditButton from "./EditButton";

type InputProps = {
  name: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isEditable?: boolean;
};

const Input: FC<InputProps> = ({
  name,
  value,
  onChange,
  className,
  isEditable = false,
}) => {
  const [disabled, setDisabled] = useState(isEditable);

  useEffect(() => {
    console.log(disabled);
  }, [disabled]);

  return (
    <label
      className={`relative flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {name}
      <input
        className={`bg-black border-2 rounded mt-1 px-2 py-1 ${
          disabled
            ? "border-gray-400 text-gray-400"
            : "border-pink-400 text-white"
        }`}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {isEditable && (
        <EditButton
          className="absolute bottom-1 right-1"
          onClick={() => setDisabled(!disabled)}
        />
      )}
    </label>
  );
};

export default Input;
