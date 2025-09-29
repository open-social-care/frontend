"use client";

import { Button } from "@/components/ui"; // Supondo que o Button venha daqui
import { FormTemplate } from "@/schemas";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"; // 1. Importe o useState

type SelectTemplateProps = {
  templates: FormTemplate[];
};

export default function SelectTemplate({ templates }: SelectTemplateProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 2. Guarda as seleções atuais em um estado local.
  //    Inicializa com os valores da URL para manter o estado após o recarregamento.
  const [selectedTemplate, setSelectedTemplate] = useState(searchParams.get("template") || "");
  const [selectedPeriod, setSelectedPeriod] = useState(searchParams.get("period") || "all");

  const handleSearch = () => {
    // 3. A função de busca só é chamada ao clicar no botão.
    const params = new URLSearchParams();
    if (selectedTemplate) {
      params.set("template", selectedTemplate);
    }
    if (selectedPeriod && selectedPeriod !== "all") {
      params.set("period", selectedPeriod);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const periodOptions = [
    { value: "all", label: "Todo o período" },
    { value: "7d", label: "Últimos 7 dias" },
    { value: "15d", label: "Últimos 15 dias" },
    { value: "30d", label: "Último mês" },
    { value: "3m", label: "Últimos 3 meses" },
    { value: "6m", label: "Últimos 6 meses" },
    { value: "1y", label: "Último ano" },
  ];

  return (
    <div className="mb-8 w-full rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-blue-50 p-6 shadow-lg">
      <div className="flex flex-row items-end gap-4">
        {/* Select de template */}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2">
            <svg
              className="h-5 w-5 text-blue-500"
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
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
            <span className="text-base font-bold tracking-tight text-gray-800">Formulário</span>
          </div>
          <div className="relative">
            <select
              id="template-select"
              onChange={(e) => setSelectedTemplate(e.target.value)}
              value={selectedTemplate}
              className="block w-full rounded-md border-gray-300 bg-white py-2 pl-9 pr-6 text-sm shadow transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option
                value=""
                disabled
              >
                -- Escolha um template --
              </option>
              {templates.map((template) => (
                <option
                  key={template.id}
                  value={template.id}
                >
                  {template.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
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
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <label
            htmlFor="period-select"
            className="mb-1 flex items-center gap-1 text-sm font-medium text-gray-700"
          >
            <svg
              className="h-4 w-4 text-indigo-400"
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
            Período
          </label>
          <div className="relative">
            <select
              id="period-select"
              onChange={(e) => setSelectedPeriod(e.target.value)}
              value={selectedPeriod}
              className="block w-full rounded-md border-gray-300 bg-white py-2 pl-9 pr-6 text-sm shadow transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              disabled={!selectedTemplate}
            >
              {periodOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                className="h-4 w-4 text-indigo-400"
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
            </div>
          </div>
        </div>
        <div
          className="flex flex-shrink-0 items-end"
          style={{ minWidth: "120px" }}
        >
          <Button
            type="button"
            className="w-full rounded-lg py-2 text-base font-semibold text-white shadow transition hover:shadow-lg focus:outline-none focus:ring-2"
            onClick={handleSearch}
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35"
                />
              </svg>
              Pesquisar
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
