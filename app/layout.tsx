import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const display = Noto_Kufi_Arabic({
  variable: "--font-display",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

const body = IBM_Plex_Sans_Arabic({
  variable: "--font-body",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "MELBET Bahrain",
    template: "%s | MELBET Bahrain",
  },
  description: "Bahrain market landing pages for players, partners, and agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
