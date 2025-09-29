"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type BarChartProps = {
  series: { name: string; data: number[] }[];
  categories: string[];
};

export default function BarChart({ series, categories }: BarChartProps) {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
        borderRadius: 4,
      },
    },
    colors: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: (val) => val + "",
      offsetX: 0,
    },
    xaxis: {
      categories: categories,
      labels: {
        show: true,
        style: {
          colors: "#6b7280",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#6b7280",
        },
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} respostas`,
      },
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={350}
    />
  );
}
