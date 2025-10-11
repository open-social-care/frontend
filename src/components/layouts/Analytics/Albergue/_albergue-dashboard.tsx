"use client";

import BarChart from "@/components/analytics/bar-chart";
import KpiCard from "@/components/analytics/kpi-card";
import PieChart from "@/components/analytics/pie-chart";
import { Paper, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";

import { AlbergueAnalyticsData } from "@/schemas/AnalyticsData";

type AlbergueDashboardProps = {
  data: AlbergueAnalyticsData;
};

const titles: Record<string, string> = {
  recurrentVisitors: "Visitantes Recorrentes",
  topOriginCities: "Principais Cidades de Origem",
  genderDistribution: "Distribuição de Gênero",
  substanceUse: "Uso de Substâncias",
  hasCadUnico: "Inscritos no CadÚnico",
  hasRG: "Possui RG",
  hasCPF: "Possui CPF",
  usesMedication: "Faz Uso de Medicação",
  medicationAccess: "Acesso à Medicação",
  receivesFollowUp: "Em Acompanhamento Profissional",
};

export default function AlbergueDashboard({ data }: AlbergueDashboardProps) {
  const getYesCount = (chartData?: Record<string, number> | string[]): number => {
    if (chartData && typeof chartData === "object" && !Array.isArray(chartData)) {
      return chartData["Sim"] || 0;
    }
    return 0;
  };

  return (
    <VBox className="mt-8 gap-12">
      <section>
        <Heading h2>Perfil de Mobilidade</Heading>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Paper className="p-6">
            <Heading
              h3
              className="mb-4 font-semibold text-gray-700"
            >
              {titles.recurrentVisitors}
            </Heading>
            <PieChart
              series={Object.values(data.mobility_profile?.recurrentVisitors || {})}
              labels={Object.keys(data.mobility_profile?.recurrentVisitors || {})}
            />
          </Paper>
          <Paper className="p-6 lg:col-span-2">
            <Heading
              h3
              className="mb-4 font-semibold text-gray-700"
            >
              {titles.topOriginCities}
            </Heading>
            <BarChart
              series={[
                {
                  name: "Total",
                  data: Object.values(data.mobility_profile?.topOriginCities || {}),
                },
              ]}
              categories={Object.keys(data.mobility_profile?.topOriginCities || {})}
            />
          </Paper>
        </div>
      </section>

      {/* Seção de Saúde */}
      <section>
        <Heading h2>Perfil de Saúde</Heading>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Paper className="p-6">
            <Heading
              h3
              className="mb-4 font-semibold text-gray-700"
            >
              {titles.substanceUse}
            </Heading>
            <PieChart
              series={Object.values(data.health_profile?.substanceUse || {})}
              labels={Object.keys(data.health_profile?.substanceUse || {})}
            />
          </Paper>

          <KpiCard
            title={titles.usesMedication}
            value={`${getYesCount(data.health_profile?.usesMedication)} Pessoas`}
            subtitle="Em uso de medicação contínua"
          />
          <KpiCard
            title={titles.receivesFollowUp}
            value={`${getYesCount(data.health_profile?.receivesFollowUp)} Pessoas`}
            subtitle="Com acompanhamento profissional"
          />
        </div>
      </section>

      <section>
        <Heading h2>Perfil de Cidadania</Heading>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* CORREÇÃO APLICADA AQUI, USANDO A FUNÇÃO HELPER */}
          <KpiCard
            title={titles.hasCadUnico}
            value={`${getYesCount(data.socioeconomic_profile?.hasCadUnico)} Pessoas`}
            subtitle="Inscritas no CadÚnico"
          />
          <KpiCard
            title={titles.hasRG}
            value={`${getYesCount(data.socioeconomic_profile?.documentation?.hasRG)} Pessoas`}
            subtitle="Com documentação"
          />
          <KpiCard
            title={titles.hasCPF}
            value={`${getYesCount(data.socioeconomic_profile?.documentation?.hasCPF)} Pessoas`}
            subtitle="Com documentação"
          />
        </div>
      </section>
    </VBox>
  );
}
