'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 3.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden pointer-events-auto select-none">
      {/* The TV Turn-On Effect */}
      <div className="tv-turn-on">
        <div className="tv-screen">
          {/* Logo appears inside the "TV screen" after it opens */}
          <div className="logo-reveal">
            <div className="relative w-48 md:w-64 h-20 md:h-24 flex items-center justify-center">
              <Image 
                src="/assets/global-tv-logo.png"
                alt="GLOBAL TV Service Centre"
                width={300}
                height={100}
                priority
                className="w-48 md:w-64 h-auto object-contain drop-shadow-[0_4px_12px_rgba(255,140,0,0.4)]"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">
                Initializing TV Service Lab...
              </span>
              <div className="loading-bar-container">
                <div className="loading-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
