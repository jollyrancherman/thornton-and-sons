export type LayoutVariant = "luxury" | "heritage" | "minimal" | "industrial" | "artisan";

export interface Theme {
  name: string;
  slug: string;
  description: string;
  layoutVariant: LayoutVariant;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  styles: {
    heroOverlay: string;
    buttonPrimary: string;
    buttonSecondary: string;
    sectionPadding: string;
    cardStyle: string;
    cardHoverStyle: string;
    borderRadius: string;
    headingStyle: string;
  };
}

export { heritageTheme } from "./heritage";
export { minimalTheme } from "./minimal";
export { industrialTheme } from "./industrial";
export { luxuryTheme } from "./luxury";
export { artisanTheme } from "./artisan";

import { heritageTheme } from "./heritage";
import { minimalTheme } from "./minimal";
import { industrialTheme } from "./industrial";
import { luxuryTheme } from "./luxury";
import { artisanTheme } from "./artisan";

export const themes: Record<string, Theme> = {
  heritage: heritageTheme,
  minimal: minimalTheme,
  industrial: industrialTheme,
  luxury: luxuryTheme,
  artisan: artisanTheme,
};

export const defaultTheme = luxuryTheme;
