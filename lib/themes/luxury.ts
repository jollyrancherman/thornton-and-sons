import type { Theme } from "./index";

export const luxuryTheme: Theme = {
  name: "Luxury Artisan",
  slug: "luxury",
  description: "Elegant, spacious, museum-like presentation with asymmetric layouts",
  layoutVariant: "luxury",
  colors: {
    primary: "#0F3460",      // Deep Navy
    secondary: "#FAF7F2",    // Warm Cream
    accent: "#C9A961",       // Rich Gold
    background: "#FAFAFA",   // Clean White
    foreground: "#1A1A1A",   // Near Black
    muted: "#64748B",        // Slate Gray
  },
  fonts: {
    heading: "var(--font-cormorant), serif",
    body: "var(--font-inter), system-ui, sans-serif",
  },
  styles: {
    heroOverlay: "bg-gradient-to-b from-[#0F3460]/70 via-[#0F3460]/50 to-[#0F3460]/80",
    buttonPrimary:
      "bg-[#C9A961] text-[#0F3460] hover:bg-[#D4B872] font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
    buttonSecondary:
      "bg-transparent text-white border-2 border-[#C9A961] hover:bg-[#C9A961] hover:text-[#0F3460] font-semibold transition-all duration-300",
    sectionPadding: "py-24 px-8 md:px-16 lg:px-24",
    cardStyle:
      "bg-white rounded-lg overflow-hidden border border-[#E8E4DC]",
    cardHoverStyle:
      "hover:shadow-xl hover:border-[#C9A961] hover:-translate-y-1 transition-all duration-300",
    borderRadius: "rounded-lg",
    headingStyle: "tracking-tight",
  },
};
