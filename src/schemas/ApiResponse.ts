import { z } from "zod";
import { Paginate } from "./Paginate";
import { flashMessageTypes } from "@/enums/flashMessageTypes";

export const ApiResponse = z.object({
  type: z.nativeEnum(flashMessageTypes),
  message: z.string(),
  errors: z.optional(z.record(z.string(), z.array(z.string()))),
  data: z.optional(z.any()),
  pagination: Paginate.optional(),
});

export type ApiResponse = z.infer<typeof ApiResponse>;
