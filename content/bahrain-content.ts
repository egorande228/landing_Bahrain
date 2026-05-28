import { bahrainGlobals } from "@/config/bahrain.globals";
import type { BahrainMediaSlotId } from "@/content/bahrain-media-slots";
import type {
  FAQItem,
  IconName,
  LinkItem,
  ListItem,
  Locale,
  MediaReference,
  MetricItem,
  SectionHeadingContent,
} from "@/lib/site-types";

type Localized<T> = Record<Locale, T>;

type FeatureCard = {
  title: string;
  description: string;
  badge?: string;
  highlights?: string[];
  cta?: LinkItem;
  icon?: IconName;
  metric?: MetricItem;
  media?: MediaReference;
};

type RouteCard = {
  title: string;
  description: string;
  bulletTitle: string;
  bullets: string[];
  cta: LinkItem;
  media: MediaReference;
};

type ContactCard = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  external?: boolean;
};

export type BahrainHomeContent = {
  seo: {
    title: string;
    description: string;
  };
  hero: SectionHeadingContent & {
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    metrics: MetricItem[];
    featurePoints: string[];
    media: MediaReference;
  };
  games: SectionHeadingContent & {
    cards: FeatureCard[];
    quickStrip: ListItem[];
  };
  sports: SectionHeadingContent & {
    lead: FeatureCard;
    cards: FeatureCard[];
  };
  offers: SectionHeadingContent & {
    cards: FeatureCard[];
    supportNote: {
      title: string;
      description: string;
      links: LinkItem[];
    };
  };
  finalCta: SectionHeadingContent & {
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    checkpoints: string[];
    media: MediaReference;
  };
};

export type BahrainPartnershipContent = {
  seo: {
    title: string;
    description: string;
  };
  hero: SectionHeadingContent & {
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    metrics: MetricItem[];
    statLine: string;
    media: MediaReference;
  };
  benefits: SectionHeadingContent & {
    cards: FeatureCard[];
    media: MediaReference;
  };
  steps: SectionHeadingContent & {
    items: ListItem[];
  };
  paths: SectionHeadingContent & {
    cards: RouteCard[];
  };
  tools: SectionHeadingContent & {
    media: MediaReference;
    cards: FeatureCard[];
    checklist: string[];
  };
  finalCta: SectionHeadingContent & {
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    contacts: ContactCard[];
    media: MediaReference;
  };
};

export type BahrainFaqContent = {
  seo: {
    title: string;
    description: string;
  };
  hero: SectionHeadingContent & {
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
  };
  playerFaq: SectionHeadingContent & {
    items: FAQItem[];
  };
  partnershipFaq: SectionHeadingContent & {
    items: FAQItem[];
  };
  support: SectionHeadingContent & {
    contacts: ContactCard[];
    media: MediaReference;
  };
};

export type BahrainChromeContent = {
  brandLabel: string;
  languageNames: Record<Locale, string>;
  navLabels: Record<
    "home" | "games" | "sports" | "offers" | "partnership" | "faq" | "contact",
    string
  >;
  footer: {
    blurb: string;
    homeTitle: string;
    partnershipTitle: string;
    supportTitle: string;
    copyright: string;
  };
};

export type BahrainMarketContent = {
  chrome: BahrainChromeContent;
  home: BahrainHomeContent;
  partnership: BahrainPartnershipContent;
  faq: BahrainFaqContent;
};

function media(slotId: BahrainMediaSlotId, badge?: string): MediaReference {
  return { slotId, badge };
}

const pathContactActions: Record<Locale, LinkItem[]> = {
  ar: [
    {
      label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
      variant: "secondary",
      icon: "message",
      external: true,
    },
    {
      label: "\u062A\u064A\u0644\u064A\u062C\u0631\u0627\u0645",
      href: "https://t.me/Teamcash_Bahrain",
      variant: "ghost",
      icon: "arrow",
      external: true,
    },
  ],
  en: [
    {
      label: "Email",
      href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
      variant: "secondary",
      icon: "message",
      external: true,
    },
    {
      label: "Telegram",
      href: "https://t.me/Teamcash_Bahrain",
      variant: "ghost",
      icon: "arrow",
      external: true,
    },
  ],
};

const gamesCardCtaByLocale: Record<Locale, LinkItem> = {
  ar: {
    label: "\u0627\u0644\u0639\u0628 \u0627\u0644\u0622\u0646",
    href: "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBBahrain26",
    variant: "secondary",
    icon: "arrow",
    external: true,
  },
  en: {
    label: "Play now",
    href: "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBBahrain26",
    variant: "secondary",
    icon: "arrow",
    external: true,
  },
};

const offersCardCtaByLocale: Record<Locale, LinkItem> = {
  ar: {
    label: "احصل الآن",
    href: "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBBahrain26",
    variant: "secondary",
    icon: "arrow",
    external: true,
  },
  en: {
    label: "Claim now",
    href: "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBBahrain26",
    variant: "secondary",
    icon: "arrow",
    external: true,
  },
};

const sportsCardLinkByLocale: Record<Locale, LinkItem> = {
  ar: {
    label: "\u0627\u0641\u062A\u062D \u0627\u0644\u0631\u064A\u0627\u0636\u0629",
    href: "https://refpa3665.com/L?tag=d_4092175m_66329c_BahrainSports",
    external: true,
  },
  en: {
    label: "Open sports",
    href: "https://refpa3665.com/L?tag=d_4092175m_66329c_BahrainSports",
    external: true,
  },
};

