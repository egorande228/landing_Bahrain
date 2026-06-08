import MarketPageShell from "@/components/layout/MarketPageShell";
import ClientMetadataSync from "@/components/layout/ClientMetadataSync";
import FaqHub from "@/components/sections/faq/FaqHub";
import { getBahrainFaqContent } from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function FaqPageView({ locale }: { locale: Locale }) {
  const content = getBahrainFaqContent(locale);

  return (
    <>
      <ClientMetadataSync
        description={content.seo.description}
        title={content.seo.title}
      />
      <MarketPageShell locale={locale} pageKey="faq">
        <FaqHub content={content} locale={locale} />
      </MarketPageShell>
    </>
  );
}
