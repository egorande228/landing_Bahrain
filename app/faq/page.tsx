import type { Metadata } from "next";
import MarketPageShell from "@/components/layout/MarketPageShell";
import FaqHub from "@/components/sections/faq/FaqHub";
import { getBahrainFaqContent } from "@/content/bahrain-content";
import { resolveLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  return buildMetadata(locale, getBahrainFaqContent(locale).seo);
}

export default async function FaqPage({ searchParams }: PageProps) {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  const content = getBahrainFaqContent(locale);

  return (
    <MarketPageShell locale={locale} pageKey="faq">
      <FaqHub content={content} locale={locale} />
    </MarketPageShell>
  );
}
