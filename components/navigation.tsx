'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
    { href: '/contractors', label: 'Contractors' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-gray-900/70 backdrop-blur-md shadow-lg py-1'
          : 'bg-black/30 backdrop-blur-md py-2'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-4xl md:text-5xl font-script transition-colors duration-300 leading-none flex items-center text-white drop-shadow-md"
          >
            Thornton & Sons
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-300 font-medium text-white/90 hover:text-white drop-shadow-md"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+17759013743"
              className="flex items-center gap-1.5 bg-brand-blue text-white px-4 py-1.5 rounded text-sm hover:bg-brand-blue/90 transition-colors duration-200 font-medium shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-colors text-white hover:text-white/80"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 pt-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="transition-colors duration-200 font-medium py-2 text-white/90 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+17759013743"
                className="flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-brand-blue/90 transition-colors duration-200 font-medium"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
