"use client";

import { LineChart } from "@/components/LineChart";
import { chartLineData } from "@/data/data";
import { cx } from "@/lib/utils";

export default function Overview() {
  return (
    <section aria-labelledby="usage-overview">
      <dl
        className={cx(
          "mt-7 grid grid-cols-1 gap-14 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1"
        )}
      >
        <div className="ml-2 flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Cumulative On-Chain Attestations over time
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Total number of attestations accumulated over time
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
              Cumulative Attestations by Chain
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Total number of attestations accumulated over time, broken down by
              blockchain network
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
              Cumulative Attestations staked by Chain
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Total number of attestations staked over time, categorized by
              blockchain network.
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
