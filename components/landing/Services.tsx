"use client";

import type { Theme } from "@/lib/themes";
import { Hammer, Palette, Ruler, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ServicesProps {
  theme: Theme;
}

const services = [
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Work directly with our craftsmen to create a piece that perfectly fits your vision and space. From initial sketches to final design.",
  },
  {
    icon: Hammer,
    title: "Traditional Joinery",
    description:
      "We employ time-honored joinery techniques—mortise and tenon, dovetails, and finger joints—ensuring strength without metal fasteners.",
  },
  {
    icon: Ruler,
    title: "Precision Crafting",
    description:
      "Every measurement, cut, and finish is executed with precision. Our pieces are built to last for generations.",
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    description:
      "We personally deliver and install each piece, ensuring it arrives in perfect condition and is placed exactly where you want it.",
  },
];

export function Services({ theme }: ServicesProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section
      id="services"
      className={theme.styles.sectionPadding}
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${theme.styles.headingStyle}`}
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            Our Services
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              fontFamily: theme.fonts.body,
              color: theme.colors.muted,
            }}
          >
            From concept to completion, we guide you through every step of
            creating your custom furniture piece.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`flex gap-6 p-8 ${theme.styles.borderRadius} ${
                theme.styles.cardHoverStyle
              } transition-all duration-500 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                backgroundColor: theme.colors.secondary,
                border: `1px solid ${theme.colors.primary}15`,
              }}
            >
              {/* Icon Container */}
              <div
                className={`flex-shrink-0 w-16 h-16 ${theme.styles.borderRadius} flex items-center justify-center shadow-md`}
                style={{
                  backgroundColor: theme.colors.primary,
                  background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`,
                }}
              >
                <service.icon size={30} color={theme.colors.secondary} strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`text-xl md:text-2xl font-bold mb-3 ${theme.styles.headingStyle}`}
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.foreground,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="leading-relaxed text-base md:text-lg"
                  style={{
                    fontFamily: theme.fonts.body,
                    color: theme.colors.muted,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
