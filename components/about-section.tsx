import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  const stats = [
    { icon: Clock, value: '33+', label: 'Years Experience' },
    { icon: Users, value: '3', label: 'Generations' },
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
                Thirty-three years ago, Danny Thornton began his journey in fine woodworking
                alongside his uncle and partner. What started as an apprenticeship quickly
                became a calling. Over the years, Danny has worked side by side with his
                brothers and cousins, building not just cabinets, but a legacy rooted in
                faith, family, and an unwavering work ethic.
              </p>
              <p>
                Danny&apos;s father spent countless hours helping his sons build the business,
                passing down time-honored techniques and the values that define Thornton & Sons
                to this day. Every piece we create reflects that heritage—a commitment to the
                highest quality craftsmanship that honors those who came before us.
              </p>
              <p>
                Today, that legacy continues into a third generation. Danny&apos;s youngest son,
                Elijah, has chosen to carry on the family tradition, joining as a partner
                in the business. Together, father and son bring the same meticulous attention
                to detail and pride in workmanship that has defined Thornton & Sons for
                over three decades.
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
