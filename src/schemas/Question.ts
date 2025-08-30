import { z } from "zod";

// Schema para uma única opção
const MultipleChoiceOption = z.object({
  id: z.number(),
  description: z.string(),
});

// Schema para pergunta de múltipla escolha
const MultipleChoiceQuestion = z.object({
  id: z.number(),
  description: z.string(),
  answer_required: z.boolean(),
  type: z.literal("multiple_choice"),
  options: z.array(MultipleChoiceOption),
});

// Schema para pergunta simples
const ShortQuestion = z.object({
  id: z.number(),
  description: z.string(),
  answer_required: z.boolean(),
  type: z.literal("short_question"),
});

// O Schema Zod (o VALOR)
export const Question = z.discriminatedUnion("type", [
  MultipleChoiceQuestion,
  ShortQuestion,
]);

// O Tipo TypeScript (inferido do valor)
export type Question = z.infer<typeof Question>;