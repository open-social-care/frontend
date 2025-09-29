"use client";
import { Paper } from "@/components/containers";
import CcgDashboard from "@/components/layouts/Analytics/CCG/_ccg-dashboard";
import { Heading } from "@/components/ui";
import { AnalyticsDataSchema, FormTemplate } from "@/schemas";
import { useEffect, useState } from "react";
import { fetchAnalyticsDataAction, fetchAnalyticsTemplatesAction } from "./_actions";
import SelectTemplate from "./_select-template";

interface PageProps {
  params: {
    organizationId: number;
  };
  searchParams: {
    template?: string;
    period?: string;
  };
}

export default function Page({ params, searchParams }: PageProps) {
  const [loading, setLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [templates, setTemplates] = useState<FormTemplate[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const templatesResponse = await fetchAnalyticsTemplatesAction(params.organizationId);
      const templatesParsed = FormTemplate.array().parse(templatesResponse.data);
      setTemplates(templatesParsed);

      const selectedTemplateId = searchParams.template ? parseInt(searchParams.template) : null;
      if (selectedTemplateId) {
        const analyticsResponse = await fetchAnalyticsDataAction(
          selectedTemplateId,
          searchParams.period,
        );
        setAnalyticsData(AnalyticsDataSchema.parse(analyticsResponse.data));
      } else {
        setAnalyticsData(null);
      }
      setLoading(false);
    }
    fetchData();
  }, [params.organizationId, searchParams.template, searchParams.period]);

  const selectedTemplateId = searchParams.template ? parseInt(searchParams.template) : null;
  const selectedTemplate = templates.find((t) => t.id === selectedTemplateId);

  return (
    <>
      <Heading h1>Análise de Respostas</Heading>
      <Paper className="mt-5 p-6">
        <SelectTemplate templates={templates} />
        {selectedTemplate?.title === "Ficha de Atendimento CCG" && (
          <CcgDashboard
            data={analyticsData || { demographic: {}, socioeconomic: {}, operational: {} }}
            loading={loading}
          />
        )}
      </Paper>
    </>
  );
}
