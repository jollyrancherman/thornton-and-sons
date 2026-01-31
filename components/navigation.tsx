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
            className="text-2xl sm:text-3xl md:text-5xl font-script transition-colors duration-300 leading-none flex items-center text-white drop-shadow-md"
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
            className="md:hidden p-3 -mr-2 transition-colors text-white hover:text-white/80 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
          <div className="md:hidden mt-4 pb-6 pt-4 border-t border-white/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="transition-colors duration-200 font-medium py-3 px-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+17759013743"
                className="flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-4 rounded-md hover:bg-brand-blue/90 transition-colors duration-200 font-medium mt-2 min-h-[48px]"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
