'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/home/Hero';
import { ServiceCarousel } from '@/components/home/ServiceCarousel';
import { BrandGrid } from '@/components/home/BrandGrid';
import { PincodeSearch } from '@/components/home/PincodeSearch';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
import { Phone, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function HomePage() {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedPincode, setSelectedPincode] = useState<string>('');

  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName);
  };

  const handlePincodeSelect = (pincodeStr: string) => {
    setSelectedPincode(pincodeStr);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Split Layout: Left Value Proposition + Right Booking Form) */}
      <Hero
        initialBrand={selectedBrand}
        initialPincode={selectedPincode}
      />

      {/* 2. Common TV Issues We Solve (Services Showcase) */}
      <ServiceCarousel />

      {/* 3. Supported TV Brands (Tier 1: 15 Active, Tier 2: 10 Coming Soon) */}
      <BrandGrid onSelectBrand={handleBrandSelect} />

      {/* 4. Service Areas & 6-Zone Pincode Finder */}
      <PincodeSearch onSelectPincode={handlePincodeSelect} />

      {/* 5. How Our TV Service Works (3-Step Timeline) */}
      <HowItWorks />

      {/* 6. Customer Testimonials (3-Column Grid) */}
      <Testimonials />

      {/* 7. Frequently Asked Questions (8 Accordion Items) */}
      <FAQ />

      {/* 8. Final Conversion CTA Banner */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-[#0A2342] text-white p-8 sm:p-12 text-center shadow-xl border border-navy-800">
            <div className="max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF8C00] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                <Zap className="h-3.5 w-3.5 fill-current" /> Fast Coimbatore Dispatch
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Ready for Day 1-2 Doorstep TV Repair in Coimbatore?
              </h2>

              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Connect directly with our senior technician team. Transparent quotes, genuine spare parts, and 90-day written warranty on every job.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="tel:8122992491"
                  className="flex items-center gap-2 h-12 px-6 rounded-lg bg-white text-[#0A2342] font-bold text-sm sm:text-base hover:bg-gray-100 shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="h-4 w-4 text-[#FF8C00]" />
                  <span>Call 8122992491 Now</span>
                </a>

                <a
                  href="https://wa.me/918122992491?text=Hi%20Global%20TV,%20I%20want%20to%20book%20a%20doorstep%20TV%20inspection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 h-12 px-6 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm sm:text-base shadow-ctaGreen transition-all hover:scale-105 active:scale-95"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
