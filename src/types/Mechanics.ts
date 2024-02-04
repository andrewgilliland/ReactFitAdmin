import { z } from "zod";

export const mechanics = ["compound", "isolation", "isometric"] as const;

export const mechanicsSchema = z.enum(mechanics);

export type Mechanics = z.infer<typeof mechanicsSchema>;
