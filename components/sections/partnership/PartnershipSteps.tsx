import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import type { BahrainPartnershipContent } from "@/content/bahrain-content";

export default function PartnershipSteps({
  content,
}: {
  content: BahrainPartnershipContent["steps"];
}) {
  return (
    <SectionShell id="steps">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="steps-grid">
          {content.items.map((item) => (
            <article className="surface-card step-card" data-reveal key={item.title}>
              <span className="step-card__metric muted-number" dir="ltr">
                {item.metric}
              </span>
              {item.icon ? (
                <span className="icon-pill">
                  <Icon name={item.icon} />
                </span>
              ) : null}
              <h3 className="step-card__title">{item.title}</h3>
              <p className="step-card__body">{item.description}</p>
            </article>
          ))}
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
