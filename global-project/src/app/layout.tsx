import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  themeColor: '#0A2342',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'BrightSide TV | LED TV Repair Coimbatore | All Brands',
  description:
    'Expert LED, LCD & Smart TV repair in Coimbatore. Samsung, LG, Sony, Mi, TCL & more. Doorstep service. Call 8122992491.',
  keywords: [
    'BrightSide TV',
    'LED TV repair Coimbatore',
    'TV service centre Coimbatore',
    'Samsung TV repair',
    'LG TV repair',
    'Smart TV repair doorstep',
    'Sony TV service Coimbatore',
    'Mi TV repair Gandhipuram',
    'Laser COF bonding Coimbatore',
  ],
  authors: [{ name: 'BrightSide TV Service Centre' }],
  metadataBase: new URL('https://globaltvrepaircoimbatore.com'),
  alternates: {
    canonical: 'https://globaltvrepaircoimbatore.com',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'BrightSide TV | LED TV Repair Coimbatore | All Brands',
    description:
      'Expert LED, LCD & Smart TV repair in Coimbatore. Samsung, LG, Sony, Mi, TCL & more. Doorstep service. Call 8122992491.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://globaltvrepaircoimbatore.com',
    siteName: 'BrightSide TV',
    images: [
      {
        url: '/hero-technician.jpg',
        width: 1200,
        height: 630,
        alt: 'BrightSide TV Service Centre Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightSide TV | LED TV Repair Coimbatore | All Brands',
    description:
      'Doorstep TV service in Coimbatore. 1-Year Display Warranty, 6-Month Motherboard & Backlight Warranty. Call 8122992491 now!',
    images: ['/hero-technician.jpg'],
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
        '@id': 'https://globaltvrepaircoimbatore.com/#business',
        name: 'BrightSide TV Service Centre',
        alternateName: 'BrightSide TV Repair',
        url: 'https://globaltvrepaircoimbatore.com',
        logo: 'https://globaltvrepaircoimbatore.com/assets/brightside-tv-logo.svg',
        image: 'https://globaltvrepaircoimbatore.com/hero-technician.jpg',
        telephone: '+918122992491',
        areaServed: 'Coimbatore',
        serviceType: 'LED TV Repair',
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
            name: 'Call BrightSide TV Technician',
            target: 'tel:+918122992491',
          },
          {
            '@type': 'ReserveAction',
            name: 'Book Doorstep TV Inspection',
            target: 'https://globaltvrepaircoimbatore.com/#booking-form',
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        itemScope
        itemType="https://schema.org/LocalBusiness"
        className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased selection:bg-[#FF8C00] selection:text-white"
      >
        <meta itemProp="name" content="BrightSide TV Service Centre" />
        <meta itemProp="telephone" content="+918122992491" />
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
