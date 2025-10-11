"use client";

import { Paper } from "@/components/containers";
import AlbergueDashboard from "@/components/layouts/Analytics/Albergue/_albergue-dashboard";
import CcgDashboard from "@/components/layouts/Analytics/CCG/_ccg-dashboard";
import { Button, Heading } from "@/components/ui";
import { t } from "@/lang";
import { AnalyticsDataSchema, FormTemplate } from "@/schemas";
import { AlbergueAnalyticsData, CcgAnalyticsData } from "@/schemas/AnalyticsData";
import { downloadCsv, downloadPdf, transformDataForExport } from "@/services/exportService";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchAnalyticsDataAction, fetchAnalyticsTemplatesAction } from "./_actions";
import SelectTemplate from "./_select-template";

interface PageProps {
  params: {
    organizationId: number;
  };
}

export function getExportUrl(templateId: number, format: "pdf" | "csv", period?: string): string {
  const periodQuery = period && period !== "all" ? `?period=${period}` : "";
  return `/api/social-assistant/analytics/form-template/${templateId}/export/${format}${periodQuery}`;
}

export default function Page({ params }: PageProps) {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [isExporting, setIsExporting] = useState<"pdf" | "csv" | null>(null);
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [templates, setTemplates] = useState<FormTemplate[]>([]);

  const selectedTemplateId = searchParams.get("template");
  const selectedPeriod = searchParams.get("period");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const templatesResponse = await fetchAnalyticsTemplatesAction(params.organizationId);
      setTemplates(FormTemplate.array().parse(templatesResponse.data));

      if (selectedTemplateId) {
        const analyticsResponse = await fetchAnalyticsDataAction(
          parseInt(selectedTemplateId),
          selectedPeriod || undefined,
        );
        setAnalyticsData(AnalyticsDataSchema.parse(analyticsResponse.data));
      } else {
        setAnalyticsData(null);
      }
      setLoading(false);
    }
    fetchData();
  }, [params.organizationId, selectedTemplateId, selectedPeriod]);

  const handleExport = (format: "pdf" | "csv") => {
    if (!analyticsData || !selectedTemplate) return;

    setIsExporting(format);
    try {
      const { headers, rows } = transformDataForExport(analyticsData, t);
      const fileName = `relatorio-${selectedTemplate.title.toLowerCase().replace(/ /g, "-")}`;

      if (format === "csv") {
        downloadCsv(fileName, headers, rows);
      } else if (format === "pdf") {
        downloadPdf(fileName, `Relatório: ${selectedTemplate.title}`, headers, rows);
      }
    } catch (error) {
      console.error("Erro ao gerar relatório:", error);
      alert("Não foi possível gerar o relatório.");
    } finally {
      setIsExporting(null);
    }
  };

  const selectedTemplate = templates.find((t) => t.id === Number(selectedTemplateId));

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading h1>Análise de Respostas</Heading>
        {/* Export Buttons */}
        <div className="flex gap-2">
          <Button onClick={() => handleExport("pdf")}>
            {isExporting === "pdf" ? "Gerando..." : "Exportar PDF"}
          </Button>
          <Button onClick={() => handleExport("csv")}>
            {isExporting === "csv" ? "Gerando..." : "Exportar Excel"}
          </Button>
        </div>
      </div>

      <Paper className="mt-5 p-6">
        <SelectTemplate templates={templates} />

        {loading && <p>Carregando dados...</p>}

        {!loading && !selectedTemplate && (
          <div className="py-10 text-center text-gray-500">
            <p>Selecione um formulário acima para visualizar os dados.</p>
          </div>
        )}

        {!loading && selectedTemplate && analyticsData && (
          <>
            {selectedTemplate.title === "Ficha de Atendimento CCG" && (
              <CcgDashboard data={analyticsData as CcgAnalyticsData} />
            )}
            {selectedTemplate.title === "Plano de Acompanhamento - Albergue" && (
              <AlbergueDashboard data={analyticsData as AlbergueAnalyticsData} />
            )}
          </>
        )}
      </Paper>
    </>
  );
}
