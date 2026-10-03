'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { activeBrands, comingSoonBrands, allBrands, Brand } from '@/data/brands';
import {
  CheckCircle2,
  Bell,
  X,
  Send,
  Search,
  ShieldCheck,
  ArrowRight,
  Tv,
  Check,
  Wrench,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'sonner';
import { useBookingModal } from '@/components/common/BookingModal';
import { BrandMonogram } from './BrandMonogram';

interface BrandGridProps {
  onSelectBrand?: (brandName: string) => void;
}

const top5Slugs = ['samsung', 'lg', 'sony', 'mi', 'tcl'];
const tickerBrands = activeBrands.slice(0, 7);

export const BrandGrid: React.FC<BrandGridProps> = ({ onSelectBrand }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'top' | 'active' | 'coming'>('top');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifyModalBrand, setNotifyModalBrand] = useState<Brand | null>(null);
  const [notifyPhone, setNotifyPhone] = useState('');
  const { openBookingModal } = useBookingModal();
  const shouldReduceMotion = useReducedMotion();

  // Filtered brands based on category tab & search query
  const displayedBrands = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    let list: Brand[] = allBrands;
    if (activeTab === 'top') {
      list = activeBrands.filter((b) => top5Slugs.includes(b.slug));
    } else if (activeTab === 'active') {
      list = activeBrands;
    } else if (activeTab === 'coming') {
      list = comingSoonBrands;
    }

    if (!q) return list;

    return list.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.specialization.toLowerCase().includes(q) ||
        b.slug.toLowerCase().includes(q)
    );
  }, [activeTab, searchQuery]);

  const handleBrandClick = (brand: Brand) => {
    if (brand.status === 'coming-soon') {
      setNotifyModalBrand(brand);
      return;
    }

    if (onSelectBrand) {
      onSelectBrand(brand.name);
    }
    openBookingModal({ brand: brand.name });
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyPhone || notifyPhone.length < 10) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }
    toast.success(`Notification alert registered for ${notifyModalBrand?.name} TV!`, {
      description: `Smart Fix will message ${notifyPhone} once dedicated components arrive in Coimbatore.`,
      duration: 4500,
    });
    setNotifyModalBrand(null);
    setNotifyPhone('');
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-[#FF8C00] text-white px-1 rounded font-bold">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <motion.section
      id="brands"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="relative section-padding bg-[#050E1B] text-white overflow-hidden border-b border-navy-900"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. BRANDS.WEBP BACKGROUND WITH GLASSMORPHIC NAVY OVERLAYS
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <Image
          src="/assets/brands.webp"
          alt="Smart Fix Authorized Electronics & TV Brands Network"
          fill
          priority={false}
          className="object-cover sm:object-contain object-center opacity-15 sm:opacity-20 mix-blend-screen filter contrast-125 brightness-95 scale-110 sm:scale-125 transition-transform duration-700"
          sizes="100vw"
        />
        {/* Layered Obsidian Gradient for crystal-clear foreground text and cards */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050E1B]/95 via-[#0A192F]/80 to-[#050E1B]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,140,0,0.14),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,229,255,0.1),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md px-4 py-1.5 shadow-sm text-xs font-bold uppercase tracking-wider text-[#FF8C00]">
            <Tv className="h-3.5 w-3.5" />
            <span>25+ TV Brands Supported &bull; OEM Spares In Stock</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-tight">
            Supported TV Brands in <span className="text-[#FF8C00]">Coimbatore</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 mt-2.5 max-w-2xl mx-auto leading-relaxed font-normal">
            Direct access to genuine display panels, laser-bonded COF ICs, power supplies &amp; brand-new backlight strips. Click any brand to book your doorstep diagnosis.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. CREATIVE BRAND TICKER MARQUEE
           ───────────────────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-2 overflow-hidden shadow-lg">
          <div className="flex items-center overflow-hidden">
            <div className="flex gap-3 animate-marquee will-change-transform transform-gpu hover:[animation-play-state:paused] whitespace-nowrap py-1">
              {[...tickerBrands, ...tickerBrands].map((brand, idx) => (
                <button
                  key={`${brand.slug}-${idx}`}
                  type="button"
                  onClick={() => handleBrandClick(brand)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 hover:bg-[#FF8C00]/20 border border-white/15 hover:border-[#FF8C00]/50 transition-all text-xs font-semibold text-gray-200 hover:text-white shrink-0 cursor-pointer"
                >
                  <span className="font-bold text-white">{brand.name}</span>
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="h-3 w-3 text-emerald-400" /> In Stock
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. CREATIVE DISTRIBUTOR NETWORK SHOWCASE (Using brands.webp)
           ───────────────────────────────────────────────────────────── */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-r from-white/10 via-[#0A192F]/60 to-white/5 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#FF8C00]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Info: Distributor Supply Authority */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-curvy">
                <ShieldCheck className="h-3.5 w-3.5" /> Direct Component Supply Channel
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-curvy leading-tight">
                Authorized Electronics Distribution &amp; TV Component Network
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Smart Fix partners with premier electronics distributors across Tamil Nadu. We source 100% brand-new OEM motherboards, original LED backlights, and laser COF driver ICs for Samsung, LG, Sony, Philips, Mi, Redmi, and all leading consumer electronics brands.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-semibold text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400" /> 1-Year Display Guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-amber-300" /> ₹0 Doorstep Inspection
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#00E5FF]" /> Factory-Calibrated Picture
                </span>
              </div>
            </div>

            {/* Right Mini Visual: brands.webp Official Panel Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-white p-3 shadow-2xl group-hover:scale-102 transition-transform duration-500">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/assets/brands.webp"
                    alt="Authorized Electronics Distributors Takara, LG, Philips, JBL, Sony, boAt, Mi, Samsung"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] px-1 text-gray-700">
                  <span className="font-bold">Official Distributor Network</span>
                  <span className="text-[#FF8C00] font-black">All Brands Serviced</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. CATEGORY TABS & REAL-TIME SEARCH FILTER
           ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
            {[
              { id: 'top', label: 'Top TV Brands', count: 5 },
              { id: 'all', label: 'All Brands', count: allBrands.length },
              { id: 'active', label: 'Tier 1: Active in Stock', count: activeBrands.length },
              { id: 'coming', label: 'Tier 2: Coming Soon', count: comingSoonBrands.length },
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black transition-all shrink-0 font-curvy ${
                    isSelected
                      ? 'bg-[#FF8C00] text-white shadow-cta scale-105'
                      : 'bg-white/10 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your TV brand..."
              className="w-full h-10 pl-10 pr-12 rounded-xl border border-white/15 bg-black/40 text-xs sm:text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 hover:text-white bg-white/10 px-2 py-0.5 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5. CREATIVE GRID OF BRAND CARDS
           ───────────────────────────────────────────────────────────── */}
        {displayedBrands.length === 0 ? (
          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-10 text-center space-y-3">
            <Tv className="h-10 w-10 text-gray-400 mx-auto" />
            <h3 className="text-base font-bold text-white font-curvy">
              No matching brands found for &quot;{searchQuery}&quot;
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
              Smart Fix fixes unlisted, imported, and rare TV brands as well. Click below to inquire directly with our technician.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <a
                href="https://wa.me/918122992491?text=Hi%20Smart%20Fix,%20I%20have%20an%20unlisted%20TV%20brand%20needing%20repair."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold shadow-ctaGreen flex items-center gap-2"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>Ask on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                }}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
              >
                Reset Filter
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4">
            {displayedBrands.map((brand, idx) => {
              const isComingSoon = brand.status === 'coming-soon';

              return (
                <motion.div
                  key={brand.slug}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.03, ease: 'easeOut' }}
                  onClick={() => handleBrandClick(brand)}
                  className={`group relative p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer select-none flex flex-col justify-between ${
                    isComingSoon
                      ? 'border-white/10 bg-white/5 hover:bg-white/10 opacity-75 hover:opacity-100'
                      : 'border-white/15 bg-white/10 hover:bg-white/15 hover:border-[#FF8C00]/60 hover:shadow-2xl hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Header: Monogram + Status Tag */}
                    <div className="flex items-center justify-between mb-2.5 sm:mb-3.5">
                      <BrandMonogram brandName={brand.name} isComingSoon={isComingSoon} />

                      {isComingSoon ? (
                        <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                          <Bell className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Coming
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> In Stock
                        </span>
                      )}
                    </div>

                    {/* Brand Name */}
                    <h3 className="text-sm sm:text-base lg:text-lg font-black text-white group-hover:text-amber-300 transition-colors leading-tight font-curvy">
                      {highlightMatch(brand.name, searchQuery)}
                    </h3>

                    {/* Specialization */}
                    <p className="text-[10px] sm:text-[11px] text-gray-300 mt-1 line-clamp-1 font-normal">
                      {brand.specialization.split(',')[0]}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    {isComingSoon ? (
                      <span className="text-gray-400 group-hover:text-white font-semibold flex items-center gap-1 text-[10px] sm:text-[11px]">
                        Notify Me &rarr;
                      </span>
                    ) : (
                      <span className="text-[#FF8C00] font-black group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[10px] sm:text-[11px] font-curvy">
                        Book Repair &rarr;
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            6. UNLISTED MODEL CALLOUT STRIP
           ───────────────────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF8C00]/20 text-[#FF8C00] shrink-0 border border-[#FF8C00]/30">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white font-curvy">
                Don&apos;t see your TV brand or have an imported model?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                We service all customized displays, commercial monitors, and imported brands across Coimbatore.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href="tel:8122992491"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold text-center transition-colors"
            >
              Call 8122992491
            </a>
            <a
              href="https://wa.me/918122992491?text=Hi%20Smart%20Fix,%20I%20have%20an%20unlisted%20TV%20brand%20needing%20repair."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs shadow-ctaGreen flex items-center justify-center gap-1.5 transition-all text-center"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span>WhatsApp Chief Tech</span>
            </a>
          </div>
        </div>
      </div>

      {/* Notify Me Modal for Coming Soon Brands */}
      {notifyModalBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in-50">
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-[#06101E] p-5 sm:p-6 shadow-2xl border border-white/20 text-white">
            <button
              type="button"
              onClick={() => setNotifyModalBrand(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-9 w-9 rounded-xl bg-[#FF8C00]/20 border border-[#FF8C00]/30 flex items-center justify-center text-[#FF8C00]">
                <Bell className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-white font-curvy">
                Get Notified for {notifyModalBrand.name} TV Support
              </h3>
            </div>

            <p className="text-xs text-gray-300 mb-4 leading-relaxed">
              Smart Fix is expanding dedicated component inventory for <strong>{notifyModalBrand.name}</strong>. Enter your mobile number to get a priority WhatsApp alert when spares land in Coimbatore.
            </p>

            <form onSubmit={handleNotifySubmit} className="space-y-3">
              <div>
                <input
                  type="tel"
                  maxLength={10}
                  value={notifyPhone}
                  onChange={(e) => setNotifyPhone(e.target.value)}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full h-11 px-4 rounded-xl border border-white/20 bg-black/40 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF8C00]"
                  required
                />
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setNotifyModalBrand(null)}
                  className="flex-1 py-2.5 rounded-xl border border-white/15 text-xs font-bold text-gray-300 hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#FF8C00] hover:bg-[#EA580C] text-white text-xs font-black shadow-cta flex items-center justify-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" /> Notify Me
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default BrandGrid;
