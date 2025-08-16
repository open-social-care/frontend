"use server";

import { actionFlash } from "@/action-flash";
import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchQuestionsAction(
  templateId: number,
  search?: string,
  page?: number,
): Promise<ApiResponse> {
  const response = await api({
    input: `/manager/form-templates/${templateId}/short-questions`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}

export async function createQuestionAction(
  templateId: string,
  prevState: any,
  formData: FormData,
): Promise<ApiResponse> {
  const type = formData.get("data_type") as string;

  const payload: any = {
    description: formData.get("description"),
    answer_required: formData.get("answer_required") === "on",
    type,
  };

  if (type === "multiple_choice") {
    const options: string[] = [];
    let idx = 0;
    let option = formData.get(`options[${idx}]`);
    while (option !== null) {
      options.push(option.toString());
      idx++;
      option = formData.get(`options[${idx}]`);
    }
    payload.options = options;
  }

  const response = await api({
    input: `/manager/form-templates/${templateId}/short-questions`,
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


export async function removeQuestionAction(
  templateId: number,
  questionId: number,
): Promise<ApiResponse> {
  const response = await api({
    input: `/manager/form-templates/${templateId}/short-questions/${questionId}`,
    init: {
      method: "DELETE",
    },
  });

  const json = await response.json();

  if (response.ok) {
    actionFlash("success", json.message);
  }

  return ApiResponse.parse(json);
}
