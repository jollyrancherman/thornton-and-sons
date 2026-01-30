"use client";

import type { Theme } from "@/lib/themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface GalleryProps {
  theme: Theme;
}

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

// Placeholder projects for display
const projects: Project[] = [
  {
    id: "1",
    title: "Luxury Kitchen Island",
    description: "Two-tone white oak cabinetry with curved island and chevron accent wall",
    category: "Kitchen",
    image: "/images/luxury-kitchen-island.webp",
  },
  {
    id: "2",
    title: "Traditional Library",
    description: "Floor-to-ceiling walnut bookshelves with rolling ladder and glass doors",
    category: "Library",
    image: "/images/traditional-library.webp",
  },
  {
    id: "3",
    title: "Custom Office Built-Ins",
    description: "Modern home office with dark cabinetry, library ladder, and walnut accents",
    category: "Office",
    image: "/images/custom-office-built-ins.jpg",
  },
  {
    id: "4",
    title: "Scandinavian Kitchen",
    description: "White oak shaker cabinets with waterfall quartz island and vaulted wood ceiling",
    category: "Kitchen",
    image: "/images/scandinavian-kitchen.webp",
  },
  {
    id: "5",
    title: "Farmhouse Kitchen",
    description: "Rustic modern kitchen with exposed beams, farmhouse sink, and custom cabinetry",
    category: "Kitchen",
    image: "/images/farmhouse-kitchen.webp",
  },
  {
    id: "6",
    title: "Executive Library Office",
    description: "Ornate traditional desk with built-in hutch and floor-to-ceiling bookshelves",
    category: "Office",
    image: "/images/library-office.webp",
  },
];

export function Gallery({ theme }: GalleryProps) {
  const [inView, setInView] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setInView((prev) => {
              const newInView = [...prev];
              newInView[index] = true;
              return newInView;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      className={theme.styles.sectionPadding}
      style={{ backgroundColor: theme.colors.secondary }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${theme.styles.headingStyle}`}
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            Our Finest Work
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: theme.fonts.body,
              color: theme.colors.muted,
            }}
          >
            Each piece is a testament to our dedication to quality and artistry.
            Browse our collection of handcrafted furniture.
          </p>
        </div>

        {/* Gallery Grid - Responsive gaps using 8px system */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`${theme.styles.cardStyle} ${theme.styles.cardHoverStyle} group opacity-0 ${
                inView[index] ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container with Overlay */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <span
                  className="text-sm uppercase tracking-wider font-medium"
                  style={{ color: theme.colors.accent }}
                >
                  {project.category}
                </span>
                <h3
                  className={`text-xl font-semibold mt-2 mb-2 ${theme.styles.headingStyle}`}
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.foreground,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: theme.fonts.body,
                    color: theme.colors.muted,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className={`inline-block px-8 py-4 text-lg transition-all duration-300 ${theme.styles.borderRadius} ${theme.styles.buttonPrimary}`}
            style={{ fontFamily: theme.fonts.body }}
          >
            Commission Your Piece
          </a>
        </div>
      </div>
    </section>
  );
}
