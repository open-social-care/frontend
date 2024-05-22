import api from "@/api";
import { FlashMessageTypes } from "@/enums/FlashMessageTypes";
import { ApiResponse } from "@/schemas";

export async function fetchStates(): Promise<ApiResponse> {
  const response = await api({
    input: `/states`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}

export async function fetchCitiesByState(stateId?: number): Promise<ApiResponse> {
  const response = await api({
    input: `/states/${stateId}/cities`,
    init: {
      method: "GET",
    },
  });

  if (!response.ok) {
    return ApiResponse.parse({
      type: FlashMessageTypes.SUCCESS,
      message: "",
      data: [],
    });
  }

  const json = await response.json();

  return ApiResponse.parse(json);
}
