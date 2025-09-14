"use server";

import { actionFlash } from "@/action-flash";
import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchQuestionAction(
  templateId: number,
  questionId: number,
  questionType: "short_question" | "multiple_choice",
): Promise<ApiResponse> {
  const questionTypeSegment = questionType === 'short_question'
    ? 'short-questions'
    : 'multiple-choice-questions';

  const response = await api({
    input: `/manager/form-templates/${templateId}/${questionTypeSegment}/${questionId}`,
    init: {
      method: "GET",
    },
  });
  
  const json = await response.json();

  return ApiResponse.parse(json);
}

export async function updateQuestionAction(
  organizationId: number,
  templateId: number,
  questionId: number,
  questionType: "short_question" | "multiple_choice",
  prevState: any,
  formData: FormData,
): Promise<ApiResponse> {

  const payload: any = {
    description: formData.get("description"),
    answer_required: formData.get("answer_required") === "on",
    _method: "PUT",
  };

  if (questionType === "multiple_choice") {
    const options: string[] = [];
    let idx = 0;
    while (formData.has(`options[${idx}]`)) {
      options.push(formData.get(`options[${idx}]`)!.toString());
      idx++;
    }
    payload.options = options;
  }

  const questionTypeSegment = questionType === 'short_question'
    ? 'short-questions'
    : 'multiple-choice-questions';

  const response = await api({
    input: `/manager/form-templates/${templateId}/${questionTypeSegment}/${questionId}`,
    init: {
      method: "POST",
      body: JSON.stringify(payload),
    },
  });

  const json = await response.json();

  if (response.ok) {
    actionFlash("success", json.message);
  }

  return ApiResponse.parse(json);
}