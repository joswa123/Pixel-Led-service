'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  Tv,
  CircuitBoard,
  Wrench,
  Microscope,
  Award,
  Cpu,
  Building,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Phone,
  Clock,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { services, Service } from '@/data/services';
import { useBookingModal } from '@/components/common/BookingModal';

const iconMap = {
  Tv,
  CircuitBoard,
  Wrench,
  Microscope,
  Award,
  Cpu,
  Building,
};

const symptomTags: Record<string, string[]> = {
  'panel-repair': ['Screen Lines', 'Double Picture', 'Flickering'],
  'motherboard': ['Standby Light', 'No Power', 'HDMI Fault'],
  'backlight': ['Black Screen', 'Sound OK', 'Dim Picture'],
  'cof-bonding': ['Water Damage', 'COF IC Bond', 'Half Screen'],
  'wall-mount': ['Fixed & Swivel', 'Concealed Wires', '32″ - 85″'],
  'software': ['Android Logo Stuck', 'Boot Loop', 'Wi-Fi Issue'],
};

const servicePerks: Record<string, string[]> = {
  'panel-repair': [
    'Original factory-sealed display panel restoration',
    'Zero dead pixel guarantee & 4K color testing',
    '1-Year Comprehensive Replacement Warranty',
  ],
  motherboard: [
    'OEM tested boards & chip-level micro-soldering',
    'Solves standby red light, boot loops & HDMI faults',
    '6-Month Written Replacement Warranty',
  ],
  backlight: [
    '100% brand-new OEM high-luminance LED strips',
    'Fixes black screen with audio & blue tint issues',
    '6-Month High-Luminance Written Warranty',
  ],
  'cof-bonding': [
    'Precision laser COF IC micro-bonding machine',
    'Fixes vertical lines, color bars & water damage',
    '6-Month Laser Bonding Warranty',
  ],
  'wall-mount': [
    'Fixed, tilt & 180° swivel heavy-duty brackets',
    'Support for 32" to 85"+ LED & Curved TVs',
    'Same-Day doorstep installation in Coimbatore',
  ],
  software: [
    'Android TV, Google TV, WebOS & Tizen recovery',
    'Boot logo loop fix & firmware flash update',
    'Fast Day 1 doorstep software fix',
  ],
};

export const ServiceCarousel: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { openBookingModal } = useBookingModal();
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsAppQuote = (svc: Service) => {
    const msg = `Hi Smart Fix, I need repair service for *${svc.title}*. Please share a free quote and technician availability in Coimbatore.`;
    window.open(`https://wa.me/918122992491?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const filteredServices = useMemo(() => {
    if (selectedFilter === 'all') return services;
    return services.filter((s) => s.id === selectedFilter);
  }, [selectedFilter]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="services"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="section-padding bg-[#F8F9FA] border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8C00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 mb-2">
              <Wrench className="h-3.5 w-3.5" /> Component-Level Precision
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-[#0A192F] tracking-tight leading-tight">
              Common TV Issues We Solve
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl font-normal leading-relaxed">
              Professional doorstep diagnostic across Coimbatore. Genuine OEM parts, certified engineers, and up to 1-Year written warranty.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openBookingModal()}
            className="self-start md:self-auto flex items-center gap-2 h-11 px-5 rounded-xl bg-[#0A192F] hover:bg-[#050B14] text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-105 active:scale-95 font-curvy shrink-0"
          >
            <span>Book TV Inspection</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
          {[
            { id: 'all', label: 'All 6 Common Issues' },
            { id: 'panel-repair', label: 'Display & Panel' },
            { id: 'motherboard', label: 'Motherboard & Power' },
            { id: 'backlight', label: 'Backlight / LED Strips' },
            { id: 'cof-bonding', label: 'Laser COF Bonding' },
            { id: 'wall-mount', label: 'Wall Mounting' },
            { id: 'software', label: 'Smart TV OS' },
          ].map((tab) => {
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black transition-all shrink-0 font-curvy ${
                  isSelected
                    ? 'bg-[#0A192F] text-white shadow-md scale-102'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-2xs'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            BALANCED FULL-WIDTH GRID (No empty white spaces on any screen!)
           ───────────────────────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          {filteredServices.map((svc) => {
            const SvcIcon = iconMap[svc.iconName] || Tv;
            const tags = symptomTags[svc.id] || [];
            const perks = servicePerks[svc.id] || [];

            return (
              <motion.div
                key={svc.id}
                variants={cardVariants}
                className="group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-gray-200/90 hover:border-[#0A192F] bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Real Image Header */}
                {svc.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 font-curvy">
                        {svc.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-[11px] font-black bg-[#FF8C00] text-white px-2.5 py-0.5 rounded-md font-curvy shadow-xs">
                        {svc.warranty}
                      </span>
                      <span className="text-[10px] font-bold bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-gray-200">
                        {svc.timeEstimate}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-amber-300 transition-colors shrink-0 border border-navy-100 shadow-xs">
                        <SvcIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-[#0A192F] leading-snug group-hover:text-[#FF8C00] transition-colors font-curvy">
                          {svc.title}
                        </h4>
                        <span className="text-[11px] font-bold text-emerald-600">
                          {svc.quoteTag}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {svc.description}
                    </p>

                    {/* Symptoms Tags */}
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                          >
                            &bull; {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* 3 Key Perks */}
                    <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-700">
                      {perks.map((perk, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-tight">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openBookingModal({ service: svc.title })}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#0A192F] hover:bg-[#FF8C00] text-white font-black text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 font-curvy"
                    >
                      <span>Book Inspection</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleWhatsAppQuote(svc)}
                      className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
                      title="WhatsApp Quote"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      <span className="hidden sm:inline">Quote</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            FULL-WIDTH ASSISTANCE CALLOUT BANNER (Spans all columns)
           ───────────────────────────────────────────────────────────── */}
        <div className="rounded-2xl bg-[#0A192F] text-white p-6 sm:p-8 shadow-xl border border-navy-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4 text-left">
              <div className="h-12 w-12 rounded-xl bg-[#FF8C00]/20 text-[#FF8C00] flex items-center justify-center shrink-0 border border-[#FF8C00]/30">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-black text-white font-curvy leading-snug">
                  Don&apos;t See Your Exact TV Issue Listed Above?
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl leading-relaxed font-normal">
                  From lightning surge damage and sound IC failure to water ingress and remote sensor issues, our senior engineers arrive equipped with doorstep testing gear across all Coimbatore PIN codes.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:8122992491"
                className="flex-1 lg:flex-initial h-11 px-5 rounded-xl bg-white hover:bg-gray-100 text-[#0A192F] font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm font-curvy"
              >
                <Phone className="h-4 w-4 text-[#FF8C00] fill-current" />
                <span>Call 8122992491</span>
              </a>

              <a
                href="https://wa.me/918122992491?text=Hi%20Smart%20Fix,%20I%20have%20a%20TV%20fault%20not%20listed.%20Can%20you%20help%20diagnose%20it?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-initial h-11 px-5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-ctaGreen transition-all font-curvy"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>WhatsApp Diagnostic</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceCarousel;
