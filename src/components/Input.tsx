"use client";
import { FC, InputHTMLAttributes, useState } from "react";

type InputProps = {
  name: string;
  value?: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  className?: string;
  isDisabled?: boolean;
};

const Input: FC<InputProps> = ({
  name,
  value = "",
  type = "text",
  className,
  isDisabled = false,
}) => {
  const [valueState, setValueState] = useState(value);

  return (
    <label
      className={`flex items-center capitalize text-sm text-gray-500 ${className}`}
    >
      <span className="mr-3">{name}</span>

      <input
        className={`bg-black border-2 rounded mt-1 px-2 py-1 placeholder:text-gray-600 ${
          isDisabled
            ? "border-gray-500 text-gray-500"
            : "border-pink-400 text-white"
        }`}
        type={type}
        name={name}
        autoComplete="on"
        disabled={isDisabled}
        value={valueState}
        onChange={(e) => setValueState(e.target.value)}
      />
    </label>
  );
};

export default Input;
