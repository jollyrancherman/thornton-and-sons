import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[66vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white"
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
        <p className="font-script text-3xl md:text-4xl text-white/90 mb-4">
          Excellence in Every Detail
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Craftsmanship Beyond Compare
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance">
          Premium custom cabinetry for discerning homeowners. From concept to completion,
          we bring your vision to life with unparalleled quality and attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-md hover:bg-brand-blue/90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/30"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
