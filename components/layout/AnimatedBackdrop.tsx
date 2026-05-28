"use client";

import { useEffect, useRef } from "react";
import { animate, remove } from "animejs";

export default function AnimatedBackdrop() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const grid = element.querySelector<HTMLElement>(".page-shell__grid");
    const glowTop = element.querySelector<HTMLElement>(".page-shell__glow--top");
    const glowBottom = element.querySelector<HTMLElement>(".page-shell__glow--bottom");
    const washLeft = element.querySelector<HTMLElement>(".page-shell__wash--left");
    const washRight = element.querySelector<HTMLElement>(".page-shell__wash--right");
    const core = element.querySelector<HTMLElement>(".page-shell__core");
    const halo = element.querySelector<HTMLElement>(".page-shell__halo");
    const orbits = element.querySelector<HTMLElement>(".page-shell__orbits");
    const ribbon = element.querySelector<HTMLElement>(".page-shell__ribbon");
    const beam = element.querySelector<HTMLElement>(".page-shell__beam");
    const aurora = element.querySelector<HTMLElement>(".page-shell__aurora");
    const pulse = element.querySelector<HTMLElement>(".page-shell__pulse");
    const scan = element.querySelector<HTMLElement>(".page-shell__scan");
    const floor = element.querySelector<HTMLElement>(".page-shell__floor");
    const grain = element.querySelector<HTMLElement>(".page-shell__grain");

    if (grid) {
      animate(grid, {
        translateX: [0, -26, 0],
        translateY: [0, -18, 0],
        opacity: [0.42, 0.58, 0.42],
        duration: 18000,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (glowTop) {
      animate(glowTop, {
        translateX: [-18, 24, -18],
        translateY: [0, 26, 0],
        scale: [1, 1.08, 1],
        opacity: [0.4, 0.62, 0.4],
        duration: 12800,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (glowBottom) {
      animate(glowBottom, {
        translateX: [18, -26, 18],
        translateY: [0, -18, 0],
        scale: [1, 1.06, 1],
        opacity: [0.2, 0.36, 0.2],
        duration: 14200,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (washLeft) {
      animate(washLeft, {
        translateX: [-22, 18, -22],
        translateY: [0, 16, 0],
        rotate: [-4, 2, -4],
        opacity: [0.24, 0.42, 0.24],
        duration: 17600,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (washRight) {
      animate(washRight, {
        translateX: [24, -16, 24],
        translateY: [0, -14, 0],
        rotate: [3, -2, 3],
        opacity: [0.18, 0.34, 0.18],
        duration: 16800,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (core) {
      animate(core, {
        translateX: [-18, 22, -18],
        translateY: [0, 14, 0],
        scale: [0.98, 1.08, 0.98],
        opacity: [0.22, 0.42, 0.22],
        duration: 15800,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (halo) {
      animate(halo, {
        rotate: [0, 10, 0],
        scale: [0.96, 1.04, 0.96],
        opacity: [0.16, 0.3, 0.16],
        duration: 17200,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (orbits) {
      animate(orbits, {
        rotate: [0, 14, 0],
        translateX: [-10, 14, -10],
        translateY: [0, 12, 0],
        opacity: [0.24, 0.42, 0.24],
        duration: 18600,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (ribbon) {
      animate(ribbon, {
        translateX: [0, 26, 0],
        translateY: [0, -18, 0],
        rotate: [-6, 2, -6],
        opacity: [0.16, 0.34, 0.16],
        duration: 16800,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (beam) {
      animate(beam, {
        translateY: [0, 36, 0],
        rotate: [-3, 2, -3],
        scaleX: [0.94, 1.05, 0.94],
        opacity: [0.24, 0.4, 0.24],
        duration: 15200,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (aurora) {
      animate(aurora, {
        translateX: [-22, 22, -22],
        translateY: [0, 18, 0],
        rotate: [0, 10, 0],
        scale: [0.98, 1.08, 0.98],
        opacity: [0.3, 0.52, 0.3],
        duration: 16400,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (floor) {
      animate(floor, {
        translateX: [-18, 18, -18],
        scaleX: [0.96, 1.04, 0.96],
        opacity: [0.22, 0.4, 0.22],
        duration: 15400,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (pulse) {
      animate(pulse, {
        scale: [0.94, 1.08, 0.94],
        opacity: [0.14, 0.28, 0.14],
        duration: 9800,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (scan) {
      animate(scan, {
        translateY: ["-10%", "12%", "-10%"],
        opacity: [0, 0.22, 0],
        duration: 11800,
        ease: "inOutSine",
        loop: true,
      });
    }

    if (grain) {
      animate(grain, {
        translateX: [0, -14, 0],
        translateY: [0, 12, 0],
        opacity: [0.12, 0.22, 0.12],
        duration: 15000,
        ease: "inOutSine",
        loop: true,
      });
    }

    return () => {
      remove(element.querySelectorAll("span"));
    };
  }, []);

  return (
    <div aria-hidden="true" className="page-shell__backdrop" ref={ref}>
      <span className="page-shell__grid" />
      <span className="page-shell__glow page-shell__glow--top" />
      <span className="page-shell__glow page-shell__glow--bottom" />
      <span className="page-shell__wash page-shell__wash--left" />
      <span className="page-shell__wash page-shell__wash--right" />
      <span className="page-shell__core" />
      <span className="page-shell__halo" />
      <span className="page-shell__orbits" />
      <span className="page-shell__ribbon" />
      <span className="page-shell__beam" />
      <span className="page-shell__aurora" />
      <span className="page-shell__floor" />
      <span className="page-shell__pulse" />
      <span className="page-shell__scan" />
      <span className="page-shell__grain" />
      <span className="page-shell__vignette" />
    </div>
  );
}
