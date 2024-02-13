"use server";

import { Difficulty } from "@/types";
import { SetType } from "@/types/Set";
import { Workout } from "@/types/Workout";

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

export { createWorkout };
