import { z } from "zod";
import { exerciseSchema } from ".";
import { setSchema } from "./Set";

export const workoutExerciseSchema = z.object({
  id: z.number().optional(),
  sets: setSchema.array(),
});

export type WorkoutExercise = z.infer<typeof workoutExerciseSchema>;
