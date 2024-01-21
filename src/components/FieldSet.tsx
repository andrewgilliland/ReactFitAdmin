"use client";
import { ChangeEvent, FC, use, useEffect, useState } from "react";

type FieldSetProps = {
  name: string;
  options: readonly string[];
  className?: string;
};

const FieldSet: FC<FieldSetProps> = ({ name, options, className }) => {
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    console.log(checked), [checked];
  });

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
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  e.target.checked
                    ? setChecked([...checked, e.target.name])
                    : setChecked(
                        checked.filter((item) => item !== e.target.name)
                      );
                }}
                type="checkbox"
                name={option}
                className="ml-2"
              />
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default FieldSet;
