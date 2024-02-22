import { z } from "zod";
import { difficultySchema, exerciseSchema, supersetSchema } from ".";
import { workoutExerciseSchema } from "./WorkoutExercise";

export const workoutSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(1, { message: "Workout name must be at least 1 character long." }),
  description: z.string().optional(),
  difficulty: difficultySchema,
  exercises: z.array(z.union([workoutExerciseSchema, supersetSchema])),
});

export type Workout = z.infer<typeof workoutSchema>;
