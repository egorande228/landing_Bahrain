import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import { getBahrainGamesCardCta } from "@/content/bahrain-content";
import ButtonLink from "@/components/ui/ButtonLink";
import MediaSlot from "@/components/ui/MediaSlot";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import type { BahrainHomeContent } from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function HomeGamesSection({
  content,
  locale,
}: {
  content: BahrainHomeContent["games"];
  locale: Locale;
}) {
  const gamesCta = getBahrainGamesCardCta(locale);

  return (
    <SectionShell id="games">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="feature-grid">
          {content.cards.map((card, index) => (
            <article
              className={[
                "surface-card feature-card",
                index === 1 ? "surface-card--accent" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              data-reveal
              key={card.title}
            >
              <div className="feature-card__media">
                <div className="feature-card__header">
                  {card.icon ? (
                    <span className="icon-pill">
                      <Icon name={card.icon} />
                    </span>
                  ) : null}
                  {card.badge ? <span className="card-badge">{card.badge}</span> : null}
                </div>
                {card.media ? <MediaSlot locale={locale} slotId={card.media.slotId} /> : null}
              </div>

              <h3 className="card-title">{card.title}</h3>
              <p className="card-body">{card.description}</p>

              {card.highlights ? (
                <ul className="card-highlights">
                  {card.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}

              <div className="card-footer">
                <ButtonLink className="button-link--compact" item={gamesCta} locale={locale} />
              </div>
            </article>
          ))}
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
