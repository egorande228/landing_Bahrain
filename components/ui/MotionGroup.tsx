"use client";

import { useEffect, useRef } from "react";
import { observeOnce } from "@/motion/observers";
import {
  floatLoop,
  prepareReveal,
  pulseGlow,
  removeAnimations,
  revealLeft,
  revealScale,
  revealUp,
} from "@/motion/presets";

type MotionGroupProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "scale";
  stagger?: number;
};

export default function MotionGroup({
  children,
  className,
  variant = "up",
  stagger = 90,
}: MotionGroupProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = element.querySelectorAll<HTMLElement>("[data-reveal]");
    const floatTargets = element.querySelectorAll<HTMLElement>("[data-float]");
    const glowTargets = element.querySelectorAll<HTMLElement>("[data-glow]");

    if (reducedMotion) return;

    prepareReveal(revealTargets);

    const cleanupObserver = observeOnce(
      element,
      () => {
        revealTargets.forEach((target, index) => {
          const delay = index * stagger;

          if (variant === "left") {
            revealLeft(target, delay);
            return;
          }

          if (variant === "scale") {
            revealScale(target, delay);
            return;
          }

          revealUp(target, delay);
        });

        floatTargets.forEach((target, index) => {
          floatLoop(target, 8 + index * 2, 4800 + index * 500);
        });

        glowTargets.forEach((target) => {
          pulseGlow(target);
        });
      },
      { threshold: 0.18 },
    );

    return () => {
      cleanupObserver();
      removeAnimations(revealTargets);
      removeAnimations(floatTargets);
      removeAnimations(glowTargets);
    };
  }, [stagger, variant]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
