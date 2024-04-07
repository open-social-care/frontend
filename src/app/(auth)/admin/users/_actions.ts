import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchUsersAction(props: { page?: number }): Promise<ApiResponse> {
  const response = await api(`/admin/users?page=${props?.page || 1}`, {
    method: "GET",
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
