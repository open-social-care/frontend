"use client";

import PieChart from "@/components/analytics/pie-chart";
import { Paper, VBox } from "@/components/containers";
import { Heading, Text } from "@/components/ui";
import { AnalyticsData } from "@/schemas/AnalyticsData";

type ChartsDisplayProps = {
  data: AnalyticsData;
};

function AnalyticsCard({ title, data, loading }: { title: string; data: any; loading?: boolean }) {
  if (!data && !loading) return null;

  const isChart = !Array.isArray(data);

  return (
    <Paper
      className={`flex flex-col gap-4 rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-blue-50 p-6 shadow-lg transition duration-200 hover:border-blue-200 hover:shadow-xl ${isChart ? "lg:col-span-2" : ""}`}
    >
      <div className="mb-2 flex items-center gap-2">
        {isChart ? (
          <svg
            className="h-6 w-6 text-blue-500"
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
        ) : (
          <svg
            className="h-6 w-6 text-green-500"
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
        )}
        <Text className="text-xl font-bold tracking-tight text-gray-800">{title}</Text>
      </div>
      {isChart ? (
        <div className="flex w-full justify-center">
          <div className="w-full max-w-xs">
            {loading ? (
              <div className="flex h-[220px] w-full items-center justify-center">
                <div className="h-4/5 w-4/5 animate-pulse rounded-xl bg-gray-200" />
              </div>
            ) : (
              <PieChart
                series={Object.values(data as Record<string, number>)}
                labels={Object.keys(data as Record<string, number>)}
              />
            )}
          </div>
        </div>
      ) : (
        <VBox className="max-h-48 gap-2 overflow-y-auto pl-2 pr-2 text-sm text-gray-700">
          {(data as string[]).slice(0, 10).map((answer: string, index: number) => (
            <div
              key={index}
              className="flex items-start gap-2 rounded bg-gray-50 p-2 transition hover:bg-blue-50"
            >
              <svg
                className="mt-1 h-4 w-4 text-green-300"
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
                  d="M8 12h8"
                />
              </svg>
              <span className="break-words">{answer}</span>
            </div>
          ))}
          {data && data.length > 10 && (
            <div className="flex items-center gap-2 rounded bg-blue-50 p-2 font-medium text-blue-600">
              <svg
                className="h-4 w-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
              </svg>
              ... e mais {data.length - 10} respostas.
            </div>
          )}
        </VBox>
      )}
    </Paper>
  );
}

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

export default function ChartsDisplay({
  data,
  loading,
}: ChartsDisplayProps & { loading?: boolean }) {
  return (
    <VBox className="mt-8 gap-16">
      <section>
        <div className="mb-2 flex items-center gap-3">
          <svg
            className="h-7 w-7 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.5 20a7.5 7.5 0 0111 0"
            />
          </svg>
          <Heading
            h2
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Análises Demográficas
          </Heading>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(data.demographic).map(([key, chartData]) => (
            <AnalyticsCard
              key={key}
              title={titles[key] || key}
              data={chartData}
              loading={loading}
            />
          ))}
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
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(data.socioeconomic).map(([key, chartData]) => (
            <AnalyticsCard
              key={key}
              title={titles[key] || key}
              data={chartData}
              loading={loading}
            />
          ))}
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
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(data.operational).map(([key, chartData]) => (
            <AnalyticsCard
              key={key}
              title={titles[key] || key}
              data={chartData}
              loading={loading}
            />
          ))}
        </div>
      </section>
    </VBox>
  );
}
