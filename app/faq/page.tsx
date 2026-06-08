import { Suspense } from "react";
import { getBahrainFaqContent } from "@/content/bahrain-content";
import LocalizedPageClient from "@/components/pages/LocalizedPageClient";
import FaqPageView from "@/components/pages/FaqPageView";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("ar", getBahrainFaqContent("ar").seo);

export default function FaqPage() {
  return (
    <Suspense fallback={<FaqPageView locale="ar" />}>
      <LocalizedPageClient pageKey="faq" />
    </Suspense>
  );
}
