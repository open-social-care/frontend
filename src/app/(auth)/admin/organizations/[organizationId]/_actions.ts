"use server";

import api from "@/api";
import { ApiResponse } from "@/schemas";
import { revalidateTag } from "next/cache";

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

export async function associateUserAction(
  organizationId: number,
  roleId: number,
  prevState: any,
  formData: FormData,
): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/organizations/${organizationId}/associate-users`,
    init: {
      method: "POST",
      body: JSON.stringify({ data: [{ user_id: formData.get("user_id"), role_id: roleId }] }),
    },
  });

  if (response.ok) {
    revalidateTag(`members.${roleId}`);
  }

  const json = await response.json();

  return ApiResponse.parse(json);
}
