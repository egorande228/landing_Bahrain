import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import MediaSlot from "@/components/ui/MediaSlot";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import type { BahrainHomeContent } from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function HomeOffersSection({
  content,
  locale,
}: {
  content: BahrainHomeContent["offers"];
  locale: Locale;
}) {
  return (
    <SectionShell id="offers">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="offers-grid">
          {content.cards.map((card) => (
            <article className="surface-card feature-card" data-reveal key={card.title}>
              <div className="feature-card__header">
                {card.icon ? (
                  <span className="icon-pill">
                    <Icon name={card.icon} />
                  </span>
                ) : null}
                {card.badge ? <span className="card-badge">{card.badge}</span> : null}
              </div>
              {card.media ? (
                <MediaSlot className="media-slot--offer-art" locale={locale} slotId={card.media.slotId} />
              ) : null}
              <h3 className="card-title">{card.title}</h3>
              <p className="card-body">{card.description}</p>
            </article>
          ))}
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
