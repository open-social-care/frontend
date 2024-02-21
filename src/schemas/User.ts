import { z } from "zod";

export const User = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  token: z.string().optional(),
});

export type User = z.infer<typeof User>;
