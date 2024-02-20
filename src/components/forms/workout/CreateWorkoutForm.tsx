"use client";
import { FC, useState } from "react";
import { Exercise, difficulty } from "@/types";
import { createWorkout } from "@/lib/actions";
import Input from "../../Input";
import Select from "../../Select";
import Button from "../../Button";
import SubmitButton from "../SubmitButton";
import ExerciseInput from "../ExerciseInput";
import SupersetInput from "../SupersetInput";

type CreateExerciseFormProps = {
  exercises: Exercise[];
};

const CreateWorkoutForm: FC<CreateExerciseFormProps> = ({ exercises }) => {
  const [rounds, setRounds] = useState<("straightSet" | "superset")[]>([
    "superset",
  ]);

  return (
    <form action={createWorkout} className="flex flex-col">
      <Input name="name" />
      <Input name="description" className="mt-3" />
      <Select name="difficulty" options={difficulty} className="mt-3" />

      <div className="mt-6">
        <div className="text-sm text-gray-500">Exercises</div>
        <div className="border-2 border-pink-400 rounded mt-1 p-4">
          {rounds.map((round, index) => {
            const exerciseIndex = index + 1;
            switch (round) {
              case "straightSet":
                return (
                  <ExerciseInput
                    key={exerciseIndex}
                    exerciseIndex={exerciseIndex}
                  />
                );
              case "superset":
                return (
                  <SupersetInput
                    key={exerciseIndex}
                    exerciseIndex={exerciseIndex}
                  />
                );
            }
          })}
          <div className="flex gap-4 mt-4">
            <Button
              onClick={(event) => {
                event?.preventDefault();
                setRounds([...rounds, "straightSet"]);
              }}
            >
              Add Exercise
            </Button>
            <Button
              onClick={(event) => {
                event?.preventDefault();
                setRounds([...rounds, "superset"]);
              }}
            >
              Add Superset
            </Button>
          </div>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default CreateWorkoutForm;
