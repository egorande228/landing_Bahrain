import type { Metadata } from "next";
import MarketPageShell from "@/components/layout/MarketPageShell";
import PartnershipBenefits from "@/components/sections/partnership/PartnershipBenefits";
import PartnershipFinalCta from "@/components/sections/partnership/PartnershipFinalCta";
import PartnershipHero from "@/components/sections/partnership/PartnershipHero";
import PartnershipPaths from "@/components/sections/partnership/PartnershipPaths";
import PartnershipSteps from "@/components/sections/partnership/PartnershipSteps";
import PartnershipTools from "@/components/sections/partnership/PartnershipTools";
import { getBahrainPartnershipContent } from "@/content/bahrain-content";
import { resolveLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  return buildMetadata(locale, getBahrainPartnershipContent(locale).seo);
}

export default async function PartnershipPage({ searchParams }: PageProps) {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  const content = getBahrainPartnershipContent(locale);

  return (
    <MarketPageShell locale={locale} pageKey="partnership">
      <PartnershipHero content={content.hero} locale={locale} />
      <PartnershipBenefits content={content.benefits} />
      <PartnershipSteps content={content.steps} />
      <PartnershipPaths content={content.paths} locale={locale} />
      <PartnershipTools content={content.tools} />
      <PartnershipFinalCta content={content.finalCta} locale={locale} />
    </MarketPageShell>
  );
}
