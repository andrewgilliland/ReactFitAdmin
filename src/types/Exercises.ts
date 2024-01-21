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

export const difficulty = ["beginner", "intermediate", "advanced"] as const;
export const equipment = [
  "bodyweight",
  "dumbbell",
  "barbell",
  "cables",
  "machine",
  "ezBar",
  "kettlebell",
  "trx",
  "other",
] as const;
export const exerciseType = ["strength"] as const;
export const forceType = ["push", "pull", "hinge", "static"] as const;
export const mechanics = ["compound", "isolation", "isometric"] as const;

const Exercise = z.object({
  id: z.string().optional(),
  difficulty: z.enum(difficulty),
  equipment: z.enum(equipment),
  exerciseType: z.enum(exerciseType),
  forceType: z.enum(forceType),
  mechanics: z.enum(mechanics),
  name: z.string(),
  secondaryMuscles: z.enum(muscleGroup).array(),
  targetMuscleGroup: z.enum(muscleGroup),
});

export type Exercise = z.infer<typeof Exercise>;
