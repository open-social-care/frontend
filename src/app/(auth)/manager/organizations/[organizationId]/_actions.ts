"use server";

import api from "@/api";
import { ApiResponse } from "@/schemas";
import { revalidateTag } from "next/cache";

export async function fetchOrganizationAction(organizationId: number): Promise<ApiResponse> {
  const response = await api({
    input: `/manager/organizations/${organizationId}`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
