'use client';

import React, { useState, useRef } from 'react';
import { activeBrands, comingSoonBrands, Brand, allBrands } from '@/data/brands';
import { Button20 } from '@/components/common/Button20';
import {
  Tv,
  CheckCircle2,
  Bell,
  Sparkles,
  X,
  Send,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { toast } from 'sonner';

interface BrandGridProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandGrid: React.FC<BrandGridProps> = ({ onSelectBrand }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'premium' | 'smart' | 'coming-soon'>('all');
  const [notifyModalBrand, setNotifyModalBrand] = useState<Brand | null>(null);
  const [notifyPhone, setNotifyPhone] = useState('');
  const sliderRef = useRef<HTMLDivElement>(null);

  const premiumNames = ['Samsung', 'LG', 'Sony', 'OnePlus', 'TCL', 'Philips'];
  const smartNames = ['Mi / Xiaomi', 'Vu', 'Panasonic', 'Haier', 'Hisense', 'Realme', 'Onida', 'Micromax', 'Sharp'];

  const displayedBrands: Brand[] = (() => {
    switch (activeTab) {
      case 'premium':
        return activeBrands.filter((b) => premiumNames.includes(b.name));
      case 'smart':
        return activeBrands.filter((b) => smartNames.includes(b.name));
      case 'coming-soon':
        return comingSoonBrands;
      default:
        return activeBrands;
    }
  })();

  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleBrandClick = (brand: Brand) => {
    if (brand.status === 'coming-soon') {
      setNotifyModalBrand(brand);
      return;
    }

    if (onSelectBrand) {
      onSelectBrand(brand.name);
    }
    const formEl = document.getElementById('booking-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    toast.success(`Selected ${brand.name} in booking form`, {
      description: 'Scroll down to enter your mobile number for WhatsApp dispatch.',
      duration: 3500,
    });
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyPhone || notifyPhone.length < 10) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }
    toast.success(`Notification set for ${notifyModalBrand?.name} TV service in Coimbatore!`, {
      description: `We will message you at ${notifyPhone} once direct component stock arrives.`,
      duration: 4500,
    });
    setNotifyModalBrand(null);
    setNotifyPhone('');
  };

  return (
    <section id="brands" className="section-padding bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8C00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 mb-2">
              <Tv className="h-3.5 w-3.5" /> 25+ TV Brands Supported
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A2342] tracking-tight">
              Supported TV Brands in Coimbatore
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl">
              Original T-Con boards, power supply modules, LED driver ICs &amp; display ribbons in stock for 15+ active brands.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="h-10 w-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 flex items-center justify-center text-[#0A2342] transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="h-10 w-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 flex items-center justify-center text-[#0A2342] transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 1. Infinite Auto-Scrolling Brand Ticker (Marquee) */}
        <div className="mb-10 py-3 rounded-2xl bg-[#0A2342] text-white overflow-hidden shadow-card border border-navy-800">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-8 px-4">
            {[...activeBrands, ...activeBrands].map((b, i) => (
              <div
                key={`${b.slug}-${i}`}
                onClick={() => handleBrandClick(b)}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 cursor-pointer transition-colors shrink-0"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded bg-[#FF8C00] text-white">
                  <Tv className="h-3.5 w-3.5" />
                </div>
                <span className="font-extrabold text-sm tracking-wide text-white">{b.name}</span>
                <span className="text-[11px] text-gray-300 font-medium">({b.specialization.split(',')[0]})</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2 bg-gray-100 p-1 rounded-xl border border-gray-200">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#0A2342] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All 15 Active Brands
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('premium')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'premium'
                  ? 'bg-[#0A2342] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              OLED &amp; 4K Leaders (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('smart')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'smart'
                  ? 'bg-[#0A2342] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Smart TV Value (9)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('coming-soon')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'coming-soon'
                  ? 'bg-[#FF8C00] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Coming Soon (10)
            </button>
          </div>

          <span className="text-xs font-semibold text-gray-500">
            Showing {displayedBrands.length} Brands &bull; Day 1-2 Turnaround
          </span>
        </div>

        {/* 3. Smooth Swipeable / Scrollable Carousel Container */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayedBrands.map((brand) => {
            const isComingSoon = brand.status === 'coming-soon';

            return (
              <div
                key={brand.slug}
                onClick={() => handleBrandClick(brand)}
                className={`group min-w-[260px] sm:min-w-[280px] max-w-[300px] snap-start flex flex-col justify-between p-5 rounded-2xl border transition-all duration-200 select-none bg-white ${
                  isComingSoon
                    ? 'border-gray-200 bg-gray-50/70 hover:bg-white hover:border-gray-300 opacity-80 hover:opacity-100 cursor-pointer shadow-sm'
                    : 'border-gray-200 hover:border-[#0A2342] hover:shadow-hover hover:-translate-y-1 cursor-pointer shadow-card'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                      isComingSoon
                        ? 'bg-gray-200 text-gray-600'
                        : 'bg-navy-50 text-[#0A2342] group-hover:bg-[#0A2342] group-hover:text-white'
                    }`}>
                      <Tv className="h-5 w-5" />
                    </div>

                    {isComingSoon ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-gray-600 bg-gray-200 px-2 py-0.5 rounded">
                        <Bell className="h-3 w-3" /> Coming Soon
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        <CheckCircle2 className="h-3 w-3" /> Active Stock
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-black text-[#0A2342] group-hover:text-[#FF8C00] transition-colors leading-tight">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {brand.specialization}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">90-Day Spares</span>
                  {isComingSoon ? (
                    <span className="text-[#0A2342] font-bold group-hover:text-[#FF8C00] flex items-center gap-1">
                      Notify Me &rarr;
                    </span>
                  ) : (
                    <span className="text-[#FF8C00] font-bold group-hover:underline flex items-center gap-1">
                      Book Repair &rarr;
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Action CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-gray-200 bg-[#F8F9FA] p-5 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-[#FF8C00] shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0A2342]">
                Have an unlisted TV model or imported display?
              </h4>
              <p className="text-xs text-gray-500">
                We repair all customized 4K, 8K OLED, and commercial monitors across Coimbatore.
              </p>
            </div>
          </div>

          <Button20 href="https://wa.me/918122992491?text=Hi%20Global%20TV,%20I%20have%20an%20unlisted%20TV%20brand%20needing%20repair.">
            Inquire Custom Model on WhatsApp
          </Button20>
        </div>
      </div>

      {/* Notify Me Modal */}
      {notifyModalBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-gray-200 animate-in fade-in-50 zoom-in-95">
            <button
              type="button"
              onClick={() => setNotifyModalBrand(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-[#0A2342] mb-3">
              <Bell className="h-5 w-5 text-[#FF8C00]" />
              <h3 className="text-lg font-bold text-[#0A2342]">
                Get Notified for {notifyModalBrand.name} TV Support
              </h3>
            </div>

            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              We are expanding direct inventory for <strong>{notifyModalBrand.name}</strong>. Enter your mobile number to receive immediate WhatsApp notification when components arrive.
            </p>

            <form onSubmit={handleNotifySubmit} className="space-y-3">
              <div>
                <input
                  type="tel"
                  maxLength={10}
                  value={notifyPhone}
                  onChange={(e) => setNotifyPhone(e.target.value)}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0A2342]"
                  required
                />
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setNotifyModalBrand(null)}
                  className="flex-1 py-2.5 rounded-lg border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-lg bg-[#FF8C00] hover:bg-[#EA580C] text-white text-xs font-bold shadow-cta flex items-center justify-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" /> Notify Me
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrandGrid;
