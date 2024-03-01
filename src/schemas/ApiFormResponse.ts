import { z } from "zod";

export const ApiResponseSchema = z.object({
  type: z.enum(["error", "success"]),
  message: z.optional(z.string()),
  formErrors: z.optional(
    z.record(z.string(), z.array(z.string())),
  ),
  data: z.optional(z.any()),
});

export type ApiResponseSchema = z.infer<
  typeof ApiResponseSchema
>;
