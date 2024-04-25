import { z } from "zod";

export const PaginationInfo = z.object({
  total: z.number(),
  per_page: z.number(),
  current_page: z.number(),
  last_page: z.number(),
  from: z.number().nullish(),
  to: z.number().nullish(),
});

export type PaginationInfo = z.infer<typeof PaginationInfo>;
