import { heritageTheme } from "@/lib/themes";
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
  title: "Thornton & Sons | Heritage Craftsman",
  description:
    "Three generations of traditional woodworking excellence. Handcrafted furniture with timeless elegance from Gardnerville, Nevada.",
};

export default function HeritagePage() {
  const theme = heritageTheme;

  return (
    <main data-theme="heritage" className="overflow-hidden">
      <ThemeSwitcher theme={theme} />
      <Hero theme={theme} />

      {/* Heritage: Classic decorative divider */}
      <div className="py-8 flex items-center justify-center gap-4">
        <div
          className="h-px w-24"
          style={{ backgroundColor: theme.colors.accent }}
        />
        <div
          className="w-3 h-3 rotate-45"
          style={{ backgroundColor: theme.colors.accent }}
        />
        <div
          className="h-px w-24"
          style={{ backgroundColor: theme.colors.accent }}
        />
      </div>

      <About theme={theme} />

      {/* Traditional ornamental divider */}
      <div className="py-8 flex items-center justify-center gap-4">
        <div
          className="h-px w-24"
          style={{ backgroundColor: theme.colors.accent }}
        />
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          style={{ color: theme.colors.accent }}
          fill="currentColor"
        >
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <div
          className="h-px w-24"
          style={{ backgroundColor: theme.colors.accent }}
        />
      </div>

      <Gallery theme={theme} />

      {/* Heritage emphasizes testimonials earlier - trust matters */}
      <Testimonials theme={theme} />
      <Services theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </main>
  );
}
