"use server";

import { actionFlash } from "@/action-flash";
import api from "@/api";
import { roles } from "@/enums/roles";
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

const roleNames = {
  2: "manager",
  3: "social-assistant",
};

export async function fetchUsersByRole(
  organizationId: number,
  roleId: roles.MANAGER | roles.SOCIAL_ASSISTANT,
  query?: string,
  page?: number,
): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/organizations/${organizationId}/get-users-by-role/${roleNames[roleId]}?page=${page || 1}&q=${query || ""}`,
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

export interface DissociateUserActionValues {
  organizationId: number;
  roleId: number;
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
