import Link from "next/link";
import BahrainLogo from "@/components/brand/BahrainLogo";
import Icon from "@/components/ui/Icon";
import { bahrainGlobals } from "@/config/bahrain.globals";
import { getBahrainChromeContent } from "@/content/bahrain-content";
import { formatLangLabel } from "@/lib/locale";
import { buildNavHref, buildPageHref } from "@/lib/navigation";
import type { Locale, PageKey } from "@/lib/site-types";

const navKeys = bahrainGlobals.chrome.nav.home;
const headerNavKeys = navKeys.filter((key) => key !== "contact");
const mobileNavKeys = ["home", "partnership", "faq"] as const;

function isActive(pageKey: PageKey, key: string) {
  if (pageKey === "home") return key === "home";
  if (pageKey === "partnership") return key === "partnership";
  if (pageKey === "faq") return key === "faq";
  return false;
}

export default function Header({
  locale,
  pageKey,
}: {
  locale: Locale;
  pageKey: PageKey;
}) {
  const chrome = getBahrainChromeContent(locale);
  const mobileMenuLabel = locale === "ar" ? "القائمة" : "Menu";

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-shell">
          <div className="header-shell__glow" aria-hidden="true" />
          <Link
            aria-label={chrome.brandLabel}
            className="header-brand"
            href={buildPageHref("home", locale)}
          >
            <BahrainLogo decorative size="nav" />
          </Link>

          <nav aria-label="Primary" className="header-nav header-nav--desktop">
            {headerNavKeys.map((key) => (
              <Link
                className={[
                  "header-nav__link",
                  isActive(pageKey, key) ? "header-nav__link--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                href={buildNavHref(key, pageKey, locale)}
                key={key}
              >
                {chrome.navLabels[key]}
              </Link>
            ))}
          </nav>

          <div className="header-tools">
            {bahrainGlobals.flags.showLanguageSwitch ? (
              <div className="language-switch" dir="ltr">
                {bahrainGlobals.locales.map((code) => (
                  <Link
                    className={[
                      "language-switch__item",
                      code === locale ? "language-switch__item--active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    href={buildPageHref(pageKey, code)}
                    key={code}
                    title={chrome.languageNames[code]}
                  >
                    {formatLangLabel(code)}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="header-mobile">
            <details className="header-mobile__group">
              <summary className="header-mobile__summary">
                <span className="header-mobile__summary-label">{mobileMenuLabel}</span>
                <Icon className="header-mobile__summary-icon" name="grid" />
              </summary>
              <div className="header-mobile__panel header-mobile__panel--nav">
                <nav className="header-nav header-nav--mobile">
                  {mobileNavKeys.map((key) => (
                    <Link
                      className={[
                        "header-nav__link",
                        isActive(pageKey, key) ? "header-nav__link--active" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      href={buildNavHref(key, pageKey, locale)}
                      key={key}
                    >
                      {chrome.navLabels[key]}
                    </Link>
                  ))}
                </nav>

                {bahrainGlobals.flags.showLanguageSwitch ? (
                  <div className="header-mobile__locale">
                    <div className="header-mobile__lang-list" dir="ltr">
                      {bahrainGlobals.locales.map((code) => (
                        <Link
                          className={[
                            "header-mobile__lang-button",
                            code === locale ? "header-mobile__lang-button--active" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          href={buildPageHref(pageKey, code)}
                          key={code}
                          title={chrome.languageNames[code]}
                        >
                          {formatLangLabel(code)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
