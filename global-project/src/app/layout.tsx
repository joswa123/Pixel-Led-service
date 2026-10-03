import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { QuickChatWidget } from '@/components/common/QuickChatWidget';
import { BookingModalProvider } from '@/components/common/BookingModal';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0A2342',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Smart Fix | LED TV Repair Coimbatore | All Brands',
  description:
    'Expert LED, LCD & Smart TV repair in Coimbatore. Samsung, LG, Sony, Mi, TCL & more. Doorstep service. Call 8122992491.',
  keywords: [
    'Smart Fix',
    'Smart Fix LED TV Center',
    'LED TV repair Coimbatore',
    'TV service centre Coimbatore',
    'Samsung TV repair',
    'LG TV repair',
    'Smart TV repair doorstep',
    'Sony TV service Coimbatore',
    'Mi TV repair Gandhipuram',
    'Laser COF bonding Coimbatore',
  ],
  authors: [{ name: 'Smart Fix LED TV Center' }],
  metadataBase: new URL('https://smartfixtvcoimbatore.com'),
  alternates: {
    canonical: 'https://smartfixtvcoimbatore.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Smart Fix | LED TV Repair Coimbatore | All Brands',
    description:
      'Expert LED, LCD & Smart TV repair in Coimbatore. Samsung, LG, Sony, Mi, TCL & more. Doorstep service. Call 8122992491.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://smartfixtvcoimbatore.com',
    siteName: 'Smart Fix LED TV Center',
    images: [
      {
        url: '/assets/images/smartfix-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Fix LED TV Center Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Fix | LED TV Repair Coimbatore | All Brands',
    description:
      'Doorstep TV service in Coimbatore within Day 1-2. 1-Year Display Warranty, 6-Month Motherboard & Backlight Warranty. Call 8122992491 now!',
    images: ['/assets/images/smartfix-hero.jpg'],
  },
  other: {
    'format-detection': 'telephone=yes',
    'geo.region': 'IN-TN',
    'geo.placename': 'Coimbatore',
    'geo.position': '11.0168;76.9558',
    'ICBM': '11.0168, 76.9558',
    'telephone': '+918122992491',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://smartfixtvcoimbatore.com/#business',
        name: 'Smart Fix LED TV Center',
        alternateName: 'Smart Fix TV Repair',
        url: 'https://smartfixtvcoimbatore.com',
        logo: 'https://smartfixtvcoimbatore.com/assets/smart-fix-logo.svg',
        image: 'https://smartfixtvcoimbatore.com/assets/images/smartfix-hero.jpg',
        telephone: '+918122992491',
        areaServed: 'Coimbatore',
        serviceType: 'LED TV Repair',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Coimbatore',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 11.0168,
          longitude: 76.9558,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday'],
            opens: '10:00',
            closes: '16:00',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+918122992491',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Tamil'],
        },
        potentialAction: [
          {
            '@type': 'CommunicateAction',
            name: 'Call Smart Fix Technician',
            target: 'tel:+918122992491',
          },
          {
            '@type': 'ReserveAction',
            name: 'Book Doorstep TV Inspection',
            target: 'https://smartfixtvcoimbatore.com/#booking-form',
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${outfit.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/images/pexels-jakubzerdzicki-35490407.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-[#0A2342] text-gray-900 font-sans antialiased selection:bg-[#FF8C00] selection:text-white"
      >
        <BookingModalProvider>
          <Header />
          <main className="flex-1 bg-white">{children}</main>
          <Footer />
          <QuickChatWidget />
          <Toaster position="top-right" richColors />
        </BookingModalProvider>
      </body>
    </html>
  );
}
