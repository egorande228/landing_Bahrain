import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import MediaSlot from "@/components/ui/MediaSlot";
import MotionGroup from "@/components/ui/MotionGroup";
import type { BahrainHomeContent } from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

export default function HomeFinalCta({
  content,
  locale,
}: {
  content: BahrainHomeContent["finalCta"];
  locale: Locale;
}) {
  return (
    <SectionShell id="final-cta" tight>
      <MotionGroup variant="scale">
        <div className="surface-stage closing-grid" style={{ padding: "clamp(1rem, 2vw, 1.5rem)" }}>
          <div className="closing-copy" data-reveal>
            <span className="section-eyebrow">{content.eyebrow}</span>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-description">{content.description}</p>

            <ul className="chip-list">
              {content.checkpoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="button-row">
              <ButtonLink item={content.primaryCta} locale={locale} />
              <ButtonLink item={content.secondaryCta} locale={locale} />
            </div>
          </div>

          <div data-reveal>
            <MediaSlot locale={locale} slotId={content.media.slotId} />
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
