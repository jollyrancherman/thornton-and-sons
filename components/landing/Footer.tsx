"use client";

import type { Theme } from "@/lib/themes";
import { Facebook, Instagram, Mail } from "lucide-react";

interface FooterProps {
  theme: Theme;
}

export function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@thorntonandsons.com" },
  ];

  return (
    <footer
      className="py-16 px-6"
      style={{ backgroundColor: theme.colors.foreground }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className={`text-2xl font-bold mb-4 ${theme.styles.headingStyle}`}
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.secondary,
              }}
            >
              Thornton & Sons
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: theme.fonts.body,
                color: theme.colors.secondary,
                opacity: 0.8,
              }}
            >
              Handcrafting fine furniture since 1952. Three generations of
              excellence in Gardnerville, Nevada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.accent,
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm inline-block transition-all duration-200 hover:translate-x-1"
                    style={{
                      fontFamily: theme.fonts.body,
                      color: theme.colors.secondary,
                      opacity: 0.8,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.color = theme.colors.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.8";
                      e.currentTarget.style.color = theme.colors.secondary;
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4
              className="font-semibold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.accent,
                letterSpacing: "0.05em",
              }}
            >
              Connect With Us
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.secondary,
                    borderRadius: theme.styles.borderRadius,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.accent;
                    e.currentTarget.style.boxShadow = `0 8px 16px ${theme.colors.accent}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.primary;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <a
                href="mailto:hello@thorntonandsons.com"
                className="block text-sm transition-colors duration-200"
                style={{
                  fontFamily: theme.fonts.body,
                  color: theme.colors.secondary,
                  opacity: 0.8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = theme.colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                  e.currentTarget.style.color = theme.colors.secondary;
                }}
              >
                hello@thorntonandsons.com
              </a>
              <a
                href="tel:+17755550123"
                className="block text-sm transition-colors duration-200"
                style={{
                  fontFamily: theme.fonts.body,
                  color: theme.colors.secondary,
                  opacity: 0.8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = theme.colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                  e.currentTarget.style.color = theme.colors.secondary;
                }}
              >
                (775) 555-0123
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{
            borderColor: `${theme.colors.secondary}30`,
            borderWidth: "1px",
          }}
        >
          <p
            className="text-sm text-center sm:text-left"
            style={{
              fontFamily: theme.fonts.body,
              color: theme.colors.secondary,
              opacity: 0.6,
            }}
          >
            © {currentYear} Thornton & Sons. All rights reserved.
          </p>
          <p
            className="text-sm text-center sm:text-right"
            style={{
              fontFamily: theme.fonts.body,
              color: theme.colors.secondary,
              opacity: 0.6,
            }}
          >
            Crafted with care in Gardnerville, Nevada
          </p>
        </div>
      </div>
    </footer>
  );
}
