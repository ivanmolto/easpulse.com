import Revenue from "@/components/ui/passport/Revenue";
import AttestationsCount from "@/components/ui/passport/AttestationsCount";
import RecipientsCount from "@/components/ui/passport/RecipientsCount";

export function PassportMetricsCards() {
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
          <AttestationsCount slug="passport-attestations-count" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Unique On-Chain Recipients
          </dt>
          <RecipientsCount slug="passport-recipients-count" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            On-Chain Attestations Revenue
          </dt>
          <Revenue slug="passport-attestations-revenue" />
        </div>
      </dl>
    </>
  );
}
