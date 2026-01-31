import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  const stats = [
    { icon: Clock, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '100%', label: 'Satisfaction Rate' },
    { icon: CheckCircle, value: '$30k-500k', label: 'Project Range' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative">
              <Image
                src="/images/living/living-5_enhanced.jpg"
                alt="Thornton & Sons Custom Entertainment Center"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-blue/10 rounded-lg -z-10" />
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              About Thornton & Sons
            </h2>
            <div className="space-y-4 text-brand-gray text-lg leading-relaxed mb-8">
              <p>
                For over two decades, Thornton & Sons has been the trusted name in
                high-end custom cabinetry. What started as a small family workshop has
                grown into a premier destination for homeowners who refuse to compromise
                on quality.
              </p>
              <p>
                Every piece we create is a testament to our commitment to exceptional
                craftsmanship. We work exclusively with premium materials and employ
                time-honored woodworking techniques combined with modern precision
                technology.
              </p>
              <p>
                Our clients range from luxury home builders to discerning homeowners
                undertaking renovation projects valued between $30,000 and $500,000.
                Each project receives the same meticulous attention to detail,
                regardless of size or scope.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-brand-light rounded-lg">
                    <Icon className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                    <div className="text-3xl font-bold text-brand-dark mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-brand-gray font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
