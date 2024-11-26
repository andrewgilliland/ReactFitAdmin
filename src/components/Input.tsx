"use client";
import { FC, InputHTMLAttributes, useState } from "react";

type InputProps = {
  label?: string;
  name: string;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  className?: string;
  isDisabled?: boolean;
};

const Input: FC<InputProps> = ({
  label,
  name,
  value = "",
  type = "text",
  className,
  isDisabled = false,
}) => {
  const [valueState, setValueState] = useState(value);

  return (
    <label
      className={`flex flex-col capitalize text-sm text-neutral-400 ${className}`}
    >
      <div className="mr-3">{label ? label : name}</div>
      <input
        className={`bg-neutral-800 text-neutral-100 rounded-xl mt-1 p-2 placeholder:text-neutral-600
           autofill:bg-neutral-800 autofill:text-neutral-100 
           focus:outline-none focus:outline-2 focus:outline-orange-600 focus:outline-offset-0 
           ${
             // isDisabled
             //   ? "border-gray-500 text-gray-500"
             //   : "border-orange-600 text-white"
             ""
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
