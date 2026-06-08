import MarketPageShell from "@/components/layout/MarketPageShell";
import ClientMetadataSync from "@/components/layout/ClientMetadataSync";
import HomeFinalCta from "@/components/sections/home/HomeFinalCta";
import HomeGamesSection from "@/components/sections/home/HomeGamesSection";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeOffersSection from "@/components/sections/home/HomeOffersSection";
import HomeSportsSection from "@/components/sections/home/HomeSportsSection";
import { getBahrainHomeContent } from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function HomePageView({ locale }: { locale: Locale }) {
  const content = getBahrainHomeContent(locale);

  return (
    <>
      <ClientMetadataSync
        description={content.seo.description}
        title={content.seo.title}
      />
      <MarketPageShell locale={locale} pageKey="home">
        <HomeHero content={content.hero} locale={locale} />
        <HomeGamesSection content={content.games} locale={locale} />
        <HomeSportsSection content={content.sports} locale={locale} />
        <HomeOffersSection content={content.offers} locale={locale} />
        <HomeFinalCta content={content.finalCta} locale={locale} />
      </MarketPageShell>
    </>
  );
}
