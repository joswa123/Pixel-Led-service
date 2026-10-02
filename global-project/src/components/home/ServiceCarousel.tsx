'use client';

import React, { useState } from 'react';
import {
  Tv,
  CircuitBoard,
  Wrench,
  Microscope,
  Sparkles,
  Cpu,
  Building,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Clock,
  Zap,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { services, Service } from '@/data/services';
import { Button20 } from '@/components/common/Button20';

const iconMap = {
  Tv,
  CircuitBoard,
  Wrench,
  Microscope,
  Sparkles,
  Cpu,
  Building,
};

export const ServiceCarousel: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(services[0].id);

  const activeService = services.find((s) => s.id === activeId) || services[0];
  const ActiveIcon = iconMap[activeService.iconName] || Tv;

  const handleWhatsAppQuote = (svc: Service) => {
    const msg = `Hi BrightSide TV, I need repair service for *${svc.title}*. Please share a free quote and technician availability in Coimbatore.`;
    window.open(`https://wa.me/918122992491?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleScrollToForm = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Highlights mapped per service for the featured expanded card
  const servicePerks: Record<string, string[]> = {
    'display-replacement': [
      'Original factory-sealed LED/QLED/OLED panels',
      'Zero dead pixel guarantee & 4K color testing',
      '1-Year Comprehensive Replacement Warranty',
      'Bubble-pack doorstep delivery & installation',
    ],
    motherboard: [
      'OEM tested boards & chip-level micro-soldering',
      'Solves standby red light, boot loops & HDMI faults',
      '6-Month Written Replacement Warranty',
      'High-grade voltage surge protected ICs',
    ],
    backlight: [
      'Complete 100% brand-new high-luminance LED strips',
      'Fixes black screen with audio & blue tint issues',
      '6-Month High-Luminance Written Warranty',
      'Uniform heat-sink aluminum backing',
    ],
    'cof-bonding': [
      'Precision laser COF IC micro-bonding machine',
      'Fixes vertical lines, color bars & water damage',
      '6-Month Laser Bonding Warranty',
      'Clean room static-free lab restoration',
    ],
    'panel-repair': [
      'T-Con board repair & voltage regulator tuning',
      'Fixes double-image, negative display & flicker',
      '90-Day Written Service Warranty',
      'Cost-effective alternative to panel replacement',
    ],
    'wall-mount': [
      'Fixed, tilt & 180° swivel heavy-duty brackets',
      'Support for 32" to 85"+ LED & Curved TVs',
      'Concealed cable management & level alignment',
      'Same-Day doorstep installation in Coimbatore',
    ],
    software: [
      'Android TV, Google TV, WebOS & Tizen recovery',
      'Boot logo loop fix & firmware flash update',
      'App crashing & Wi-Fi driver resolution',
      'Fast same-day doorstep software fix',
    ],
    commercial: [
      'Preventive AMC maintenance contracts',
      'Display upkeep for hotels, showrooms & offices',
      'Priority emergency callouts within 2 hours',
      'Bulk servicing discounts across Coimbatore',
    ],
  };

  const currentPerks = servicePerks[activeService.id] || [
    'Certified senior technicians with doorstep kit',
    'Written warranty card issued on completion',
    'Transparent upfront estimate with zero hidden fees',
    'Reach you within a day (in hours based on location across Coimbatore)',
  ];

  // Symptoms solved per service
  const serviceSymptoms: Record<string, string[]> = {
    'display-replacement': ['Vertical/Horizontal Lines', 'Cracked Screen', 'Blank Screen', 'Color Distortion'],
    motherboard: ['Standby Red Light', 'No Power Boot', 'HDMI No Signal', 'Frequent Restart'],
    backlight: ['Sound OK No Picture', 'Dim Dark Screen', 'Blue/Purple Tint', 'Screen Flickering'],
    'cof-bonding': ['Rainbow Lines', 'Water Damage Corrosion', 'Half Screen Blank', 'Jittering Picture'],
    'panel-repair': ['Double Image Ghosting', 'Negative Colors', 'Slow Motion Display', 'Flicker'],
    'wall-mount': ['32" to 85" Screens', 'Concrete & Brick Walls', '180° Full Motion Swivel', 'Concealed Cabling'],
    software: ['Stuck on Android Logo', 'App Crash / Freezing', 'Wi-Fi Driver Failure', 'Firmware Flash'],
    commercial: ['Hotel Room Displays', 'Showroom Video Walls', 'Conference Monitors', 'Preventive AMC'],
  };

  // Diagnostic specs per service
  const serviceSpecs: Record<string, { label: string; value: string }[]> = {
    'display-replacement': [
      { label: 'Screen Sizes', value: '32" to 85"+' },
      { label: 'Panel Types', value: 'LED, OLED, QLED, 4K' },
      { label: 'QC Testing', value: 'Zero Dead-Pixel Test' },
      { label: 'Service Mode', value: 'Doorstep / Lab' },
    ],
    motherboard: [
      { label: 'Components', value: 'OEM ICs & Regulators' },
      { label: 'Diagnostics', value: 'Micro-Soldering Lab' },
      { label: 'Protection', value: 'Voltage Surge Shield' },
      { label: 'Turnaround', value: 'In Hours to 1 Day' },
    ],
    backlight: [
      { label: 'Strip Quality', value: '100% Brand-New OEM' },
      { label: 'Substrate', value: 'Aluminum Heat Sink' },
      { label: 'Balance', value: 'Uniform LUX Output' },
      { label: 'Service', value: 'Same-Day In-Home' },
    ],
    'cof-bonding': [
      { label: 'Technology', value: 'Pulse Laser Heat' },
      { label: 'Accuracy', value: '0.01mm Micro-Pitch' },
      { label: 'Chamber', value: 'Anti-Static Dust-Free' },
      { label: 'Savings', value: 'Up to 70% vs New TV' },
    ],
    'panel-repair': [
      { label: 'Circuit', value: 'T-Con & Gate Drivers' },
      { label: 'Method', value: 'Side COF Micro-Rework' },
      { label: 'Testing', value: 'Gamma & LVDS Scope' },
      { label: 'Turnaround', value: 'Day 1 Doorstep' },
    ],
    'wall-mount': [
      { label: 'Bracket Grade', value: 'Heavy Carbon Steel' },
      { label: 'Load Limit', value: 'Tested up to 75kg' },
      { label: 'Leveling', value: 'Magnetic Spirit Level' },
      { label: 'Speed', value: 'Within 2 Hours' },
    ],
    software: [
      { label: 'Supported OS', value: 'Android, Google, WebOS, Tizen' },
      { label: 'Flashing', value: 'Direct ROM Firmware' },
      { label: 'App Suite', value: 'Factory App Recovery' },
      { label: 'Turnaround', value: 'Same-Day Doorstep' },
    ],
    commercial: [
      { label: 'Contract', value: 'Flexible AMC Plans' },
      { label: 'SLA', value: 'Under 2-Hour Response' },
      { label: 'Maintenance', value: 'Quarterly Deep Clean' },
      { label: 'Coverage', value: 'All Coimbatore Hubs' },
    ],
  };

  const currentSymptoms = serviceSymptoms[activeService.id] || [
    'No Picture',
    'Display Distortion',
    'Power Issues',
    'Audio Faults',
  ];

  const currentSpecs = serviceSpecs[activeService.id] || [
    { label: 'Technicians', value: 'Certified Senior Staff' },
    { label: 'Warranty', value: 'Written Guarantee Card' },
    { label: 'Pricing', value: 'Free Transparent Quote' },
    { label: 'Turnaround', value: 'In Hours to 1 Day' },
  ];

  return (
    <section id="services" className="section-padding bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8C00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 mb-2">
              <Wrench className="h-3.5 w-3.5" /> Component-Level Precision
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A2342] tracking-tight">
              Common TV Issues We Solve
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl">
              Professional doorstep diagnostic across Coimbatore. Click on any service on the right to view full details and request a <strong>Free Quote</strong>.
            </p>
          </div>

          <Button20 href="#booking-form">
            Book Doorstep Inspection
          </Button20>
        </div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Expanded Featured Service Card (5 Cols, Sticky & Senior-Designer Proportions) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-[#0A2342] text-white rounded-2xl p-5 sm:p-6 shadow-hover border border-navy-800 relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFB347]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top Icons & Badges */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300 border border-white/15 shadow-xs p-2.5">
                <ActiveIcon className="h-6 w-6" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#FFB347] text-[#0A2342] px-3 py-1 rounded-full shadow-xs">
                  {activeService.warranty}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-gray-200 border border-white/10">
                  {activeService.timeEstimate}
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl sm:text-[1.65rem] font-black text-white mb-1.5 leading-tight">
                {activeService.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Symptoms Treated Tags */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                Fixes Common Symptoms:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentSymptoms.map((sym, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-semibold text-amber-200 bg-white/10 px-2 py-0.5 rounded-md border border-white/10"
                  >
                    &bull; {sym}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights Bullet List */}
            <div className="space-y-2 p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FFB347]" /> Key Service Advantages:
              </div>
              <ul className="space-y-1.5 text-xs text-gray-200">
                {currentPerks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostic Specs 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-black/20 border border-white/10">
              {currentSpecs.map((spec, i) => (
                <div key={i} className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    {spec.label}
                  </span>
                  <p className="text-xs font-bold text-white leading-tight">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Group: Pricing + CTAs */}
            <div className="pt-3 border-t border-white/15 space-y-3">
              {/* Pricing Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-400 font-medium">Pricing:</span>
                  <span className="text-xl sm:text-2xl font-black text-[#FFB347]">
                    Call for Free Quote
                  </span>
                </div>
                <span className="text-[11px] text-emerald-300 font-bold bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Zero Hidden Fees
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href="tel:8122992491"
                  itemProp="telephone"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-white hover:bg-gray-100 text-[#0A2342] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Phone className="h-4 w-4 text-[#FF8C00] fill-current" />
                  <span>Call 8122992491</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleWhatsAppQuote(activeService)}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-ctaGreen transition-all hover:scale-[1.02] active:scale-95"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  <span>WhatsApp Quote</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Cards Grid: Exactly 8 Cards in 4 Rows × 2 Columns (Zero Missing Slots) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {services.map((svc) => {
              const isCurrent = svc.id === activeId;
              const SvcIcon = iconMap[svc.iconName] || Tv;

              return (
                <div
                  key={svc.id}
                  onClick={() => setActiveId(svc.id)}
                  className={`group relative flex flex-col justify-between rounded-xl p-4 sm:p-5 border transition-all cursor-pointer select-none bg-white ${
                    isCurrent
                      ? 'border-[#0A2342] ring-2 ring-[#FFB347]/80 shadow-hover bg-orange-50/20'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-card hover:bg-gray-50/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                        isCurrent
                          ? 'bg-[#0A2342] text-amber-300'
                          : 'bg-gray-100 text-[#0A2342] group-hover:bg-[#0A2342] group-hover:text-amber-300'
                      }`}>
                        <SvcIcon className="h-5 w-5" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          {svc.warranty}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                          {svc.timeEstimate}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-[#0A2342] mb-1 leading-snug group-hover:text-[#FF8C00] transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#FF8C00]">
                      Call for Quote
                    </span>
                    <span className="text-[#0A2342] font-extrabold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      {isCurrent ? 'Viewing' : 'Details'} &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
