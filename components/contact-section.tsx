'use client';

import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with backend API
    console.log('Form submitted:', formData);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your inquiry! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    }, 1000);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-brand-light">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-3 sm:mb-4">
            Start Your Project
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-3xl mx-auto px-2">
            Ready to transform your space? Contact us today for a consultation.
            We&apos;ll discuss your vision and provide expert guidance every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Call to Action Button */}
            <div className="bg-brand-blue text-white p-5 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Call Us Today</h3>
              <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                Speak directly with our team to discuss your project
              </p>
              <a
                href="tel:+17759013743"
                className="flex items-center justify-center gap-2 bg-white text-brand-blue px-4 sm:px-6 py-3 sm:py-4 rounded-md hover:bg-gray-100 transition-colors duration-200 font-bold text-base sm:text-lg shadow-md min-h-[48px]"
              >
                <Phone className="w-5 h-5" />
                (775) 901-3743
              </a>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Email</h4>
                  <a
                    href="mailto:thorntonandsons22@yahoo.com"
                    className="text-brand-gray hover:text-brand-blue transition-colors"
                  >
                    thorntonandsons22@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Location</h4>
                  <p className="text-brand-gray">
                    Gardnerville, Nevada
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-brand-dark mb-2">Business Hours</h4>
                <p className="text-brand-gray text-sm">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-brand-dark mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-dark mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-brand-dark mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    placeholder="(775) 901-3743"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-semibold text-brand-dark mb-2"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a project type</option>
                    <option value="kitchen">Kitchen Cabinets</option>
                    <option value="office">Office Cabinets</option>
                    <option value="den">Den/Living Space</option>
                    <option value="trim">Custom Trim Package</option>
                    <option value="doors">Custom Doors</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-brand-dark mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-md hover:bg-brand-blue/90 transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
