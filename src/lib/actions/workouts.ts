"use server";
import { Difficulty, Set, SetType, Workout, WorkoutExercise } from "@/types";
import { revalidatePath } from "next/cache";
import { BASE_URL } from "../utils";

const apiEndpoint = `${BASE_URL}/workouts`;

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(apiEndpoint);
  const workouts: Workout[] = await response.json();

  revalidatePath("/dashboard/workouts");
  return workouts;
};

const getWorkoutById = async (id: string): Promise<Workout> => {
  revalidatePath("/dashboard/workouts/[slug]", "page");
  const response = await fetch(`${apiEndpoint}/${id}`);
  const workout: Workout = await response.json();

  return workout;
};

const createWorkout = async (formData: FormData) => {
  const newWorkout: Workout = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    difficulty: formData.get("difficulty") as Difficulty,
    // @ts-ignore // Todo: Fix this type error
    exercises: formatExercises(formData),
  };

  console.log("newWorkout.exercises: ", newWorkout.exercises);

  // newWorkout.exercises.forEach((exercise) => {
  //   if (Array.isArray(exercise)) {
  //     exercise.forEach((subExercise) => {
  //       console.log("subExercise: ", subExercise);
  //     });
  //   } else {
  //     console.log("exercise: ", exercise);
  //   }
  // });
};

const updateWorkout = async (formData: FormData) => {
  console.log("formData: ", formData);
};

const formatExercises = (formData: FormData) => {
  const exercises: (WorkoutExercise | WorkoutExercise[])[] = [];
  let mainIndex = 1;
  let secondaryIndex = 1;

  // Continue to loop through exercises until no more are found
  formData.forEach((_, key) => {
    // Conditionally formats straight set or superset exercises
    if (key === "superset") {
      // Formats superset exercises
      while (formData.get(`superset-${mainIndex}-exercise-${secondaryIndex}`)) {
        const superset = [];

        while (
          formData.get(`superset-${mainIndex}-exercise-${secondaryIndex}`)
        ) {
          superset.push({
            id: formData.get(
              `superset-${mainIndex}-exercise-${secondaryIndex}`
            ) as string,
            sets: formatSupersetSets(formData, mainIndex, secondaryIndex),
          });

          secondaryIndex++;
        }

        mainIndex++;
        secondaryIndex = 1;
        exercises.push(superset);
      }
    } else if (key === "exercise") {
      // Formats straight set exercises
      while (formData.get(`exercise-${mainIndex}`)) {
        exercises.push({
          id: formData.get(`exercise-${mainIndex}`) as string,
          sets: formatSets(formData, mainIndex),
        });
        mainIndex++;
      }
    }
  });

  console.log("mainIndex: ", mainIndex);
  console.log("secondaryIndex: ", secondaryIndex);

  return exercises;
};

const formatSupersetSets = (
  formData: FormData,
  supersetIndex: number,
  exerciseIndex: number
): Set[] => {
  const sets: Set[] = [];
  let setIndex = 1;

  while (
    formData.get(
      `superset-${supersetIndex}-exercise-${exerciseIndex}-set-${setIndex}`
    )
  ) {
    const setType = formData.get(
      `superset-${supersetIndex}-exercise-${exerciseIndex}-set-${setIndex}`
    ) as SetType;

    sets.push({
      [setType]: formData.get(
        `superset-${supersetIndex}-exercise-${exerciseIndex}-set-${setIndex}-${setType}`
      ) as unknown as number,
    } as Set);
    setIndex++;
  }

  return sets;
};

const formatSets = (formData: FormData, exerciseIndex: number) => {
  const sets: Set[] = [];
  let setIndex = 1;

  while (formData.get(`exercise-${exerciseIndex}-set-${setIndex}`)) {
    const setType = formData.get(
      `exercise-${exerciseIndex}-set-${setIndex}`
    ) as SetType;

    sets.push({
      [setType]: formData.get(
        `exercise-${exerciseIndex}-set-${setIndex}-${setType}`
      ) as unknown as number,
    } as Set);
    setIndex++;
  }

  return sets;
};

export { getWorkouts, getWorkoutById, createWorkout, updateWorkout };
