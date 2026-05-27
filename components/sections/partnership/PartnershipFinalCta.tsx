import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import MotionGroup from "@/components/ui/MotionGroup";
import type { BahrainPartnershipContent } from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function PartnershipFinalCta({
  content,
  locale,
}: {
  content: BahrainPartnershipContent["finalCta"];
  locale: Locale;
}) {
  return (
    <SectionShell id="final-cta" tight>
      <MotionGroup variant="scale">
        <div className="surface-stage closing-grid closing-grid--single" style={{ padding: "clamp(1rem, 2vw, 1.5rem)" }}>
          <div className="closing-copy closing-copy--centered" data-reveal>
            <span className="section-eyebrow">{content.eyebrow}</span>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-description">{content.description}</p>
            <div className="button-row">
              <ButtonLink item={content.primaryCta} locale={locale} />
              <ButtonLink item={content.secondaryCta} locale={locale} />
            </div>
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
