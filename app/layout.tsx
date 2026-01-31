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
  title: 'Thornton & Sons Custom Cabinetry | Three Generations of Excellence',
  description: 'For over 33 years, the Thornton family has crafted premium custom cabinetry in Lake Tahoe and Incline Village. Three generations of master craftsmen specializing in custom cabinets, trim packages, and custom doors.',
  keywords: 'custom cabinets, custom cabinetry, kitchen cabinets, Lake Tahoe cabinets, Incline Village cabinetry, custom trim, custom doors, high-end cabinets, family craftsmen',
  openGraph: {
    title: 'Thornton & Sons Custom Cabinetry',
    description: 'Three Generations of Excellence - Premium custom cabinetry built on faith, family, and craftsmanship',
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
