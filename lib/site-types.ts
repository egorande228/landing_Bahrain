export type Locale = "ar" | "en";

export type Direction = "rtl" | "ltr";

export type PageKey = "home" | "partnership" | "faq";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type IconName =
  | "arrow"
  | "ball"
  | "cards"
  | "cashier"
  | "check"
  | "chip"
  | "gift"
  | "graph"
  | "grid"
  | "manager"
  | "message"
  | "mobile"
  | "play"
  | "shield"
  | "spark"
  | "star"
  | "support"
  | "ticket"
  | "wallet";

export type LinkItem = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  icon?: IconName;
  external?: boolean;
};

export type SectionHeadingContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type ListItem = {
  title: string;
  description: string;
  icon?: IconName;
  metric?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type MediaReference = {
  slotId: import("@/content/bahrain-media-slots").BahrainMediaSlotId;
  badge?: string;
};

export type NavLinkKey =
  | "home"
  | "games"
  | "sports"
  | "offers"
  | "partnership"
  | "faq"
  | "contact";
