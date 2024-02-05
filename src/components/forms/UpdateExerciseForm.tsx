"use client";
import { FC, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Exercise,
  difficulty,
  equipment,
  exerciseType,
  forceType,
  mechanics,
  muscleGroups,
} from "@/types";
import Input from "../Input";
import Select from "../Select";
import CheckboxGroup from "./CheckboxGroup";
import Button from "../Button";
import { deleteExercise, updateExercise } from "@/lib/actions";

type UpdateExerciseFormProps = {
  exercise: Exercise;
};

const UpdateExerciseForm: FC<UpdateExerciseFormProps> = ({ exercise }) => {
  const router = useRouter();

  return (
    <div>
      <form action={updateExercise} className="flex flex-col">
        <Input name="name" value={exercise.name} />
        <Select
          name="difficulty"
          options={difficulty}
          value={exercise.difficulty}
          className="mt-3"
        />
        <Select
          name="equipment"
          options={equipment}
          value={exercise.equipment}
          className="mt-3"
        />
        <Select
          name="exerciseType"
          options={exerciseType}
          value={exercise.exerciseType}
          className="mt-3"
        />

        <Select
          name="forceType"
          options={forceType}
          value={exercise.forceType}
          className="mt-3"
        />
        <Select
          name="mechanics"
          options={mechanics}
          value={exercise.mechanics}
          className="mt-3"
        />
        <Select
          name="targetMuscleGroup"
          options={muscleGroups}
          value={exercise.targetMuscleGroup}
          className="mt-3"
        />
        <CheckboxGroup
          name="secondaryMuscles"
          options={muscleGroups}
          value={exercise.secondaryMuscles}
          className="mt-3"
        />
        <Button className="mt-8" type="submit">
          Update
        </Button>
      </form>

      <Button
        className="mt-8 text-red-400 border-red-400 hover:bg-red-400"
        onClick={() => deleteExercise(exercise.id as string)}
      >
        Delete Exercise
      </Button>
    </div>
  );
};

export default UpdateExerciseForm;
