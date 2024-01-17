import { FC } from "react";

type InputProps = {
  name: string;
  value: string;
  className: string;
};

const Input: FC<InputProps> = ({ name, value, className }) => {
  return (
    <label
      className={"flex flex-col capitalize font-semibold text-sm text-pink-400"}
    >
      {name}
      <input
        className="bg-black border-2 border-pink-400 rounded mt-1"
        type="text"
        name={name}
        value={value}
      />
    </label>
  );
};

export default Input;
