import type { Locale, NavLinkKey } from "@/lib/site-types";

export const bahrainGlobals = {
  market: "Bahrain",
  slug: "bahrain",
  locales: ["ar", "en"] as Locale[],
  defaultLocale: "ar" as Locale,
  directionByLocale: {
    ar: "rtl",
    en: "ltr",
  } as const,
  routes: {
    home: "/",
    partnership: "/partnership",
    faq: "/faq",
  },
  chrome: {
    homeAnchors: ["#top", "#games", "#sports", "#offers", "#final-cta"],
    partnershipAnchors: ["#top", "#benefits", "#steps", "#paths", "#tools", "#final-cta"],
    faqAnchors: ["#top", "#player-faq", "#partnership-faq"],
    nav: {
      home: ["home", "games", "sports", "offers", "partnership", "faq", "contact"] as NavLinkKey[],
      partnership: ["home", "partnership", "faq", "contact"] as NavLinkKey[],
      faq: ["home", "games", "partnership", "faq", "contact"] as NavLinkKey[],
    },
    footer: {
      home: ["home", "games", "sports", "offers"] as NavLinkKey[],
      partnership: ["partnership", "contact"] as NavLinkKey[],
      support: ["faq", "contact"] as NavLinkKey[],
    },
  },
  sizing: {
    density: "balanced",
    containerWidth: 1180,
    containerX: "clamp(1rem, 3vw, 2rem)",
    sectionY: "clamp(4rem, 7vw, 6.1rem)",
    sectionYTight: "clamp(2.7rem, 5vw, 3.8rem)",
    heroTop: "clamp(5.4rem, 10vw, 8.2rem)",
    heroBottom: "clamp(3rem, 6vw, 4.8rem)",
    gridGap: "clamp(1rem, 2vw, 1.4rem)",
    cardPadding: "clamp(1rem, 2vw, 1.4rem)",
    radii: {
      sm: "14px",
      md: "20px",
      lg: "30px",
      xl: "42px",
      pill: "999px",
    },
    buttonMinHeight: "52px",
  },
  pages: {
    home: {
      enabledSections: ["hero", "games", "sports", "offers", "finalCta"],
      variants: {
        hero: "stage",
        games: "grid",
        sports: "cards",
        offers: "cards",
      },
    },
    partnership: {
      enabledSections: ["hero", "benefits", "steps", "paths", "tools", "finalCta"],
      variants: {
        hero: "split",
        benefits: "dashboard",
        steps: "cards",
        tools: "showcase",
      },
    },
    faq: {
      enabledSections: ["hero", "playerFaq", "partnershipFaq"],
    },
  },
  ctaMap: {
    homePrimary: "/#games",
    homeSecondary: "/#offers",
    partnershipPrimary: "/partnership#paths",
    partnershipSecondary: "/faq#partnership-faq",
  },
  flags: {
    showLanguageSwitch: true,
  },
} as const;
