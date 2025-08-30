import { z } from "zod";

const MultipleChoiceOption = z.object({
  id: z.number(),
  description: z.string(),
});

const MultipleChoiceQuestion = z.object({
  id: z.number(),
  description: z.string(),
  answer_required: z.boolean(),
  type: z.literal("multiple_choice"),
  options: z.array(MultipleChoiceOption),
});

const ShortQuestion = z.object({
  id: z.number(),
  description: z.string(),
  answer_required: z.boolean(),
  type: z.literal("short_question"),
});

export const Question = z.discriminatedUnion("type", [
  MultipleChoiceQuestion,
  ShortQuestion,
]);

export type Question = z.infer<typeof Question>;