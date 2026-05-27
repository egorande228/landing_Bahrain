import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import type { BahrainPartnershipContent } from "@/content/bahrain-content";

export default function PartnershipTools({
  content,
}: {
  content: BahrainPartnershipContent["tools"];
}) {
  return (
    <SectionShell className="partnership-tools" id="tools">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="tool-card-grid">
          {content.cards.map((card) => (
            <article className="surface-card feature-card" data-reveal key={card.title}>
              <div className="feature-card__header">
                {card.icon ? (
                  <span className="icon-pill">
                    <Icon name={card.icon} />
                  </span>
                ) : null}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-body">{card.description}</p>
            </article>
          ))}
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
