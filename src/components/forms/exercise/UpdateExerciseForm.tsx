"use client";
import { FC } from "react";
import {
  Exercise,
  FormState,
  difficulty,
  equipment,
  exerciseType,
  forceType,
  mechanics,
  muscleGroups,
} from "@/types";
import Input from "../../Input";
import Select from "../../Select";
import CheckboxGroup from "../CheckboxGroup";
import Button from "../../Button";
import { deleteExercise, updateExercise } from "@/lib/actions";
import { useFormState } from "react-dom";

type UpdateExerciseFormProps = {
  exercise: Exercise;
};

const UpdateExerciseForm: FC<UpdateExerciseFormProps> = ({ exercise }) => {
  const initialFormState = {
    success: false,
    message: "",
    errors: undefined,
  } as FormState;

  const [formState, formAction] = useFormState(
    updateExercise,
    initialFormState
  );

  console.log("formState.message: ", formState.message);
  // Todo: UI states for success and failure of update

  return (
    <div>
      <form action={formAction} className="flex flex-col">
        <Input name="id" value={exercise.id} className="hidden" />
        <Input name="name" value={exercise.name} className="mt-3" />
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
