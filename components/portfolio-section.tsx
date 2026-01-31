'use client';

import { useState } from 'react';
import Image from 'next/image';

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'living', label: 'Living Spaces' },
    { id: 'bathroom', label: 'Bathrooms' },
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
    // Bathroom projects
    { id: 15, category: 'bathroom', title: 'Master Bath Vanity', image: '/images/bathroom/bathroom-1_enhanced.jpg' },
    { id: 16, category: 'bathroom', title: 'Custom Bathroom Cabinetry', image: '/images/bathroom/bathroom-2_enhanced.jpg' },
    { id: 17, category: 'bathroom', title: 'Double Vanity Installation', image: '/images/bathroom/bathroom-3_enhanced.jpg' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-brand-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Our Work
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto mb-8">
            Explore our collection of custom cabinetry projects, each showcasing
            our commitment to exceptional craftsmanship and timeless design.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 capitalize">{project.category} Cabinetry</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
