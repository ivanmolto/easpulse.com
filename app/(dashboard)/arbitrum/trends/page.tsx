"use client";

import OnchainAttestations from "@/components/ui/arbitrum/OnchainAttestations";
export default function Trends() {
  return (
    <section aria-label="App Monitoring">
      <dl className="-ml-4 grid grid-cols-1 gap-x-14 gap-y-10 border-t border-gray-200 p-6 md:grid-cols-2 dark:border-gray-800">
        <div className="flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Daily On-Chain Attestations
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Number of attestations over time grouped by day
            </dd>
          </div>
          <OnchainAttestations slug="arbitrum-daily-attestations" />
        </div>
        <div className="flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Weekly On-Chain Attestations
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Number of attestations over time grouped by week
            </dd>
          </div>
          <OnchainAttestations slug="arbitrum-weekly-attestations" />
        </div>
        <div className="flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Monthly On-Chain Attestations
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Number of attestations over time grouped by month
            </dd>
          </div>
          <OnchainAttestations slug="arbitrum-monthly-attestations" />
        </div>
        <div className="flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Quarterly On-Chain Attestations
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Number of attestations over time grouped by quarter
            </dd>
          </div>
          <OnchainAttestations slug="arbitrum-quarterly-attestations" />
        </div>
      </dl>
    </section>
  );
}
