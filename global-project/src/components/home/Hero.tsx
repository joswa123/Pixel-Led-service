'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, ShieldCheck, CheckCircle2, Award, Clock, Star, Wrench, Sparkles, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BookingForm } from './BookingForm';

interface HeroProps {
  initialBrand?: string;
  initialPincode?: string;
}

export const Hero: React.FC<HeroProps> = ({ initialBrand, initialPincode }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="relative bg-white pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-gray-200 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left 60% Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Badge with Logo */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50/90 pl-1.5 pr-4 py-1.5 shadow-sm">
              <div className="relative h-6 w-6 rounded-full overflow-hidden bg-white border border-gray-200 shrink-0">
                <Image
                  src="/logo-main.jpg"
                  alt="GLOBAL TV"
                  fill
                  className="object-contain p-0.5"
                  sizes="24px"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A2342]">
                Coimbatore&apos;s Dedicated TV Service Center
              </span>
              <span className="flex h-2 w-2 rounded-full bg-[#FF8C00] animate-ping" />
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-[#0A2342] leading-[1.12]">
              Expert LED &amp; Smart TV Repair in Coimbatore
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-bold text-gray-700 leading-snug">
              All brands serviced. Doorstep repair across Coimbatore within <span className="text-[#0A2342] font-black underline decoration-[#FF8C00] decoration-2 underline-offset-4">Day 1-2</span>.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl font-normal">
              Specialized Laser COF bonding, chip-level motherboard reballing, and original backlight strip replacements. Direct doorstep service across Gandhipuram, RS Puram, Saravanampatti, and all Coimbatore PIN codes.
            </p>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-xs font-bold text-[#0A2342]">
                <ShieldCheck className="h-4 w-4 text-[#FF8C00]" />
                <span>90-Day Spares Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-xs font-bold text-[#0A2342]">
                <Award className="h-4 w-4 text-[#0A2342]" />
                <span>Verified Technicians</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-xs font-bold text-[#0A2342]">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Free Diagnosis On-Site</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Call Now (Navy) */}
              <a
                href="tel:8122992491"
                className="flex items-center gap-2.5 h-12 px-6 rounded-lg bg-[#0A2342] hover:bg-navy-800 text-white font-bold text-sm sm:text-base shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="h-4 w-4 text-[#FF8C00]" />
                <span>Call Now: 8122992491</span>
              </a>

              {/* WhatsApp Us (Green) */}
              <a
                href="https://wa.me/918122992491?text=Hi%20Global%20TV,%20I%20need%20TV%20repair%20service%20in%20Coimbatore."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 h-12 px-6 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm sm:text-base shadow-ctaGreen transition-all hover:scale-105 active:scale-95"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Authentic Workshop Banner Card with Lab Photo & Real Board Image */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {/* Card 1: Diagnostic Laboratory */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 flex items-center gap-3 shadow-sm">
                <div className="relative h-14 w-16 rounded-lg overflow-hidden shrink-0 border border-gray-200 bg-gray-200">
                  <Image
                    src="/hero-technician.jpg"
                    alt="GLOBAL TV Certified Chip-Level Service Lab Coimbatore"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                    <span className="font-bold text-[#0A2342] text-[11px] ml-1">4.9/5</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#0A2342] leading-tight">
                    Dedicated Chip-Level Lab
                  </h4>
                  <p className="text-[10px] text-gray-500">
                    In-house Laser COF micro-bonding
                  </p>
                </div>
              </div>

              {/* Card 2: Genuine Components Stock */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 flex items-center gap-3 shadow-sm">
                <div className="relative h-14 w-16 rounded-lg overflow-hidden shrink-0 border border-gray-200 bg-gray-200">
                  <Image
                    src="/service-board-1.jpg"
                    alt="Genuine TV Motherboard Component Stock"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    100% Genuine
                  </span>
                  <h4 className="text-xs font-bold text-[#0A2342] leading-tight">
                    OEM Spares Inventory
                  </h4>
                  <p className="text-[10px] text-gray-500">
                    Covering all 641xxx PIN codes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right 40% Column: The Core Booking Engine */}
          <div className="lg:col-span-5">
            <BookingForm
              initialBrand={initialBrand}
              initialPincode={initialPincode}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
