"use server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function createExerciseAction(formData: FormData) {
  console.log(formData);
  console.log(formData.get("name"));

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
