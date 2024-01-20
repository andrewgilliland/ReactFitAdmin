import { ChangeEvent, FC } from "react";

type InputProps = {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input: FC<InputProps> = ({ name, value, onChange, className }) => {
  return (
    <label
      className={`flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {name}
      <input
        className="bg-black border-2 border-pink-400 text-white rounded mt-1 px-2 py-1"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
