/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { LineChart } from "@/components/LineChart";
import { chartLineData } from "@/data/data";
import { cx } from "@/lib/utils";

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
      <dl
        className={cx(
          "mt-7 grid grid-cols-1 gap-14 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1"
        )}
      >
        <div className="ml-2 flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Cumulative On-Chain Revenue over time (ETH)
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Total revenue generated on-chain, aggregated by time period
            </dd>
          </div>
          <LineChart
            className="h-60 w-full"
            colors={["violet"]}
            data={chartLineData}
            index="date"
            categories={["Cumulative Attestations"]}
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
          />
        </div>
        <div className="ml-2 flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Cumulative Revenue by Chain (ETH)
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Total revenue accumulated by blockchain, tracked over time
            </dd>
          </div>
          <LineChart
            className="h-60 w-full"
            colors={["violet"]}
            data={chartLineData}
            index="date"
            categories={["Cumulative Attestations"]}
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
          />
        </div>
        <div className="ml-2 flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Cumulative Revenue stacked by Chain (ETH)
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Total on-chain revenue, segmented by blockchain, accumulated over
              time
            </dd>
          </div>
          <LineChart
            className="h-60 w-full"
            colors={["violet"]}
            data={chartLineData}
            index="date"
            categories={["Cumulative Attestations"]}
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
          />
        </div>
      </dl>
    </section>
  );
}
