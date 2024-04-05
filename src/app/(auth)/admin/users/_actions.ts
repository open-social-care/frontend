import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchUsersAction(): Promise<ApiResponse> {
  const response = await api("/admin/users", {
    method: "GET",
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
