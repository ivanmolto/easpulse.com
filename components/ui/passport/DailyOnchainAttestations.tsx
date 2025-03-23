import { BarChart } from "@/components/BarChart";
import { dataChart } from "@/data/data";
import { formatters } from "@/lib/utils";
export default function DailyOnchainAttestations() {
  const formattedDataChart = dataChart.map((item) => ({
    ...item,
    Day: new Date(item.Day).toISOString().split("T")[0], // Converts "2024-10-01 00:00:00.000 UTC" to "2024-10-01"
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
        colors={["violet"]}
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
        colors={["violet"]}
        showYAxis={false}
        barCategoryGap="20%"
        className="mt-4 h-60 md:hidden"
      />
    </>
  );
}
