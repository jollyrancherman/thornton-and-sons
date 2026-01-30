import { luxuryTheme } from "@/lib/themes";
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
  title: "Thornton & Sons | Luxury Artisan Woodworking",
  description:
    "Investment-grade handcrafted furniture from Gardnerville, Nevada. Timeless pieces built with precision and passion.",
};

export default function LuxuryPage() {
  const theme = luxuryTheme;

  return (
    <main data-theme="luxury" className="overflow-hidden">
      <ThemeSwitcher theme={theme} />
      <Hero theme={theme} />

      {/* Luxury: Elegant flow with full-width gallery strip */}
      <About theme={theme} />

      {/* Decorative accent line */}
      <div
        className="h-px w-full max-w-4xl mx-auto"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.colors.accent}, transparent)`
        }}
      />

      <Gallery theme={theme} />
      <Services theme={theme} />

      {/* Full-width testimonials for dramatic effect */}
      <Testimonials theme={theme} />

      <Contact theme={theme} />
      <Footer theme={theme} />
    </main>
  );
}
