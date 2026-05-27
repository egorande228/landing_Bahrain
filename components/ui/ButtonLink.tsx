import Link from "next/link";
import { localizeHref } from "@/lib/locale";
import type { LinkItem, Locale } from "@/lib/site-types";
import Icon from "@/components/ui/Icon";

type ButtonLinkProps = {
  item: LinkItem;
  locale: Locale;
  className?: string;
};

export default function ButtonLink({ item, locale, className }: ButtonLinkProps) {
  const href = localizeHref(item.href, locale);
  const variant = item.variant ?? "primary";
  const icon = item.icon ? <Icon className="button-link__icon" name={item.icon} /> : null;

  return (
    <Link
      className={["button-link", `button-link--${variant}`, className].filter(Boolean).join(" ")}
      href={href}
      rel={item.external ? "noreferrer" : undefined}
      target={item.external ? "_blank" : undefined}
    >
      <span>{item.label}</span>
      {icon}
    </Link>
  );
}
