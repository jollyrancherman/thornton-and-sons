import { artisanTheme } from "@/lib/themes";
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
  title: "Thornton & Sons | Artisan Warmth",
  description:
    "Warm, welcoming handcrafted furniture with a personal touch. Family-owned craftsmanship from Gardnerville, Nevada.",
};

export default function ArtisanPage() {
  const theme = artisanTheme;

  return (
    <main data-theme="artisan" className="overflow-hidden">
      <ThemeSwitcher theme={theme} />
      <Hero theme={theme} />

      {/* Artisan: Organic flowing layout with rounded sections, testimonials prominent */}

      {/* Wavy organic divider */}
      <div className="relative h-16 -mt-8">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          style={{ fill: theme.colors.background }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" />
        </svg>
      </div>

      {/* Personal story first - connection matters */}
      <About theme={theme} />

      {/* Testimonials early - social proof for warmth */}
      <section
        className="py-8"
        style={{ backgroundColor: theme.colors.secondary }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xl italic"
            style={{
              color: theme.colors.muted,
              fontFamily: theme.fonts.body
            }}
          >
            &ldquo;We believe every piece of furniture should feel like home.&rdquo;
          </p>
          <p
            className="mt-2 text-sm"
            style={{ color: theme.colors.accent }}
          >
            — The Thornton Family
          </p>
        </div>
      </section>

      <Testimonials theme={theme} />

      {/* Rounded section wrapper for gallery */}
      <div
        className="mx-4 md:mx-8 lg:mx-16 rounded-3xl overflow-hidden"
        style={{ backgroundColor: theme.colors.secondary }}
      >
        <Gallery theme={theme} />
      </div>

      <Services theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </main>
  );
}
