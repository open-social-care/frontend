import { z } from "zod";
import { Subject } from "./Subject";

export const SubjectDetails = Subject.extend({
  nationality: z.string(),
  phone: z.string(),
  father_name: z.string(),
  mother_name: z.string(),
  cpf: z.string(),
  rg: z.string(),
  skin_color: z.string(),
  relative_relation_type: z.string(),
  relative_name: z.string(),
  relative_phone: z.string(),
});

export type SubjectDetails = z.infer<typeof SubjectDetails>;
