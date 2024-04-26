import { z } from "zod";

export const document_types = ["cpf", "cnpj"] as const;

export const Organization = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.optional(z.string()),
  document_type: z.enum(document_types),
  document: z.string(),
});

export type Organization = z.infer<typeof Organization>;
