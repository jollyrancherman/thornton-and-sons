'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'living', label: 'Living Spaces' },
  ];

  const projects = [
    // Kitchen projects
    { id: 1, category: 'kitchen', title: 'Dark Stained Kitchen Cabinets', image: '/images/kitchen/kitchen-1_enhanced.jpg' },
    { id: 2, category: 'kitchen', title: 'Open Concept Kitchen', image: '/images/kitchen/kitchen-2_enhanced.jpg' },
    { id: 3, category: 'kitchen', title: 'Custom Cabinet Detail', image: '/images/kitchen/kitchen-3_enhanced.jpg' },
    { id: 4, category: 'kitchen', title: 'Rustic Kitchen Design', image: '/images/kitchen/kitchen-4_enhanced.jpg' },
    { id: 5, category: 'kitchen', title: 'Traditional Kitchen Cabinets', image: '/images/kitchen/kitchen-5_enhanced.jpg' },
    { id: 6, category: 'kitchen', title: 'Craftsman Style Kitchen', image: '/images/kitchen/kitchen-6_enhanced.jpg' },
    { id: 7, category: 'kitchen', title: 'Kitchen Island Installation', image: '/images/kitchen/kitchen-7_enhanced.jpg' },
    { id: 8, category: 'kitchen', title: 'Custom Range Hood', image: '/images/kitchen/kitchen-8_enhanced.jpg' },
    // Living room projects
    { id: 9, category: 'living', title: 'Fireplace Built-ins', image: '/images/living/living-1_enhanced.jpg' },
    { id: 10, category: 'living', title: 'Custom Shelving Unit', image: '/images/living/living-2_enhanced.jpg' },
    { id: 11, category: 'living', title: 'Entertainment Center', image: '/images/living/living-3_enhanced.jpg' },
    { id: 12, category: 'living', title: 'Living Room Cabinetry', image: '/images/living/living-4_enhanced.jpg' },
    { id: 13, category: 'living', title: 'Den Built-ins', image: '/images/living/living-5_enhanced.jpg' },
    { id: 14, category: 'living', title: 'Fireplace Surround', image: '/images/living/living-6_enhanced.jpg' },
    // Additional kitchen projects
    { id: 15, category: 'kitchen', title: 'Corner Kitchen Cabinetry', image: '/images/bathroom/bathroom-1_enhanced.jpg' },
    { id: 16, category: 'kitchen', title: 'Kitchen with Custom Range Hood', image: '/images/bathroom/bathroom-2_enhanced.jpg' },
    { id: 17, category: 'kitchen', title: 'Rustic Kitchen with Island', image: '/images/bathroom/bathroom-3_enhanced.jpg' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  }, [filteredProjects.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  }, [filteredProjects.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-brand-light">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-3 sm:mb-4">
            Our Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Explore our collection of custom cabinetry projects, each showcasing
            our commitment to exceptional craftsmanship and timeless design.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base min-h-[44px] ${
                  selectedCategory === category.id
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-white text-brand-gray hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] sm:aspect-[4/3] md:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
                    <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-1 sm:mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-200 capitalize hidden sm:block">{project.category} Cabinetry</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </button>

          {/* Image container */}
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-16">
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={filteredProjects[currentImageIndex]?.image || ''}
                alt={filteredProjects[currentImageIndex]?.title || ''}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Image info */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              {filteredProjects[currentImageIndex]?.title}
            </h3>
            <p className="text-sm text-gray-300">
              {currentImageIndex + 1} / {filteredProjects.length}
            </p>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          />
        </div>
      )}
    </section>
  );
}
