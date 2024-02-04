import { z } from "zod";
import { difficulty } from "./Difficulty";
import { muscleGroups } from "./MuscleGroup";
import { equipment } from "./Equipment";

export const exerciseType = ["strength"] as const;
export const forceType = ["push", "pull", "hinge", "static"] as const;
export const mechanics = ["compound", "isolation", "isometric"] as const;

const ExerciseSchema = z.object({
  id: z.string().optional(),
  difficulty: z.enum(difficulty),
  equipment: z.enum(equipment),
  exerciseType: z.enum(exerciseType),
  forceType: z.enum(forceType),
  mechanics: z.enum(mechanics),
  name: z.string(),
  secondaryMuscles: z.enum(muscleGroups).array(),
  targetMuscleGroup: z.enum(muscleGroups),
});

export type Exercise = z.infer<typeof ExerciseSchema>;
