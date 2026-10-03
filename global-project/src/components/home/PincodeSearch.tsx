'use client';

import React, { useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { zonePincodes } from '@/data/pincodes';
import {
  Search,
  MapPin,
  Phone,
  Navigation,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Check,
  Maximize2,
  X,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useBookingModal } from '@/components/common/BookingModal';

interface PincodeSearchProps {
  onSelectPincode?: (pincodeStr: string) => void;
}

// Popular Coimbatore quick-scroll ticker items
const tickerLocalities = [
  { name: 'Gandhipuram', pin: '641012', zone: 'Central' },
  { name: 'RS Puram', pin: '641002', zone: 'Central' },
  { name: 'Peelamedu', pin: '641004', zone: 'North' },
  { name: 'Saravanampatti', pin: '641035', zone: 'North' },
  { name: 'Saibaba Colony', pin: '641011', zone: 'North' },
  { name: 'Singanallur', pin: '641005', zone: 'East' },
  { name: 'Vadavalli', pin: '641041', zone: 'West' },
  { name: 'Kuniamuthur', pin: '641008', zone: 'South' },
  { name: 'Thudiyalur', pin: '641034', zone: 'Suburban' },
  { name: 'Ramanathapuram', pin: '641045', zone: 'South' },
  { name: 'Ganapathy', pin: '641006', zone: 'North' },
  { name: 'Ondipudur', pin: '641016', zone: 'East' },
  { name: 'Town Hall', pin: '641001', zone: 'Central' },
  { name: 'Kovaipudur', pin: '641042', zone: 'South' },
  { name: 'Perur', pin: '641010', zone: 'West' },
];

export const PincodeSearch: React.FC<PincodeSearchProps> = ({ onSelectPincode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [quickPinInput, setQuickPinInput] = useState('');
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { openBookingModal } = useBookingModal();

  const zoneNames = useMemo(() => ['All', ...Object.keys(zonePincodes)], []);

  // Filtered entries according to search query & selected zone
  const filteredZones = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const result: typeof zonePincodes = {};

    Object.entries(zonePincodes).forEach(([zoneName, detail]) => {
      if (selectedZone !== 'All' && zoneName !== selectedZone) {
        return;
      }

      const matchingIndices: number[] = [];

      detail.areas.forEach((area, idx) => {
        const pin = detail.pincodes[idx] || '';
        if (
          !q ||
          area.toLowerCase().includes(q) ||
          pin.includes(q) ||
          zoneName.toLowerCase().includes(q)
        ) {
          matchingIndices.push(idx);
        }
      });

      if (matchingIndices.length > 0) {
        result[zoneName] = {
          areas: matchingIndices.map((i) => detail.areas[i]),
          pincodes: matchingIndices.map((i) => detail.pincodes[i]),
        };
      }
    });

    return result;
  }, [searchQuery, selectedZone]);

  const totalFilteredCount = useMemo(
    () => Object.values(filteredZones).reduce((acc, z) => acc + z.areas.length, 0),
    [filteredZones]
  );

  // Quick checker state for direct 6-digit lookup
  const quickPinMatch = useMemo(() => {
    const pin = quickPinInput.trim();
    if (pin.length < 3) return null;

    for (const [zone, detail] of Object.entries(zonePincodes)) {
      const idx = detail.pincodes.findIndex((p) => p.includes(pin));
      if (idx !== -1) {
        return {
          zone,
          area: detail.areas[idx],
          pincode: detail.pincodes[idx],
        };
      }
    }
    return null;
  }, [quickPinInput]);

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

  const handleSelectArea = (area: string, pincode: string) => {
    const pincodeStr = `${area} (${pincode})`;
    if (onSelectPincode) {
      onSelectPincode(pincodeStr);
    }
    openBookingModal({ pincode: pincodeStr });
  };

  const handleWhatsApp = (area: string, pin: string) => {
    const msg = `Hi Smart Fix, I need doorstep TV repair service in *${area} (${pin})*, Coimbatore.`;
    window.open(`https://wa.me/918122992491?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section
      id="areas"
      className="relative min-h-screen py-16 sm:py-24 bg-[#06101E] text-white overflow-hidden border-b border-navy-900"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. COIMBATORE LANDMARK WHOLE SECTION BACKGROUND (coimaborebg.jpg)
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <Image
          src="/assets/coimaborebg.webp"
          alt="Coimbatore City Landmark Background"
          fill
          loading="lazy"
          className="object-cover object-center opacity-30 sm:opacity-40 filter contrast-110 brightness-90 transition-transform duration-700"
          sizes="100vw"
        />
        {/* Deep obsidian navy overlay so text and cards remain crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06101E]/95 via-[#0A192F]/85 to-[#06101E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,229,255,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,140,0,0.12),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md px-4 py-1.5 shadow-sm text-xs font-bold uppercase tracking-wider text-[#FF8C00]">
            <Navigation className="h-3.5 w-3.5 fill-current" />
            <span>Coimbatore 6-Digit Postal Coverage &bull; Doorstep Dispatch</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-tight">
            Doorstep Service Across <span className="text-[#FF8C00]">All Coimbatore PIN Codes</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 mt-2.5 max-w-2xl mx-auto leading-relaxed font-normal">
            Smart Fix senior engineers travel directly to your home across every Coimbatore urban and rural locality. Explore zones, search your 6-digit PIN, or tap any locality to book.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. CREATIVE SCROLLABLE TICKER: Live Dispatch Coimbatore Areas
           ───────────────────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-2.5 overflow-hidden shadow-lg">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FF8C00] text-white text-[11px] font-black uppercase tracking-wider shrink-0 font-curvy shadow-xs">
              <MapPin className="h-3 w-3 fill-current" />
              <span>Live Coverage</span>
            </div>

            {/* Continuous Marquee Ticker */}
            <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-1">
              {[...tickerLocalities, ...tickerLocalities].map((loc, idx) => (
                <button
                  key={`${loc.name}-${idx}`}
                  type="button"
                  onClick={() => handleSelectArea(loc.name, loc.pin)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 hover:bg-[#FF8C00]/20 border border-white/15 hover:border-[#FF8C00]/50 transition-all text-xs font-semibold text-gray-200 hover:text-white shrink-0 cursor-pointer"
                >
                  <MapPin className="h-3 w-3 text-[#FF8C00]" />
                  <span>{loc.name}</span>
                  <span className="font-mono text-[11px] text-amber-300 font-bold bg-white/10 px-1.5 py-0.5 rounded">
                    {loc.pin}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="h-3 w-3 text-emerald-400" /> Active
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. CREATIVE SCROLLABLE ZONE FILTER PILLS (Horizontal Scroll)
           ───────────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 custom-scrollbar no-scrollbar-on-touch">
          {zoneNames.map((zone) => {
            const count =
              zone === 'All'
                ? Object.values(zonePincodes).reduce((acc, z) => acc + z.areas.length, 0)
                : zonePincodes[zone]?.areas.length || 0;

            const isSelected = selectedZone === zone;

            return (
              <button
                key={zone}
                type="button"
                onClick={() => setSelectedZone(zone)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black transition-all shrink-0 font-curvy ${
                  isSelected
                    ? 'bg-[#FF8C00] text-white shadow-cta scale-105'
                    : 'bg-white/10 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10'
                }`}
              >
                <span>{zone}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. MAIN INTERACTIVE SPLIT: Quick Verification Hub + Scrollable Matrix
           ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): Quick PIN Instant Verifier & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick PIN Instant Checker Box */}
            <div className="rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 via-[#0A192F]/70 to-[#06101E]/90 backdrop-blur-xl p-6 shadow-2xl text-white space-y-4">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 font-curvy flex items-center gap-1.5">
                    <Search className="h-3.5 w-3.5 text-[#FF8C00]" /> Instant Pin Code Check
                  </span>
                  <h3 className="text-xl font-black text-white font-curvy mt-0.5">
                    Is Your Home Covered?
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#FF8C00]">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-300 font-bold">
                  Enter your 6-digit Coimbatore Pincode or Locality:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={quickPinInput}
                    onChange={(e) => setQuickPinInput(e.target.value)}
                    placeholder="e.g. 641012, 641004, Gandhipuram"
                    className="w-full h-12 pl-4 pr-12 rounded-xl border border-white/20 bg-black/40 text-white placeholder:text-gray-500 text-sm font-semibold focus:outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/30 transition-all font-mono"
                  />
                  {quickPinInput && (
                    <button
                      type="button"
                      onClick={() => setQuickPinInput('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white bg-white/10 px-2 py-1 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Instant Verification Result Card */}
              {quickPinMatch ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-4 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-black text-white font-curvy">
                        Verified: Service Available in {quickPinMatch.area}!
                      </h4>
                      <p className="text-xs text-emerald-300 mt-0.5">
                        {quickPinMatch.zone} &bull; PIN {quickPinMatch.pincode}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-emerald-500/20">
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <Clock className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Day 1-2 Turnaround</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <ShieldCheck className="h-3.5 w-3.5 text-amber-300" />
                      <span>1-Year Warranty</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectArea(quickPinMatch.area, quickPinMatch.pincode)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs shadow-md flex items-center justify-center gap-2 transition-all hover:scale-102"
                  >
                    <span>Book Service For {quickPinMatch.area}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </motion.div>
              ) : quickPinInput.length >= 3 ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs space-y-2">
                  <p className="text-gray-300">
                    Custom Coimbatore location &bull; All 641xxx PIN codes are serviced by our mobile van team.
                  </p>
                  <button
                    type="button"
                    onClick={() => openBookingModal({ pincode: quickPinInput })}
                    className="w-full py-2 px-3 rounded-lg bg-[#FF8C00] text-white font-bold text-xs"
                  >
                    Book for &quot;{quickPinInput}&quot;
                  </button>
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Doorstep technicians arrive with diagnostic tools &amp; parts.</span>
                </div>
              )}

              {/* Map Highlight Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/40 p-3 group shadow-xl">
                <div
                  onClick={() => setIsMapExpanded(true)}
                  className="relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer"
                  title="Click to view full-screen Coimbatore map"
                >
                  <Image
                    src="/assets/images/Coimbatore.webp"
                    alt="Coimbatore 6 Digit PinCode Map boundary visual"
                    fill
                    className="object-contain sm:object-cover object-center group-hover:scale-105 transition-transform duration-500 bg-[#06101E]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Zoom Prompt */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md group-hover:bg-[#FF8C00] transition-colors">
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>Expand Map</span>
                  </div>

                  {/* Bottom Info Banner */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px]">
                    <span className="font-black text-white font-curvy bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                      Coimbatore PIN Code Map
                    </span>
                    <span className="text-[10px] text-amber-300 font-bold bg-[#0A2342]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-400/30">
                      6 Zones &bull; 45+ Areas
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Call & WhatsApp links */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="tel:8122992491"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-[#FF8C00]" />
                  <span>Call 8122992491</span>
                </a>
                <a
                  href="https://wa.me/918122992491?text=Hi%20Smart%20Fix,%20is%20doorstep%20service%20available%20at%20my%20pincode%20in%20Coimbatore?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-ctaGreen"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Real-Time Search & Scrollable Locality Matrix */}
          <div className="lg:col-span-7 space-y-4">
            {/* Search Input & Results Badge */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter 45+ localities or pincodes..."
                  className="w-full h-11 pl-10 pr-14 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white bg-white/10 px-2 py-0.5 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-2 text-xs px-2 sm:px-0">
                <span className="text-gray-300 font-medium">
                  Showing <strong className="text-white font-bold">{totalFilteredCount}</strong> localities
                </span>
                <span className="text-[10px] text-amber-300 bg-white/10 px-2 py-1 rounded-full font-curvy">
                  Scrollable Matrix &darr;
                </span>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────
                5. HIGHLY CREATIVE SCROLLABLE LOCALITIES CONTAINER
               ───────────────────────────────────────────────────────── */}
            <div
              ref={scrollContainerRef}
              className="max-h-[560px] overflow-y-auto pr-2 space-y-4 custom-scrollbar rounded-2xl"
            >
              {totalFilteredCount === 0 ? (
                <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-8 text-center space-y-3">
                  <MapPin className="h-10 w-10 text-gray-400 mx-auto" />
                  <h4 className="text-base font-bold text-white font-curvy">
                    No exact match for &quot;{searchQuery}&quot; in {selectedZone}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                    We cover every area in Coimbatore District! Call us directly or click below to check with a coordinator.
                  </p>
                  <div className="flex justify-center gap-3 pt-2">
                    <a
                      href="tel:8122992491"
                      className="px-4 py-2 rounded-xl bg-[#FF8C00] text-white text-xs font-black shadow-cta"
                    >
                      Call 8122992491
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedZone('All');
                      }}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              ) : (
                Object.entries(filteredZones).map(([zoneName, detail]) => (
                  <div
                    key={zoneName}
                    className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-4 sm:p-5 space-y-3 shadow-md"
                  >
                    {/* Zone Header with Count */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#FF8C00]" />
                        <h4 className="text-sm sm:text-base font-black text-white font-curvy">
                          {zoneName}
                        </h4>
                      </div>
                      <span className="text-[11px] font-bold text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full font-mono">
                        {detail.areas.length} Areas
                      </span>
                    </div>

                    {/* Grid of Locality Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {detail.areas.map((area, idx) => {
                        const pin = detail.pincodes[idx] || '';

                        return (
                          <div
                            key={`${zoneName}-${area}-${pin}`}
                            onClick={() => handleSelectArea(area, pin)}
                            className="group p-3 rounded-xl border border-white/10 bg-black/30 hover:bg-white/10 hover:border-[#FF8C00]/60 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2 hover:shadow-lg"
                          >
                            <div className="flex items-start justify-between gap-1.5">
                              <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors leading-snug font-curvy">
                                {highlightMatch(area, searchQuery)}
                              </span>
                              <span className="text-[10px] font-mono font-bold text-amber-300 bg-white/10 px-1.5 py-0.5 rounded shrink-0">
                                {highlightMatch(pin, searchQuery)}
                              </span>
                            </div>

                            <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-white/10">
                              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Day 1-2
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleWhatsApp(area, pin);
                                  }}
                                  className="text-emerald-400 hover:text-emerald-300 hover:underline font-bold"
                                  title="WhatsApp for this area"
                                >
                                  WhatsApp
                                </button>
                                <span className="text-[#FF8C00] group-hover:translate-x-0.5 transition-transform font-bold">
                                  Book &rarr;
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Guarantee Strip */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-gray-300">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Senior TV engineers equipped for on-site diagnostic testing &amp; board repair.
              </span>
              <a
                href="tel:8122992491"
                className="text-amber-300 font-bold hover:underline shrink-0 flex items-center gap-1"
              >
                <span>Don&apos;t see your area? Call 8122992491</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Map Lightbox Modal */}
      {isMapExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in-50">
          <div className="relative w-full max-w-5xl max-h-[90vh] rounded-3xl bg-[#06101E] border border-white/20 overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 sm:p-5 border-b border-white/15 flex items-center justify-between bg-black/40">
              <div>
                <h3 className="text-base sm:text-lg font-black text-white font-curvy">
                  Coimbatore 6-Digit PinCode Boundaries Map
                </h3>
                <p className="text-xs text-amber-300">
                  Detailed postal zone boundaries covering Coimbatore District &bull; 100% Service Coverage
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMapExpanded(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Close Map"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex-1 min-h-[55vh] sm:min-h-[70vh] bg-[#0A192F] p-4 flex items-center justify-center overflow-auto">
              <div className="relative w-full h-full min-h-[450px]">
                <Image
                  src="/assets/images/Coimbatore.webp"
                  alt="Coimbatore 6 Digit PinCode Map detailed view"
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </div>

            <div className="p-4 bg-black/60 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-gray-300">
                Doorstep dispatch to Gandhipuram, RS Puram, Peelamedu, Saravanampatti, Vadavalli, Singanallur &amp; 40+ areas.
              </span>
              <a
                href="tel:8122992491"
                className="px-4 py-2 rounded-xl bg-[#FF8C00] hover:bg-[#EA580C] text-white text-xs font-black shadow-cta flex items-center gap-1.5"
              >
                <Phone className="h-3.5 w-3.5 fill-current" />
                <span>Call Dispatch: 8122992491</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PincodeSearch;
