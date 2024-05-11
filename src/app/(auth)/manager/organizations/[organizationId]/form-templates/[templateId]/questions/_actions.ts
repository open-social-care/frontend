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
