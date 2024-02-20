import { z } from "zod";
import { workoutExerciseSchema } from "./WorkoutExercise";

export const supersetSchema = z.object({
  exercises: workoutExerciseSchema.array().length(2),
});

export type Superset = z.infer<typeof supersetSchema>;
