import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "A curated collection of my best work — projects, experiments, and ideas built over time. This repo serves as a central hub for everything I create and share.",

  openGraph: {
    title: "Showcase",
    description:
      "A curated collection of my best work — projects, experiments, and ideas built over time.",
    url: "https://pankajghosh-showcase.vercel.app/",
    siteName: "Showcase",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Showcase — A curated collection of my best work",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Showcase",
    description:
      "A curated collection of my best work — projects, experiments, and ideas built over time.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
