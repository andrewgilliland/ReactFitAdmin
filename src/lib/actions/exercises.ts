"use server";
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

import { revalidatePath, revalidateTag } from "next/cache";
import { ZodError } from "zod";

const apiEndpoint = "http://[::1]:8080/exercises";

const getExercises = async (searchQuery?: string): Promise<Exercise[]> => {
  const response = await fetch(
    searchQuery ? `${apiEndpoint}/${searchQuery}` : apiEndpoint
  );
  const exercises: Exercise[] = await response.json();
  revalidatePath("/dashboard/exercises");
  return exercises;
};

const getSecondaryMuscles = (formData: FormData): MuscleGroup[] => {
  const secondaryMuscles: MuscleGroup[] = [];

  for (const [key, value] of formData.entries()) {
    if (key.startsWith("secondaryMuscles-") && value) {
      const muscle = key.split("-")[1] as MuscleGroup;
      secondaryMuscles.push(muscle);
    }
  }

  return secondaryMuscles;
};

export async function createExercise(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const newExercise: Exercise = {
    name: (formData.get("name") as string)?.toString().toLocaleLowerCase(),
    difficulty: formData.get("difficulty") as Difficulty,
    equipment: formData.get("equipment") as Equipment,
    exerciseType: formData.get("exerciseType") as ExerciseType,
    forceType: formData.get("forceType") as ForceType,
    mechanics: formData.get("mechanics") as Mechanics,
    targetMuscleGroup: formData.get("targetMuscleGroup") as MuscleGroup,
    secondaryMuscles: getSecondaryMuscles(formData),
  };

  try {
    exerciseSchema.parse(newExercise);
    // const response = await fetch("http://[::1]:8080/exercise", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newExercise),
    //   });

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
}

export async function updateExerciseAction(formData: FormData) {
  console.log("updateExerciseAction");
}

export async function searchExercises(formData: FormData) {
  console.log(formData);

  // search mongoDB exercises for exercises that contain the string in the form field of search
  // return results
}

export default getExercises;
