'use client';

import React, { useState, useMemo } from 'react';
import { zonePincodes } from '@/data/pincodes';
import { Search, MapPin, Phone, ChevronDown, CheckCircle2, Navigation } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface PincodeSearchProps {
  onSelectPincode?: (pincodeStr: string) => void;
}

export const PincodeSearch: React.FC<PincodeSearchProps> = ({ onSelectPincode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openZones, setOpenZones] = useState<string[]>([
    'Central Coimbatore',
    'North Coimbatore',
  ]);

  // Real-time filtering across zones, areas, and pincodes
  const filteredZones = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return zonePincodes;

    const result: typeof zonePincodes = {};

    Object.entries(zonePincodes).forEach(([zoneName, detail]) => {
      const matchingIndices: number[] = [];

      detail.areas.forEach((area, idx) => {
        const pin = detail.pincodes[idx] || '';
        if (
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
  }, [searchQuery]);

  const toggleZone = (zoneName: string) => {
    setOpenZones((prev) =>
      prev.includes(zoneName)
        ? prev.filter((z) => z !== zoneName)
        : [...prev, zoneName]
    );
  };

  const isZoneOpen = (zoneName: string) => {
    if (searchQuery.trim().length > 0) return true;
    return openZones.includes(zoneName);
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

  const handleAreaClick = (area: string, pincode: string) => {
    if (onSelectPincode) {
      onSelectPincode(`${area} (${pincode})`);
    }
    const formEl = document.getElementById('booking-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleWhatsAppArea = (area: string, pin: string) => {
    const msg = `Hi BrightSide TV, I need doorstep TV repair in *${area} (${pin})*, Coimbatore.`;
    window.open(`https://wa.me/918122992491?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const totalFilteredCount = Object.values(filteredZones).reduce(
    (acc, z) => acc + z.areas.length,
    0
  );

  return (
    <section id="areas" className="section-padding bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8C00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 mb-2">
              <Navigation className="h-3.5 w-3.5" /> 100% Coimbatore Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A2342] tracking-tight">
              Service Areas &amp; Pincode Finder
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl">
              Rapid doorstep technician dispatch across all 6 Coimbatore zones. Type your 6-digit PIN or locality below.
            </p>
          </div>

          {/* Real-time Search Input */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your area or pincode..."
              className="w-full h-12 pl-10 pr-16 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Accordion List */}
        {totalFilteredCount === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#0A2342]">
              No exact match for &quot;{searchQuery}&quot;
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
              Don&apos;t worry! BrightSide TV services all rural and urban areas in Coimbatore District. Call or WhatsApp us directly.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href="tel:8122992491"
                className="px-4 py-2 rounded-lg bg-[#0A2342] text-white text-xs font-bold"
              >
                Call 8122992491
              </a>
              <a
                href="https://wa.me/918122992491?text=Hi%20BrightSide%20TV,%20do%20you%20service%20my%20area%20in%20Coimbatore?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {Object.entries(filteredZones).map(([zoneName, detail]) => {
              const open = isZoneOpen(zoneName);

              return (
                <div
                  key={zoneName}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleZone(zoneName)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy-50 text-[#0A2342] text-xs font-bold border border-navy-100">
                        {detail.areas.length}
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-[#0A2342]">
                          {highlightMatch(zoneName, searchQuery)}
                        </h4>
                        <span className="text-xs text-gray-500">
                          {detail.areas.length} Verified Localities
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400">
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          open ? 'rotate-180 text-[#0A2342]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {open && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-gray-100">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 pt-4">
                        {detail.areas.map((area, index) => {
                          const pin = detail.pincodes[index] || '';

                          return (
                            <div
                              key={area + pin}
                              onClick={() => handleAreaClick(area, pin)}
                              className="group p-3 rounded-lg border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#0A2342] hover:shadow-sm transition-all cursor-pointer select-none flex flex-col justify-between"
                            >
                              <div className="flex items-start justify-between gap-1 mb-1">
                                <span className="text-xs font-bold text-[#0A2342] group-hover:text-[#FF8C00] transition-colors leading-snug">
                                  {highlightMatch(area, searchQuery)}
                                </span>
                                <span className="text-[10px] font-mono font-bold text-gray-600 bg-gray-200/80 px-1.5 py-0.5 rounded shrink-0">
                                  {highlightMatch(pin, searchQuery)}
                                </span>
                              </div>

                              <div className="mt-2 pt-1 border-t border-gray-200/60 flex items-center justify-between text-[10px]">
                                <span className="text-emerald-600 font-semibold">In Hours to 1 Day</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleWhatsAppArea(area, pin);
                                  }}
                                  className="text-[#FF8C00] hover:underline font-bold"
                                >
                                  Book &rarr;
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Note */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <p className="text-sm text-gray-700 font-medium">
            Don&apos;t see your pincode? Call <a href="tel:8122992491" className="font-bold text-[#0A2342] underline">8122992491</a> — we likely cover it!
          </p>
          <a
            href="tel:8122992491"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A2342] text-white text-xs font-bold hover:bg-navy-800 transition-colors shrink-0"
          >
            <Phone className="h-3.5 w-3.5" /> Call Dispatch Helpline
          </a>
        </div>
      </div>
    </section>
  );
};

export default PincodeSearch;
