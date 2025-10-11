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
  period?: string,
): Promise<ApiResponse> {
  const url = period && period !== 'all'
    ? `/social-assistant/analytics/form-template/${templateId}?period=${period}`
    : `/social-assistant/analytics/form-template/${templateId}`;

  const res = await api({
    input: url,
    init: { method: "GET" },
  });

  const json = await res.json();

  return ApiResponse.parse(json);
}

export async function fetchExportDataAction(templateId: number, period?: string) {
    const periodQuery = (period && period !== 'all') ? `?period=${period}` : '';
    const url = `/social-assistant/analytics/form-template/${templateId}/export-data${periodQuery}`;

    const res = await api({
        input: url,
        init: { method: "GET" },
    });

    return await res.json();
}
