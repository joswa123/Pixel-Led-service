'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const MobileStickyCTA: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/918122992491?text=Hi%20Global%20TV,%20I%20need%20TV%20repair%20service%20in%20Coimbatore.';

  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
        {/* Call Now Button (Navy) */}
        <a
          href="tel:8122992491"
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-lg bg-[#0A2342] hover:bg-navy-800 text-white font-bold text-sm active:scale-95 transition-transform shadow-md"
        >
          <Phone className="h-4 w-4 text-[#FF8C00]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button (Green) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm active:scale-95 transition-transform shadow-ctaGreen"
        >
          <FaWhatsapp className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
