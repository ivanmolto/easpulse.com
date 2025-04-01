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

import { LineChart } from "@/components/LineChart";
import { formatters } from "@/lib/utils";

export default function CumulativeAttestations({
  slug,
  column,
}: DuneDataProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dune", slug],
    queryFn: () => fetchDuneData(slug),
  });

  if (isLoading) return <div>Loading...</div>;
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
      <LineChart
        className="h-60 w-full"
        colors={["lightGray"]}
        data={sortedDataChart}
        index="Day"
        categories={["# Attestations"]}
        valueFormatter={(value) => formatters.unit(value)}
        onValueChange={(v) => console.log(v)}
      />
    </>
  );
}
