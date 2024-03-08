"use server";

import api from "@/api";
import { ActionRequest } from "@/schemas/action/ActionRequest";
import { ActionResponse } from "@/schemas/action/ActionResponse";

export const login = async (values?: ActionRequest) => {
  const response = await api("/login", {
    method: "POST",
    body: JSON.stringify(values?.payload),
  });

  // todo: save token on cookie

  const json = await response.json();

  return ActionResponse.parse(json);
};
