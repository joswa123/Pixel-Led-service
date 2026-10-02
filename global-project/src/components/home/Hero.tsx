'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, ShieldCheck, CheckCircle2, Award, Clock, Star, Wrench, Sparkles, MapPin, Tv, Cpu } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BookingForm } from './BookingForm';

interface HeroProps {
  initialBrand?: string;
  initialPincode?: string;
}

export const Hero: React.FC<HeroProps> = ({ initialBrand, initialPincode }) => {
  return (
    <section className="relative bg-white pt-6 sm:pt-8 lg:pt-10 pb-14 lg:pb-20 border-b border-gray-200 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left 60% Column - Aligned to top */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 pt-0">
            {/* Header Badge with BrightSide TV Branding */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50/90 pl-3 pr-3.5 py-1 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-[#0A2342]">
                BrightSide TV &bull; Coimbatore Doorstep Service
              </span>
              <span className="flex h-2 w-2 rounded-full bg-[#FFB347] animate-ping" />
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-black tracking-tight text-[#0A2342] leading-[1.12]">
              Expert LED &amp; Smart TV Repair in Coimbatore
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg font-bold text-gray-700 leading-snug">
              All brands serviced. Doorstep repair across Coimbatore — we try to reach you <span className="text-[#0A2342] font-black underline decoration-[#FFB347] decoration-2 underline-offset-4">within a day</span>, and some locations get service <span className="text-[#FF8C00] font-black">in hours</span> based on your area.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl font-normal">
              Specialized Laser COF bonding, chip-level motherboard replacement, and original LED backlight strip upgrades. Direct doorstep service across Gandhipuram, RS Puram, Saravanampatti, and all Coimbatore PIN codes.
            </p>

            {/* Exact 3 Hero Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-xs sm:text-sm font-bold text-[#0A2342] shadow-xs">
                <Award className="h-4 w-4 text-[#FFB347]" />
                <span>Verified Technicians</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-xs sm:text-sm font-bold text-[#0A2342] shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Free Diagnosis</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-xs sm:text-sm font-bold text-[#0A2342] shadow-xs">
                <Tv className="h-4 w-4 text-[#0A2342]" />
                <span>All Brands Serviced</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Call Now (Navy) */}
              <a
                href="tel:8122992491"
                itemProp="telephone"
                className="flex items-center gap-2.5 h-11 sm:h-12 px-5 sm:px-6 rounded-lg bg-[#0A2342] hover:bg-navy-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="h-4 w-4 text-[#FFB347] fill-current" />
                <span>Call Now: 8122992491</span>
              </a>

              {/* WhatsApp Us (Green) */}
              <a
                href="https://wa.me/918122992491?text=Hi%20BrightSide%20TV,%20I%20need%20TV%20repair%20service%20in%20Coimbatore."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 h-11 sm:h-12 px-5 sm:px-6 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs sm:text-sm shadow-ctaGreen transition-all hover:scale-105 active:scale-95"
              >
                <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Authentic Workshop Banner Card with Lab Photo & Real Board Image */}
            <div className="pt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {/* Card 1: Diagnostic Laboratory */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-2.5 sm:p-3 flex items-center gap-3 shadow-xs">
                <div className="relative h-13 w-15 sm:h-14 sm:w-16 rounded-lg overflow-hidden shrink-0 border border-gray-200 bg-gray-200">
                  <Image
                    src="/hero-technician.jpg"
                    alt="BrightSide TV Certified Chip-Level Service Lab Coimbatore"
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
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-2.5 sm:p-3 flex items-center gap-3 shadow-xs">
                <div className="relative h-13 w-15 sm:h-14 sm:w-16 rounded-lg overflow-hidden shrink-0 border border-gray-200 bg-gray-200">
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
