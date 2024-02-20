"use client";
import { FC, useState } from "react";
import { Exercise, difficulty } from "@/types";
import { createWorkout } from "@/lib/actions";
import Input from "../../Input";
import Select from "../../Select";
import Button from "../../Button";
import SubmitButton from "../SubmitButton";
import ExerciseInput from "../ExerciseInput";

type CreateExerciseFormProps = {
  exercises: Exercise[];
};

const CreateWorkoutForm: FC<CreateExerciseFormProps> = ({ exercises }) => {
  const [exerciseCount, setExerciseCount] = useState(1);

  return (
    <form action={createWorkout} className="flex flex-col">
      <Input name="name" />
      <Input name="description" className="mt-3" />
      <Select name="difficulty" options={difficulty} className="mt-3" />

      <div className="mt-6">
        <div className="text-sm text-gray-500">Exercises</div>
        <div className="border-2 border-pink-400 rounded mt-1 p-4">
          {new Array(exerciseCount).fill(null).map((_, index) => (
            <ExerciseInput key={index + 1} exerciseIndex={index + 1} />
          ))}
          <Button
            className="mt-4"
            onClick={(event) => {
              event?.preventDefault();
              setExerciseCount(exerciseCount + 1);
            }}
          >
            Add Exercise
          </Button>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default CreateWorkoutForm;
