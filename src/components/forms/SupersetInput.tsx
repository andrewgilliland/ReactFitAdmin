"use client";
import { FC, useState } from "react";
import ExerciseSelect from "./ExerciseSelect";
import SetInput from "./SetInput";
import Button from "../Button";

type SupersetInputProps = {
  supersetIndex: number;
  value?: string;
};

const SupersetInput: FC<SupersetInputProps> = ({ supersetIndex, value }) => {
  const [setCount, setSetCount] = useState(1);
  //   const [exerciseId, setExerciseId] = useState(value);
  //   const { exercises } = useContext(ExerciseContext);

  //   useEffect(() => {
  //     exercises.length && setExerciseId(exercises[0]?.id);
  //   }, [exercises]);

  return (
    <div className="mt-4" key={supersetIndex}>
      <div className="text-sm text-gray-500">{`Superset ${supersetIndex}`}</div>
      <div className="border-2 border-yellow-400 rounded mt-1 p-4">
        {new Array(2).fill(null).map((_, index) => {
          const exerciseIndex = index + 1;
          const exerciseName = `superset-${supersetIndex}-exercise-${exerciseIndex}`;

          return (
            <ExerciseSelect
              key={exerciseName}
              label={`Exercise ${exerciseIndex}`}
              name={exerciseName}
              className={index ? "mt-3" : ""}
            />
          );
        })}
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500">Sets</div>
        <div className="border-2 border-pink-400 rounded mt-1 p-4">
          {new Array(setCount).fill(null).map((_, index) => (
            <SetInput
              className={`${index ? "mt-3" : ""}`}
              exerciseIndex={supersetIndex}
              setIndex={index + 1}
              key={index + 1}
              //   set={sets?.[index]}
            />
          ))}
          <Button
            className="mt-4"
            onClick={(event) => {
              event?.preventDefault();
              setSetCount(setCount + 1);
            }}
          >
            Add Set
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupersetInput;
