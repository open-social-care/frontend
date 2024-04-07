import { z } from "zod";
import { PaginationInfo } from "./Pagination";

export const ApiResponse = z.object({
  type: z.enum(["error", "success"]),
  message: z.string(),
  errors: z.optional(z.record(z.string(), z.array(z.string()))),
  data: z.optional(z.any()),
  pagination: PaginationInfo.optional(),
});

export type ApiResponse = z.infer<typeof ApiResponse>;
