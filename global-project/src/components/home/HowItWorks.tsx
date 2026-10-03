'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { PhoneCall, Truck, ShieldCheck, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import { useBookingModal } from '@/components/common/BookingModal';

export const HowItWorks: React.FC = () => {
  const { openBookingModal } = useBookingModal();
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      icon: PhoneCall,
      title: 'Instant Booking',
      desc: 'Call 8122992491 or click Book Repair with your TV brand, screen size, and issue description.',
    },
    {
      num: '02',
      icon: Truck,
      title: 'Doorstep Visit (Day 1-2)',
      desc: 'Our certified senior technician arrives with diagnostic tools and genuine replacement parts.',
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Repair & Warranty',
      desc: 'On-site precision repair or laser bonding with a comprehensive quality check & written warranty card.',
    },
  ];

  return (
    <motion.section
      id="how-it-works"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="section-padding bg-white border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8C00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 mb-2">
            Simple 3-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-[#0A2342] tracking-tight leading-tight">
            How Our TV Service Works
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2.5 max-w-2xl mx-auto leading-relaxed font-normal">
            Hassle-free, transparent doorstep TV service designed for Coimbatore homes and businesses.
          </p>
        </div>

        {/* 3-Step Horizontal Timeline with Framer Motion */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-8 border-t-2 border-dashed border-gray-300 pointer-events-none -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-white hover:border-[#0A2342] hover:shadow-hover transition-all"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-[#0A2342] text-white text-[11px] font-black">
                STEP {step.num}
              </div>

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2342] text-white shadow-md mb-5">
                <step.icon className="h-8 w-8 text-[#FF8C00]" />
              </div>

              <h3 className="text-xl font-black text-[#0A2342] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Us Spotlight Card with Real Image 5 (smartfix-about.jpg) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl bg-[#0A2342] text-white overflow-hidden border border-navy-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          {/* Left Column: Image 5 (Vintage TV repair / craftsmanship) */}
          <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[320px] w-full">
            <Image
              src="/assets/images/smartfix-about.jpg"
              alt="Smart Fix electronics technician craftsmanship and repair history"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A2342]/70 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Column: About Us Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#FF8C00]">
              <HeartHandshake className="h-3.5 w-3.5" /> Craftsmanship &amp; Trust
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              About Smart Fix LED TV Center
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              Founded on deep technical expertise and genuine dedication to electronics repair, Smart Fix brings decades of cumulative experience to modern Smart, OLED, and 4K displays. We believe every television has a heartbeat, and our precision micro-soldering and laser bonding breathe new life into damaged screens.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-gray-200">
                  Senior technicians trained in modern display panel architectures
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-gray-200">
                  Up to 1-Year written warranty on replaced components
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="px-6 py-3 rounded-xl bg-[#FF8C00] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-black shadow-cta transition-transform hover:scale-105 active:scale-95"
              >
                Book Inspection With Our Experts
              </button>
              <a
                href="tel:8122992491"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-colors"
              >
                Call Helpline: 8122992491
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
