"use server";
import { Difficulty, SetType, Workout } from "@/types";
import { revalidatePath } from "next/cache";

const apiEndpoint = "http://[::1]:8080/workouts"; // dev

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch("http://[::1]:8080/workouts");

  // console.log("workouts response: ", response);

  const workouts: Workout[] = await response.json();
  console.log("workouts: ", workouts);

  revalidatePath("/dashboard/workouts");
  return workouts;
};

const createWorkout = async (formData: FormData) => {
  console.log("formData: ", formData);

  const newWorkout: Workout = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    difficulty: formData.get("difficulty") as Difficulty,
    // @ts-ignore
    exercises: formatExercises(formData),
  };

  console.log("newWorkout: ", newWorkout);
  console.log(formatSets(formData));

  newWorkout.exercises.forEach((exercise) => {
    console.log("exercise: ", exercise.sets);
  });
};

const formatExercises = (formData: FormData) => {
  const exercises = [];
  let exerciseIndex = 1;

  while (formData.get(`exercise-${exerciseIndex}`)) {
    exercises.push({
      id: formData.get(`exercise-${exerciseIndex}`),
      sets: formatSets(formData, exerciseIndex),
    });
    exerciseIndex++;
  }

  return exercises;
};

const formatSets = (formData: FormData, exerciseIndex: number) => {
  const sets = [];
  let setIndex = 1;

  while (formData.get(`exercise-${exerciseIndex}-set-${setIndex}`)) {
    const setType = formData.get(
      `exercise-${exerciseIndex}-set-${setIndex}`
    ) as SetType;

    sets.push({
      [setType]: formData.get(
        `exercise-${exerciseIndex}-set-${setIndex}-${setType}`
      ),
    });
    setIndex++;
  }

  return sets;
};

export { getWorkouts, createWorkout };
