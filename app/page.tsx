import { Suspense } from "react";
import { getBahrainHomeContent } from "@/content/bahrain-content";
import LocalizedPageClient from "@/components/pages/LocalizedPageClient";
import HomePageView from "@/components/pages/HomePageView";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("ar", getBahrainHomeContent("ar").seo);

export default function HomePage() {
  return (
    <Suspense fallback={<HomePageView locale="ar" />}>
      <LocalizedPageClient pageKey="home" />
    </Suspense>
  );
}
