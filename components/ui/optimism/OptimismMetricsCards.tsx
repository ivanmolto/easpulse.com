type Metric = {
  label: string;
  value: number;
};

const metrics: Metric[] = [
  {
    label: "On-Chain Attestations",
    value: 695760,
  },
  {
    label: "Unique On-Chain Recipients",
    value: 246383,
  },
];

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div>
      <dt className="text-sm text-gray-500 dark:text-gray-500">
        {metric.label}
      </dt>
      <dd className="text-lg font-semibold text-gray-900 dark:text-gray-50 mt-1.5 flex items-center gap-2">
        {new Intl.NumberFormat("en-US").format(metric.value)}
      </dd>
    </div>
  );
}

export function OptimismMetricsCards() {
  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Overview
      </h1>
      <dl className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-8">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </dl>
    </>
  );
}
