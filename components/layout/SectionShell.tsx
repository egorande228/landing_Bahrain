import type { ReactNode } from "react";

export default function SectionShell({
  children,
  id,
  className,
  tight = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section
      className={["section-shell", tight ? "section-shell--tight" : "", className].filter(Boolean).join(" ")}
      id={id}
    >
      <div className="container">{children}</div>
    </section>
  );
}
