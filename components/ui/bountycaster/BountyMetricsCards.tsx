import AttestationsCount from "@/components/ui/bountycaster/AttestationsCount";
import RecipientsCount from "@/components/ui/bountycaster/RecipientsCount";

export function BountyMetricsCards() {
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
          <AttestationsCount slug="bountycaster-attestations-count" />
        </div>
        <div>
          <dt className="text-sm text-gray-500 dark:text-gray-500">
            Unique On-Chain Recipients
          </dt>
          <RecipientsCount slug="bountycaster-recipients-count" />
        </div>
      </dl>
    </>
  );
}
