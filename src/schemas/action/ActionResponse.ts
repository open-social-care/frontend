import { FormErrors } from "@mantine/form";
import { z } from "zod";

const types = ["success", "error"] as const;

export const ActionResponse = z.object({
  type: z.enum(types),
  message: z.string(),
  data: z.any().optional(),
  errors: z.custom<FormErrors>().optional(),
});

export type ActionResponse = z.infer<typeof ActionResponse>;
