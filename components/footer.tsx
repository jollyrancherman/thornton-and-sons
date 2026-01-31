export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Kitchen Cabinets', href: '#services' },
      { label: 'Office Cabinets', href: '#services' },
      { label: 'Custom Trim', href: '#services' },
      { label: 'Custom Doors', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">
              Thornton & Sons
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Premium custom cabinetry for discerning homeowners. Crafting
              exceptional spaces with unparalleled quality and attention to detail.
            </p>
            <div className="space-y-2 text-sm">
              <p>123 Craftsman Lane</p>
              <p>Your City, ST 12345</p>
              <p>
                <a
                  href="tel:+17759013743"
                  className="hover:text-brand-blue transition-colors"
                >
                  (775) 901-3743
                </a>
              </p>
              <p>
                <a
                  href="mailto:thorntonandsons22@yahoo.com"
                  className="hover:text-brand-blue transition-colors"
                >
                  thorntonandsons22@yahoo.com
                </a>
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              &copy; {currentYear} Thornton & Sons Custom Cabinetry. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-brand-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
