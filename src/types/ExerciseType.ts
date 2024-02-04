import { z } from "zod";

export const exerciseType = ["strength"] as const;

export const exerciseTypeSchema = z.enum(exerciseType);

export type ExerciseType = z.infer<typeof exerciseTypeSchema>;
