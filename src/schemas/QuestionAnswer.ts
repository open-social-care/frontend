import { z } from "zod";

export const QuestionAnswerSchema = z.discriminatedUnion("type", [
  z.object({
    id: z.number(),
    type: z.literal("short_question"),
    question_description: z.string().nullable(),
    answer_required: z.boolean(),
    answer: z.string().nullable(),
  }),
  z.object({
    id: z.number(),
    type: z.literal("multiple_choice"),
    question_description: z.string().nullable(),
    answer_required: z.boolean(),
    answer: z.string().nullable(),
  }),
]);

export type QuestionAnswer = z.infer<typeof QuestionAnswerSchema>;