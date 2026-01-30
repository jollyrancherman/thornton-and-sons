"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Theme } from "@/lib/themes";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface ThemeSwitcherProps {
  theme: Theme;
}

const themeLinks = [
  { href: "/luxury", label: "Luxury" },
  { href: "/heritage", label: "Heritage" },
  { href: "/minimal", label: "Minimal" },
  { href: "/industrial", label: "Industrial" },
  { href: "/artisan", label: "Artisan" },
];

export function ThemeSwitcher({ theme }: ThemeSwitcherProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-lg hidden md:block"
        style={{
          backgroundColor: `${theme.colors.primary}f5`,
          borderColor: `${theme.colors.accent}40`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold transition-all duration-400 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md px-2"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.secondary,
              }}
            >
              Thornton & Sons
            </Link>

            {/* Theme Links */}
            <div className="flex items-center gap-3">
              <span
                className="text-sm mr-2 opacity-60 font-medium tracking-wide"
                style={{
                  color: theme.colors.secondary,
                  fontFamily: theme.fonts.body,
                }}
              >
                Themes:
              </span>
              {themeLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isActive
                        ? "shadow-md"
                        : "hover:shadow-sm"
                    }`}
                    style={{
                      backgroundColor: isActive
                        ? theme.colors.accent
                        : "transparent",
                      color: isActive
                        ? theme.colors.primary
                        : theme.colors.secondary,
                      fontFamily: theme.fonts.body,
                      opacity: isActive ? 1 : 0.75,
                      borderRadius: theme.styles.borderRadius.includes("none")
                        ? "0"
                        : theme.styles.borderRadius.includes("2xl")
                        ? "9999px"
                        : "0.375rem",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full"
                        style={{ backgroundColor: theme.colors.primary }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-lg md:hidden"
        style={{
          backgroundColor: `${theme.colors.primary}f5`,
          borderColor: `${theme.colors.accent}40`,
        }}
      >
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold transition-all duration-400"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.secondary,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Thornton & Sons
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md transition-all duration-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                color: theme.colors.secondary,
                backgroundColor: mobileMenuOpen ? theme.colors.accent : "transparent",
              }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div
              className="pb-4 pt-2 space-y-2 animate-fade-in-up"
              style={{
                fontFamily: theme.fonts.body,
              }}
            >
              <div
                className="text-xs mb-3 opacity-60 font-medium tracking-wide px-2"
                style={{ color: theme.colors.secondary }}
              >
                Themes:
              </div>
              {themeLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-all duration-400 ${
                      isActive ? "shadow-md" : "hover:shadow-sm"
                    }`}
                    style={{
                      backgroundColor: isActive
                        ? theme.colors.accent
                        : `${theme.colors.secondary}10`,
                      color: isActive
                        ? theme.colors.primary
                        : theme.colors.secondary,
                      borderRadius: theme.styles.borderRadius.includes("none")
                        ? "0"
                        : theme.styles.borderRadius.includes("2xl")
                        ? "9999px"
                        : "0.375rem",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="ml-2 text-xs opacity-70"
                        style={{ color: theme.colors.primary }}
                      >
                        (Active)
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
