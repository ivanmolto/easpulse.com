import AttestationsCount from "@/components/ui/gitcoin/AttestationsCount";
import RecipientsCount from "@/components/ui/gitcoin/RecipientsCount";
import Revenue from "@/components/ui/gitcoin/Revenue";

export function GitcoinMetricsCards() {
  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Overview
      </h1>
      <dl className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-8">
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            On-Chain Attestations
          </dt>
          <AttestationsCount slug="gitcoin-attestations-count" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Unique On-Chain Recipients
          </dt>
          <RecipientsCount slug="gitcoin-recipients-count" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            On-Chain Attestations Revenue
          </dt>
          <Revenue slug="gitcoin-attestations-revenue" />
        </div>
      </dl>
    </>
  );
}
