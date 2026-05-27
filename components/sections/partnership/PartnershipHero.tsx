import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import MotionGroup from "@/components/ui/MotionGroup";
import type { BahrainPartnershipContent } from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function PartnershipHero({
  content,
  locale,
}: {
  content: BahrainPartnershipContent["hero"];
  locale: Locale;
}) {
  return (
    <SectionShell className="partnership-hero" id="top">
      <MotionGroup>
        <div className="hero-grid hero-grid--centered">
          <div className="hero-copy hero-copy--centered">
            <span className="section-eyebrow" data-reveal>
              {content.eyebrow}
            </span>
            <h1 className="hero-title" data-reveal>
              {content.title}
            </h1>
            <p className="hero-copy__body" data-reveal>
              {content.description}
            </p>

            <div className="button-row" data-reveal>
              <ButtonLink item={content.primaryCta} locale={locale} />
              <ButtonLink item={content.secondaryCta} locale={locale} />
            </div>

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

            <p className="support-note__body" data-reveal>
              {content.statLine}
            </p>
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
