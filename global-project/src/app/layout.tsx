import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import Preloader from '@/components/common/Preloader';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { MobileStickyCTA } from '@/components/common/MobileStickyCTA';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LED TV Repair Coimbatore | All Brands | GLOBAL TV Service',
  description:
    'Expert LED, LCD & Smart TV repair in Coimbatore. Samsung, LG, Sony, Mi, TCL & more. Doorstep service. 90-day warranty. Call 8122992491.',
  keywords: [
    'LED TV repair Coimbatore',
    'TV service centre Coimbatore',
    'Samsung TV repair',
    'LG TV repair',
    'Smart TV repair doorstep',
    'Sony TV service Coimbatore',
    'Mi TV repair Gandhipuram',
    'COF bonding machine repair Coimbatore',
  ],
  authors: [{ name: 'GLOBAL TV Service Centre' }],
  openGraph: {
    title: 'LED TV Repair Coimbatore | All Brands | GLOBAL TV Service',
    description:
      'Expert LED, LCD & Smart TV repair in Coimbatore. Samsung, LG, Sony, Mi, TCL & more. Doorstep service. 90-day warranty. Call 8122992491.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://globaltvrepaircoimbatore.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GLOBAL TV Service Centre',
    telephone: '+918122992491',
    areaServed: 'Coimbatore',
    serviceType: 'LED TV Repair',
    priceRange: '₹399 - ₹2500',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased selection:bg-[#FF8C00] selection:text-white">
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
