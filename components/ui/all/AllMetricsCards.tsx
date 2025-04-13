import AttestationsCount from "@/components/ui/all/AttestationsCount";
import AttestorsCount from "@/components/ui/all/AttestorsCount";
import RecipientsCount from "@/components/ui/all/RecipientsCount";

export function AllMetricsCards() {
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
          <AttestationsCount slug="all-attestations-count" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Unique On-Chain Recipients
          </dt>
          <RecipientsCount slug="all-recipients-count" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Unique On-Chain Attestors
          </dt>
          <AttestorsCount slug="all-attestors-count" />
        </div>
      </dl>
    </>
  );
}
