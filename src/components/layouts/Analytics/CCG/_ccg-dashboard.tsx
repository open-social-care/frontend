"use client";

import BarChart from "@/components/analytics/bar-chart";
import KpiCard from "@/components/analytics/kpi-card";
import PieChart from "@/components/analytics/pie-chart";
import { Skeleton } from "@/components/ui";

import { Paper, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";
import { AnalyticsData } from "@/schemas/AnalyticsData";

type CcgDashboardProps = {
  data: AnalyticsData;
};

const titles: Record<string, string> = {
  genderDistribution: "Distribuição de Gênero",
  ageDistribution: "Distribuição por Faixa Etária",
  householdSize: "Tamanho do Núcleo Familiar",
  educationLevel: "Nível de Escolaridade",
  employmentStatus: "Situação de Trabalho",
  incomeSources: "Principais Fontes de Renda",
  referrals: "Principais Encaminhamentos",
  topNeighborhoods: "Bairros Mais Atendidos",
};

export default function CcgDashboard({
  data,
  loading = false,
}: CcgDashboardProps & { loading?: boolean }) {
  return (
    <VBox className="mt-8 gap-12">
      {/* Seção Demográfica */}
      <section>
        <div className="mb-2 flex items-center gap-3">
          <svg
            className="h-7 w-7 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2v10l6 6"
            />
          </svg>
          <Heading
            h2
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Análises Demográficas
          </Heading>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <>
              <Paper className="p-6 lg:col-span-1">
                <Skeleton className="mb-4 h-6 w-2/3" />
                <Skeleton className="h-40 w-full rounded" />
              </Paper>
              <Paper className="p-6 lg:col-span-2">
                <Skeleton className="mb-4 h-6 w-2/3" />
                <Skeleton className="h-40 w-full rounded" />
              </Paper>
            </>
          ) : (
            <>
              <Paper className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-blue-50 p-6 shadow-lg lg:col-span-1">
                <div className="mb-2 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2v10l6 6"
                    />
                  </svg>
                  <Heading
                    h3
                    className="font-semibold text-gray-700"
                  >
                    {titles.genderDistribution}
                  </Heading>
                </div>
                <PieChart
                  series={Object.values(data.demographic.genderDistribution || {})}
                  labels={Object.keys(data.demographic.genderDistribution || {})}
                />
              </Paper>
              <Paper className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-blue-50 p-6 shadow-lg lg:col-span-2">
                <div className="mb-2 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10h8M8 14h6"
                    />
                  </svg>
                  <Heading
                    h3
                    className="font-semibold text-gray-700"
                  >
                    {titles.ageDistribution}
                  </Heading>
                </div>
                <BarChart
                  series={[
                    { name: "Total", data: Object.values(data.demographic.ageDistribution || {}) },
                  ]}
                  categories={Object.keys(data.demographic.ageDistribution || {})}
                />
              </Paper>
            </>
          )}
        </div>
      </section>
      <section>
        <div className="mb-2 flex items-center gap-3">
          <svg
            className="h-7 w-7 text-purple-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h8M8 14h6"
            />
          </svg>
          <Heading
            h2
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Análises Socioeconômicas
          </Heading>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <>
              <Paper className="p-6 lg:col-span-2">
                <Skeleton className="mb-4 h-6 w-2/3" />
                <Skeleton className="h-40 w-full rounded" />
              </Paper>
              <Paper className="p-6 lg:col-span-1">
                <Skeleton className="mb-4 h-6 w-2/3" />
                <Skeleton className="h-40 w-full rounded" />
              </Paper>
            </>
          ) : (
            <>
              <Paper className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-purple-50 p-6 shadow-lg lg:col-span-2">
                <div className="mb-2 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10h8M8 14h6"
                    />
                  </svg>
                  <Heading
                    h3
                    className="font-semibold text-gray-700"
                  >
                    {titles.educationLevel}
                  </Heading>
                </div>
                <BarChart
                  series={[
                    { name: "Total", data: Object.values(data.socioeconomic.educationLevel || {}) },
                  ]}
                  categories={Object.keys(data.socioeconomic.educationLevel || {})}
                />
              </Paper>
              <Paper className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-purple-50 p-6 shadow-lg lg:col-span-1">
                <div className="mb-2 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2v10l6 6"
                    />
                  </svg>
                  <Heading
                    h3
                    className="font-semibold text-gray-700"
                  >
                    {titles.employmentStatus}
                  </Heading>
                </div>
                <PieChart
                  series={Object.values(data.socioeconomic.employmentStatus || {})}
                  labels={Object.keys(data.socioeconomic.employmentStatus || {})}
                />
              </Paper>
            </>
          )}
        </div>
      </section>
      <section>
        <div className="mb-2 flex items-center gap-3">
          <svg
            className="h-7 w-7 text-orange-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4h16v16H4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 8h8v8H8z"
            />
          </svg>
          <Heading
            h2
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Análises Operacionais
          </Heading>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <>
              <KpiCard
                title="..."
                value={0}
                subtitle="Tipos de Encaminhamentos"
                loading
              />
              <KpiCard
                title="..."
                value={0}
                subtitle="Bairros Mapeados"
                loading
              />
              <KpiCard
                title="..."
                value={0}
                subtitle="Coletadas neste formulário"
                loading
              />
            </>
          ) : (
            <>
              <KpiCard
                title={titles.referrals}
                value={Object.keys(data.operational.referrals || {}).length}
                subtitle="Tipos de Encaminhamentos"
              />
              <KpiCard
                title={titles.topNeighborhoods}
                value={Object.keys(data.operational.topNeighborhoods || {}).length}
                subtitle="Bairros Mapeados"
              />
              <KpiCard
                title="Total de Respostas"
                value={Object.values(data.demographic.ageDistribution || {}).reduce(
                  (a, b) => a + b,
                  0,
                )}
                subtitle="Coletadas neste formulário"
              />
            </>
          )}
        </div>
      </section>
    </VBox>
  );
}
