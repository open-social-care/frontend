import { z } from "zod";

export const User = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  roles: z.optional(z.string().array()),
  token: z.string().nullish(),
});

export type User = z.infer<typeof User>;
