"use client";

import type { Theme } from "@/lib/themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface AboutProps {
  theme: Theme;
}

export function About({ theme }: AboutProps) {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Layout variant logic based on theme
  const getLayoutClasses = () => {
    switch (theme.layoutVariant) {
      case "luxury":
        // Asymmetric layout with elegant spacing
        return {
          container: "max-w-7xl mx-auto",
          grid: "grid md:grid-cols-5 gap-12 md:gap-16 items-center",
          imageCol: "md:col-span-2",
          contentCol: "md:col-span-3",
          imageWrapper: "relative",
          imageClass: `aspect-[3/4] relative ${theme.styles.borderRadius} overflow-hidden shadow-2xl`,
          accentBorder: `absolute -bottom-6 -right-6 w-full h-full ${theme.styles.borderRadius} -z-10 opacity-30`,
        };
      case "heritage":
        // Symmetrical, traditional proportions
        return {
          container: "max-w-6xl mx-auto",
          grid: "grid md:grid-cols-2 gap-12 items-center",
          imageCol: "",
          contentCol: "",
          imageWrapper: "relative",
          imageClass: `aspect-[4/5] relative ${theme.styles.borderRadius} overflow-hidden shadow-xl`,
          accentBorder: `absolute -bottom-4 -right-4 w-full h-full ${theme.styles.borderRadius} -z-10 opacity-25`,
        };
      case "minimal":
        // Lots of whitespace, stark contrast
        return {
          container: "max-w-7xl mx-auto",
          grid: "grid md:grid-cols-2 gap-16 md:gap-24 items-center",
          imageCol: "",
          contentCol: "",
          imageWrapper: "relative",
          imageClass: `aspect-square relative ${theme.styles.borderRadius} overflow-hidden shadow-sm`,
          accentBorder: "hidden",
        };
      case "industrial":
        // Bold typography, exposed-structure feel
        return {
          container: "max-w-7xl mx-auto",
          grid: "grid md:grid-cols-12 gap-8 md:gap-12 items-start",
          imageCol: "md:col-span-5",
          contentCol: "md:col-span-7",
          imageWrapper: "relative md:sticky md:top-24",
          imageClass: `aspect-[4/5] relative ${theme.styles.borderRadius} overflow-hidden shadow-2xl border-l-8`,
          accentBorder: "hidden",
        };
      case "artisan":
        // Organic flow, rounded corners
        return {
          container: "max-w-6xl mx-auto",
          grid: "grid md:grid-cols-2 gap-10 md:gap-12 items-center",
          imageCol: "",
          contentCol: "",
          imageWrapper: "relative",
          imageClass: `aspect-[4/5] relative ${theme.styles.borderRadius} overflow-hidden shadow-lg`,
          accentBorder: `absolute -bottom-5 -right-5 w-full h-full ${theme.styles.borderRadius} -z-10 opacity-40`,
        };
      default:
        return {
          container: "max-w-6xl mx-auto",
          grid: "grid md:grid-cols-2 gap-12 items-center",
          imageCol: "",
          contentCol: "",
          imageWrapper: "relative",
          imageClass: `aspect-[4/5] relative ${theme.styles.borderRadius} overflow-hidden shadow-xl`,
          accentBorder: `absolute -bottom-4 -right-4 w-full h-full ${theme.styles.borderRadius} -z-10 opacity-30`,
        };
    }
  };

  const layout = getLayoutClasses();

  // Stats styling based on theme
  const getStatsClasses = () => {
    switch (theme.layoutVariant) {
      case "luxury":
        return "grid grid-cols-3 gap-8 mt-12 pt-12 border-t";
      case "heritage":
        return "grid grid-cols-3 gap-6 mt-10 pt-10 border-t-2";
      case "minimal":
        return "flex justify-between mt-16 pt-16 border-t";
      case "industrial":
        return "grid grid-cols-3 gap-6 mt-10 pt-10 border-l-4 pl-8";
      case "artisan":
        return "grid grid-cols-3 gap-8 mt-10 pt-10 border-t-2";
      default:
        return "grid grid-cols-3 gap-6 mt-10 pt-10 border-t";
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={theme.styles.sectionPadding}
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className={layout.container}>
        <div className={layout.grid}>
          {/* Image */}
          <div
            className={`${layout.imageCol} ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            <div className={layout.imageWrapper}>
              <div
                className={layout.imageClass}
                style={{
                  borderColor: theme.colors.accent,
                }}
              >
                <Image
                  src="/images/modern-oak-kitchen.webp"
                  alt="Thornton & Sons craftsmanship showcase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Accent border */}
              {layout.accentBorder !== "hidden" && (
                <div
                  className={layout.accentBorder}
                  style={{ backgroundColor: theme.colors.accent }}
                />
              )}
            </div>
          </div>

          {/* Content */}
          <div
            className={`${layout.contentCol} ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 ${theme.styles.headingStyle}`}
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Three Generations of Craftsmanship
            </h2>
            <div
              className="space-y-6 text-base md:text-lg"
              style={{
                fontFamily: theme.fonts.body,
                color: theme.colors.foreground,
                lineHeight: "1.75",
              }}
            >
              <p>
                Since 1952, the Thornton family has been crafting exceptional
                furniture in the heart of Nevada. What began as a small workshop
                has grown into a legacy of quality and artistry.
              </p>
              <p>
                Every piece that leaves our shop carries the hallmark of
                meticulous attention to detail. We select only the finest
                hardwoods, applying traditional joinery techniques passed down
                through three generations.
              </p>
              <p>
                Our commitment goes beyond creating furniture—we build heirlooms
                meant to be treasured for generations to come.
              </p>
            </div>

            {/* Stats - Enhanced styling with better spacing */}
            <div
              className={getStatsClasses()}
              style={{
                borderColor:
                  theme.layoutVariant === "industrial"
                    ? theme.colors.accent
                    : theme.colors.muted + "40",
              }}
            >
              {[
                { number: "70+", label: "Years Experience" },
                { number: "2,500+", label: "Pieces Created" },
                { number: "100%", label: "Handcrafted" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`${
                    theme.layoutVariant === "minimal" ? "flex-1" : ""
                  } text-center ${
                    isInView ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${500 + index * 100}ms`,
                  }}
                >
                  <div
                    className={`text-3xl md:text-4xl lg:text-5xl font-bold ${theme.styles.headingStyle}`}
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.accent,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs md:text-sm mt-2 uppercase tracking-wide"
                    style={{
                      fontFamily: theme.fonts.body,
                      color: theme.colors.muted,
                      letterSpacing: theme.layoutVariant === "industrial" ? "0.1em" : "0.05em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
