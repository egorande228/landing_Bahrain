"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  getLocalizedBahrainMediaSlot,
  type BahrainMediaSlotId,
} from "@/content/bahrain-media-slots";
import type { Locale } from "@/lib/site-types";

function toAspectRatio(ratio: string) {
  const [width, height] = ratio.split(":").map((value) => Number(value.trim()));
  return `${width} / ${height}`;
}

function getFallbackStateLabel(targetPath: string) {
  const filename = targetPath.split("/").pop() ?? targetPath;
  return filename;
}

function getFallbackMessage(locale: Locale) {
  return locale === "ar"
    ? "Final PNG pending. This media slot will render once the image is added."
    : "Final PNG pending. This media slot will render once the image is added.";
}

type MediaSlotProps = {
  slotId: BahrainMediaSlotId;
  locale: Locale;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
};

export default function MediaSlot({
  slotId,
  locale,
  className,
  priority = false,
  decorative = false,
}: MediaSlotProps) {
  const slot = useMemo(() => getLocalizedBahrainMediaSlot(slotId, locale), [locale, slotId]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    const preloader = new window.Image();

    preloader.src = slot.targetPath;
    preloader.onload = () => {
      if (active) setLoaded(true);
    };
    preloader.onerror = () => {
      if (active) setLoaded(false);
    };

    return () => {
      active = false;
    };
  }, [slot.targetPath]);

  return (
    <div
      aria-hidden={decorative || undefined}
      className={["media-slot", `media-slot--${slot.fallbackType}`, className].filter(Boolean).join(" ")}
      style={{ aspectRatio: toAspectRatio(slot.ratio) }}
    >
      <div className="media-slot__inner">
        {loaded ? (
          <Image
            alt={decorative ? "" : slot.alt}
            className={["media-slot__image", `media-slot__image--${slot.fit}`].join(" ")}
            fill
            priority={priority}
            sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 33vw"
            src={slot.targetPath}
          />
        ) : (
          <div className="media-slot__fallback">
            <span className="media-slot__shape media-slot__shape--orb" />
            <span className="media-slot__shape media-slot__shape--beam" />
            <span className="media-slot__shape media-slot__shape--panel" />
            <span className="media-slot__shape media-slot__shape--grid" />
            <span className="media-slot__shape media-slot__shape--accent" />
            <div className="media-slot__fallback-copy">
              <span className="media-slot__fallback-state">PNG slot</span>
              <strong className="media-slot__fallback-title">
                {getFallbackStateLabel(slot.targetPath)}
              </strong>
              <p className="media-slot__fallback-text">{slot.alt}</p>
              <code className="media-slot__fallback-path">{slot.targetPath}</code>
              <span className="media-slot__fallback-note">{getFallbackMessage(locale)}</span>
            </div>
          </div>
        )}
        <span className="media-slot__overlay" />
      </div>
    </div>
  );
}
