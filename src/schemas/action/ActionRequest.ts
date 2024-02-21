import { z } from "zod";

export const ActionRequest = z.object({
  params: z.any(),
  payload: z.any(),
});

export type ActionRequest = z.infer<typeof ActionRequest>;
