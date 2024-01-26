import { z } from "zod";

export const muscleGroups = [
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
const MuscleGroup = z.enum(muscleGroups);
export type MuscleGroup = z.infer<typeof MuscleGroup>;
