'use client';

import React from 'react';

interface BrightSideLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'onDark';
}

export const BrightSideLogo: React.FC<BrightSideLogoProps> = ({
  className = 'h-10 sm:h-12 md:h-14 w-auto',
  variant = 'dark',
}) => {
  const isDarkBg = variant === 'onDark' || variant === 'light';
  const textColor = isDarkBg ? '#FFFFFF' : '#0A2342';
  const orangeYellow = '#FFB347';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 340 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Subtle Horizontal TV Scan Lines through 'TV' & 'BrightSide' */}
        <g stroke={orangeYellow} strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
          <path d="M210 24 H330" />
          <path d="M216 31 H332" />
          <path d="M214 38 H330" />
          <path d="M220 45 H326" />
        </g>

        {/* Soft Radiant Light Accent behind 'TV' */}
        <g stroke={orangeYellow} strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
          <path d="M250 16 L258 6" />
          <path d="M280 14 L292 4" />
          <path d="M310 18 L326 10" />
          <path d="M250 56 L258 64" />
          <path d="M285 58 L296 66" />
        </g>

        {/* "Bright" - Modern Bold Sans-Serif */}
        <text
          x="6"
          y="48"
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
          fontWeight="700"
          fontSize="40"
          letterSpacing="-0.03em"
          fill={textColor}
        >
          Bright
        </text>

        {/* "Side" - Bold Grounded */}
        <text
          x="126"
          y="48"
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
          fontWeight="900"
          fontSize="40"
          letterSpacing="-0.03em"
          fill={textColor}
        >
          Side
        </text>

        {/* "TV" - Bigger, Bold, Close & Prominent in Warm Orange-Yellow */}
        <text
          x="218"
          y="49"
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
          fontWeight="900"
          fontSize="46"
          letterSpacing="-0.01em"
          fill={orangeYellow}
        >
          TV
        </text>
      </svg>
    </div>
  );
};

export default BrightSideLogo;
