import { Paper } from "@/components/containers";
import { Text } from "@/components/ui";

type KpiCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
  loading?: boolean;
};

export default function KpiCard({ title, value, subtitle, loading }: KpiCardProps) {
  return (
    <Paper className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      {loading ? (
        <>
          <div className="mb-2 h-4 w-2/3 animate-pulse rounded bg-gray-200" />
          <div className="mb-2 h-10 w-1/2 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-1/3 animate-pulse rounded bg-gray-100" />
        </>
      ) : (
        <>
          <Text className="text-sm font-medium text-gray-500">{title}</Text>
          <Text className="text-4xl font-bold tracking-tight text-gray-900">{value}</Text>
          <Text className="text-xs text-gray-400">{subtitle}</Text>
        </>
      )}
    </Paper>
  );
}
