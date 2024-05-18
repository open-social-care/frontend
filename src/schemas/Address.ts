import { z } from "zod";

export const Address = z.object({
  street: z.string(),
  number: z.string(),
  district: z.string(),
  complement: z.string(),
  state_id: z.number(),
  city_id: z.number(),
});

export type Address = z.infer<typeof Address>;
