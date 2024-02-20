import { ExerciseContext } from "@/app/Provider";
import { FC, useContext, useEffect, useState } from "react";

type SupersetInputProps = {
  exerciseIndex: number;
  value?: string;
};

const SupersetInput: FC<SupersetInputProps> = ({ exerciseIndex, value }) => {
  const selectName = `superset-${exerciseIndex}`;
  const [exerciseId, setExerciseId] = useState(value);
  const { exercises } = useContext(ExerciseContext);

  useEffect(() => {
    exercises.length && setExerciseId(exercises[0]?.id);
  }, [exercises]);

  return (
    <div className="mt-4" key={exerciseIndex}>
      <div className="text-sm text-gray-500">{`Superset ${exerciseIndex}`}</div>
      <div className="border-2 border-yellow-400 rounded mt-1 p-4 h-40">
        <label className="flex flex-col capitalize text-sm text-gray-500">
          {"Exercise 1"}
          <select
            className="bg-black border-2 border-pink-400 text-white rounded mt-1 px-2 py-1"
            name={`${selectName}-exercise-1`}
            value={exerciseId}
            onChange={(e) => setExerciseId(e.target.value)}
          >
            {exercises &&
              exercises.map(({ id, name }) => (
                <option className="capitalize" key={id} value={id}>
                  {name}
                </option>
              ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default SupersetInput;
