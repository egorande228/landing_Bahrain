import type { Locale, PageKey } from "@/lib/site-types";
import { localizeHref } from "@/lib/locale";

export function buildNavHref(key: string, pageKey: PageKey, locale: Locale) {
  const href = (() => {
    switch (key) {
      case "home":
        return "/";
      case "games":
        return "/#games";
      case "sports":
        return "/#sports";
      case "offers":
        return "/#offers";
      case "partnership":
        return "/partnership";
      case "faq":
        return "/faq";
      case "contact":
        if (pageKey === "partnership") return "/partnership#final-cta";
        if (pageKey === "faq") return "/partnership#final-cta";
        return "/#final-cta";
      default:
        return "/";
    }
  })();

  return localizeHref(href, locale);
}

export function buildPageHref(pageKey: PageKey, locale: Locale) {
  const href =
    pageKey === "partnership" ? "/partnership" : pageKey === "faq" ? "/faq" : "/";

  return localizeHref(href, locale);
}
