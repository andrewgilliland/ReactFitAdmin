import { ChangeEvent, FC } from "react";

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
  return (
    <label
      className={`relative flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {name}
      <input
        className="bg-black border-2 border-pink-400 text-white rounded mt-1 px-2 py-1"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      {isEditable && (
        // <button className="absolute flex justify-center items-center border-2 border-pink-400 rounded-full h-6 w-6 bottom-1 right-2 group transition hover:bg-pink-400">
        //   <PencilIcon className="text-pink-400 h-3 w-3 transition group-hover:text-black" />
        // </button>
        <EditButton onClick={() => console.log("edit field")} />
      )}
    </label>
  );
};

export default Input;
