'use client';

import React from 'react';
import { motion, useReducedMotion, LazyMotion, domAnimation } from 'framer-motion';
import { Hero } from '@/components/home/Hero';
import { WarrantyGuarantee } from '@/components/home/WarrantyGuarantee';
import { ServiceCarousel } from '@/components/home/ServiceCarousel';
import { BrandGrid } from '@/components/home/BrandGrid';
import { PincodeSearch } from '@/components/home/PincodeSearch';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
import { Phone, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useBookingModal } from '@/components/common/BookingModal';

export default function HomePage() {
  const { openBookingModal } = useBookingModal();
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col">
      {/* 1. Hero Section (Split Layout: Left Value Proposition + Right Image with Overlay & Booking Trigger) */}
      <Hero />

      {/* 2. Official Warranty Guarantee Section */}
      <WarrantyGuarantee />

      {/* 3. Common TV Issues We Solve (Services Showcase - No Prices, Call for Quote) */}
      <ServiceCarousel />

      {/* 4. Supported TV Brands (Tier 1: 15 Active, Tier 2: 10 Coming Soon) */}
      <BrandGrid />

      {/* Clean White Breathing Gap with Guarantee Banner between Brands & Pincodes */}
      <div className="py-10 sm:py-14 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-black text-[#0A2342] uppercase tracking-wider font-curvy text-center">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#FF8C00]" />
              100% Genuine OEM Spares
            </span>
            <span className="hidden sm:inline-block text-gray-300">&bull;</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              1-Year Written Display Warranty
            </span>
            <span className="hidden sm:inline-block text-gray-300">&bull;</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#0A2342]" />
              Day 1-2 Doorstep Turnaround Across Coimbatore
            </span>
          </div>
        </div>
      </div>

      {/* 5. Service Areas & 6-Zone Pincode Finder */}
      <PincodeSearch />

      {/* 6. How Our TV Service Works (3-Step Timeline + About Us Image 5) */}
      <HowItWorks />

      {/* 7. Customer Testimonials (3-Column Grid) */}
      <Testimonials />

      {/* 8. Frequently Asked Questions (8 Accordion Items) */}
      <FAQ />

      {/* 9. Final Conversion CTA Banner with Framer Motion */}
      <motion.section
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="section-padding bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-[#0A2342] text-white p-8 sm:p-12 text-center shadow-2xl border border-navy-800">
            <div className="max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF8C00] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <Truck className="h-3.5 w-3.5 fill-current" /> Fast Coimbatore Dispatch
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-tight">
                Ready for Doorstep TV Repair in Coimbatore?
              </h2>

              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
                Connect directly with the Smart Fix senior technician team. Free diagnosis, genuine spare parts, and written warranty on every job.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="tel:8122992491"
                  itemProp="telephone"
                  className="flex items-center gap-2 h-12 px-6 rounded-xl bg-white text-[#0A2342] font-black text-sm sm:text-base hover:bg-gray-100 shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="h-4 w-4 text-[#FF8C00] fill-current" />
                  <span>Call 8122992491 Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="flex items-center gap-2 h-12 px-6 rounded-xl bg-[#FF8C00] hover:bg-[#EA580C] text-white font-black text-sm sm:text-base shadow-cta transition-all hover:scale-105 active:scale-95"
                >
                  <span>Book Repair Online</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="https://wa.me/918122992491?text=Hi%20Smart%20Fix,%20I%20want%20to%20book%20a%20doorstep%20TV%20inspection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 h-12 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm sm:text-base shadow-ctaGreen transition-all hover:scale-105 active:scale-95"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
    </LazyMotion>
  );
}
