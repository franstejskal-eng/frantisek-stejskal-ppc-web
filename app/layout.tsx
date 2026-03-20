import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "František Stejskal – PPC Specialista",
  description:
    "PPC specialista s přes 70 projekty a správou kampaní za 200+ milionů Kč. Pomáhám firmám přestat plýtvat reklamním rozpočtem a z Google Ads a Meta kampaní udělat skutečný zdroj zakázek.",
  keywords: [
    "PPC specialista",
    "Google Ads",
    "Meta Ads",
    "PPC kampaně",
    "PPC konzultant",
    "František Stejskal",
    "správa reklam",
  ],
  authors: [{ name: "František Stejskal" }],
  openGraph: {
    title: "František Stejskal – PPC Specialista",
    description:
      "PPC specialista s přes 70 projekty a správou kampaní za 200+ milionů Kč.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
