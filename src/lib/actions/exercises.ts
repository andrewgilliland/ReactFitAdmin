"use server";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import { ZodError } from "zod";
import {
  Difficulty,
  Equipment,
  Exercise,
  ExerciseType,
  FormState,
  ForceType,
  Mechanics,
  MuscleGroup,
  exerciseSchema,
} from "@/types";
import { getSelectedCheckboxesFromFormData } from "../utils";

const apiEndpoint = "http://[::1]:8080/exercises"; // dev
// Todo: make stage and prod endpoints

const getExercises = async (searchQuery?: string): Promise<Exercise[]> => {
  const response = await fetch(
    searchQuery ? `${apiEndpoint}/${searchQuery}` : apiEndpoint
  );
  const exercises: Exercise[] = await response.json();
  revalidatePath("/dashboard/exercises");
  return exercises;
};

const createExercise = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const newExercise: Exercise = {
    name: (formData.get("name") as string)?.toString().toLocaleLowerCase(),
    difficulty: formData.get("difficulty") as Difficulty,
    equipment: formData.get("equipment") as Equipment,
    exerciseType: formData.get("exerciseType") as ExerciseType,
    forceType: formData.get("forceType") as ForceType,
    mechanics: formData.get("mechanics") as Mechanics,
    targetMuscleGroup: formData.get("targetMuscleGroup") as MuscleGroup,
    secondaryMuscles: getSelectedCheckboxesFromFormData(
      formData,
      "secondaryMuscles"
    ),
  };

  try {
    exerciseSchema.parse(newExercise);
    const response = await fetch("http://[::1]:8080/exercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    });

    // Todo: use response to validate if exercise was created of not

    revalidatePath("/dashboard/exercises");
    return {
      success: true,
      message: `${newExercise.name} created!`,
      errors: undefined,
    };
  } catch (error) {
    const zodError = error as ZodError;
    const errorMap = zodError.flatten().fieldErrors;

    return {
      success: false,
      message: "error",
      errors: { name: errorMap["name"]?.[0] ?? "" },
    };
  }
};

const updateExercise = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const id = formData.get("id") as string;
  const updatedExercise: Exercise = {
    name: (formData.get("name") as string)?.toString().toLocaleLowerCase(),
    difficulty: formData.get("difficulty") as Difficulty,
    equipment: formData.get("equipment") as Equipment,
    exerciseType: formData.get("exerciseType") as ExerciseType,
    forceType: formData.get("forceType") as ForceType,
    mechanics: formData.get("mechanics") as Mechanics,
    targetMuscleGroup: formData.get("targetMuscleGroup") as MuscleGroup,
    secondaryMuscles: getSelectedCheckboxesFromFormData(
      formData,
      "secondaryMuscles"
    ),
  };

  // Todo: schema validation
  // Todo: server error

  const response = await fetch(`http://[::1]:8080/exercise/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedExercise),
  });

  const data = await response.json();

  revalidatePath("/dashboard/exercises/[slug]", "page");
  return {
    success: true,
    message: `${updateExercise.name} updated!`,
    errors: undefined,
  };
};

const deleteExercise = async (id: string) => {
  const response = await fetch(`http://[::1]:8080/exercise/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const exercise = await response.json();

  if (exercise.id) {
    redirect("/dashboard/exercises");
  }
};

const searchExercises = async (formData: FormData) => {
  console.log(formData);

  // search mongoDB exercises for exercises that contain the string in the form field of search
  // return results
};

export {
  getExercises,
  createExercise,
  updateExercise,
  deleteExercise,
  searchExercises,
};
