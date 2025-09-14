import { z } from "zod";
import { FormAnswer } from "./FormAnswer"; // Supondo que este seja o schema base
// Importe o schema unificado de resposta que criamos
import { QuestionAnswerSchema } from "./QuestionAnswer";

export const FormAnswerWithQuestionAnswers = FormAnswer.extend({
  // A CORREÇÃO ESTÁ AQUI:
  question_answers: QuestionAnswerSchema.array(),
});

export type FormAnswerWithQuestionAnswers = z.infer<typeof FormAnswerWithQuestionAnswers>;