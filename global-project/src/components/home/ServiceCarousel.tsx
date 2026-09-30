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
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
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
    const msg = `Hi Global TV, I need repair service for *${svc.title}* (${svc.startingPrice}). Please confirm technician availability in Coimbatore.`;
    window.open(`https://wa.me/918122992491?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleScrollToForm = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="services" className="section-padding bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8C00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 mb-2">
              <Wrench className="h-3.5 w-3.5" /> Component-Level Precision
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A2342] tracking-tight">
              Common TV Issues We Solve
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl">
              Transparent upfront pricing with 90-day spare parts warranty. Click on any service to view turnaround and book directly.
            </p>
          </div>

          <Button20 href="#booking-form">
            View All Services
          </Button20>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Expanded Featured Service Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0A2342] text-white rounded-xl p-6 sm:p-8 shadow-hover border border-navy-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF8C00]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/15">
                  <ActiveIcon className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-gray-200 border border-white/10">
                  {activeService.timeEstimate}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                {activeService.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {activeService.description}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-xs text-gray-400 font-medium">Starting from</span>
                <span className="text-3xl font-black text-[#FF8C00]">
                  {activeService.startingPrice}
                </span>
              </div>
            </div>

            <div className="pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => handleWhatsAppQuote(activeService)}
                className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>WhatsApp Quote</span>
              </button>

              <button
                type="button"
                onClick={handleScrollToForm}
                className="w-full sm:w-auto py-3 px-4 rounded-lg bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
              >
                Book Inspection
              </button>
            </div>
          </div>

          {/* Right Cards Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {services.map((svc) => {
              const isCurrent = svc.id === activeId;
              const SvcIcon = iconMap[svc.iconName] || Tv;

              return (
                <div
                  key={svc.id}
                  onClick={() => setActiveId(svc.id)}
                  className={`group relative flex flex-col justify-between rounded-xl p-4 sm:p-5 border transition-all cursor-pointer select-none bg-white ${
                    isCurrent
                      ? 'border-[#0A2342] ring-2 ring-[#0A2342]/15 shadow-hover'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-card'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                        isCurrent
                          ? 'bg-[#0A2342] text-amber-400'
                          : 'bg-gray-100 text-[#0A2342] group-hover:bg-[#0A2342] group-hover:text-amber-400'
                      }`}>
                        <SvcIcon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {svc.timeEstimate}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0A2342] mb-1 leading-snug group-hover:text-[#FF8C00] transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#0A2342]">
                      {svc.startingPrice}
                    </span>
                    <span className="text-[#FF8C00] font-bold group-hover:translate-x-0.5 transition-transform">
                      Details &rarr;
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
