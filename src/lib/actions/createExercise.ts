"use server";

export async function createExerciseThing(prevState: any, formData: FormData) {
  console.log("createExercise");
  console.log(formData.get("name"));

  return { message: "Exercise created!" };
}
