// "use client";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";

type InputProps = {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  value?: string;
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
  // const [disabled, setDisabled] = useState(isDisabled);

  return (
    <label
      className={`flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {name}
      <input
        className={`bg-black border-2 rounded mt-1 px-2 py-1 ${
          isDisabled
            ? "border-gray-500 text-gray-500"
            : "border-pink-400 text-white"
        }`}
        type={type}
        name={name}
        autoComplete="on"
        // value={value}
        // onChange={onChange}
        // disabled={disabled}
      />
    </label>
  );
};

export default Input;
