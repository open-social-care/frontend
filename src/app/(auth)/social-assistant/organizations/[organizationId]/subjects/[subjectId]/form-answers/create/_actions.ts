"use server";

import { actionFlash } from "@/action-flash";
import api from "@/api";
import { Roles } from "@/enums/Roles";
import { ApiResponse, FormTemplateWithQuestions } from "@/schemas";
import { redirect } from "next/navigation";

export async function fetchTemplates(organizationId: number): Promise<ApiResponse> {
  const res = await api({
    input: `/${Roles.SOCIAL_ASSISTANT}/form-templates/select/${organizationId}`,
    init: {
      method: "GET",
    },
  });

  const json = await res.json();

  return ApiResponse.parse(json);
}

export async function fetchFormTemplate(templateId: number): Promise<ApiResponse> {
  const res = await api({
    input: `/${Roles.SOCIAL_ASSISTANT}/form-templates/${templateId}`,
    init: {
      method: "GET",
    },
  });

  const json = await res.json();

  return ApiResponse.parse(json);
}

export async function createFormAnswer(
  organizationId: string,
  subjectId: string,
  template: FormTemplateWithQuestions,
  prevState: any,
  formData: FormData,
): Promise<ApiResponse> {

  const answersPayload = template.questions.reduce((acc, question) => {
    if (question.type === 'short_question') {
      const answer = formData.get(`short_answers[${question.id}]`);
      if (answer !== null && answer !== '') {
        acc.short_answers.push({
          short_question_id: question.id,
          answer: answer.toString(),
        });
      }
    } else if (question.type === 'multiple_choice') {
      const answer = formData.get(`multiple_choice_answers[${question.id}]`);
      if (answer !== null && answer !== '') {
        acc.multiple_choice_answers.push({
          multiple_choice_question_id: question.id,
          answer: answer.toString(),
        });
      }
    }
    return acc;
  }, { short_answers: [] as any[], multiple_choice_answers: [] as any[] });

  const finalPayload = {
    form_template_id: template.id,
    ...answersPayload
  };

  const response = await api({
    input: `/${Roles.SOCIAL_ASSISTANT}/form-answers/${subjectId}`,
    init: {
      method: "POST",
      body: JSON.stringify(finalPayload),
    },
  });

  const json = await response.json();

  if (response.ok) {
    actionFlash("success", json.message);
    redirect(
      `/${Roles.SOCIAL_ASSISTANT}/organizations/${organizationId}/subjects/${subjectId}/form-answers`,
    );
  }

  return ApiResponse.parse(json);
}