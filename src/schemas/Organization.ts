import { documentTypes } from "@/enums/documentTypes";
import { z } from "zod";

export const Organization = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.optional(z.string()),
  document_type: z.nativeEnum(documentTypes),
  document: z.string(),
});

export type Organization = z.infer<typeof Organization>;
