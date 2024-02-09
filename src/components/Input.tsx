"use client";
import { FC, InputHTMLAttributes, useState } from "react";

type InputProps = {
  name: string;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
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
      className={`flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      <div className="mr-3">{name}</div>
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
