'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Phone, CheckCircle2, Tv, Cpu, Award } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useBookingModal } from '@/components/common/BookingModal';

export const WarrantyGuarantee: React.FC = () => {
  const { openBookingModal } = useBookingModal();
  const shouldReduceMotion = useReducedMotion();

  const warranties = [
    {
      id: 'display',
      title: 'Display & Panel Replacement',
      duration: '1 Year Warranty',
      subtitle: 'Full Screen & Panel Coverage',
      desc: '100% genuine factory-sealed LED, LCD, OLED & QLED panel replacement. Zero dead pixel guarantee, vibrant 4K clarity, and full 365-day written warranty.',
      icon: Tv,
      badgeBg: 'bg-[#FF8C00] text-white',
      points: [
        '1-Year Comprehensive Replacement Warranty',
        '0 Dead Pixel & Uniform Color Guarantee',
        'Genuine Samsung, LG, Sony & Mi Panels',
        'Safe Doorstep Pickup & Bubble-Pack Delivery',
      ],
    },
    {
      id: 'motherboard',
      title: 'Motherboard & Power Board',
      duration: '6 Months Warranty',
      subtitle: 'Complete Main & Power Board',
      desc: 'OEM tested motherboards and high-grade power supply modules with chip-level micro-soldering. Solves standby light blinking, reboot loops, and HDMI faults.',
      icon: Cpu,
      badgeBg: 'bg-[#0A2342] text-white',
      points: [
        '6-Month Written Replacement Warranty',
        'Factory Tested ICs & Micro-Controller Chips',
        'Protection Against Voltage Surge Failures',
        'Doorstep Repair Within Day 1-2',
      ],
    },
    {
      id: 'backlight',
      title: 'Backlight Strip Upgrade',
      duration: '6 Months Warranty',
      subtitle: 'Full Array LED Strip Upgrade',
      desc: 'Complete replacement of old backlight arrays with 100% brand-new, high-luminance LED strips. Permanently fixes black screen with audio, dim display, or blue tint.',
      icon: Award,
      badgeBg: 'bg-emerald-600 text-white',
      points: [
        '6-Month Written Warranty on LED Strips',
        'Complete Set Replacement (Not Patch Work)',
        'Uniform Heat Dissipation Aluminum Substrate',
        'True Color & Maximum Brightness Restoration',
      ],
    },
  ];

  return (
    <motion.section
      id="warranty"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="section-padding bg-gradient-to-b from-white to-gray-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A2342] bg-navy-50 px-3 py-1 rounded-full border border-navy-100 mb-3">
            <ShieldCheck className="h-4 w-4 text-[#FF8C00]" /> Written Service &amp; Spares Guarantee
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-[#0A2342] tracking-tight leading-tight">
            Official Warranty Protection
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2.5 max-w-2xl mx-auto leading-relaxed font-normal">
            Every replacement component from Smart Fix is backed by an official written warranty card. If any recurring issue occurs during your warranty window, we fix it at <strong>zero extra cost</strong>.
          </p>
        </div>

        {/* 3 Warranty Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {warranties.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-card hover:shadow-hover hover:border-[#0A2342] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2342] text-[#FF8C00] shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm ${item.badgeBg}`}>
                    {item.duration}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0A2342] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-[#C2410C] uppercase tracking-wide mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 pt-4 border-t border-gray-100">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => openBookingModal({ service: item.title })}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 hover:bg-[#0A2342] text-[#0A2342] hover:text-white font-bold text-xs transition-all shadow-sm"
                  >
                    <span>Free Quote For {item.title}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-Out Box */}
        <div className="mt-12 rounded-2xl bg-[#0A2342] text-white p-6 sm:p-8 shadow-xl border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-14 w-14 rounded-2xl bg-[#FF8C00] items-center justify-center text-white shrink-0 shadow-lg">
              <Phone className="h-7 w-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                <ShieldCheck className="h-3.5 w-3.5 fill-current" /> Instant Direct Helpline
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Need Fast Doorstep TV Repair in Coimbatore?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Speak directly with our senior technician at <strong className="text-white">8122992491</strong>. Same-day inspection &amp; 100% free quote.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:8122992491"
              itemProp="telephone"
              className="flex-1 md:flex-initial flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#FF8C00] hover:bg-[#EA580C] text-white font-black text-sm shadow-cta transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="h-4 w-4 fill-current" />
              <span>Call 8122992491 Now</span>
            </a>

            <a
              href="https://wa.me/918122992491?text=Hi%20Smart%20Fix,%20I%20need%20doorstep%20TV%20repair%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm shadow-ctaGreen transition-all hover:scale-105 active:scale-95"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WarrantyGuarantee;
