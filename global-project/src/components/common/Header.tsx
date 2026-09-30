'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Tv, Phone, Menu, X, ShieldCheck, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md transition-all shadow-sm">
      {/* Top micro bar */}
      <div className="bg-[#0A2342] text-white px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-semibold">Coimbatore Doorstep Service:</span>
            <span className="hidden sm:inline text-gray-200">Day 1-2 Turnaround &bull; 90-Day Spares Warranty</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="tel:8122992491" className="flex items-center gap-1.5 text-amber-300 hover:text-white font-bold transition-colors">
              <Phone className="h-3 w-3" />
              <span>Helpline: 8122992491</span>
            </a>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:inline text-gray-300">Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo Left */}
          <a href="#" className="flex items-center gap-3 group">
            {!logoError ? (
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo-main.jpg"
                  alt="GLOBAL TV Service Coimbatore Logo"
                  fill
                  className="object-contain p-0.5"
                  onError={() => setLogoError(true)}
                  sizes="48px"
                  priority
                />
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF8C00] text-white shadow-sm group-hover:scale-105 transition-transform">
                <Tv className="h-6 w-6" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0A2342] leading-none">
                GLOBAL <span className="text-[#FF8C00]">TV</span>
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">
                Service Centre Coimbatore
              </span>
            </div>
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-700">
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

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:8122992491"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-bold text-[#0A2342] bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#0A2342]" />
              <span>8122992491</span>
            </a>

            <a
              href="#booking-form"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#FF8C00] hover:bg-[#EA580C] shadow-cta transition-all hover:scale-105 active:scale-95"
            >
              Book Repair
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
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

          <div className="pt-2 border-t border-gray-100 flex gap-2">
            <a
              href="tel:8122992491"
              className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#0A2342] py-2.5 text-xs font-bold text-white"
            >
              <Phone className="h-4 w-4" /> Call 8122992491
            </a>
            <a
              href="https://wa.me/918122992491?text=Hi%20Global%20TV,%20I%20need%20TV%20repair%20service%20in%20Coimbatore."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] py-2.5 text-xs font-bold text-white"
            >
              <FaWhatsapp className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
