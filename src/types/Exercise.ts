import { z } from "zod";
import { difficultySchema } from "./Difficulty";
import { muscleGroupSchema } from "./MuscleGroup";
import { equipmentSchema } from "./Equipment";
import { forceTypeSchema } from "./ForceType";
import { mechanicsSchema } from "./Mechanics";
import { exerciseTypeSchema } from "./ExerciseType";

export const exerciseSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  difficulty: difficultySchema,
  equipment: equipmentSchema,
  exerciseType: exerciseTypeSchema,
  forceType: forceTypeSchema,
  mechanics: mechanicsSchema,
  targetMuscleGroup: muscleGroupSchema,
  secondaryMuscles: muscleGroupSchema.array(),
});

export type Exercise = z.infer<typeof exerciseSchema>;
