import Link from "next/link";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import { getBahrainSportsCardLink } from "@/content/bahrain-content";
import MediaSlot from "@/components/ui/MediaSlot";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import type { BahrainHomeContent } from "@/content/bahrain-content";
import { localizeHref } from "@/lib/locale";
import type { Locale } from "@/lib/site-types";

export default function HomeSportsSection({
  content,
  locale,
}: {
  content: BahrainHomeContent["sports"];
  locale: Locale;
}) {
  const [leadCard, ...supportCards] = content.cards;
  const sportsLink = getBahrainSportsCardLink(locale);
  const sportsHref = localizeHref(sportsLink.href, locale);

  return (
    <SectionShell id="sports">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="lead-grid">
          <Link
            className="surface-card feature-card feature-card--link lead-card"
            data-reveal
            href={sportsHref}
            rel={sportsLink.external ? "noreferrer" : undefined}
            target={sportsLink.external ? "_blank" : undefined}
          >
            <div className="feature-card__header">
              {content.lead.badge ? <span className="card-badge">{content.lead.badge}</span> : null}
            </div>
            {content.lead.media ? <MediaSlot locale={locale} slotId={content.lead.media.slotId} /> : null}
            <h3 className="card-title">{content.lead.title}</h3>
            <p className="card-body">{content.lead.description}</p>
            {content.lead.metric ? (
              <div className="lead-card__metric">
                <span className="inline-metric__value muted-number" dir="ltr">
                  {content.lead.metric.value}
                </span>
                <span className="inline-metric__label">{content.lead.metric.label}</span>
              </div>
            ) : null}
          </Link>

          <div className="lead-stack">
            {leadCard ? (
              <Link
                className="surface-card feature-card feature-card--link"
                data-reveal
                href={sportsHref}
                rel={sportsLink.external ? "noreferrer" : undefined}
                target={sportsLink.external ? "_blank" : undefined}
              >
                <div className="feature-card__header">
                  {leadCard.icon ? (
                    <span className="icon-pill">
                      <Icon name={leadCard.icon} />
                    </span>
                  ) : null}
                </div>
                {leadCard.media ? <MediaSlot locale={locale} slotId={leadCard.media.slotId} /> : null}
                <h3 className="card-title">{leadCard.title}</h3>
                <p className="card-body">{leadCard.description}</p>
              </Link>
            ) : null}

            {supportCards.map((card) => (
              <Link
                className="surface-card feature-card feature-card--link"
                data-reveal
                href={sportsHref}
                key={card.title}
                rel={sportsLink.external ? "noreferrer" : undefined}
                target={sportsLink.external ? "_blank" : undefined}
              >
                <div className="feature-card__header">
                  {card.icon ? (
                    <span className="icon-pill">
                      <Icon name={card.icon} />
                    </span>
                  ) : null}
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-body">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
