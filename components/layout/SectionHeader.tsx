import type { SectionHeadingContent } from "@/lib/site-types";

export default function SectionHeader({
  content,
  align = "start",
}: {
  content: SectionHeadingContent;
  align?: "start" | "center";
}) {
  return (
    <div className={["section-header", align === "center" ? "section-header--center" : ""].join(" ")}>
      <span className="section-eyebrow">{content.eyebrow}</span>
      <h2 className="section-title">{content.title}</h2>
      <p className="section-description">{content.description}</p>
    </div>
  );
}
