import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchOrganizationAction(organizationId: number): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/organizations/${organizationId}`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}

export async function fetchUsersByRole(
  organizationId: number,
  role: string,
  query?: string,
  page?: number,
): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/organizations/${organizationId}/get-users-by-role/${role}?page=${page || 1}&q=${query || ""}`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
