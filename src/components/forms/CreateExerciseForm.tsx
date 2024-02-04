"use client";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Input from "@/components/Input";
import Select from "@/components/Select";
import {
  difficulty,
  equipment,
  exerciseType,
  forceType,
  mechanics,
  muscleGroups,
} from "@/types";
import FieldSet from "../FieldSet";
import { createExerciseAction } from "@/lib/actions";

const CreateExerciseForm = () => {
  const initialState = { success: false, message: "", errors: undefined };
  const [formState, formAction] = useFormState(
    createExerciseAction,
    initialState
  );
  const { pending } = useFormStatus();

  console.log("formState: ", formState);

  useEffect(() => {
    console.log(pending);
  }, [pending]);

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
      <button
        type="submit"
        className="text-pink-500 border border-pink-500 mt-8 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
      >
        {pending ? "Submitting..." : "Create"}
      </button>
      {formState.success ? (
        <div className="flex justify-center text-emerald-400 border-2 border-emerald-400 rounded mt-4 p-6">
          <div className="capitalize">{formState.message}</div>
        </div>
      ) : (
        <div className="flex justify-center text-red-400 border-2 border-red-400 rounded mt-4 p-6">
          <div className="capitalize">{formState.errors}</div>
        </div>
      )}
    </form>
  );
};

export default CreateExerciseForm;
