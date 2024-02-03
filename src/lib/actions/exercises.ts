"use server";
import { Exercise } from "@/types";
import { revalidatePath, revalidateTag } from "next/cache";

const apiEndpoint = "http://[::1]:8080/exercises";

const getExercises = async (searchQuery?: string): Promise<Exercise[]> => {
  const response = await fetch(
    searchQuery ? `${apiEndpoint}/${searchQuery}` : apiEndpoint
  );
  const exercises: Exercise[] = await response.json();
  revalidatePath("/dashboard/exercises");
  return exercises;
};

export async function createExerciseAction(formData: FormData) {
  console.log(formData);
  console.log("name", formData.get("name"));
  console.log("difficulty", formData.get("difficulty"));
  console.log("equipmentType", formData.get("equipmentType"));
  console.log("forceType", formData.get("forceType"));
  console.log("mechanics", formData.get("mechanics"));
  console.log("targetMuscleGroup", formData.get("targetMuscleGroup"));

  // const response = await fetch("http://[::1]:8080/exercise", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });

  revalidatePath("/dashboard/exercises");
  // revalidateTag("exercises");
  return { message: "Exercise created!" };
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
