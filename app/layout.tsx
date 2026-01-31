import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Allura } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thornton & Sons Custom Cabinetry | High-End Custom Cabinets',
  description: 'Premium custom cabinetry for kitchens, offices, and dens. Specializing in custom cabinets, trim packages, and custom doors for discerning homeowners.',
  keywords: 'custom cabinets, custom cabinetry, kitchen cabinets, office cabinets, custom trim, custom doors, high-end cabinets',
  openGraph: {
    title: 'Thornton & Sons Custom Cabinetry',
    description: 'Craftsmanship Beyond Compare - Premium custom cabinetry solutions',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${allura.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
