import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import MediaSlot from "@/components/ui/MediaSlot";
import MotionGroup from "@/components/ui/MotionGroup";
import {
  getBahrainPathContactActions,
  type BahrainPartnershipContent,
} from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function PartnershipPaths({
  content,
  locale,
}: {
  content: BahrainPartnershipContent["paths"];
  locale: Locale;
}) {
  const contactActions = getBahrainPathContactActions(locale);

  return (
    <SectionShell id="paths">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="path-grid">
          {content.cards.map((card) => (
            <article className="surface-card route-card" data-reveal key={card.title}>
              <div className="route-card__media">
                <span className="route-card__meta">{card.media.badge}</span>
                <MediaSlot className="route-card__slot" locale={locale} slotId={card.media.slotId} />
              </div>
              <h3 className="route-card__title">{card.title}</h3>
              <p className="route-card__body">{card.description}</p>
              <p className="route-card__bullet-title">{card.bulletTitle}</p>
              <ul className="route-card__bullets">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="route-card__footer">
                {contactActions.map((action) => (
                  <ButtonLink item={action} key={`${card.title}-${action.label}`} locale={locale} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
