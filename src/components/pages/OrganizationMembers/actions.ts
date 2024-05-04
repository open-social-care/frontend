"use server";

import api from "@/api";
import { roles } from "@/enums/roles";
import { ApiResponse, Profile } from "@/schemas";
import { revalidateTag } from "next/cache";

const roleNames = {
  2: "manager",
  3: "social-assistant",
};

export async function fetchUsersByRole(
  profile: Profile,
  organizationId: number,
  roleId: roles.MANAGER | roles.SOCIAL_ASSISTANT,
  search?: string,
  page?: number,
): Promise<ApiResponse> {
  const response = await api({
    input: `/${profile}/organizations/${organizationId}/get-users-by-role/${roleNames[roleId]}?page=${page || 1}&q=${search || ""}`,
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
  profile: string;
  organizationId: number;
  roleId: number;
  userId: number;
}

export async function dissociateUserAction({
  profile,
  organizationId,
  roleId,
  userId,
}: DissociateUserActionValues): Promise<ApiResponse> {
  const response = await api({
    input: `/${profile}/organizations/${organizationId}/disassociate-users`,
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
