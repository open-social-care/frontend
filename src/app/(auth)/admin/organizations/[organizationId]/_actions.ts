"use server";

import api from "@/api";
import { getRole } from "@/helpers/getRole";
import { ApiResponse } from "@/schemas";
import { RoleId } from "@/schemas/Role";
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

export async function fetchNonMembersAction(
  organizationId: number,
  roleId: RoleId,
): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/organizations/${organizationId}/get-non-members-by-role/${getRole(roleId).name}`,
    init: {
      method: "GET",
      next: {
        tags: [`non-members.${roleId}`],
      },
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}

export async function associateUserAction(
  organizationId: number,
  roleId: RoleId,
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
    revalidateTag(`non-members.${roleId}`);
    revalidateTag(`members.${roleId}`);
  }

  const json = await response.json();

  return ApiResponse.parse(json);
}
