'use client';

import React from 'react';
import { PhoneCall, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: PhoneCall,
      title: 'Instant Booking',
      desc: 'Call 8122992491 or send a WhatsApp message with your TV brand, screen size, and issue description.',
    },
    {
      num: '02',
      icon: Truck,
      title: 'Doorstep Visit (Day 1-2)',
      desc: 'Certified technician arrives at your Coimbatore doorstep with testing tools & replacement modules.',
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Repair & 90-Day Warranty',
      desc: 'On-site chip-level repair or laser bonding with 15-point quality check & written 90-day warranty card.',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8C00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 mb-2">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A2342] tracking-tight">
            How Our TV Service Works
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Hassle-free, transparent doorstep TV service designed for Coimbatore families.
          </p>
        </div>

        {/* 3-Step Horizontal Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-8 border-t-2 border-dashed border-gray-300 pointer-events-none -z-0" />

          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative z-10 flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:bg-white hover:border-[#0A2342] hover:shadow-hover transition-all"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3.5 right-6 px-2.5 py-0.5 rounded-full bg-[#0A2342] text-white text-[11px] font-black">
                STEP {step.num}
              </div>

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2342] text-white shadow-md mb-5">
                <step.icon className="h-8 w-8 text-amber-400" />
              </div>

              <h3 className="text-xl font-bold text-[#0A2342] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
