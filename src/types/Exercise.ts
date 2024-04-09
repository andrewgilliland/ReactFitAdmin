import { z } from "zod";
import { difficultySchema } from "./Difficulty";
import { muscleGroupSchema } from "./MuscleGroup";
import { equipmentSchema } from "./Equipment";
import { forceTypeSchema } from "./ForceType";
import { mechanicsSchema } from "./Mechanics";
import { exerciseTypeSchema } from "./ExerciseType";

export const exerciseSchema = z.object({
  id: z.number().optional(),
  name: z
    .string()
    .min(1, { message: "Exercise name must be at least 1 character long." }),
  difficulty: difficultySchema,
  equipment: equipmentSchema,
  exerciseType: exerciseTypeSchema,
  forceType: forceTypeSchema,
  mechanics: mechanicsSchema,
  targetMuscleGroup: muscleGroupSchema,
  secondaryMuscles: muscleGroupSchema.array(),
});

export type Exercise = z.infer<typeof exerciseSchema>;
