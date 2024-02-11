"use client";
import { FC, useState } from "react";
import { Exercise, difficulty } from "@/types";
import { createWorkout } from "@/lib/actions";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import SetInput from "./SetInput";
import SubmitButton from "./SubmitButton";

type CreateExerciseFormProps = {
  exercises: Exercise[];
};

const CreateWorkoutForm: FC<CreateExerciseFormProps> = ({ exercises }) => {
  const [sets, setSets] = useState(1);

  return (
    <form action={createWorkout} className="flex flex-col">
      <Input name="name" />
      <Input name="description" className="mt-3" />
      <Select name="difficulty" options={difficulty} className="mt-3" />

      <div className="mt-6">
        <div className="text-sm text-gray-500">Exercises</div>
        <div className="border-2 border-pink-400 rounded mt-1 p-4">
          <div className="text-sm text-gray-500">Exercise 1</div>
          <div className="border-2 border-yellow-400 rounded mt-1 p-4">
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
                {new Array(sets).fill(null).map((_, index) => (
                  <SetInput
                    className={`${index ? "mt-3" : ""}`}
                    index={index + 1}
                    key={index + 1}
                  />
                ))}
                <Button
                  className="mt-4"
                  onClick={(event) => {
                    event?.preventDefault();
                    setSets(sets + 1);
                  }}
                >
                  Add Set
                </Button>
              </div>
            </div>
          </div>
          <Button className="mt-4">Add Exercise</Button>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default CreateWorkoutForm;
