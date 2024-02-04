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
import FieldSet from "../FieldSet";
import { createExerciseAction } from "@/lib/actions";
import SubmitButton from "./SubmitButton";

const CreateExerciseForm = () => {
  const initialFormState = {
    success: false,
    message: "",
    errors: undefined,
  } as FormState;
  const [formState, formAction] = useFormState(
    createExerciseAction,
    initialFormState
  );

  return (
    <form action={formAction} className="flex flex-col">
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
      <FieldSet
        name="secondaryMuscles"
        options={muscleGroups}
        className="mt-3"
      />
      <SubmitButton />
      {formState.success && (
        <div className="flex justify-center text-emerald-400 border-2 border-emerald-400 rounded mt-4 p-6">
          <div className="capitalize">{formState.message}</div>
        </div>
      )}
      {!formState.success && formState.errors && (
        <div className="flex justify-center text-red-400 border-2 border-red-400 rounded mt-4 p-6">
          <div className="capitalize">{formState.errors.name}</div>
        </div>
      )}
    </form>
  );
};

export default CreateExerciseForm;
