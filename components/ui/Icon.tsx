import type { ReactElement } from "react";
import type { IconName } from "@/lib/site-types";

const iconMap: Record<IconName, ReactElement> = {
  arrow: (
    <path
      d="M4 12h16m0 0-5-5m5 5-5 5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3.5l3.6 2.6-1.4 4.1h-4.4L8.4 6.1 12 3.5z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 18l2.8-2.8h4.4L17 18" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  cards: (
    <>
      <rect x="5" y="6" width="10" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="9" y="4" width="10" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  cashier: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10h8M8 14h5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </>
  ),
  check: (
    <path
      d="M5.5 12.5l4.1 4.1L18.5 7.7"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  chip: (
    <>
      <circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.4 6.4l2.1 2.1M15.5 15.5l2.1 2.1M17.6 6.4l-2.1 2.1M8.5 15.5l-2.1 2.1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  gift: (
    <>
      <path d="M5 10h14v9H5z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 10v9M5 13h14M7.5 10c-1.6 0-2.5-1.2-2.5-2.3 0-1.6 1.3-2.4 2.6-2.1 1.4.3 2.3 1.7 4.4 4.4C14.1 7.3 15 5.9 16.4 5.6c1.3-.3 2.6.5 2.6 2.1 0 1.1-.9 2.3-2.5 2.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </>
  ),
  graph: (
    <>
      <path d="M5 18V6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M5 18h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M8 14l3-3 2 2 5-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  manager: (
    <>
      <circle cx="12" cy="8.2" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 18.5c1.6-3.2 4-4.7 6.5-4.7s4.9 1.5 6.5 4.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </>
  ),
  message: (
    <>
      <path d="M5 6.5h14v8H9.2L5 18.2V6.5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M8 10h8M8 13h5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3.5" width="10" height="17" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 6.8h4M11 17.2h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </>
  ),
  play: (
    <path
      d="M8 6.5l9.2 5.5L8 17.5v-11z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  shield: (
    <>
      <path d="M12 4l6 2.4v5c0 3.7-2.2 6.6-6 8.6-3.8-2-6-4.9-6-8.6v-5L12 4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.1 12.2l1.9 1.9 4-4.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </>
  ),
  spark: (
    <path
      d="M12 3.8l1.8 5.2 5.4 1.4-5.4 1.4L12 17l-1.8-5.2-5.4-1.4 5.4-1.4L12 3.8z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  star: (
    <path
      d="M12 4.6l2.3 4.7 5.2.8-3.7 3.7.9 5.2L12 16.8 7.3 19l.9-5.2-3.7-3.7 5.2-.8L12 4.6z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  ),
  support: (
    <>
      <path d="M7.5 17v-1.5c0-1.4 1.3-2.5 2.8-2.5h3.4c1.5 0 2.8 1.1 2.8 2.5V17" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 14.5c-1-1.2-1.5-2.7-1.5-4.5C3 5.6 7 2 12 2s9 3.6 9 8c0 1.8-.5 3.3-1.5 4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </>
  ),
  ticket: (
    <>
      <path d="M5 8a2 2 0 012-2h10a2 2 0 012 2v2.5a2.5 2.5 0 010 5V18a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.5a2.5 2.5 0 010-5V8z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v10" fill="none" stroke="currentColor" strokeDasharray="2.2 2.2" strokeWidth="1.6" />
    </>
  ),
  wallet: (
    <>
      <path d="M5 7.2c0-1.2.9-2.2 2.2-2.2h8.1c1 0 1.9.7 2.1 1.7H8.2c-1.2 0-2.2 1-2.2 2.2v8.2c0 1.2 1 2.2 2.2 2.2h8.6A2.2 2.2 0 0019 17V9.4H5V7.2z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="15.2" cy="13.1" r="1.1" fill="currentColor" />
    </>
  ),
};

export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconMap[name]}
    </svg>
  );
}
