import { z } from "zod";

export const User = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  token: z.optional(z.string()),
  roles: z.optional(z.string().array()),
});

export type User = z.infer<typeof User>;
