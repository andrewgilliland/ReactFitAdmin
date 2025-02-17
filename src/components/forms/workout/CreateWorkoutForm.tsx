"use client";
import { FC, useState } from "react";
import { difficulty } from "@/types";
import { createWorkout } from "@/lib/actions";
import Input from "../../Input";
import Select from "../../Select";
import Button from "../../Button";
import SubmitButton from "../SubmitButton";
import ExerciseInput from "../ExerciseInput";
import SupersetInput from "../SupersetInput";

type CreateExerciseFormProps = {};

const CreateWorkoutForm: FC<CreateExerciseFormProps> = () => {
  const [rounds, setRounds] = useState<("straightSet" | "superset")[]>([
    "straightSet",
  ]);

  return (
    <form action={createWorkout} className="flex flex-col">
      <Input name="name" />
      <Input name="description" className="mt-3" />
      <Select name="difficulty" options={difficulty} className="mt-3" />

      <div className="mt-6">
        <div className="text-sm text-neutral-500">Exercises</div>
        <div className="mt-1 rounded-lg bg-neutral-900 p-4">
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
                    supersetIndex={exerciseIndex}
                  />
                );
            }
          })}
          <div className="mt-4 flex gap-4">
            <Button
              onClick={(event) => {
                event?.preventDefault();
                // setRounds([...rounds, "straightSet"]);
              }}
            >
              Add Exercise
            </Button>
          </div>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default CreateWorkoutForm;
