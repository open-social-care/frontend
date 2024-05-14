import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchFormTemplatesAction(
  organizationId: number,
  search?: string,
  page?: number,
): Promise<ApiResponse> {
  const response = await api({
    input: `/manager/form-templates/${organizationId}?page=${page || 1}&q=${search || ""}`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
