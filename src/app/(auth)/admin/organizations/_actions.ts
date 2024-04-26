import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchOrganizationsAction(
  query?: string,
  page?: number,
): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/organizations?page=${page || 1}&q=${query || ""}`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
