"use server";

import api from "@/api";
import { ApiResponse } from "@/schemas";
import { redirect } from "next/navigation";

export async function fetchUserAction(userId: number): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/users/${userId}`,
    init: {
      method: "GET",
    },
  });

  const json = await response.json();

  return ApiResponse.parse(json);
}

export async function updateUserAction(
  userId: number,
  prevState: any,
  formData: FormData,
): Promise<ApiResponse> {
  const response = await api({
    input: `/admin/users/${userId}`,
    init: {
      method: "PUT",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
      }),
    },
  });

  if (response.ok) {
    redirect("/admin/users");
  }

  const json = await response.json();

  return ApiResponse.parse(json);
}
