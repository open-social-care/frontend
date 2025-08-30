import { z } from "zod";
import { Question } from "./Question";

export const FormTemplate = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().optional().nullable(),
  questions: z.array(Question),
});

export type FormTemplate = z.infer<typeof FormTemplate>;