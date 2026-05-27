import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocumentDirection from "@/components/layout/DocumentDirection";
import { getDirection } from "@/lib/locale";
import type { Locale, PageKey } from "@/lib/site-types";
import { bahrainThemeVars } from "@/themes/bahrain-theme";

export default function MarketPageShell({
  children,
  locale,
  pageKey,
}: {
  children: ReactNode;
  locale: Locale;
  pageKey: PageKey;
}) {
  const direction = getDirection(locale);

  return (
    <div className="page-shell bahrain-theme" dir={direction} lang={locale} style={bahrainThemeVars}>
      <DocumentDirection direction={direction} locale={locale} />
      <div aria-hidden="true" className="page-shell__backdrop">
        <span className="page-shell__grid" />
        <span className="page-shell__glow page-shell__glow--top" />
        <span className="page-shell__glow page-shell__glow--bottom" />
        <span className="page-shell__beam" />
        <span className="page-shell__grain" />
      </div>
      <Header locale={locale} pageKey={pageKey} />
      <main className="page-main">{children}</main>
      <Footer locale={locale} pageKey={pageKey} />
    </div>
  );
}
