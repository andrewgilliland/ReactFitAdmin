"use server";
import { Difficulty, Set, SetType, Workout, WorkoutExercise } from "@/types";
import { revalidatePath } from "next/cache";
import { createClient } from "../utils/supabase/server";
// import { BASE_URL } from "../utils";

// const apiEndpoint = `${BASE_URL}/workouts`;

const getWorkouts = async (): Promise<Partial<Workout>[]> => {
  try {
    const supabase = createClient();
    const { data: workouts, error } = await supabase.from("workouts").select(`
    id,
    name,
    description,
    difficulty
    `);

    if (error) {
      throw error;
    }

    if (!workouts) {
      throw new Error("No workouts found!");
    }

    revalidatePath("/dashboard/workouts");

    return workouts;
  } catch (error) {
    console.error("Error fetching workouts: ", error);
    return [];
  }
};

const getWorkoutById = async (id: string): Promise<Partial<Workout>> => {
  try {
    revalidatePath("/dashboard/workouts/[slug]", "page");

    const supabase = createClient();

    const { data: workout, error } = await supabase
      .from("workouts")
      .select(
        `
      id,
      name,
      description,
      difficulty,
      exercises:workout_exercises (
        id:exercise_id,
        sets:workout_exercise_sets (
          repetitions,
          duration
        )
      )
      `
      )
      .match({ id })
      .single();

    if (error) {
      throw error;
    }

    if (!workout) {
      throw new Error("No workout found!");
    }

    return workout;
  } catch (error) {
    console.error("Error fetching workout: ", error);
    return {};
  }
};

const createWorkout = async (formData: FormData) => {
  const supabase = createClient();

  const inputWorkout: Workout = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    difficulty: formData.get("difficulty") as Difficulty,
    // @ts-ignore // Todo: Fix this type error
    exercises: formatExercises(formData),
  };

  const { data: workout, error } = await supabase
    .from("workouts")
    .insert({
      name: inputWorkout.name,
      description: inputWorkout.description,
      difficulty: inputWorkout.difficulty,
    })
    .select()
    .single();

  inputWorkout.exercises.map(async ({ id, sets }) => {
    const { data: workout_exercise, error } = await supabase
      .from("workout_exercises")
      .insert({ workout_id: workout?.id, exercise_id: id })
      .select()
      .single();

    sets.map(async (set) => {
      const { data, error } = await supabase
        .from("workout_exercise_sets")
        .insert({
          workout_exercise_id: workout_exercise?.id,
          repetitions: set.repetitions,
          duration: set.duration,
        })
        .select()
        .single();

      console.log("data: ", data);
      console.log("error: ", error);
    });
  });
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
