import api from "@/api";
import { ApiResponse, Profile } from "@/schemas";

export async function fetchOrganizationsAction(
  profile: Profile,
  search?: string,
  page?: number,
): Promise<ApiResponse> {
  const response = await api({
    input: `/${profile}/organizations?page=${page || 1}&q=${search || ""}`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
