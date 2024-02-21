"use client";
import { FC, useState } from "react";
import ExerciseSelect from "./ExerciseSelect";

type SupersetInputProps = {
  supersetIndex: number;
  value?: string;
};

const SupersetInput: FC<SupersetInputProps> = ({ supersetIndex, value }) => {
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
    </div>
  );
};

export default SupersetInput;
