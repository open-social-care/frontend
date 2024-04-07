import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchUsersAction(props: {
  query?: string;
  page?: number;
}): Promise<ApiResponse> {
  const response = await api(`/admin/users?page=${props?.page || 1}&q=${props?.query || ""}`, {
    method: "GET",
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
