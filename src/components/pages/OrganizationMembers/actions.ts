"use server";

import api from "@/api";
import { roleNames } from "@/enums/roles";
import { getRole } from "@/helpers/getRole";
import { ApiResponse, Profile } from "@/schemas";
import { RoleId } from "@/schemas/Role";
import { revalidateTag } from "next/cache";

export async function fetchUsersByRole(
  profile: Profile,
  organizationId: number,
  roleId: RoleId,
  search?: string,
  page?: number,
): Promise<ApiResponse> {
  const response = await api({
    input: `/${profile}/organizations/${organizationId}/get-users-by-role/${getRole(roleId).name}?page=${page || 1}&q=${search || ""}`,
    init: {
      method: "GET",
      next: {
        tags: [`members.${roleId}`],
      },
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}

export interface DissociateUserActionValues {
  organizationId: number;
  roleId: RoleId;
  userId: number;
}

export async function dissociateUserAction({
  organizationId,
  roleId,
  userId,
}: DissociateUserActionValues): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/organizations/${organizationId}/disassociate-users`,
    init: {
      method: "POST",
      body: JSON.stringify({ data: [{ user_id: userId, role_id: roleId }] }),
    },
  });

  const json = await response.json();

  if (response.ok) {
    revalidateTag(`members.${roleId}`);
  }

  return ApiResponse.parse(json);
}
