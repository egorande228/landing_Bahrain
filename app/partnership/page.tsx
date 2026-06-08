import { Suspense } from "react";
import { getBahrainPartnershipContent } from "@/content/bahrain-content";
import LocalizedPageClient from "@/components/pages/LocalizedPageClient";
import PartnershipPageView from "@/components/pages/PartnershipPageView";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "ar",
  getBahrainPartnershipContent("ar").seo,
);

export default function PartnershipPage() {
  return (
    <Suspense fallback={<PartnershipPageView locale="ar" />}>
      <LocalizedPageClient pageKey="partnership" />
    </Suspense>
  );
}
