import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import MotionGroup from "@/components/ui/MotionGroup";
import type { BahrainFaqContent } from "@/content/bahrain-content";
import type { Locale } from "@/lib/site-types";

function FaqList({
  title,
  description,
  items,
}: BahrainFaqContent["playerFaq"]) {
  return (
    <article className="surface-card faq-card">
      <h2 className="card-title">{title}</h2>
      <p className="faq-copy">{description}</p>
      <div className="faq-list">
        {items.map((item, index) => (
          <details className="faq-item" key={item.question} open={index === 0}>
            <summary>{item.question}</summary>
            <div className="faq-item__answer">
              <p className="faq-copy">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </article>
  );
}

export default function FaqHub({
  content,
  locale,
}: {
  content: BahrainFaqContent;
  locale: Locale;
}) {
  return (
    <>
      <SectionShell id="top">
        <MotionGroup>
          <div className="faq-hero" data-reveal>
            <span className="section-eyebrow">{content.hero.eyebrow}</span>
            <h1 className="hero-title">{content.hero.title}</h1>
            <p className="hero-copy__body">{content.hero.description}</p>
            <div className="button-row">
              <ButtonLink item={content.hero.primaryCta} locale={locale} />
              <ButtonLink item={content.hero.secondaryCta} locale={locale} />
            </div>
          </div>
        </MotionGroup>
      </SectionShell>

      <SectionShell id="player-faq">
        <MotionGroup>
          <SectionHeader content={content.playerFaq} />
          <FaqList {...content.playerFaq} />
        </MotionGroup>
      </SectionShell>

      <SectionShell id="partnership-faq" tight>
        <MotionGroup>
          <SectionHeader content={content.partnershipFaq} />
          <FaqList {...content.partnershipFaq} />
        </MotionGroup>
      </SectionShell>
    </>
  );
}
