import api from "@/api";
import { FlashMessageTypes } from "@/enums/FlashMessageTypes";
import { Roles } from "@/enums/Roles";
import { ApiResponse } from "@/schemas";

export async function fetchTemplates(organizationId: number): Promise<ApiResponse> {
  const res = await api({
    input: `/${Roles.SOCIAL_ASSISTANT}/form-templates/select/${organizationId}`,
    init: {
      method: "GET",
    },
  });

  const json = await res.json();

  return ApiResponse.parse(json);
}

export async function fetchFormTemplate(templateId: number): Promise<ApiResponse> {
  const res = await api({
    input: `/${Roles.SOCIAL_ASSISTANT}/form-templates/${templateId}`,
    init: {
      method: "GET",
    },
  });

  if (!res.ok) {
    return {
      type: FlashMessageTypes.SUCCESS,
      message: "",
      data: [],
    };
  }

  const json = await res.json();

  return ApiResponse.parse(json);
}
