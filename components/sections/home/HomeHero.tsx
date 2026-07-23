import ButtonLink from "@/components/ui/ButtonLink";
import MediaSlot from "@/components/ui/MediaSlot";
import SectionShell from "@/components/layout/SectionShell";
import {
  getBahrainPathContactActions,
  type BahrainHomeContent,
} from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function HomeHero({
  content,
  locale,
}: {
  content: BahrainHomeContent["hero"];
  locale: Locale;
}) {
  const contactActions = getBahrainPathContactActions(locale);

  return (
    <SectionShell className="hero-section" id="top">
      <div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="section-eyebrow" data-reveal>
              {content.eyebrow}
            </span>
            <h1 className="hero-title" data-reveal>
              {content.title}
            </h1>
            <p className="hero-copy__body" data-reveal>
              {content.description}
            </p>

            <div className="hero-actions" data-reveal>
              <div className="button-row">
                <ButtonLink item={content.primaryCta} locale={locale} />
                <ButtonLink item={content.secondaryCta} locale={locale} />
              </div>

              <div className="hero-contact-row">
                {contactActions.map((action) => (
                  <ButtonLink
                    className="button-link--compact"
                    item={action}
                    key={action.href}
                    locale={locale}
                  />
                ))}
              </div>
            </div>

            <ul className="hero-points" data-reveal>
              {content.featurePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="metrics-grid" data-reveal>
              {content.metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <span className="metric-card__value muted-number" dir="ltr">
                    {metric.value}
                  </span>
                  <span className="metric-card__label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-stage hero-stage" data-reveal>
            <MediaSlot locale={locale} priority slotId={content.media.slotId} />
            <div className="hero-stage__cards">
              {content.metrics.slice(0, 2).map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <span className="metric-card__value muted-number" dir="ltr">
                    {metric.value}
                  </span>
                  <span className="metric-card__label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
