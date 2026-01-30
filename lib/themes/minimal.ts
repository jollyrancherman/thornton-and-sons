import type { Theme } from "./index";

export const minimalTheme: Theme = {
  name: "Minimal Craft",
  slug: "minimal",
  description: "Clean grid, stark contrast, Scandinavian simplicity",
  layoutVariant: "minimal",
  colors: {
    primary: "#1A1A1A",      // Charcoal
    secondary: "#FAFAFA",    // Off-white
    accent: "#9CA3AF",       // Warm Gray
    background: "#FFFFFF",   // Pure White
    foreground: "#1A1A1A",   // Charcoal
    muted: "#71717A",        // Neutral Gray
  },
  fonts: {
    heading: "var(--font-dm-sans), sans-serif",
    body: "var(--font-dm-sans), sans-serif",
  },
  styles: {
    heroOverlay: "bg-gradient-to-b from-black/60 via-black/40 to-black/70",
    buttonPrimary:
      "bg-[#1A1A1A] text-white hover:bg-[#333333] font-medium transition-all duration-300",
    buttonSecondary:
      "bg-transparent text-white border border-white hover:bg-white hover:text-[#1A1A1A] font-medium transition-all duration-300",
    sectionPadding: "py-24 px-8 md:px-16 lg:px-32",
    cardStyle:
      "bg-white rounded-none overflow-hidden border border-[#E5E5E5]",
    cardHoverStyle:
      "hover:shadow-md hover:border-[#1A1A1A] transition-all duration-300",
    borderRadius: "rounded-none",
    headingStyle: "tracking-tight font-semibold",
  },
};
