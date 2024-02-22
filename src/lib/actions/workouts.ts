"use server";
import { Difficulty, SetType, Workout } from "@/types";
import { revalidatePath } from "next/cache";

const apiEndpoint = "http://[::1]:8080/workouts"; // dev

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch("http://[::1]:8080/workouts");
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
  console.log("formData: ", formData);

  const newWorkout: Workout = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    difficulty: formData.get("difficulty") as Difficulty,
    // @ts-ignore
    exercises: formatExercises(formData),
  };

  console.log("newWorkout: ", newWorkout);

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
  const exercises = [];
  let exerciseIndex = 1;
  let supersetIndex = 1;
  let supersetExerciseIndex = 1;

  while (
    formData.get(`superset-${supersetIndex}-exercise-${supersetExerciseIndex}`)
  ) {
    const superset = [];
    while (
      formData.get(
        `superset-${supersetIndex}-exercise-${supersetExerciseIndex}`
      )
    ) {
      superset.push({
        id: formData.get(
          `superset-${supersetIndex}-exercise-${supersetExerciseIndex}`
        ),
        sets: formatSupersetSets(
          formData,
          supersetIndex,
          supersetExerciseIndex
        ),
      });

      supersetExerciseIndex++;
    }
    supersetIndex++;
    supersetExerciseIndex = 1;
    exercises.push(superset);
  }

  while (formData.get(`exercise-${supersetIndex}`)) {
    exercises.push({
      id: formData.get(`exercise-${supersetIndex}`),
      sets: formatSets(formData, supersetIndex),
    });
    supersetIndex++;
  }
  console.log("exerciseIndex: ", exerciseIndex);
  console.log("supersetIndex: ", supersetIndex);
  console.log("supersetExerciseIndex: ", supersetExerciseIndex);

  return exercises;
};

const formatSupersetSets = (
  formData: FormData,
  supersetIndex: number,
  exerciseIndex: number
) => {
  const sets = [];
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
      ),
    });
    setIndex++;
  }

  return sets;
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

export { getWorkouts, getWorkoutById, createWorkout, updateWorkout };
