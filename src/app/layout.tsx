import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shannon Hutchinson \u2014 The Flying Artist",
  description:
    "Portfolio of Shannon Hutchinson, a Trinidadian visual artist and Boeing 787 pilot. Explore five solo exhibitions of landscape paintings inspired by Caribbean light, atmosphere, and the view from 40,000 feet.",
  keywords: [
    "Shannon Hutchinson",
    "The Flying Artist",
    "Trinidadian artist",
    "Caribbean art",
    "landscape painting",
    "Boeing 787 pilot",
    "Trinidad art",
    "contemporary art",
  ],
  openGraph: {
    title: "Shannon Hutchinson \u2014 The Flying Artist",
    description:
      "Trinidadian visual artist and Boeing 787 pilot. Five solo exhibitions of landscape paintings inspired by Caribbean light and atmosphere.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="bg-midnight text-warm-white">{children}</body>
    </html>
  );
}
