import { ChangeEvent, FC } from "react";

type SelectProps = {
  name: string;
  options: readonly string[];
  value: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};

const Select: FC<SelectProps> = ({
  name,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <label
      className={`flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {name}
      <select
        className="bg-black border-2 border-pink-400 text-white rounded mt-1 px-2 py-1"
        name={name}
        value={value}
        onChange={onChange}
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
    </label>
  );
};

export default Select;
