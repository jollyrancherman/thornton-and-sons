import { minimalTheme } from "@/lib/themes";
import {
  ThemeSwitcher,
  Hero,
  About,
  Gallery,
  Services,
  Testimonials,
  Contact,
  Footer,
} from "@/components/landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thornton & Sons | Minimal Craft",
  description:
    "Modern handcrafted furniture that lets the wood speak for itself. Clean designs, exceptional craftsmanship from Gardnerville, Nevada.",
};

export default function MinimalPage() {
  const theme = minimalTheme;

  return (
    <main data-theme="minimal" className="overflow-hidden">
      <ThemeSwitcher theme={theme} />
      <Hero theme={theme} />

      {/* Minimal: Clean breaks with generous whitespace, no decorative elements */}
      <div className="h-24" /> {/* Breathing room */}

      {/* Work first - let it speak for itself */}
      <Gallery theme={theme} />

      <div className="h-24" />

      <About theme={theme} />

      <div className="h-24" />

      {/* Minimal services - focus on process */}
      <Services theme={theme} />

      <div className="h-24" />

      <Testimonials theme={theme} />

      <div className="h-24" />

      <Contact theme={theme} />
      <Footer theme={theme} />
    </main>
  );
}
