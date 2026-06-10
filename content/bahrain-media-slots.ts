import type { Locale } from "@/lib/site-types";

export type BahrainMediaSlotId =
  | "home-hero-stage"
  | "home-casino-discovery"
  | "home-slots"
  | "home-live-games"
  | "home-football"
  | "home-live-match"
  | "home-offers-welcome"
  | "home-offers-rewards"
  | "home-final-cta"
  | "partnership-partner-route"
  | "partnership-agent-route"

export type BahrainMediaSlot = {
  id: BahrainMediaSlotId;
  page: "home" | "partnership" | "faq";
  section: string;
  targetPath: string;
  ratio: string;
  fit: "cover" | "contain";
  alt: Record<Locale, string>;
  fallbackType:
    | "hero-stage"
    | "game-card"
    | "sports-card"
    | "offer-card"
    | "partnership-panel"
    | "support-panel";
  visualIntent: string;
  overlaySafeArea: string;
};

export type LocalizedBahrainMediaSlot = Omit<BahrainMediaSlot, "alt"> & {
  alt: string;
};

const mediaSlots: Record<BahrainMediaSlotId, BahrainMediaSlot> = {
  "home-hero-stage": {
    id: "home-hero-stage",
    page: "home",
    section: "hero",
    targetPath: "/player/hero/hero.webp",
    ratio: "4:3",
    fit: "cover",
    alt: {
      ar: "مشهد افتتاحي للاعبين مع أجواء كرة قدم وكازينو على طابع البحرين.",
      en: "Player hero stage with Bahrain-inspired football and casino atmosphere.",
    },
    fallbackType: "hero-stage",
    visualIntent: "Premium opening stage with fast-start energy and red spotlight depth.",
    overlaySafeArea: "Keep the left and lower thirds readable for overlays.",
  },
  "home-casino-discovery": {
    id: "home-casino-discovery",
    page: "home",
    section: "games",
    targetPath: "/player/games/casino.webp",
    ratio: "4:3",
    fit: "cover",
    alt: {
      ar: "عرض بصري لاكتشاف ألعاب الكازينو والفئات الأساسية.",
      en: "Casino discovery visual for featured categories and table games.",
    },
    fallbackType: "game-card",
    visualIntent: "Immersive discovery card with layered chips and deep crimson glow.",
    overlaySafeArea: "Keep center-right open for short labels.",
  },
  "home-slots": {
    id: "home-slots",
    page: "home",
    section: "games",
    targetPath: "/player/games/slots.webp",
    ratio: "4:3",
    fit: "cover",
    alt: {
      ar: "صورة لفئات السلوتس مع حركة إضاءة ناعمة.",
      en: "Slots category visual with premium motion-focused lighting.",
    },
    fallbackType: "game-card",
    visualIntent: "Fast, bright slot energy without loud arcade styling.",
    overlaySafeArea: "Keep the top band clean for chips and tags.",
  },
  "home-live-games": {
    id: "home-live-games",
    page: "home",
    section: "games",
    targetPath: "/player/games/live.webp",
    ratio: "4:3",
    fit: "cover",
    alt: {
      ar: "تصور للألعاب المباشرة وتجربة الطاولات الحية.",
      en: "Live games visual for studio-style table action.",
    },
    fallbackType: "game-card",
    visualIntent: "Controlled studio feel with layered screens and gold shimmer.",
    overlaySafeArea: "Keep the lower edge safe for compact copy.",
  },
  "home-football": {
    id: "home-football",
    page: "home",
    section: "sports",
    targetPath: "/player/sports/football.webp",
    ratio: "5:6",
    fit: "cover",
    alt: {
      ar: "صورة كرة قدم بطابع مباشر وسريع للهاتف.",
      en: "Football visual with live-match energy built for mobile-first betting.",
    },
    fallbackType: "sports-card",
    visualIntent: "Football-led sports card with confident movement and edge lighting.",
    overlaySafeArea: "Keep lower-left readable for stats.",
  },
  "home-live-match": {
    id: "home-live-match",
    page: "home",
    section: "sports",
    targetPath: "/player/sports/match.webp",
    ratio: "4:3",
    fit: "cover",
    alt: {
      ar: "لوحة مباراة مباشرة لأسواق متعددة وتحديثات سريعة.",
      en: "Live match board visual with multi-market momentum.",
    },
    fallbackType: "sports-card",
    visualIntent: "Board-like sports stage with structure, live rhythm, and quick scans.",
    overlaySafeArea: "Keep the central panel clear for overlays.",
  },
  "home-offers-welcome": {
    id: "home-offers-welcome",
    page: "home",
    section: "offers",
    targetPath: "/offer/welcome.webp",
    ratio: "16:10",
    fit: "contain",
    alt: {
      ar: "صورة عرض ترحيبي مخصصة للاعبين الجدد.",
      en: "Welcome-offer visual for new players.",
    },
    fallbackType: "offer-card",
    visualIntent: "Contained promo art with clean framing and warm highlight.",
    overlaySafeArea: "Leave centered composition for contained art.",
  },
  "home-offers-rewards": {
    id: "home-offers-rewards",
    page: "home",
    section: "offers",
    targetPath: "/offer/rewards.webp",
    ratio: "16:10",
    fit: "contain",
    alt: {
      ar: "تصور للهدايا والمكافآت والعروض المتغيرة.",
      en: "Rewards and gifts visual for rotating promo moments.",
    },
    fallbackType: "offer-card",
    visualIntent: "Reward-focused surface with controlled gold accents and soft shine.",
    overlaySafeArea: "Keep the right half safe for labels.",
  },
  "home-final-cta": {
    id: "home-final-cta",
    page: "home",
    section: "final-cta",
    targetPath: "/player/final.webp",
    ratio: "16:10",
    fit: "cover",
    alt: {
      ar: "مشهد ختامي للاعبين مع إشارات دعم ولعب عبر الهاتف.",
      en: "Player closing visual with support and mobile-play cues.",
    },
    fallbackType: "offer-card",
    visualIntent: "Strong closing media shell that feels complete without final art.",
    overlaySafeArea: "Keep the left third readable for closing copy.",
  },
  "partnership-partner-route": {
    id: "partnership-partner-route",
    page: "partnership",
    section: "paths",
    targetPath: "/partnership/partner.webp",
    ratio: "16:9",
    fit: "contain",
    alt: {
      ar: "مسار الشريك التسويقي مع الجمهور والكود الترويجي.",
      en: "Partner-route visual for audience growth and promo-code campaigns.",
    },
    fallbackType: "partnership-panel",
    visualIntent: "Campaign-led panel with audience growth cues.",
    overlaySafeArea: "Keep the lower band free for bullets.",
  },
  "partnership-agent-route": {
    id: "partnership-agent-route",
    page: "partnership",
    section: "paths",
    targetPath: "/partnership/agent.webp",
    ratio: "16:9",
    fit: "contain",
    alt: {
      ar: "مسار الوكيل المحلي مع الإيداع والسحب والدعم المباشر.",
      en: "Agent-route visual for local transactions and direct player support.",
    },
    fallbackType: "partnership-panel",
    visualIntent: "Local support route with structure and trust cues.",
    overlaySafeArea: "Keep center clear for a compact device mockup feel.",
  },
};

export function getBahrainMediaSlot(slotId: BahrainMediaSlotId) {
  return mediaSlots[slotId];
}

export function getAllBahrainMediaSlots() {
  return Object.values(mediaSlots);
}

export function getLocalizedBahrainMediaSlot(
  slotId: BahrainMediaSlotId,
  locale: Locale,
): LocalizedBahrainMediaSlot {
  const slot = mediaSlots[slotId];

  return {
    ...slot,
    alt: slot.alt[locale],
  };
}
