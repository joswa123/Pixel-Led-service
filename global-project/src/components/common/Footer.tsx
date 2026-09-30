'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Tv, Phone, MapPin, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp, FaGoogle } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer id="contact" className="bg-[#0A2342] text-gray-300 pt-16 pb-28 md:pb-14 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo & Brief Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {!logoError ? (
                <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white border border-gray-200 p-0.5 shrink-0">
                  <Image
                    src="/logo-main.jpg"
                    alt="GLOBAL TV Service Coimbatore Logo"
                    fill
                    className="object-contain p-0.5"
                    onError={() => setLogoError(true)}
                    sizes="40px"
                  />
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF8C00] text-white font-bold">
                  <Tv className="h-5 w-5" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-tight">
                  GLOBAL <span className="text-[#FF8C00]">TV</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Service Centre Coimbatore
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Coimbatore&apos;s trusted multi-brand LED, OLED, 4K &amp; Smart TV repair service. Certified chip-level repairs, Laser COF bonding, and 90-day spare parts warranty.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/918122992491"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-[#25D366] text-white transition-colors"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
              <a
                href="tel:8122992491"
                aria-label="Phone"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-[#FF8C00] text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Google Business"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <FaGoogle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#FF8C00] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-[#FF8C00] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-[#FF8C00] transition-colors">
                  Supported Brands
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#FF8C00] transition-colors">
                  Service Areas (Pincodes)
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#FF8C00] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FF8C00] transition-colors">
                  FAQ &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#booking-form" className="hover:text-[#FF8C00] transition-colors">
                  Book Doorstep Inspection
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Brands */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#FF8C00] pl-2.5">
              Top Brands Serviced
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Samsung LED &amp; QLED Service</li>
              <li>LG OLED &amp; WebOS Repair</li>
              <li>Sony Bravia 4K TV Care</li>
              <li>Mi &amp; Xiaomi PatchWall TV</li>
              <li>TCL QLED &amp; Google TV</li>
              <li>OnePlus Smart TV Service</li>
              <li>Panasonic &amp; Haier LED TV</li>
              <li>Vu &amp; Philips Smart Displays</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#FF8C00] pl-2.5">
              Contact &amp; Support
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <a
                href="tel:8122992491"
                className="flex items-start gap-2.5 hover:text-[#FF8C00] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#FF8C00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">8122992491</div>
                  <div className="text-xs text-gray-400">Direct Technician Helpline</div>
                </div>
              </a>

              <a
                href="https://wa.me/918122992491?text=Hi%20Global%20TV,%20I%20need%20TV%20repair%20service%20in%20Coimbatore."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <FaWhatsapp className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">+91 81229 92491</div>
                  <div className="text-xs text-emerald-300">WhatsApp Instant Booking</div>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-gray-300">
                  Doorstep coverage across all 641xxx PIN codes in Coimbatore District
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                <div className="text-xs text-gray-300">
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  <span className="text-gray-400">Sunday: 10:00 AM - 4:00 PM (Emergency calls)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; 2026 GLOBAL TV. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-gray-300 font-medium">
            Service available across all Coimbatore pincodes &bull; Day 1-2 Doorstep Turnaround &bull; 90-Day Spares Warranty
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
