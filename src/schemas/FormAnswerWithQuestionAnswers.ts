import { z } from "zod";
import { FormAnswer } from "./FormAnswer";
import { QuestionAnswerSchema } from "./QuestionAnswer";

export const FormAnswerWithQuestionAnswers = FormAnswer.extend({
  question_answers: QuestionAnswerSchema.array(),
});

export type FormAnswerWithQuestionAnswers = z.infer<typeof FormAnswerWithQuestionAnswers>;