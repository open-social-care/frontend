"use server";

import api from "@/api";
import { ApiResponse } from "@/schemas";

export async function fetchAnalyticsTemplatesAction(organizationId: number): Promise<ApiResponse> {
  const res = await api({
    input: `/social-assistant/form-templates/select/${organizationId}`,
    init: { method: "GET" },
  });
  const json = await res.json();
  return ApiResponse.parse(json);
}

export async function fetchAnalyticsDataAction(
  templateId: number,
  period?: string, // Adicione o período aqui
): Promise<ApiResponse> {
  // Constrói a URL com o período, se ele for fornecido
  const url = period && period !== 'all' 
    ? `/social-assistant/analytics/form-template/${templateId}?period=${period}`
    : `/social-assistant/analytics/form-template/${templateId}`;

  const res = await api({
    input: url,
    init: { method: "GET" },
  });
  
  const json = await res.json();

  // DEBUG: Veja o que a API realmente retornou
  console.log("JSON RECEBIDO PELA ACTION DE ANALYTICS:", json);

  return ApiResponse.parse(json);
}