"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type PieChartProps = {
  series: number[];
  labels: string[];
};

export default function PieChart({ series, labels }: PieChartProps) {
  const total = series.reduce((acc, val) => acc + val, 0);

  const options: ApexOptions = {
    chart: {
      type: "donut",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 0,
    },
    colors: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444", "#64748b"],
    labels: labels,
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              fontSize: "18px",
              fontWeight: 600,
              formatter: () => total.toString(),
            },
          },
        },
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        size: 5,
      },
      itemMargin: {
        horizontal: 8,
        vertical: 5,
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} respostas`,
      },
    },
  };

  return (
    <div className="flex min-h-[220px] w-full items-center justify-center">
      <div className="w-full">
        <Chart
          options={options}
          series={series}
          type="donut"
          width="80%"
        />
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {labels.map((label, idx) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded bg-gray-50 px-3 py-1 text-sm shadow"
            >
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: options.colors?.[idx % options.colors.length] }}
              />
              <span className="font-medium text-gray-700">{label}</span>
              <span className="text-gray-500">({series[idx]} respostas)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
