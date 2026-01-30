import type { Theme } from "./index";

export const artisanTheme: Theme = {
  name: "Artisan Warmth",
  slug: "artisan",
  description: "Organic, flowing, friendly curves with handmade charm",
  layoutVariant: "artisan",
  colors: {
    primary: "#C85A17",      // Terracotta
    secondary: "#FDF8F3",    // Warm Cream
    accent: "#7D8E6E",       // Sage Green
    background: "#FFFAF0",   // Floral White
    foreground: "#3D2914",   // Dark Brown
    muted: "#8B7355",        // Muted Brown
  },
  fonts: {
    heading: "var(--font-fraunces), serif",
    body: "var(--font-nunito), sans-serif",
  },
  styles: {
    heroOverlay: "bg-gradient-to-b from-[#3D2914]/65 via-[#C85A17]/40 to-[#3D2914]/70",
    buttonPrimary:
      "bg-[#C85A17] text-white hover:bg-[#A84A12] font-semibold shadow-md hover:shadow-lg rounded-full transition-all duration-300",
    buttonSecondary:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#C85A17] font-semibold rounded-full transition-all duration-300",
    sectionPadding: "py-20 px-6 md:px-12 lg:px-20",
    cardStyle:
      "bg-[#FDF8F3] rounded-2xl overflow-hidden border border-[#E8DCC8] shadow-md",
    cardHoverStyle:
      "hover:shadow-lg hover:border-[#C85A17] hover:-translate-y-1 transition-all duration-300",
    borderRadius: "rounded-2xl",
    headingStyle: "tracking-normal",
  },
};
