import { z } from "zod";

export const forceType = ["push", "pull", "hinge", "static"] as const;

export const forceTypeSchema = z.enum(forceType);

export type ForceType = z.infer<typeof forceTypeSchema>;
