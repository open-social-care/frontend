import { DocumentTypes } from "@/enums/DocumentTypes";
import { z } from "zod";

export const Organization = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.optional(z.string()),
  document_type: z.nativeEnum(DocumentTypes),
  document: z.string(),
});

export type Organization = z.infer<typeof Organization>;
