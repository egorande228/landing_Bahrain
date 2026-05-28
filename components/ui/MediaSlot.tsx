"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  getLocalizedBahrainMediaSlot,
  type BahrainMediaSlotId,
} from "@/content/bahrain-media-slots";
import type { Locale } from "@/lib/site-types";

function toAspectRatio(ratio: string) {
  const [width, height] = ratio.split(":").map((value) => Number(value.trim()));
  return `${width} / ${height}`;
}

function getFallbackFilename(targetPath: string) {
  return targetPath.split("/").pop() ?? targetPath;
}

function getFallbackMessage(locale: Locale, targetPath: string) {
  const filename = getFallbackFilename(targetPath);
  return locale === "ar" ? `صورة مؤقتة: ${filename}` : `Pending PNG: ${filename}`;
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
  const [errorSrc, setErrorSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const hasError = errorSrc === slot.targetPath;
  const loaded = loadedSrc === slot.targetPath;

  return (
    <div
      aria-hidden={decorative || undefined}
      className={["media-slot", `media-slot--${slot.fallbackType}`, className].filter(Boolean).join(" ")}
      style={{ aspectRatio: toAspectRatio(slot.ratio) }}
    >
      <div className="media-slot__inner">
        {!hasError ? (
          <Image
            alt={decorative ? "" : slot.alt}
            className={[
              "media-slot__image",
              `media-slot__image--${slot.fit}`,
              loaded ? "media-slot__image--loaded" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            fill
            key={slot.targetPath}
            onError={() => setErrorSrc(slot.targetPath)}
            onLoad={() => setLoadedSrc(slot.targetPath)}
            priority={priority}
            sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 33vw"
            src={slot.targetPath}
          />
        ) : null}

        {!loaded || hasError ? (
          <div className="media-slot__fallback">
            <span className="media-slot__fallback-note">
              {getFallbackMessage(locale, slot.targetPath)}
            </span>
          </div>
        ) : null}

        <span className="media-slot__overlay" />
      </div>
    </div>
  );
}
