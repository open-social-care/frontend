"use server";

import api from "@/api";
import { ApiResponse } from "@/schemas";
import { redirect } from "next/navigation";

export async function createUserAction(prevState: any, formData: FormData): Promise<ApiResponse> {
  const response = await api({
    input: "/admin/users",
    init: {
      method: "POST",
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
