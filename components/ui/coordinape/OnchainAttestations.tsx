/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useQuery } from "@tanstack/react-query";

interface DuneResponse {
  result?: {
    rows: Array<Record<string, any>>;
  };
}

interface DuneDataProps {
  slug: string;
  column?: string;
}

const fetchDuneData = async (slug: string): Promise<any> => {
  const response = await fetch(`/api/dune/${encodeURIComponent(slug)}`);
  const data: DuneResponse = await response.json();
  return data.result?.rows;
};

import { BarChart } from "@/components/BarChart";
import { formatters } from "@/lib/utils";

export default function OnchainAttestations({ slug, column }: DuneDataProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dune", slug],
    queryFn: () => fetchDuneData(slug),
  });

  if (isLoading)
    return (
      <div className="h-60 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800"></div>
    );
  if (error) return <div>Error: {error.message}</div>;

  if (!data || data.length === 0) return <div>No data available</div>;

  if (column) {
    return (
      <div>
        {data.map((row: Record<string, any>, index: number) => (
          <div key={index}>
            {column}: {row[column]}
          </div>
        ))}
      </div>
    );
  }

  const formattedDataChart = data.map((row: Record<string, any>) => ({
    ...row,
    Day: new Date(row.Day).toISOString().split("T")[0], // Converts "2024-10-01 00:00:00.000 UTC" to "2024-10-01"
  }));
  const sortedDataChart = [...formattedDataChart].sort(
    (a, b) => new Date(a.Day).getTime() - new Date(b.Day).getTime()
  );
  return (
    <>
      <BarChart
        data={sortedDataChart}
        index="Day"
        categories={["# Attestations"]}
        colors={["lime"]}
        yAxisWidth={45}
        yAxisLabel=" "
        barCategoryGap="20%"
        valueFormatter={(value) => formatters.unit(value)}
        className="mt-4 hidden h-60 md:block"
      />
      <BarChart
        data={sortedDataChart}
        index="Day"
        categories={["# Attestations"]}
        colors={["lime"]}
        showYAxis={false}
        barCategoryGap="20%"
        className="mt-4 h-60 md:hidden"
      />
    </>
  );
}
