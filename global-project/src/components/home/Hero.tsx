'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Phone,
  Award,
  CheckCircle2,
  Tv,
  ShieldCheck,
  ArrowRight,
  Clock,
  Truck,
  Check,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useBookingModal } from '@/components/common/BookingModal';

interface HeroProps {
  initialBrand?: string;
  initialPincode?: string;
}

export const Hero: React.FC<HeroProps> = () => {
  const { openBookingModal } = useBookingModal();
  const shouldReduceMotion = useReducedMotion();

  // 4 Feature Pillars inspired by newtechelectronics.in
  const featurePillars = [
    {
      title: 'Doorstep Service',
      desc: 'Prompt home visit across all Coimbatore 641xxx PIN codes within Day 1-2.',
      icon: Truck,
      highlight: 'Day 1-2 Visit',
    },
    {
      title: 'Same Day Delivery & Testing',
      desc: 'Comprehensive on-site calibration & picture testing before you pay.',
      icon: Clock,
      highlight: 'Rapid Turnaround',
    },
    {
      title: 'Warranty On Service',
      desc: 'Official written warranty card provided for up to 1 year on displays and spares.',
      icon: ShieldCheck,
      highlight: 'Up to 1 Year',
    },
    {
      title: 'Expert Service Engineers',
      desc: 'Specialized laser COF bonding and chip-level motherboard technicians.',
      icon: Award,
      highlight: 'Certified Experts',
    },
  ];

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between text-white pt-8 sm:pt-12 pb-14 sm:pb-16 overflow-hidden border-b border-navy-900">
      {/* 1. HERO BACKGROUND IMAGE: pexels-jakubzerdzicki-35490407 with Deep Obsidian / Navy Multi-Layer Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/assets/images/pexels-jakubzerdzicki-35490407.jpg"
          alt="Smart Fix LED TV Center professional smart TV repair Coimbatore living room"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Obsidian Navy Gradient Overlay for flawless text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/95 via-[#0A192F]/90 to-[#050B14]/80 backdrop-blur-[1px]" />
        {/* Subtle radial warmth and cyan tech accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,107,0,0.18),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,229,255,0.08),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12 sm:space-y-14 my-auto">
        {/* Main Hero Split: Left Content + Right Live Coimbatore Diagnostic Hub (NO FORM) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 Cols): Headline, Subheadline, Trust Badges, Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1.5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Smart Fix &bull; Coimbatore Doorstep TV Service
              </span>
            </div>

            {/* H1 Headline: Refined font weight, tracking, and vibrant contrast */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-[-0.03em] text-white leading-[1.12]">
              Expert LED &amp; Smart TV Repair in <span className="text-[#FF8C00]">Coimbatore</span>
            </h1>

            {/* Subheadline: Clear visual hierarchy */}
            <p className="text-lg sm:text-xl font-semibold text-gray-100 leading-snug">
              All brands serviced &bull; Doorstep inspection within{' '}
              <span className="text-[#FF8C00] font-bold">
                Day 1-2
              </span>{' '}
              across Coimbatore.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl font-normal">
              Restore your home entertainment with Coimbatore&apos;s leading TV specialists. From Laser COF bonding and 100% brand-new OEM backlight arrays to micro-soldering motherboard repairs, our certified engineers arrive equipped right at your doorstep.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold text-white shadow-xs">
                <Award className="h-4 w-4 text-[#FF6B00]" />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold text-white shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Free Diagnosis</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold text-white shadow-xs">
                <Tv className="h-4 w-4 text-cyan-300" />
                <span>All 32″ to 85″ Brands</span>
              </div>
            </div>

            {/* Action Buttons: Call Now + WhatsApp Us + Book Repair */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Call Now Button */}
              <a
                href="tel:8122992491"
                itemProp="telephone"
                className="flex items-center gap-2.5 h-12 px-6 rounded-xl bg-white hover:bg-gray-100 text-[#050B14] font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="h-4 w-4 text-[#FF6B00] fill-current" />
                <span>Call: 8122992491</span>
              </a>

              {/* WhatsApp Us Button */}
              <a
                href="https://wa.me/918122992491?text=Hi%20Smart%20Fix,%20I%20need%20doorstep%20TV%20repair%20service%20in%20Coimbatore."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 h-12 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-xs sm:text-sm shadow-ctaGreen transition-all hover:scale-105 active:scale-95"
              >
                <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>WhatsApp Us</span>
              </a>

              {/* Book Repair (Orange, opens BookingModal) */}
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="flex items-center gap-2 h-12 px-6 rounded-xl bg-[#FF6B00] hover:bg-[#E65100] text-white font-black text-xs sm:text-sm shadow-cta transition-all hover:scale-105 active:scale-95"
              >
                <span>Book Free Inspection</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-300">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-400" /> Doorstep Service Across Coimbatore
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-amber-300" /> Up to 1 Year Written Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#00E5FF]" /> 100% Genuine OEM Spares
              </span>
            </div>
          </motion.div>

          {/* Right Column (5 Cols): Clean Visual Image Seamlessly Merged into Background */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Soft ambient background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B00]/20 via-[#00E5FF]/15 to-[#FF6B00]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

              {/* Framed Image Container with Clean Natural Shadow */}
              <div className="relative aspect-[4/3] sm:aspect-[14/11] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="/assets/images/Gemini_Generated_Image_rc0kuvrc0kuvrc0k.png"
                  alt="Smart Fix Senior LED TV Repair Technician testing TV doorstep in Coimbatore"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />

                {/* Subtle crystal rim light */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
              </div>

              {/* Clean Quick Action Trigger Bar below image */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="flex-1 py-3.5 px-5 rounded-2xl bg-[#FF6B00] hover:bg-[#E65100] text-white font-black text-xs sm:text-sm shadow-cta flex items-center justify-center gap-2 transition-all hover:scale-102 active:scale-98"
                >
                  <span>Book Doorstep TV Service</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="tel:8122992491"
                  className="py-3.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0"
                >
                  <Phone className="h-4 w-4 text-[#FF6B00]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Pillars (Inspired by newtechelectronics.in structure) */}
        <div className="pt-4 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featurePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl p-4 sm:p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF6B00]/40 backdrop-blur-md transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="h-9 w-9 rounded-xl bg-[#FF6B00]/15 group-hover:bg-[#FF6B00] flex items-center justify-center text-[#FF6B00] group-hover:text-white transition-colors">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full font-curvy">
                      {pillar.highlight}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white group-hover:text-amber-300 transition-colors mb-1 font-curvy">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
