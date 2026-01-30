import { industrialTheme } from "@/lib/themes";
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
  title: "Thornton & Sons | Industrial Heritage",
  description:
    "Workshop-inspired furniture built with industrial precision and artisan care. From our shop in Gardnerville, Nevada.",
};

export default function IndustrialPage() {
  const theme = industrialTheme;

  return (
    <main data-theme="industrial" className="overflow-hidden">
      <ThemeSwitcher theme={theme} />
      <Hero theme={theme} />

      {/* Industrial: Angled section dividers, process-focused flow */}
      <div
        className="relative h-16 -mt-8"
        style={{
          backgroundColor: theme.colors.background,
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)"
        }}
      />

      {/* Process/services first - workshop vibes */}
      <Services theme={theme} />

      {/* Bold angled divider */}
      <div className="relative">
        <div
          className="absolute inset-0 h-24"
          style={{
            backgroundColor: theme.colors.primary,
            clipPath: "polygon(0 0, 100% 50%, 100% 100%, 0 50%)"
          }}
        />
        <div className="h-24" />
      </div>

      <About theme={theme} />

      {/* Exposed grid line accent */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div
          className="h-1 w-32"
          style={{ backgroundColor: theme.colors.accent }}
        />
      </div>

      <Gallery theme={theme} />
      <Testimonials theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </main>
  );
}
