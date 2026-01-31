import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen sm:min-h-[70vh] md:min-h-[66vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: 'url(/images/hero/IMG_0742_enhanced.jpg)',
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-white/90 mb-3 sm:mb-4">
          Three Generations of Excellence
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance">
          Craftsmanship Beyond Compare
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto text-balance px-2">
          For over 33 years, the Thornton family has crafted premium custom cabinetry
          for homeowners who expect the best. Built on faith, family, and an unwavering
          commitment to quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 sm:px-0">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-brand-blue/90 transition-all duration-200 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto min-h-[48px]"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-white/20 transition-all duration-200 font-semibold text-base sm:text-lg border border-white/30 w-full sm:w-auto min-h-[48px]"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
