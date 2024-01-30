"use client";
import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import EditButton from "./EditButton";

type InputProps = {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isDisabled?: boolean;
};

const Input: FC<InputProps> = ({
  name,
  type = "text",
  value,
  onChange,
  className,
  isDisabled = false,
}) => {
  const [disabled, setDisabled] = useState(isDisabled);

  return (
    <label
      className={`flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {name}
      <input
        className={`bg-black border-2 rounded mt-1 px-2 py-1 ${
          disabled
            ? "border-gray-500 text-gray-500"
            : "border-pink-400 text-white"
        }`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete="on"
      />
      {/* {isDisabled && (
        <EditButton
          className="absolute bottom-1 right-1"
          onClick={() => setDisabled(!disabled)}
        />
      )} */}
    </label>
  );
};

export default Input;
