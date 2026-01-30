"use client";

import { useEffect, useState } from "react";
import type { Theme } from "@/lib/themes";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  theme: Theme;
}

export function Hero({ theme }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate parallax offset (subtle effect)
  const parallaxOffset = scrollY * 0.5;

  // Layout variant specific configurations
  const getLayoutClasses = () => {
    switch (theme.layoutVariant) {
      case "luxury":
        return {
          container: "relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8",
          heading: "text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white animate-fade-in-up",
          subheading: "text-2xl md:text-3xl lg:text-4xl mb-6 text-white/95 font-light tracking-wide animate-fade-in-up [animation-delay:100ms]",
          description: "text-lg md:text-xl lg:text-2xl mb-12 text-white/85 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]",
          buttons: "flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:300ms]",
        };
      case "heritage":
        return {
          container: "relative z-10 text-center px-8 max-w-4xl mx-auto border-t-2 border-b-2 border-white/20 py-16 md:py-20 backdrop-blur-sm bg-white/5",
          heading: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in-up border-b border-white/30 pb-6",
          subheading: "text-xl md:text-2xl lg:text-3xl mb-5 text-white/95 italic animate-fade-in-up [animation-delay:100ms]",
          description: "text-base md:text-lg lg:text-xl mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]",
          buttons: "flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up [animation-delay:300ms]",
        };
      case "minimal":
        return {
          container: "relative z-10 text-center px-6 max-w-6xl mx-auto space-y-10",
          heading: "text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-white leading-none animate-fade-in-up",
          subheading: "text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 font-light uppercase tracking-widest animate-fade-in-up [animation-delay:100ms]",
          description: "text-base md:text-lg lg:text-xl mb-12 text-white/75 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up [animation-delay:200ms]",
          buttons: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:300ms]",
        };
      case "industrial":
        return {
          container: "relative z-10 text-left px-8 md:px-16 lg:px-24 max-w-7xl mx-auto",
          heading: `text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight ${theme.styles.headingStyle} animate-fade-in-up`,
          subheading: `text-xl md:text-2xl lg:text-3xl mb-4 text-white/90 ${theme.styles.headingStyle} animate-fade-in-up [animation-delay:100ms]`,
          description: "text-base md:text-lg mb-10 text-white/80 max-w-xl leading-relaxed animate-fade-in-up [animation-delay:200ms]",
          buttons: "flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:300ms]",
        };
      case "artisan":
        return {
          container: "relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6",
          heading: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in-up",
          subheading: "text-xl md:text-2xl lg:text-3xl mb-5 text-white/95 animate-fade-in-up [animation-delay:100ms]",
          description: "text-base md:text-lg lg:text-xl mb-10 text-white/85 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]",
          buttons: "flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up [animation-delay:300ms]",
        };
      default:
        return {
          container: "relative z-10 text-center px-6 max-w-4xl mx-auto",
          heading: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in-up",
          subheading: "text-xl md:text-2xl mb-4 text-white/90 animate-fade-in-up [animation-delay:100ms]",
          description: "text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]",
          buttons: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:300ms]",
        };
    }
  };

  const layout = getLayoutClasses();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url('/images/beautiful-wood-kitchen.jpg')`,
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      {/* Overlay with improved gradient */}
      <div className={`absolute inset-0 ${theme.styles.heroOverlay}`} />

      {/* Content */}
      <div className={layout.container}>
        <h1
          className={layout.heading}
          style={{ fontFamily: theme.fonts.heading }}
        >
          Thornton & Sons
        </h1>
        <p
          className={layout.subheading}
          style={{ fontFamily: theme.fonts.heading }}
        >
          Premium Woodworking
        </p>
        <p
          className={layout.description}
          style={{ fontFamily: theme.fonts.body }}
        >
          Handcrafted furniture built with generations of expertise in
          Gardnerville, Nevada. Each piece tells a story of dedication,
          precision, and timeless beauty.
        </p>

        <div className={layout.buttons}>
          <a
            href="#gallery"
            className={`px-8 py-4 text-base md:text-lg font-medium transition-all duration-400 ${theme.styles.buttonPrimary} ${theme.styles.borderRadius}`}
            style={{ fontFamily: theme.fonts.body }}
            aria-label="View our gallery of woodworking projects"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className={`px-8 py-4 text-base md:text-lg font-medium transition-all duration-400 ${theme.styles.buttonSecondary} ${theme.styles.borderRadius}`}
            style={{ fontFamily: theme.fonts.body }}
            aria-label="Contact us for a consultation"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator with improved accessibility */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all duration-400 animate-bounce hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
}
