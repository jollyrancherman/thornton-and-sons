import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CheckCircle, Phone, Mail, Clock, Award, Users, Truck } from 'lucide-react';

export const metadata = {
  title: 'For Contractors | Thornton & Sons Custom Cabinetry',
  description: 'Partner with Thornton & Sons for your custom cabinetry needs. Reliable lead times, competitive pricing, and exceptional craftsmanship for builders and contractors.',
};

export default function ContractorsPage() {
  const benefits = [
    {
      icon: Clock,
      title: 'Reliable Lead Times',
      description: 'We understand project timelines. Count on us to deliver quality cabinetry on schedule.',
    },
    {
      icon: Award,
      title: 'Consistent Quality',
      description: 'Every project meets our exacting standards, ensuring your clients are always satisfied.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'A dedicated account manager for all your projects, from quote to installation.',
    },
    {
      icon: Truck,
      title: 'White Glove Delivery',
      description: 'Professional delivery and optional installation services available.',
    },
  ];

  const services = [
    'Custom kitchen cabinetry',
    'Bathroom vanities',
    'Built-in entertainment centers',
    'Home office solutions',
    'Closet systems',
    'Custom trim packages',
    'Fireplace surrounds',
    'Mudroom & laundry cabinetry',
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[66vh] flex items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero/IMG_3089_enhanced.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xs p-8 md:p-12 shadow-2xl">
            <p className="font-script text-4xl md:text-5xl text-brand-blue mb-1">
              Partner With Us
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Built for Builders
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Join the network of contractors who trust Thornton & Sons for premium custom cabinetry.
              We make it easy to deliver exceptional results to your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-md hover:bg-brand-blue/90 transition-all duration-200 font-semibold text-lg"
              >
                Become a Partner
              </a>
              <a
                href="tel:+17759013743"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/30"
              >
                <Phone className="w-5 h-5" />
                Call Us Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-4">
              Why Contractors Choose Us
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              We understand the unique needs of builders and contractors working on high-end residential projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-gray">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-6">
                Full-Service Cabinetry Solutions
              </h2>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                From initial design consultation to final installation, we provide comprehensive
                cabinetry solutions for projects of all sizes. Our team works directly with you
                to ensure seamless integration with your project timeline.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span className="text-brand-dark">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="font-heading text-2xl font-semibold text-brand-dark mb-2">
                Contractor Pricing
              </h3>
              <p className="text-brand-gray mb-6">
                Competitive trade pricing for qualified contractors. Volume discounts available.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-brand-dark">Trade pricing on all products</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-brand-dark">Volume discounts for large projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-brand-dark">Flexible payment terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-brand-dark">Priority scheduling</span>
                </li>
              </ul>
              <a
                href="#contact-form"
                className="block w-full text-center bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-brand-blue/90 transition-colors duration-200 font-medium"
              >
                Request Trade Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-4">
                Start the Conversation
              </h2>
              <p className="text-xl text-brand-gray">
                Tell us about your business and upcoming projects. We'll be in touch within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projects" className="block text-sm font-medium text-brand-dark mb-2">
                  Average Projects Per Year
                </label>
                <select
                  id="projects"
                  name="projects"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                >
                  <option value="">Select...</option>
                  <option value="1-5">1-5 projects</option>
                  <option value="6-15">6-15 projects</option>
                  <option value="16-30">16-30 projects</option>
                  <option value="30+">30+ projects</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2">
                  Tell Us About Your Needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                  placeholder="Types of projects, typical budget range, timeline requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue text-white px-8 py-4 rounded-md hover:bg-brand-blue/90 transition-colors duration-200 font-semibold text-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
