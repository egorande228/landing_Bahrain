"use client";

import { animate, remove } from "animejs";

export const motionTokens = {
  duration: {
    fast: 220,
    base: 420,
    slow: 760,
    loop: 5200,
  },
  easing: {
    standard: "easeOutCubic",
    entrance: "cubicBezier(0.22, 1, 0.36, 1)",
  },
  distance: {
    xs: 8,
    sm: 14,
    md: 20,
  },
} as const;

type MotionElement = HTMLElement | SVGElement;

function toArray(targets: MotionElement | MotionElement[] | NodeListOf<HTMLElement>) {
  if (targets instanceof HTMLElement || targets instanceof SVGElement) {
    return [targets];
  }

  return Array.from(targets);
}

export function prepareReveal(targets: MotionElement | MotionElement[] | NodeListOf<HTMLElement>) {
  for (const target of toArray(targets)) {
    target.style.opacity = "0";
    target.style.transform = `translate3d(0, ${motionTokens.distance.md}px, 0) scale(0.985)`;
  }
}

export function revealUp(target: MotionElement, delay = 0) {
  return animate(target, {
    opacity: [0, 1],
    translateY: [motionTokens.distance.md, 0],
    scale: [0.985, 1],
    filter: ["blur(10px)", "blur(0px)"],
    duration: 560,
    delay,
    ease: motionTokens.easing.entrance,
  });
}

export function revealLeft(target: MotionElement, delay = 0) {
  return animate(target, {
    opacity: [0, 1],
    translateX: [-motionTokens.distance.md, 0],
    filter: ["blur(10px)", "blur(0px)"],
    duration: 560,
    delay,
    ease: motionTokens.easing.entrance,
  });
}

export function revealScale(target: MotionElement, delay = 0) {
  return animate(target, {
    opacity: [0, 1],
    translateY: [motionTokens.distance.xs, 0],
    scale: [0.97, 1],
    duration: 520,
    delay,
    ease: motionTokens.easing.entrance,
  });
}

export function floatLoop(target: MotionElement, amplitude = 10, duration: number = motionTokens.duration.loop) {
  return animate(target, {
    translateY: [0, -amplitude, 0],
    duration,
    ease: "inOutSine",
    loop: true,
  });
}

export function pulseGlow(target: MotionElement, duration = 3400) {
  return animate(target, {
    opacity: [0.5, 0.85, 0.5],
    scale: [1, 1.04, 1],
    duration,
    ease: "inOutSine",
    loop: true,
  });
}

export function removeAnimations(targets: MotionElement | MotionElement[] | NodeListOf<HTMLElement>) {
  remove(toArray(targets));
}
