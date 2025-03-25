"use client";

import OnchainAttestations from "@/components/ui/passport/OnchainAttestations";

export default function Trends() {
  return (
    <section aria-label="App Monitoring">
      <dl className="grid grid-cols-1 gap-x-14 gap-y-10 border-t border-gray-200 p-6 md:grid-cols-2 dark:border-gray-800">
        <div className="-ml-4 flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Daily On-Chain Attestations
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Number of attestations over time grouped by day
            </dd>
          </div>
          <OnchainAttestations slug="passport-daily-onchain-attestations" />
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
          <OnchainAttestations slug="passport-weekly-onchain-attestations" />
        </div>
        <div className="-ml-4 flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Monthly On-Chain Attestations
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Number of attestations over time grouped by month
            </dd>
          </div>
          <OnchainAttestations slug="passport-monthly-onchain-attestations" />
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
          <OnchainAttestations slug="passport-quarterly-onchain-attestations" />
        </div>
      </dl>
    </section>
  );
}
