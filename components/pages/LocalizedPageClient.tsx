"use client";

import { useSearchParams } from "next/navigation";
import FaqPageView from "@/components/pages/FaqPageView";
import HomePageView from "@/components/pages/HomePageView";
import PartnershipPageView from "@/components/pages/PartnershipPageView";
import { resolveLocale } from "@/lib/locale";
import type { PageKey } from "@/lib/site-types";

export default function LocalizedPageClient({ pageKey }: { pageKey: PageKey }) {
  const searchParams = useSearchParams();
  const locale = resolveLocale(
    searchParams ? new URLSearchParams(searchParams.toString()) : undefined,
  );

  switch (pageKey) {
    case "faq":
      return <FaqPageView locale={locale} />;
    case "partnership":
      return <PartnershipPageView locale={locale} />;
    case "home":
    default:
      return <HomePageView locale={locale} />;
  }
}
