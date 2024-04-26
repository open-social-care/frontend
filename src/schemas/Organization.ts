import { z } from "zod";

export const Organization = z.object({
  id: z.number(),
  name: z.string(),
  document_type: z.string(),
  document: z.string(),
});

export type Organization = z.infer<typeof Organization>;
