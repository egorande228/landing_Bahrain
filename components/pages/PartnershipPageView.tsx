import MarketPageShell from "@/components/layout/MarketPageShell";
import ClientMetadataSync from "@/components/layout/ClientMetadataSync";
import PartnershipBenefits from "@/components/sections/partnership/PartnershipBenefits";
import PartnershipFinalCta from "@/components/sections/partnership/PartnershipFinalCta";
import PartnershipHero from "@/components/sections/partnership/PartnershipHero";
import PartnershipPaths from "@/components/sections/partnership/PartnershipPaths";
import PartnershipSteps from "@/components/sections/partnership/PartnershipSteps";
import PartnershipTools from "@/components/sections/partnership/PartnershipTools";
import { getBahrainPartnershipContent } from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function PartnershipPageView({ locale }: { locale: Locale }) {
  const content = getBahrainPartnershipContent(locale);

  return (
    <>
      <ClientMetadataSync
        description={content.seo.description}
        title={content.seo.title}
      />
      <MarketPageShell locale={locale} pageKey="partnership">
        <PartnershipHero content={content.hero} locale={locale} />
        <PartnershipBenefits content={content.benefits} />
        <PartnershipSteps content={content.steps} />
        <PartnershipPaths content={content.paths} locale={locale} />
        <PartnershipTools content={content.tools} />
        <PartnershipFinalCta content={content.finalCta} locale={locale} />
      </MarketPageShell>
    </>
  );
}
