"use client";

import type { Theme } from "@/lib/themes";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TestimonialsProps {
  theme: Theme;
}

const testimonials = [
  {
    quote:
      "The dining table Thornton & Sons created for us is absolutely stunning. It's become the centerpiece of our home, and we know it will be passed down for generations.",
    author: "Sarah & Michael Chen",
    location: "Reno, NV",
    initials: "SC",
  },
  {
    quote:
      "Working with the Thornton family was a pleasure from start to finish. They truly listened to what we wanted and delivered a piece that exceeded our expectations.",
    author: "James Hartley",
    location: "Lake Tahoe, CA",
    initials: "JH",
  },
  {
    quote:
      "The craftsmanship is impeccable. You can see the care and expertise in every detail. This is furniture that tells a story.",
    author: "Rebecca Morrison",
    location: "Carson City, NV",
    initials: "RM",
  },
];

export function Testimonials({ theme }: TestimonialsProps) {
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
              }, index * 150);
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
      id="testimonials"
      className={theme.styles.sectionPadding}
      style={{
        backgroundColor: theme.colors.primary,
        backgroundImage: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary}F0 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${theme.styles.headingStyle}`}
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.secondary,
            }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
            style={{
              fontFamily: theme.fonts.body,
              color: theme.colors.secondary,
            }}
          >
            Our greatest reward is seeing our furniture become part of your
            family&apos;s story.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`relative p-8 ${theme.styles.borderRadius} group transition-all duration-500 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                backgroundColor: theme.colors.secondary,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                transform: "translateZ(0)",
              }}
            >
              {/* Large Quote Mark */}
              <div
                className="absolute -top-4 -left-4 w-20 h-20 flex items-center justify-center opacity-15 transition-all duration-300 group-hover:opacity-25"
                style={{
                  backgroundColor: theme.colors.accent,
                  borderRadius: "50%",
                }}
              >
                <Quote
                  size={48}
                  style={{ color: theme.colors.primary }}
                  strokeWidth={2.5}
                />
              </div>

              {/* Quote Text */}
              <blockquote
                className="text-base md:text-lg mb-8 leading-relaxed relative z-10 italic"
                style={{
                  fontFamily: theme.fonts.body,
                  color: theme.colors.foreground,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Section */}
              <div className="flex items-center gap-4 pt-6 border-t relative z-10"
                style={{ borderColor: `${theme.colors.primary}20` }}
              >
                {/* Avatar with Initials */}
                <div
                  className={`w-12 h-12 ${theme.styles.borderRadius} flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-md transition-all duration-300 group-hover:scale-110`}
                  style={{
                    backgroundColor: theme.colors.accent,
                    color: theme.colors.primary,
                  }}
                >
                  {testimonial.initials}
                </div>

                {/* Author Info */}
                <div>
                  <div
                    className="font-bold text-base md:text-lg"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                    }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className="text-sm opacity-70 mt-0.5"
                    style={{
                      fontFamily: theme.fonts.body,
                      color: theme.colors.muted,
                    }}
                  >
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  border: `2px solid ${theme.colors.accent}`,
                  borderRadius: theme.styles.borderRadius === "rounded-lg" ? "0.5rem" : theme.styles.borderRadius,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 opacity-40">
            <div
              className="h-px w-16"
              style={{ backgroundColor: theme.colors.secondary }}
            />
            <Quote size={24} style={{ color: theme.colors.accent }} />
            <div
              className="h-px w-16"
              style={{ backgroundColor: theme.colors.secondary }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
