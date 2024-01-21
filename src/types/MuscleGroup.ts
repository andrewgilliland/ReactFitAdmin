import { z } from "zod";

export const muscleGroup = [
  "lats",
  "chest",
  "shoulders",
  "traps",
  "glutes",
  "quads",
  "hamstrings",
  "hipFlexors",
  "adductors",
  "calves",
  "abs",
  "biceps",
  "triceps",
  "forearms",
  "upperBack",
  "lowerBack",
] as const;
const MuscleGroup = z.enum(muscleGroup);
export type MuscleGroup = z.infer<typeof MuscleGroup>;
