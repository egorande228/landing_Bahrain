import type { Direction, Locale } from "@/lib/site-types";

type SearchParamsInput =
  | Record<string, string | string[] | undefined>
  | URLSearchParams
  | undefined;

const locales: Locale[] = ["ar", "en"];

function firstValue(value: string | string[] | null | undefined) {
  return Array.isArray(value) ? value[0] : value ?? undefined;
}

export function resolveLocale(searchParams?: SearchParamsInput): Locale {
  if (!searchParams) return "ar";

  const candidate =
    searchParams instanceof URLSearchParams
      ? searchParams.get("lang") ?? undefined
      : firstValue(searchParams.lang);

  return locales.includes(candidate as Locale) ? (candidate as Locale) : "ar";
}

export function getDirection(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr";
}

export function isRTL(locale: Locale) {
  return getDirection(locale) === "rtl";
}

export function localizeHref(href: string, locale: Locale, fallback: Locale = "ar") {
  if (/^(https?:|mailto:|tel:)/.test(href)) return href;

  const [pathWithQuery, hash] = href.split("#");
  const [path, queryString] = pathWithQuery.split("?");
  const params = new URLSearchParams(queryString ?? "");

  if (locale === fallback) {
    params.delete("lang");
  } else {
    params.set("lang", locale);
  }

  const query = params.toString();
  return `${path}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}

export function formatLangLabel(locale: Locale) {
  return locale === "ar" ? "AR" : "EN";
}
