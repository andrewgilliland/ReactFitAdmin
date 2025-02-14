"use client";
import { useFormState } from "react-dom";
import {
  FormState,
  difficulty,
  equipment,
  exerciseType,
  forceType,
  mechanics,
  muscleGroups,
} from "@/types";
import Input from "@/components/Input";
import Select from "@/components/Select";
import CheckboxGroup from "../CheckboxGroup";
import { createExercise } from "@/lib/actions";
import SubmitButton from "../SubmitButton";
import Button from "@/components/Button";

const CreateExerciseForm = () => {
  const initialFormState = {
    success: false,
    message: "",
    errors: undefined,
  } as FormState;
  const [formState, formAction] = useFormState(
    createExercise,
    initialFormState,
  );

  // Todo: Clear form with success state
  // Todo: Better UI for success and error state

  return (
    <form action={formAction} className="flex max-w-sm flex-col">
      <Input name="name" />
      <Select name="difficulty" options={difficulty} className="mt-3" />
      <Select name="equipment" options={equipment} className="mt-3" />
      <Select name="exerciseType" options={exerciseType} className="mt-3" />
      <Select name="forceType" options={forceType} className="mt-3" />
      <Select name="mechanics" options={mechanics} className="mt-3" />
      <Select
        name="targetMuscleGroup"
        options={muscleGroups}
        className="mt-3"
      />
      <CheckboxGroup
        name="secondaryMuscles"
        options={muscleGroups}
        className="mt-3"
      />
      {/* <SubmitButton /> */}
      <Button className="mt-4">Create</Button>
      {formState.success && (
        <div className="mt-4 flex justify-center rounded border-2 border-emerald-400 p-6 text-emerald-400">
          <div className="capitalize">{formState.message}</div>
        </div>
      )}
      {!formState.success && formState.errors && (
        <div className="mt-4 flex justify-center rounded border-2 border-red-400 p-6 text-red-400">
          <div className="capitalize">{formState.errors.name}</div>
        </div>
      )}
    </form>
  );
};

export default CreateExerciseForm;
