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

  if (item.external) {
    return (
      <a
        className={["button-link", `button-link--${variant}`, className].filter(Boolean).join(" ")}
        href={href}
        rel="sponsored nofollow noopener"
        target="_blank"
      >
        <span>{item.label}</span>
        {icon}
      </a>
    );
  }

  return (
    <Link
      className={["button-link", `button-link--${variant}`, className].filter(Boolean).join(" ")}
      href={href}
    >
      <span>{item.label}</span>
      {icon}
    </Link>
  );
}
