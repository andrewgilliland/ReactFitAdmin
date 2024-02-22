"use client";
import { ExerciseContext } from "@/app/Provider";
import { FC, useContext, useEffect, useState } from "react";

type SelectProps = {
  name: string;
  label?: string;
  value?: string;
  className?: string;
  onChange?: (name: string) => void;
  isDisabled?: boolean;
};

const ExerciseSelect: FC<SelectProps> = ({
  name,
  label,
  value,
  className,
  onChange,
  isDisabled = false,
}) => {
  const [valueState, setValueState] = useState(value || "");
  const { exercises } = useContext(ExerciseContext);

  useEffect(() => {
    const exerciseName = exercises.filter(
      (exercise) => exercise.id === valueState
    );
  }, [valueState, exercises]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValueState(event.target.value);
    onChange && onChange(event.target.getAttribute("data-name") || "");
  };

  return (
    <label
      className={`flex flex-col capitalize text-sm text-gray-500 ${className}`}
    >
      {label ? label : name}
      <select
        className={`bg-black border-2 ${
          isDisabled
            ? "border-gray-400 text-gray-400"
            : "border-pink-400 text-white"
        } rounded mt-1 px-2 py-1`}
        name={name}
        data-name={
          /** This filters to get the name of the exercise from the exercises array */
          exercises.filter((exercise) => exercise.id === valueState)[0]?.name
        }
        value={valueState}
        onChange={handleChange}
        disabled={isDisabled}
      >
        {exercises.map(({ id, name }) => (
          <option className="capitalize" key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ExerciseSelect;
