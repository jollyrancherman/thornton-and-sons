'use client';

import Image from 'next/image';

export function ServicesSection() {
  const services = [
    {
      image: '/images/services/services-1_enhanced.jpg',
      title: 'Kitchen Cabinets',
      description: 'Transform your kitchen with custom cabinetry designed to maximize space and reflect your personal style. From traditional to contemporary, every detail is crafted to perfection.',
    },
    {
      image: '/images/services/services-2_enhanced.jpg',
      title: 'Office & Storage',
      description: 'Create a productive workspace with custom office cabinetry. Built-in storage solutions, elegant wood finishes, and smart organization systems tailored to your needs.',
    },
    {
      image: '/images/services/services-3_enhanced.jpg',
      title: 'Den & Living Spaces',
      description: 'Enhance your living areas with custom-built entertainment centers, fireplace surrounds, and storage solutions that seamlessly blend with your home\'s architecture.',
    },
    {
      image: '/images/services/services-4_enhanced.jpg',
      title: 'Custom Trim Packages',
      description: 'Elevate your home with precision-crafted trim work. Crown molding, baseboards, and architectural details that add sophistication to every room.',
    },
    {
      image: '/images/services/services-5_enhanced.jpg',
      title: 'Custom Doors',
      description: 'Make a statement with custom interior doors. Choose from a variety of styles, woods, and finishes to create the perfect entrance to any room.',
    },
    {
      image: '/images/services/services-6_enhanced.jpg',
      title: 'Complete Installations',
      description: 'Full-service project management from design consultation to final installation. Our expert craftsmen ensure flawless execution of your vision.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-3xl mx-auto px-2">
            Three generations of expertise in high-end custom cabinetry and millwork,
            serving clients who demand excellence in every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-gray-200 hover:border-brand-blue hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
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
