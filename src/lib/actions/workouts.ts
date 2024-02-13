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
    exercises: [
      {
        id: formData.get("exercise-1") as string,
        // @ts-ignore
        sets: formatSets(formData),
      },
    ],
  };

  console.log("newWorkout: ", newWorkout);
  console.log(formatSets(formData));
};

const formatSets = (formData: FormData) => {
  const sets = [];
  let i = 1;

  while (formData.get(`exercise-1-set-${i}`)) {
    const setType = formData.get(`exercise-1-set-${i}`) as SetType;

    sets.push({
      [setType]: formData.get(`exercise-1-set-${i}-${setType}`),
    });
    i++;
  }

  return sets;
};

export { createWorkout };
