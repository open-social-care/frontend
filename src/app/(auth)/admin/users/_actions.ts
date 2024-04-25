import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchUsersAction(query?: string, page?: number): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/users?page=${page || 1}&q=${query || ""}`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
