"use server";

import { actionFlash } from "@/action-flash";
import api from "@/api";
import { ApiResponse, Profile } from "@/schemas";
import { redirect } from "next/navigation";

export async function updateOrganizationAction(
  profile: Profile,
  organizationId: number,
  prevState: any,
  formData: FormData,
): Promise<ApiResponse> {
  const response = await api({
    input: `/${profile}/organizations/${organizationId}`,
    init: {
      method: "PUT",
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        document_type: formData.get("document_type"),
        document: formData.get("document"),
      }),
    },
  });

  const json = await response.json();

  if (response.ok) {
    actionFlash("success", json.message);
    redirect(`/${profile}/organizations`);
  }

  return ApiResponse.parse(json);
}
