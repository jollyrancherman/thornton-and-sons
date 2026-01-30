import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Playfair_Display,
  Source_Serif_4,
  DM_Sans,
  Oswald,
  Work_Sans,
  Fraunces,
  Nunito,
} from "next/font/google";
import "./globals.css";

// Luxury Artisan theme fonts
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Heritage Craftsman theme fonts
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-serif",
  display: "swap",
});

// Minimal Craft theme fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Industrial Heritage theme fonts
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

// Artisan Warmth theme fonts
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thorton and Sons | Premium Woodworking",
  description:
    "Handcrafted furniture and woodworking from Gardnerville, Nevada. Custom pieces built with generations of expertise.",
  keywords: [
    "woodworking",
    "custom furniture",
    "handcrafted",
    "Gardnerville",
    "Nevada",
    "artisan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${cormorantGaramond.variable}
        ${inter.variable}
        ${playfairDisplay.variable}
        ${sourceSerif.variable}
        ${dmSans.variable}
        ${oswald.variable}
        ${workSans.variable}
        ${fraunces.variable}
        ${nunito.variable}
      `}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
