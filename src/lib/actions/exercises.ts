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
import {
  BASE_URL,
  camelCaseToSnakeCase,
  getSelectedCheckboxesFromFormData,
  snakeCaseToCamelCase,
} from "../utils";
import { createClient } from "@/lib/utils/supabase/server";

// const apiEndpoint = `${BASE_URL}/exercises`;

const getExercises = async (
  searchQuery?: string
): Promise<(Exercise | undefined)[]> => {
  const supabase = createClient();
  const { data, error } = await supabase.from("exercises").select("*");

  // TODO: handle error response from supabase

  const validatedExercises = data.map((exercise) => {
    try {
      return exerciseSchema.parse(snakeCaseToCamelCase(exercise));
    } catch (error) {
      console.error("Exercise is invalid: ", error);
    }
  });

  revalidatePath("/dashboard/exercises");
  return validatedExercises;
};

const getExerciseById = async (id: string): Promise<Exercise | undefined> => {
  const supabase = createClient();

  try {
    const { data: exercise, error } = await supabase
      .from("exercises")
      .select("*")
      .match({ id })
      .single();

    const validatedExercise = exerciseSchema.parse(
      snakeCaseToCamelCase(exercise)
    );

    return validatedExercise;
  } catch (error) {
    console.error("Exercise is invalid: ", error);
  }
};

const createExercise = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const supabase = createClient();
  const inputExercise: Exercise = {
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
    exerciseSchema.parse(inputExercise);

    const dataFormatExercise = camelCaseToSnakeCase(inputExercise);

    const { data, error } = await supabase
      .from("exercises")
      .insert(dataFormatExercise);

    // Todo: use response to validate if exercise was created of not

    revalidatePath("/dashboard/exercises");

    return {
      success: true,
      message: `${inputExercise.name} created!`,
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
  const supabase = createClient();
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

  const dataFormatExercise = camelCaseToSnakeCase(updatedExercise);

  const { data, error } = await supabase
    .from("exercises")
    .update(dataFormatExercise)
    .match({ id })
    .select();

  console.log("data: ", data);
  console.log("error: ", error);

  // Todo: schema validation
  // Todo: server error

  revalidatePath("/dashboard/exercises/[slug]", "page");
  return {
    success: true,
    message: `${dataFormatExercise.name} updated!`,
    errors: undefined,
  };
};

const deleteExercise = async (id: string) => {
  const supabase = createClient();

  const { status, error } = await supabase
    .from("exercises")
    .delete()
    .match({ id });

  if (status === 204) {
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
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise,
  searchExercises,
};
