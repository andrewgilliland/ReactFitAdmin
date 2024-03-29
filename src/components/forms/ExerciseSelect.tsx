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
    if (exercises[0]?.id) {
      setValueState(exercises[0].id);
    }
  }, [exercises]);

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
        value={valueState}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          setValueState(event.target.value);
          const exerciseName = exercises.filter(
            (exercise) => exercise.id === event.target.value
          )[0]?.name;
          onChange && onChange(exerciseName || "");
        }}
        disabled={isDisabled}
      >
        {exercises.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ExerciseSelect;
