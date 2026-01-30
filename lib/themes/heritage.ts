import type { Theme } from "./index";

export const heritageTheme: Theme = {
  name: "Heritage Craftsman",
  slug: "heritage",
  description: "Classic, symmetrical, traditional proportions with timeless elegance",
  layoutVariant: "heritage",
  colors: {
    primary: "#5D4E37",      // Warm Brown
    secondary: "#F5F1EB",    // Antique Cream
    accent: "#B8963E",       // Antique Gold
    background: "#FAF8F5",   // Warm White
    foreground: "#2C2416",   // Dark Brown
    muted: "#8B7355",        // Muted Brown
  },
  fonts: {
    heading: "var(--font-playfair), serif",
    body: "var(--font-source-serif), serif",
  },
  styles: {
    heroOverlay: "bg-gradient-to-b from-[#5D4E37]/75 via-[#5D4E37]/55 to-[#3D3225]/70",
    buttonPrimary:
      "bg-[#5D4E37] text-[#F5F1EB] border-2 border-[#B8963E] hover:bg-[#4A3E2C] font-medium shadow-md hover:shadow-lg transition-all duration-300",
    buttonSecondary:
      "bg-transparent text-[#F5F1EB] border-2 border-[#F5F1EB] hover:bg-[#F5F1EB] hover:text-[#5D4E37] font-medium transition-all duration-300",
    sectionPadding: "py-20 px-6 md:px-12 lg:px-24",
    cardStyle:
      "bg-white rounded-sm overflow-hidden border border-[#E8E4DC] shadow-md",
    cardHoverStyle:
      "hover:shadow-lg hover:border-[#B8963E] transition-all duration-300",
    borderRadius: "rounded-sm",
    headingStyle: "tracking-normal",
  },
};
