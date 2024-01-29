import { MuscleGroup } from "@/types";
import { ChangeEvent, FC } from "react";

type FieldSetProps = {
  name: string;
  options: readonly MuscleGroup[]; // Make this a generic type value has to be the same type
  value: MuscleGroup[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const FieldSet: FC<FieldSetProps> = ({
  name,
  options,
  value,
  onChange,
  className,
}) => {
  console.log(value);

  return (
    <fieldset
      className={`border-2 border-pink-400 rounded px-4 py-1 ${className}`}
    >
      <legend className="flex flex-col capitalize text-sm text-gray-500">
        {name}
      </legend>
      <div className="flex flex-wrap">
        {options.map((option, index) => (
          <div key={`${option}-${index}`} className="inline-flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="pink"
            >
              {option}
              <div className="flex ml-2">
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border--gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-400 hover:before:opacity-10"
                  id="pink"
                  checked={value.includes(option)}
                  onChange={onChange}
                  name={option}
                />
                <span className="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 right-3.5 -translate-y-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default FieldSet;
