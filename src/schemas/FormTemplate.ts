import { z } from "zod";

export const FormTemplate = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().optional().nullable(),
});

export type FormTemplate = z.infer<typeof FormTemplate>;