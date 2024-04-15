"use server";

import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchUserAction(userId: number): Promise<ApiResponse> {
  const response = await api(`/admin/users/${userId}`, {
    method: "GET",
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}

export async function updateUserAction(
  userId: number,
  prevState: any,
  formData: FormData,
): Promise<ApiResponse> {
  const response = await api(`/admin/users/${userId}`, {
    method: "PUT",
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("password_confirmation"),
    }),
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}
