"use client";

import Revenue from "@/components/ui/passport/Revenue";
export default function Overview() {
  return (
    <section aria-label="Revenue">
      <dl className="-ml-4 grid grid-cols-1 gap-x-14 gap-y-10 border-gray-200 p-6 md:grid-cols-3 dark:border-gray-800">
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Linea - Attestations Revenue
          </dt>
          <Revenue slug="passport-linea-attestations-revenue" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Scroll - Attestations Revenue
          </dt>
          <Revenue slug="passport-scroll-attestations-revenue" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Optimism - Attestations Revenue
          </dt>
          <Revenue slug="passport-optimism-attestations-revenue" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Arbitrum - Attestations Revenue
          </dt>
          <Revenue slug="passport-arbitrum-attestations-revenue" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            zkSync - Attestations Revenue
          </dt>
          <Revenue slug="passport-zksync-attestations-revenue" />
        </div>
      </dl>
    </section>
  );
}
