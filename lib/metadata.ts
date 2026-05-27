import type { Metadata } from "next";
import type { Locale } from "@/lib/site-types";

type SEOContent = {
  title: string;
  description: string;
};

export function buildMetadata(locale: Locale, seo: SEOContent): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      languages: {
        ar: "?lang=ar",
        en: "?lang=en",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: locale === "ar" ? "ar_BH" : "en_BH",
      type: "website",
    },
  };
}
