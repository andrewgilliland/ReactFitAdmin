import { z } from "zod";
import { setSchema } from ".";

export const supersetSchema = z.object({
  exerciseIds: z.string().array().length(2),
  sets: setSchema.array(),
});

export type Superset = z.infer<typeof supersetSchema>;
