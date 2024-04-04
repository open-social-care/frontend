"use server";

import api from "@/api";
import { ApiResponse } from "@/schemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData): Promise<ApiResponse> {
  const response = await api("/login", {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });

  const json = await response.json();

  if (json.data && json.token) {
    const cookieStore = cookies();

    cookieStore.set(
      "auth-user",
      JSON.stringify({
        ...json.data,
        token: json.token,
      }),
      {
        httpOnly: true,
        sameSite: "lax",
      },
    );

    redirect("/profile-select");
  }

  return ApiResponse.parse(json);
}
