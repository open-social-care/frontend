import { z } from "zod";

export const ApiResponse = z.object({
  type: z.string(),
  message: z.string(),
  data: z.any().optional(),
});

export type ApiResponse = z.infer<typeof ApiResponse>;