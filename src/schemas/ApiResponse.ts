import { z } from "zod";
import { Paginate } from "./Paginate";

export const ApiResponse = z.object({
  type: z.union([z.literal("success"), z.literal("error")]),
  message: z.string(),
  errors: z.optional(z.record(z.string(), z.array(z.string()))),
  data: z.any().optional(),
  pagination: Paginate.optional(),
});

export type ApiResponse = z.infer<typeof ApiResponse>;