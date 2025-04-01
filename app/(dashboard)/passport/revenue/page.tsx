"use client";

export default function Overview() {
  return (
    <section aria-label="Revenue">
      <dl className="-ml-4 grid grid-cols-1 gap-x-14 gap-y-10 border-gray-200 p-6 md:grid-cols-3 dark:border-gray-800">
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Overall On-Chain Attestations Revenue
          </dt>
          <dd className="text-lg font-semibold text-gray-900 dark:text-gray-50 mt-1.5 flex items-center gap-2">
            {new Intl.NumberFormat("en-US").format(314.95)} ETH
          </dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Linea - Attestations Revenue
          </dt>
          <dd className="text-lg font-semibold text-gray-900 dark:text-gray-50 mt-1.5 flex items-center gap-2">
            {new Intl.NumberFormat("en-US").format(127.42)} ETH
          </dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Scroll - Attestations Revenue
          </dt>
          <dd className="text-lg font-semibold text-gray-900 dark:text-gray-50 mt-1.5 flex items-center gap-2">
            {new Intl.NumberFormat("en-US").format(80.45)} ETH
          </dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Optimism - Attestations Revenue
          </dt>
          <dd className="text-lg font-semibold text-gray-900 dark:text-gray-50 mt-1.5 flex items-center gap-2">
            {new Intl.NumberFormat("en-US").format(72.51)} ETH
          </dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Arbitrum - Attestations Revenue
          </dt>
          <dd className="text-lg font-semibold text-gray-900 dark:text-gray-50 mt-1.5 flex items-center gap-2">
            {new Intl.NumberFormat("en-US").format(23.5)} ETH
          </dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            zkSync - Attestations Revenue
          </dt>
          <dd className="text-lg font-semibold text-gray-900 dark:text-gray-50 mt-1.5 flex items-center gap-2">
            {new Intl.NumberFormat("en-US").format(11.07)} ETH
          </dd>
        </div>
      </dl>
    </section>
  );
}