const marketContent: Localized<BahrainMarketContent> = {
  ar: {
    chrome: {
      brandLabel: "MELBET البحرين",
      languageNames: {
        ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
        en: "English",
      },
      navLabels: {
        home: "الرئيسية",
        games: "الألعاب",
        sports: "الرياضة",
        offers: "العروض",
        partnership: "الشراكة",
        faq: "الأسئلة",
        contact: "ابدأ الآن",
      },
      footer: {
        blurb:
          "واجهة MELBET البحرين تجمع الرياضة والكازينو والعروض في تجربة سريعة وواضحة للهاتف.",
        homeTitle: "للاعبين",
        partnershipTitle: "للشركاء والوكلاء",
        supportTitle: "الدعم والأسئلة",
        copyright: "حقوق النشر © MELBET",
      },
    },
    home: {
      seo: {
        title: "MELBET البحرين | كرة قدم وكازينو وعروض سريعة",
        description:
          "ابدأ بسرعة، تابع كرة القدم، اكتشف الكازينو والألعاب المباشرة، وراجع العروض والدعم في صفحة MELBET البحرين.",
      },
      hero: {
        eyebrow: "الوصول السريع",
        title: "كرة قدم، كازينو، وعروض واضحة من أول زيارة.",
        description:
          "ابدأ من الهاتف خلال دقائق، انتقل بين الرياضة والألعاب الحية والسلوتس، وابق قريباً من العروض والدعم بدون خطوات مربكة.",
        primaryCta: {
          label: "ابدأ الآن",
          href: "/#games",
          variant: "primary",
          icon: "play",
        },
        secondaryCta: {
          label: "راجع العروض",
          href: "/#offers",
          variant: "secondary",
          icon: "gift",
        },
        metrics: [
          { value: "24/7", label: "دعم قريب في أي وقت" },
          { value: "120+", label: "أسواق مباشرة قابلة للمتابعة" },
          { value: "1", label: "تجربة واحدة للهاتف والويب" },
        ],
        featurePoints: [
          "مباريات مباشرة وأسواق سريعة",
          "سلوتس وألعاب حية في نفس المسار",
          "عروض ترحيب ومكافآت حسب المتاح",
        ],
        media: media("home-hero-stage"),
      },
      games: {
        eyebrow: "اكتشاف الألعاب",
        title: "اختر المسار الذي يناسب وقتك، من الطاولات الحية حتى السلوتس السريعة.",
        description:
          "كل بطاقة تقرّبك من فئة مختلفة: كازينو متكامل، سلوتس سريعة، أو ألعاب مباشرة تحتاج قراراً أسرع.",
        cards: [
          {
            title: "اكتشاف الكازينو",
            description:
              "ابدأ من الفئات الأساسية وتحرّك بين الطاولات والعروض المباشرة بدون بحث طويل.",
            badge: "Casino",
            highlights: ["طاولات", "فئات واضحة", "تنقل سريع"],
            icon: "cards",
            media: media("home-casino-discovery"),
          },
          {
            title: "سلوتس بإيقاع أسرع",
            description:
              "اختر ألعاب السلوتس ذات الجولات الخفيفة والمؤثرات الواضحة مع وصول سريع من الهاتف.",
            badge: "Slots",
            highlights: ["جولات خفيفة", "هاتف أولاً", "واجهة واضحة"],
            icon: "chip",
            media: media("home-slots"),
          },
          {
            title: "ألعاب حية",
            description:
              "تابع الطاولات الحية إذا كنت تفضّل الإيقاع المباشر واتخاذ القرار خلال اللعب.",
            badge: "Live",
            highlights: ["إيقاع مباشر", "طاولات حية", "تجربة مركزة"],
            icon: "spark",
            media: media("home-live-games"),
          },
        ],
        quickStrip: [
          {
            title: "دخول سريع",
            description: "تنقل أقصر بين الرياضة والكازينو من نفس الواجهة.",
            icon: "mobile",
          },
          {
            title: "تصميم للهاتف",
            description: "بطاقات واضحة ومقاسات مضبوطة للشاشة الصغيرة.",
            icon: "grid",
          },
          {
            title: "دعم قريب",
            description: "إذا احتجت خطوة إضافية ستجد المسار بسرعة.",
            icon: "support",
          },
        ],
      },
      sports: {
        eyebrow: "الرياضة",
        title: "ابدأ بكرة القدم، ثم تحرك بين المباريات والأسواق الحية بثبات.",
        description:
          "الرياضة هنا ليست مجرد واجهة جانبية. ستجد مباريات مباشرة، لوحة متابعة، ومساراً سريعاً لاختيار السوق المناسب.",
        lead: {
          title: "كرة القدم أولاً",
          description:
            "مباريات اليوم والرهانات الحية تبقى في الواجهة عندما تريد قراراً سريعاً من الهاتف.",
          badge: "Football",
          metric: { value: "90+", label: "دقيقة حركة في كل مباراة" },
          media: media("home-football"),
        },
        cards: [
          {
            title: "لوحة المباراة المباشرة",
            description:
              "تابع السوق والحدث في بطاقة واحدة تساعدك على القراءة بسرعة قبل الضغط.",
            icon: "ticket",
            media: media("home-live-match"),
          },
          {
            title: "تنقل بين أكثر من رياضة",
            description:
              "انتقل بين مباريات مختلفة عندما تريد متابعة أكثر من سوق في نفس الجلسة.",
            icon: "ball",
          },
          {
            title: "إيقاع واضح للهاتف",
            description:
              "المعلومات الأساسية تبقى أقرب لك: المباراة، السوق، والخطوة التالية.",
            icon: "mobile",
          },
        ],
      },
      offers: {
        eyebrow: "العروض والمكافآت",
        title: "راجع العروض المتاحة لك قبل أن تبدأ، ثم خذ الخطوة المناسبة.",
        description:
          "العروض هنا لدعم البداية أو إبقاء الجلسة أخف، بدون وعود مبالغ فيها أو أرقام غير مؤكدة.",
        cards: [
          {
            title: "عرض الترحيب",
            description:
              "إذا كانت هناك عروض للاعبين الجدد فستصل إليها بسرعة مع شرح مختصر وخطوة واضحة.",
            badge: "Welcome",
            cta: offersCardCtaByLocale.ar,
            icon: "gift",
            media: media("home-offers-welcome"),
          },
          {
            title: "هدايا ومكافآت متغيرة",
            description:
              "تابع الهدايا، الرهانات المجانية، أو اللفات المجانية حسب الحملات المتاحة في وقتك.",
            badge: "Rewards",
            cta: offersCardCtaByLocale.ar,
            icon: "star",
            media: media("home-offers-rewards"),
          },
        ],
        supportNote: {
          title: "تريد خطوة أوضح قبل البدء؟",
          description:
            "ارجع إلى الأسئلة السريعة أو انتقل مباشرة إلى نقطة البداية التي تناسبك أكثر.",
          links: [
            { label: "الأسئلة الشائعة", href: "/faq#player-faq", variant: "ghost", icon: "support" },
            { label: "ابدأ اللعب", href: "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBBahrain26", variant: "secondary", icon: "arrow", external: true },
          ],
        },
      },
      finalCta: {
        eyebrow: "خطوة اللاعب",
        title: "كل ما تحتاجه جاهز: ألعاب، رياضة، عروض، ودعم قريب من أول لحظة.",
        description:
          "إذا كنت تريد بداية أسرع، ابدأ من الألعاب أو ارجع إلى الأسئلة السريعة قبل فتح أول مسار لعب.",
        primaryCta: {
          label: "اذهب إلى الألعاب",
          href: "/#games",
          variant: "primary",
          icon: "play",
        },
        secondaryCta: {
          label: "الدعم والأسئلة",
          href: "/faq#player-faq",
          variant: "secondary",
          icon: "message",
        },
        checkpoints: ["رياضة", "ألعاب حية", "سلوتس", "عروض", "وصول عبر الهاتف"],
        media: media("home-final-cta"),
      },
    },
    partnership: {
      seo: {
        title: "شراكة MELBET البحرين | مسارات للشركاء والوكلاء",
        description:
          "اختر بين مسار الشريك أو الوكيل في MELBET البحرين، مع أدوات تتبع ودعم ومدير يساعدك على البدء.",
      },
      hero: {
        eyebrow: "فرص العمل",
        title: "اختر المسار المناسب لك: شريك يروّج، أو وكيل يدير الدعم المحلي.",
        description:
          "إذا كنت تملك جمهوراً أو تستطيع إدارة التعاملات محلياً، ستجد هنا مساراً أوضح للبدء مع أدوات ودعم ومتابعة منظمة.",
        primaryCta: {
          label: "اختر مسارك",
          href: "/partnership#paths",
          variant: "primary",
          icon: "arrow",
        },
        secondaryCta: {
          label: "راجع الأدوات",
          href: "/partnership#tools",
          variant: "secondary",
          icon: "graph",
        },
        metrics: [
          { value: "25-50%", label: "\u0644\u0644\u0634\u0631\u064A\u0643" },
          { value: "5-10%", label: "\u0644\u0644\u0648\u0643\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0625\u064A\u062F\u0627\u0639" },
          { value: "24/7", label: "قنوات دعم وتشغيل" },
        ],
        statLine: "الشروط وطريقة الاتفاق تختلف حسب الدور، الحجم، وطريقة العمل.",
        media: media("partnership-hero"),
      },
      benefits: {
        eyebrow: "لماذا هذا المسار",
        title: "دعم تشغيلي وأدوات أوضح قبل أن تبدأ بأي اتفاق.",
        description:
          "المطلوب هنا ليس كلاماً عاماً. المطلوب مسار واضح، مدير مختص، متابعة أداء، وتجهيز عملي يساعدك على الاستمرار.",
        cards: [
          {
            title: "مدير مختص",
            description: "شخص واحد يساعدك على اختيار المسار ومتابعة الخطوات بدون ضياع.",
            icon: "manager",
          },
          {
            title: "تتبع أداء",
            description: "متابعة أنظف للحملات أو الحركة التشغيلية حتى تعرف ما يعمل فعلاً.",
            icon: "graph",
          },
          {
            title: "أدوات تسويق",
            description: "مواد جاهزة وروابط وكود ترويجي عندما يكون دورك أقرب للشراكة التسويقية.",
            icon: "spark",
          },
          {
            title: "دعم محلي",
            description: "مسار مناسب إذا كنت تتعامل مع اللاعبين محلياً أو تساعد في الإيداع والسحب.",
            icon: "cashier",
          },
        ],
        media: media("partnership-benefits"),
      },
      steps: {
        eyebrow: "خطوات البدء",
        title: "ابدأ بخطوات قصيرة ومفهومة بدلاً من مسار طويل غير واضح.",
        description:
          "الخطوات ثابتة: تعرّف على دورك، جهّز طريقة العمل، ثم تابع التنفيذ مع دعم مباشر.",
        items: [
          {
            title: "اختر الدور",
            description: "حدد إن كنت أقرب إلى الشراكة التسويقية أو العمل المحلي مع اللاعبين.",
            icon: "check",
            metric: "01",
          },
          {
            title: "راجع النموذج",
            description: "افهم طريقة العمل والأدوات المناسبة قبل بدء أي حملة أو تشغيل محلي.",
            icon: "grid",
            metric: "02",
          },
          {
            title: "ابدأ مع المتابعة",
            description: "انطلق بخطوات واضحة مع مدير يساعدك على ضبط البداية ومتابعة الأداء.",
            icon: "support",
            metric: "03",
          },
        ],
      },
      paths: {
        eyebrow: "المسارات",
        title: "المسار الأول للجمهور والحملات، والثاني للدعم المحلي والتعاملات.",
        description:
          "لا تخلط بين الدورين. الشريك يروّج ويقود حركة الجمهور، بينما الوكيل يعمل محلياً مع طرق الدفع والدعم المباشر.",
        cards: [
          {
            title: "مسار الشريك",
            description:
              "مناسب لمن يملك جمهوراً أو قنوات أو زيارات ويبحث عن كود خاص وأدوات متابعة ودعم من مدير شراكات.",
            bulletTitle: "هذا المسار يناسبك إذا كنت:",
            bullets: [
              "تدير مجتمعاً أو قناة أو صفحات نشطة",
              "تحتاج كوداً ترويجياً ومسار حملة واضح",
              "تريد متابعة الأداء مع مواد تسويقية جاهزة",
            ],
            cta: {
              label: "ابدأ كشريك",
              href: "/partnership#final-cta",
              variant: "secondary",
              icon: "arrow",
            },
            media: media("partnership-partner-route", "Partner"),
          },
          {
            title: "مسار الوكيل",
            description:
              "مناسب لمن يستطيع إدارة الإيداع والسحب محلياً، متابعة اللاعبين، ودعمهم عبر الطرق المتاحة في منطقته.",
            bulletTitle: "هذا المسار يناسبك إذا كنت:",
            bullets: [
              "تتعامل مع اللاعبين بشكل مباشر محلياً",
              "تستطيع دعم الإيداع والسحب بوضوح",
              "تبحث عن دور تشغيلي جاد مع متابعة مستمرة",
            ],
            cta: {
              label: "ابدأ كوكيل",
              href: "/partnership#final-cta",
              variant: "secondary",
              icon: "arrow",
            },
            media: media("partnership-agent-route", "Agent"),
          },
        ],
      },
      tools: {
        eyebrow: "الأدوات والدعم",
        title: "أدوات متابعة، دعم تسويقي، ومسار تشغيل يساعدك على الاستمرار.",
        description:
          "بعد اختيار الدور تحتاج إلى شيء عملي: تقارير، متابعة، مواد جاهزة، وتنسيق واضح مع مديرك.",
        media: media("partnership-tools"),
        cards: [
          {
            title: "تقارير أوضح",
            description: "أرقام ومؤشرات تساعدك على قراءة الأداء بدون تعقيد إضافي.",
            icon: "graph",
          },
          {
            title: "دعم للحملات",
            description: "مواد وكود ومسار متابعة عندما يكون تركيزك على الترويج والنمو.",
            icon: "ticket",
          },
          {
            title: "تنسيق تشغيلي",
            description: "إذا كان دورك محلياً، يبقى التواصل أقرب والمهام أوضح في التنفيذ اليومي.",
            icon: "wallet",
          },
          {
            title: "\u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0628\u0627\u0634\u0631\u0629",
            description: "\u064A\u0628\u0642\u0649 \u0627\u0644\u0645\u062F\u064A\u0631 \u0642\u0631\u064A\u0628\u0627\u064B \u0645\u0646\u0643 \u062D\u062A\u0649 \u062A\u0638\u0644 \u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0648\u0627\u0636\u062D\u0629 \u0641\u064A \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u064A\u0648\u0645\u064A.",
            icon: "manager",
          },
        ],
        checklist: [
          "كود ترويجي أو مسار حركة حسب الدور",
          "متابعة أداء أو تشغيل بشكل منظم",
          "مدير يساعدك على اختيار الخطوة التالية",
        ],
      },
      finalCta: {
        eyebrow: "الخطوة التالية",
        title: "إذا كان المسار واضحاً لك، ابدأ التواصل وحدد دورك من الآن.",
        description:
          "\u0627\u062E\u062A\u0631 \u0642\u0646\u0627\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0643 \u0648\u062A\u0648\u0627\u0635\u0644 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0639 \u0645\u062F\u064A\u0631 MELBET \u0641\u064A \u0627\u0644\u0628\u062D\u0631\u064A\u0646 \u0628\u062F\u0648\u0646 \u062E\u0637\u0648\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629.",
        primaryCta: {
          label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
          href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
          variant: "primary",
          icon: "message",
          external: true,
        },
        secondaryCta: {
          label: "\u062A\u064A\u0644\u064A\u062C\u0631\u0627\u0645",
          href: "https://t.me/Teamcash_Bahrain",
          variant: "secondary",
          icon: "arrow",
          external: true,
        },
        contacts: [
          {
            title: "\u0631\u0627\u0633\u0644 \u0627\u0644\u0645\u062F\u064A\u0631 \u0628\u0627\u0644\u0628\u0631\u064A\u062F",
            description: "\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0628\u0631\u064A\u062F \u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0631\u0627\u0643\u0629 \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629.",
            href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
            icon: "message",
            external: true,
          },
          {
            title: "\u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u062A\u064A\u0644\u064A\u062C\u0631\u0627\u0645",
            description: "\u0627\u0633\u062A\u062E\u062F\u0645 \u062A\u064A\u0644\u064A\u062C\u0631\u0627\u0645 \u0644\u0645\u0633\u0627\u0631 \u0623\u0633\u0631\u0639 \u0648\u0645\u0628\u0627\u0634\u0631 \u0645\u0639 \u0645\u062F\u064A\u0631 \u0634\u0631\u0627\u0643\u0629 \u0627\u0644\u0628\u062D\u0631\u064A\u0646.",
            href: "https://t.me/Teamcash_Bahrain",
            icon: "arrow",
            external: true,
          },
        ],
        media: media("partnership-final-cta"),
      },
    },
    faq: {
      seo: {
        title: "الأسئلة الشائعة | MELBET البحرين",
        description:
          "إجابات سريعة للاعبين وللشركاء والوكلاء في MELBET البحرين، مع مسار دعم واضح للبدء.",
      },
      hero: {
        eyebrow: "أسئلة سريعة",
        title: "قبل أن تبدأ كلاعب أو كشريك، راجع الإجابات الأقرب لما تحتاجه.",
        description:
          "هذه الصفحة تجمع الأسئلة الشائعة للاعبين أولاً، ثم أسئلة الشراكة والعمل، مع خطوة دعم واضحة في النهاية.",
        primaryCta: {
          label: "أسئلة اللاعبين",
          href: "/faq#player-faq",
          variant: "primary",
          icon: "play",
        },
        secondaryCta: {
          label: "أسئلة الشراكة",
          href: "/faq#partnership-faq",
          variant: "secondary",
          icon: "manager",
        },
      },
      playerFaq: {
        eyebrow: "للاعبين",
        title: "أسئلة اللاعب قبل أول خطوة.",
        description: "إجابات قصيرة عن البداية، الألعاب، الرياضة، العروض، الهاتف، والدعم.",
        items: [
          {
            question: "كيف أبدأ بسرعة؟",
            answer: "ابدأ من قسم الألعاب أو الرياضة، ثم اختر المسار المناسب لك من الهاتف أو الويب بخطوات قصيرة.",
          },
          {
            question: "ما نوع الألعاب المتاحة؟",
            answer: "يمكنك التنقل بين السلوتس، الألعاب الحية، وطاولات الكازينو حسب الفئة التي تريدها.",
          },
          {
            question: "هل توجد رياضة وكازينو في نفس التجربة؟",
            answer: "نعم، الصفحة تقودك إلى الرياضة والكازينو ضمن نفس المسار بدون الحاجة إلى واجهات منفصلة.",
          },
          {
            question: "هل توجد عروض أو هدايا؟",
            answer: "قد تجد عروض ترحيب أو هدايا أو رهانات مجانية حسب الحملات المتاحة في وقتك.",
          },
          {
            question: "هل التجربة مناسبة للهاتف؟",
            answer: "الواجهة مبنية لتبقى واضحة ومضغوطة على الهاتف مع بطاقات ومقاسات مريحة.",
          },
          {
            question: "أين أجد الدعم؟",
            answer: "يمكنك مراجعة أسئلة اللاعبين أو الشراكة هنا، أو الرجوع إلى مسارات البداية الواضحة داخل الصفحة الرئيسية.",
          },
        ],
      },
      partnershipFaq: {
        eyebrow: "للشراكة والعمل",
        title: "أسئلة الشركاء والوكلاء قبل بدء التواصل.",
        description: "إجابات قصيرة عن من يناسبه كل مسار، الأدوات، التتبع، وطريقة البدء.",
        items: [
          {
            question: "من يمكنه التقديم؟",
            answer: "أي شخص يملك جمهوراً للترويج أو يستطيع دعم اللاعبين محلياً يمكنه مراجعة المسار المناسب له.",
          },
          {
            question: "ما الفرق بين الشريك والوكيل؟",
            answer: "الشريك يركّز على الجمهور والحملات والكود الترويجي، بينما الوكيل يركّز على التعاملات المحلية والدعم المباشر.",
          },
          {
            question: "ما الأدوات أو الدعم المتاح؟",
            answer: "يمكن أن يشمل ذلك متابعة أداء، مواد تسويق، ودعماً مباشراً من مدير يساعدك على التنفيذ.",
          },
          {
            question: "هل توجد متابعة للأداء؟",
            answer: "نعم، الهدف هو أن يبقى الأداء أوضح سواء كنت تدير حملة أو دوراً تشغيلياً محلياً.",
          },
          {
            question: "كيف تُحدد الشروط؟",
            answer: "طريقة الاتفاق تختلف حسب الدور، حجم العمل، وطريقة التعاون مع مدير الشراكات.",
          },
          {
            question: "كيف أبدأ؟",
            answer: "ابدأ من مسار الشريك أو الوكيل، ثم تواصل مع المدير لاختيار المسار الأنسب.",
          },
        ],
      },
      support: {
        eyebrow: "الدعم",
        title: "اختر المسار الأقرب لك، ثم تحرك بخطوة واحدة واضحة.",
        description:
          "سواء كنت لاعباً تبحث عن بداية أسرع أو شخصاً يريد العمل كشريك أو وكيل، ستجد هنا الطريق الأقرب للخطوة التالية.",
        contacts: [
          {
            title: "ابدأ كلاعب",
            description: "ارجع إلى الألعاب أو الرياضة ثم خذ الخطوة الأقرب لك من الصفحة الرئيسية.",
            href: "/#games",
            icon: "play",
          },
          {
            title: "راجع مسارات الشراكة",
            description: "قارن بين الشريك والوكيل قبل بدء التواصل.",
            href: "/partnership#paths",
            icon: "manager",
          },
          {
            title: "الخطوة التالية",
            description: "إذا احتجت إجابة سريعة، ابدأ من هذا القسم ثم انتقل إلى المسار المناسب.",
            href: "/partnership#final-cta",
            icon: "message",
          },
        ],
        media: media("faq-support"),
      },
    },
  },
  en: {
    chrome: {
      brandLabel: "MELBET Bahrain",
      languageNames: {
        ar: "Arabic",
        en: "English",
      },
      navLabels: {
        home: "Home",
        games: "Games",
        sports: "Sports",
        offers: "Offers",
        partnership: "Partnership",
        faq: "FAQ",
        contact: "Start",
      },
      footer: {
        blurb:
          "MELBET Bahrain brings football, casino discovery, offers, and support into one compact mobile-first landing flow.",
        homeTitle: "For Players",
        partnershipTitle: "For Partners",
        supportTitle: "Support",
        copyright: "Copyright © MELBET",
      },
    },
    home: {
      seo: {
        title: "MELBET Bahrain | Football, casino, and fast offers",
        description:
          "Start fast, explore football and casino action, check available offers, and find support on the MELBET Bahrain landing page.",
      },
      hero: {
        eyebrow: "Fast Access",
        title: "Football, casino, and clear offers from the first visit.",
        description:
          "Start in minutes on mobile, move between sports, live games, and slots, and stay close to the offers and support that matter.",
        primaryCta: {
          label: "Start now",
          href: "/#games",
          variant: "primary",
          icon: "play",
        },
        secondaryCta: {
          label: "View offers",
          href: "/#offers",
          variant: "secondary",
          icon: "gift",
        },
        metrics: [
          { value: "24/7", label: "Support close to every session" },
          { value: "120+", label: "Live markets worth tracking" },
          { value: "1", label: "Flow for mobile and web" },
        ],
        featurePoints: [
          "200% on your first deposits",
          "200 free spins",
          "Free spins every Monday",
        ],
        media: media("home-hero-stage"),
      },
      games: {
        eyebrow: "Game Discovery",
        title: "Choose the pace that fits you, from live tables to quick slots.",
        description:
          "Each card pushes you into a different player journey: full casino discovery, faster slots, or live tables with quicker decisions.",
        cards: [
          {
            title: "Casino discovery",
            description:
              "Start with the core categories and move between tables and live moments without a long search.",
            badge: "Casino",
            highlights: ["Tables", "Clear categories", "Fast movement"],
            icon: "cards",
            media: media("home-casino-discovery"),
          },
          {
            title: "Faster slots",
            description:
              "Pick lighter slot sessions with quick rounds and a clearer mobile-first experience.",
            badge: "Slots",
            highlights: ["Quick rounds", "Mobile first", "Easy scan"],
            icon: "chip",
            media: media("home-slots"),
          },
          {
            title: "Live games",
            description:
              "Move into live tables when you want a direct pace and decisions while the action is happening.",
            badge: "Live",
            highlights: ["Direct pace", "Live tables", "Focused flow"],
            icon: "spark",
            media: media("home-live-games"),
          },
        ],
        quickStrip: [
          {
            title: "Fast entry",
            description: "Shorter movement between sports and casino in the same interface.",
            icon: "mobile",
          },
          {
            title: "Built for phones",
            description: "Compact cards and controlled spacing for smaller screens.",
            icon: "grid",
          },
          {
            title: "Support nearby",
            description: "If you need one more step, the path stays clear.",
            icon: "support",
          },
        ],
      },
      sports: {
        eyebrow: "Sports",
        title: "Start with football, then move through live boards and match rhythm with confidence.",
        description:
          "Sports are not a side note here. You get live-match energy, clear scanning, and quick movement toward the right market.",
        lead: {
          title: "Football first",
          description:
            "Today’s matches and live betting stay close when you want a faster decision straight from your phone.",
          badge: "Football",
          metric: { value: "90+", label: "Minutes of match momentum" },
          media: media("home-football"),
        },
        cards: [
          {
            title: "Live match board",
            description:
              "Track the event and the market in one card before you take the next step.",
            icon: "ticket",
            media: media("home-live-match"),
          },
          {
            title: "More than one sport",
            description:
              "Move across multiple sports when you want more than one market in the same session.",
            icon: "ball",
          },
          {
            title: "Clear on mobile",
            description:
              "The key information stays close: match, market, and the next move.",
            icon: "mobile",
          },
        ],
      },
      offers: {
        eyebrow: "Offers and Rewards",
        title: "Check what is available before you start, then take the route that fits.",
        description:
          "Offers here are meant to support the start or keep the session lighter, without unrealistic claims or forced urgency.",
        cards: [
          {
            title: "Welcome offer",
            description:
              "If there is a player-start offer available, you can reach it quickly with a short explanation and a clear next step.",
            badge: "Welcome",
            cta: offersCardCtaByLocale.en,
            icon: "gift",
            media: media("home-offers-welcome"),
          },
          {
            title: "Rewards and gifts",
            description:
              "Track gifts, free bets, or free spins through the campaigns available at the time you visit.",
            badge: "Rewards",
            cta: offersCardCtaByLocale.en,
            icon: "star",
            media: media("home-offers-rewards"),
          },
        ],
        supportNote: {
          title: "Need a clearer next step?",
          description:
            "Open the quick FAQ or jump back to the starting point that fits you better.",
          links: [
            { label: "Open FAQ", href: "/faq#player-faq", variant: "ghost", icon: "support" },
            { label: "Go to start", href: "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBBahrain26", variant: "secondary", icon: "arrow", external: true },
          ],
        },
      },
      finalCta: {
        eyebrow: "Player Route",
        title: "Everything is in place: sports, live games, offers, and support from the first step.",
        description:
          "If you want a faster start, jump into games now or open the quick answers before the first play session.",
        primaryCta: {
          label: "Go to games",
          href: "/#games",
          variant: "primary",
          icon: "play",
        },
        secondaryCta: {
          label: "Support and FAQ",
          href: "/faq#player-faq",
          variant: "secondary",
          icon: "message",
        },
        checkpoints: ["Sports", "Live games", "Slots", "Offers", "Mobile access"],
        media: media("home-final-cta"),
      },
    },
    partnership: {
      seo: {
        title: "MELBET Bahrain Partnership | Partner and agent routes",
        description:
          "Choose the right MELBET Bahrain partnership route with tracking tools, support, and clear next steps for partners and agents.",
      },
      hero: {
        eyebrow: "Work Routes",
        title: "Choose the route that fits you: promote as a partner, or support players locally as an agent.",
        description:
          "If you have an audience or can manage local player transactions, there is a clearer way to start with support, tools, and structured follow-up.",
        primaryCta: {
          label: "Choose your route",
          href: "/partnership#paths",
          variant: "primary",
          icon: "arrow",
        },
        secondaryCta: {
          label: "View tools",
          href: "/partnership#tools",
          variant: "secondary",
          icon: "graph",
        },
        metrics: [
          { value: "25-50%", label: "Partner share" },
          { value: "5-10%", label: "Agent share on deposits" },
          { value: "24/7", label: "Support and operating rhythm" },
        ],
        statLine: "Terms and structure depend on the role, volume, and the agreement with the manager.",
        media: media("partnership-hero"),
      },
      benefits: {
        eyebrow: "Why This Route",
        title: "Operational support and clearer tools before you commit to the next step.",
        description:
          "The goal is not vague promise language. The goal is a clear route, useful tracking, practical support, and someone who helps you stay aligned.",
        cards: [
          {
            title: "Dedicated manager",
            description: "One person helps you choose the right route and keep the process moving.",
            icon: "manager",
          },
          {
            title: "Performance visibility",
            description: "Cleaner follow-up for campaigns or operating movement so you can see what is working.",
            icon: "graph",
          },
          {
            title: "Campaign support",
            description: "Ready materials, links, and promo-code flow when your route is audience-led.",
            icon: "spark",
          },
          {
            title: "Local support path",
            description: "A practical route if your role is closer to deposits, withdrawals, and direct player help.",
            icon: "cashier",
          },
        ],
        media: media("partnership-benefits"),
      },
      steps: {
        eyebrow: "Start Steps",
        title: "Move through a short path instead of a long unclear process.",
        description:
          "The flow stays simple: define the role, review the working model, then start with direct follow-up.",
        items: [
          {
            title: "Pick the role",
            description: "Decide whether you are closer to audience growth or local player support.",
            icon: "check",
            metric: "01",
          },
          {
            title: "Review the model",
            description: "Understand the tools and the working shape before you launch the first move.",
            icon: "grid",
            metric: "02",
          },
          {
            title: "Start with follow-up",
            description: "Move with a manager who helps you refine the opening steps.",
            icon: "support",
            metric: "03",
          },
        ],
      },
      paths: {
        eyebrow: "Routes",
        title: "One route is built around audience growth, the other around local operations.",
        description:
          "Do not merge the two roles. Partners focus on promotion and campaign movement, while agents focus on local support and transactions.",
        cards: [
          {
            title: "Partner route",
            description:
              "Best for people with an audience, channels, or traffic who need a private code, campaign support, and clearer tracking.",
            bulletTitle: "This route fits if you:",
            bullets: [
              "Run a community, channel, or active pages",
              "Need a private promo code and a campaign path",
              "Want tracking with marketing support",
            ],
            cta: {
              label: "Start as a partner",
              href: "/partnership#final-cta",
              variant: "secondary",
              icon: "arrow",
            },
            media: media("partnership-partner-route", "Partner"),
          },
          {
            title: "Agent route",
            description:
              "Best for people who can help with local deposits, withdrawals, player support, and direct operating trust.",
            bulletTitle: "This route fits if you:",
            bullets: [
              "Work directly with players in your area",
              "Can support deposits and withdrawals clearly",
              "Need a serious operating role with follow-up",
            ],
            cta: {
              label: "Start as an agent",
              href: "/partnership#final-cta",
              variant: "secondary",
              icon: "arrow",
            },
            media: media("partnership-agent-route", "Agent"),
          },
        ],
      },
      tools: {
        eyebrow: "Tools and Support",
        title: "Tracking, campaign help, and operating guidance that support real follow-up.",
        description:
          "Once the route is clear, you need practical support: reports, materials, coordination, and a cleaner way to move forward.",
        media: media("partnership-tools"),
        cards: [
          {
            title: "Cleaner reporting",
            description: "Useful numbers and indicators without unnecessary complexity.",
            icon: "graph",
          },
          {
            title: "Campaign material",
            description: "Links, promo-code support, and assets for audience-led work.",
            icon: "ticket",
          },
          {
            title: "Operating coordination",
            description: "If your role is local, the communication stays closer and easier to act on.",
            icon: "wallet",
          },
          {
            title: "Direct follow-up",
            description: "A manager keeps the next step clear so campaigns, reporting, and local support keep moving.",
            icon: "manager",
          },
        ],
        checklist: [
          "A promo-code or movement path matched to the role",
          "Performance or operating follow-up with structure",
          "A manager helping with the next clear step",
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "If the route already looks clear, move now and define your role.",
        description:
          "Choose the direct contact path that fits you and reach the Bahrain manager without extra steps.",
        primaryCta: {
          label: "Email",
          href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
          variant: "primary",
          icon: "message",
          external: true,
        },
        secondaryCta: {
          label: "Telegram",
          href: "https://t.me/Teamcash_Bahrain",
          variant: "secondary",
          icon: "arrow",
          external: true,
        },
        contacts: [
          {
            title: "Email the manager",
            description: "Use email for partnership questions, operating details, and the next clear step.",
            href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
            icon: "message",
            external: true,
          },
          {
            title: "Telegram contact",
            description: "Use Telegram for a faster direct line with the Bahrain partnership manager.",
            href: "https://t.me/Teamcash_Bahrain",
            icon: "arrow",
            external: true,
          },
        ],
        media: media("partnership-final-cta"),
      },
    },
    faq: {
      seo: {
        title: "FAQ | MELBET Bahrain",
        description:
          "Quick answers for players, partners, and agents on MELBET Bahrain in one clear FAQ flow.",
      },
      hero: {
        eyebrow: "Quick Answers",
        title: "Before you start as a player or a partner, open the answers closest to your goal.",
        description:
          "This page gathers the player FAQ first, then partnership questions in one clear flow.",
        primaryCta: {
          label: "Player FAQ",
          href: "/faq#player-faq",
          variant: "primary",
          icon: "play",
        },
        secondaryCta: {
          label: "Partnership FAQ",
          href: "/faq#partnership-faq",
          variant: "secondary",
          icon: "manager",
        },
      },
      playerFaq: {
        eyebrow: "For Players",
        title: "The quick player questions before the first move.",
        description: "Short answers about starting, games, sports, offers, mobile access, and support.",
        items: [
          {
            question: "How do I start fast?",
            answer: "Start from games or sports, then choose the route that fits you on mobile or web in a few short steps.",
          },
          {
            question: "What games are available?",
            answer: "You can move between slots, live games, and casino tables depending on the category you want.",
          },
          {
            question: "Are sports and casino in the same flow?",
            answer: "Yes. The page moves you toward sports and casino inside one flow instead of separate trees.",
          },
          {
            question: "Are there promos or gifts?",
            answer: "You may find welcome offers, gifts, free bets, or free spins depending on the active campaigns.",
          },
          {
            question: "Is the experience good on mobile?",
            answer: "The interface is built to stay clear and compact on smaller screens.",
          },
          {
            question: "Where do I find support?",
            answer: "Open the player or partnership FAQ here, or return to the clear start routes on the Home page.",
          },
        ],
      },
      partnershipFaq: {
        eyebrow: "For Partnership",
        title: "The quick questions before you contact the team.",
        description: "Short answers about fit, tools, tracking, role differences, and how to start.",
        items: [
          {
            question: "Who can apply?",
            answer: "Anyone with an audience to promote to, or anyone who can support players locally, can review the route that fits them.",
          },
          {
            question: "What is the difference between partner and agent?",
            answer: "Partners focus on promotion, audiences, and promo-code activity. Agents focus on local transactions and direct player support.",
          },
          {
            question: "What tools or support are available?",
            answer: "That may include performance follow-up, marketing materials, and direct help from a manager.",
          },
          {
            question: "Is performance tracked?",
            answer: "Yes. The goal is cleaner visibility whether you are running a campaign or a local operating role.",
          },
          {
            question: "How are terms handled?",
            answer: "The working structure depends on the role, the scale, and the agreement with the partnership manager.",
          },
          {
            question: "How do I start?",
            answer: "Start from the partner or agent route, then move into the manager contact path when you are ready.",
          },
        ],
      },
      support: {
        eyebrow: "Support Path",
        title: "Pick the route closest to your goal, then move with one clear action.",
        description:
          "Whether you want to start as a player or work as a partner or an agent, the next step should stay simple and visible.",
        contacts: [
          {
            title: "Start as a player",
            description: "Go back to games or sports, then choose the closest opening move.",
            href: "/#games",
            icon: "play",
          },
          {
            title: "Review partnership routes",
            description: "Compare the partner and agent paths before you move further.",
            href: "/partnership#paths",
            icon: "manager",
          },
          {
            title: "Next step",
            description: "If you need one more answer, open this support area and move from there.",
            href: "/partnership#final-cta",
            icon: "message",
          },
        ],
        media: media("faq-support"),
      },
    },
  },
};

export function getBahrainContent(locale: Locale) {
  return marketContent[locale];
}

export function getBahrainChromeContent(locale: Locale) {
  return marketContent[locale].chrome;
}

export function getBahrainHomeContent(locale: Locale) {
  return marketContent[locale].home;
}

export function getBahrainPartnershipContent(locale: Locale) {
  return marketContent[locale].partnership;
}

export function getBahrainFaqContent(locale: Locale) {
  return marketContent[locale].faq;
}

export function getBahrainPathContactActions(locale: Locale) {
  return pathContactActions[locale];
}

export function getBahrainGamesCardCta(locale: Locale) {
  return gamesCardCtaByLocale[locale];
}

export function getBahrainSportsCardLink(locale: Locale) {
  return sportsCardLinkByLocale[locale];
}

export function getHeaderHrefMap() {
  return {
    home: bahrainGlobals.routes.home,
    games: "/#games",
    sports: "/#sports",
    offers: "/#offers",
    partnership: bahrainGlobals.routes.partnership,
    faq: bahrainGlobals.routes.faq,
    contact: "/#final-cta",
  } as const;
}
