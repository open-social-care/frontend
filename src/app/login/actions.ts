"use server";

import api from "@/api";

export const login = async (values: { email: string; password: string }) => {
  return await api("/login", { method: "POST", body: JSON.stringify(values) });
};
