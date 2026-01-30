import type { Theme } from "./index";

export const industrialTheme: Theme = {
  name: "Industrial Heritage",
  slug: "industrial",
  description: "Bold, asymmetric, exposed-structure workshop aesthetic",
  layoutVariant: "industrial",
  colors: {
    primary: "#2D3436",      // Charcoal
    secondary: "#DFE6E9",    // Concrete Gray
    accent: "#B87333",       // Rust/Copper
    background: "#F5F5F5",   // Light Gray
    foreground: "#1C2833",   // Dark Slate
    muted: "#5D6D7E",        // Steel Blue
  },
  fonts: {
    heading: "var(--font-oswald), sans-serif",
    body: "var(--font-work-sans), sans-serif",
  },
  styles: {
    heroOverlay: "bg-gradient-to-b from-[#2D3436]/80 via-[#1C2833]/60 to-[#2D3436]/85",
    buttonPrimary:
      "bg-[#B87333] text-white hover:bg-[#A0522D] font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300",
    buttonSecondary:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#2D3436] font-semibold uppercase tracking-wider transition-all duration-300",
    sectionPadding: "py-20 px-6 md:px-12 lg:px-20",
    cardStyle:
      "bg-white rounded-none overflow-hidden border-l-4 border-[#B87333] shadow-lg",
    cardHoverStyle:
      "hover:shadow-xl hover:border-l-[#D4A574] transition-all duration-300",
    borderRadius: "rounded-none",
    headingStyle: "uppercase tracking-wider",
  },
};
