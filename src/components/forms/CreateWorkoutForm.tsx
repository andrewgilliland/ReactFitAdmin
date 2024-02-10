import { Exercise, difficulty } from "@/types";
import Input from "../Input";
import Select from "../Select";
import { FC } from "react";

type CreateExerciseFormProps = {
  exercises: Exercise[];
};

const CreateWorkoutForm: FC<CreateExerciseFormProps> = ({ exercises }) => {
  const createWorkout = async () => {
    "use server";
    console.log("createWorkout");
  };

  return (
    <form action={createWorkout}>
      <Input name="name" />
      <Input name="description" className="mt-3" />
      <Select name="difficulty" options={difficulty} className="mt-3" />

      <div className="mt-6">
        <div className="text-sm text-gray-500">Exercises</div>
        <div className="border-2 border-pink-400 rounded mt-1 p-4">
          <label className={`flex flex-col capitalize text-sm text-gray-500`}>
            {"Exercise"}
            <select
              className={`bg-black border-2 border-pink-400 text-white rounded mt-1 px-2 py-1`}
              name="exercise-1"
            >
              {exercises.map(({ id, name }) => (
                <option className="capitalize" key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-4">
            <div className="text-sm text-gray-500">Sets</div>
            <div className="border-2 border-pink-400 rounded mt-1 p-4">
              <div className="text-sm text-gray-500">Set 1</div>
              <Input
                value={10}
                name="repetitions"
                type="number"
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateWorkoutForm;
