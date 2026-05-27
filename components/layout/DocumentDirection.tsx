"use client";

import { useEffect } from "react";
import type { Direction, Locale } from "@/lib/site-types";

export default function DocumentDirection({
  direction,
  locale,
}: {
  direction: Direction;
  locale: Locale;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [direction, locale]);

  return null;
}
