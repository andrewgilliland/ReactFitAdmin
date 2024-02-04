import { z } from "zod";

export const muscleGroups = [
  "lats",
  "chest",
  "shoulders",
  "traps",
  "glutes",
  "quads",
  "hamstrings",
  "hip flexors",
  "adductors",
  "calves",
  "abs",
  "biceps",
  "triceps",
  "forearms",
  "upper back",
  "lower back",
] as const;

export const muscleGroupSchema = z.enum(muscleGroups);

export type MuscleGroup = z.infer<typeof muscleGroupSchema>;
