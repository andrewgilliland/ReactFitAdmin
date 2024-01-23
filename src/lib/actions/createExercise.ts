"use server";

export async function createExerciseThing(prevState: any, formData: FormData) {
  console.log("createExercise");
  console.log(formData);

  return { message: "Exercise created!" };
}
