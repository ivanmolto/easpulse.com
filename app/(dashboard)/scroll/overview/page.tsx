"use client";

import CumulativeAttestations from "@/components/ui/scroll/CumulativeAttestations";
import { cx } from "@/lib/utils";

export default function Overview() {
  return (
    <section aria-labelledby="usage-overview">
      <dl
        className={cx(
          "ml-2 mt-10 grid grid-cols-1 gap-14 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1"
        )}
      >
        <div className="flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Cumulative On-Chain Attestations over time
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Total number of attestations accumulated over time
            </dd>
          </div>
          <CumulativeAttestations slug="cumulative-scroll-eas-onchain-attestations" />
        </div>
      </dl>
    </section>
  );
}
