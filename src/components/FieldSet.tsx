import { FC } from "react";

type FieldSetProps = {
  name: string;
  options: readonly string[];
  className?: string;
};

const FieldSet: FC<FieldSetProps> = ({ name, options, className }) => {
  return (
    <fieldset
      className={`border-2 border-pink-400 rounded px-4 py-1 ${className}`}
    >
      <legend className="flex flex-col capitalize text-sm text-gray-500">
        {name}
      </legend>
      <div>
        {options.map((option, index) => {
          return (
            <label
              key={`${option}-${index}`}
              className="flex capitalize text-sm text-white mt-1"
            >
              {option}
              <input type="checkbox" name={option} className="ml-2" />
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default FieldSet;
