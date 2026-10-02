'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep preloader visible for 3.8s for clear brand recognition
    const timer = setTimeout(() => setIsLoading(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="tv-turn-on select-none">
      <div className="tv-screen">
        <Image
          src="/assets/brightside-tv-logo-white.svg"
          alt="BrightSide TV"
          width={290}
          height={60}
          priority
          className="tv-logo"
        />
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
