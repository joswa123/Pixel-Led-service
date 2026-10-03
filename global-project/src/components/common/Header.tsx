'use client';

import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SmartFixLogo } from './SmartFixLogo';
import { useBookingModal } from './BookingModal';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBookingModal();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md transition-all shadow-sm">
      {/* Top micro announcement bar */}
      <div className="bg-[#0A2342] text-white px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-semibold">Smart Fix Coimbatore:</span>
            <span className="hidden sm:inline text-gray-200">Doorstep Repair Within Day 1-2 &bull; Free Diagnosis &bull; All Brands Serviced</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:8122992491"
              itemProp="telephone"
              className="flex items-center gap-1.5 text-[#FF8C00] hover:text-white font-bold transition-colors"
            >
              <Phone className="h-3 w-3 fill-current" />
              <span>Helpline: 8122992491</span>
            </a>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:inline text-gray-300">Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex py-2.5 sm:py-3 items-center justify-between min-h-[68px] md:min-h-[76px]">
          {/* Logo Left: SMART FIX Letter-Only Wordmark (h-12 md:h-14) */}
          <a href="#" className="flex items-center group shrink-0" aria-label="Smart Fix LED TV Center Home">
            <SmartFixLogo className="h-10 sm:h-12 md:h-14 w-auto group-hover:scale-105 transition-transform" />
          </a>

          {/* Center Nav: Home, Services, Brands, Areas, FAQ, Contact */}
          <nav className="hidden lg:flex items-center justify-center gap-8 text-sm font-semibold text-gray-700 mx-auto">
            <a href="#" className="hover:text-[#FF8C00] transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-[#FF8C00] transition-colors">
              Services
            </a>
            <a href="#brands" className="hover:text-[#FF8C00] transition-colors">
              Brands
            </a>
            <a href="#areas" className="hover:text-[#FF8C00] transition-colors">
              Areas
            </a>
            <a href="#how-it-works" className="hover:text-[#FF8C00] transition-colors">
              How It Works
            </a>
            <a href="#faq" className="hover:text-[#FF8C00] transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[#FF8C00] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action: Single Orange "Book Repair" Button + Helpline */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:8122992491"
              itemProp="telephone"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-bold text-[#0A2342] bg-gray-100 hover:bg-gray-200 transition-colors shadow-xs"
            >
              <Phone className="h-3.5 w-3.5 text-[#FF8C00] fill-current" />
              <span>8122992491</span>
            </a>

            <button
              type="button"
              onClick={() => openBookingModal()}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#FF8C00] hover:bg-[#EA580C] shadow-cta transition-all hover:scale-105 active:scale-95"
            >
              Book Repair
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-800 hover:text-[#FF8C00]"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-800 hover:text-[#FF8C00]"
          >
            Our Services
          </a>
          <a
            href="#brands"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-800 hover:text-[#FF8C00]"
          >
            Supported Brands
          </a>
          <a
            href="#areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-800 hover:text-[#FF8C00]"
          >
            Coimbatore Service Areas
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-800 hover:text-[#FF8C00]"
          >
            How It Works
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-800 hover:text-[#FF8C00]"
          >
            Frequently Asked Questions
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-800 hover:text-[#FF8C00]"
          >
            Contact &amp; Support
          </a>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className="w-full py-3 rounded-lg bg-[#FF8C00] text-white text-xs font-black shadow-cta"
            >
              Book Repair Now
            </button>
            <div className="flex gap-2">
              <a
                href="tel:8122992491"
                itemProp="telephone"
                className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#0A2342] py-2.5 text-xs font-bold text-white"
              >
                <Phone className="h-4 w-4 text-[#FF8C00] fill-current" /> Call 8122992491
              </a>
              <a
                href="https://wa.me/918122992491?text=Hi%20Smart%20Fix,%20I%20need%20TV%20repair%20service%20in%20Coimbatore."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] py-2.5 text-xs font-bold text-white"
              >
                <FaWhatsapp className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
