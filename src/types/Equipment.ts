import { z } from "zod";

export const equipment = [
  "bodyweight",
  "dumbbell",
  "barbell",
  "cables",
  "machine",
  "ez bar",
  "kettlebell",
  "trx",
  "other",
] as const;

export const equipmentSchema = z.enum(equipment);

export type Equipment = z.infer<typeof equipmentSchema>;
