'use client';

import React from 'react';

interface SmartFixLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'onDark';
  showSubtitle?: boolean;
}

export const SmartFixLogo: React.FC<SmartFixLogoProps> = ({
  className = 'h-11 sm:h-12 md:h-14 w-auto',
  variant = 'dark',
  showSubtitle = true,
}) => {
  const isDarkBg = variant === 'onDark' || variant === 'light';
  const primaryTextColor = isDarkBg ? '#FFFFFF' : '#0A192F';
  const subtitleColor = isDarkBg ? '#94A3B8' : '#475569';
  const orange = '#FF6B00';
  const amber = '#FFA000';
  const cyan = '#00E5FF';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Curvy Display Shield Gradient */}
          <linearGradient id="shieldBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A192F" />
            <stop offset="50%" stopColor="#0F2744" />
            <stop offset="100%" stopColor="#050B14" />
          </linearGradient>

          {/* Electric Sunset Laser Wave Gradient */}
          <linearGradient id="curvyLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="50%" stopColor="#FFA000" />
            <stop offset="100%" stopColor="#FF3D00" />
          </linearGradient>

          {/* Cyan Digital Pulse Gradient */}
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0091EA" />
          </linearGradient>

          {/* Smooth Glow Filter for Curvy Laser Accents */}
          <filter id="curvyGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. CURVY & BOLD BRAND ICON (The Fluid S-F OLED Smart Shield) */}
        <g transform="translate(10, 10)">
          {/* Smooth Curvy Squircle Outer Border */}
          <rect
            x="0"
            y="0"
            width="84"
            height="84"
            rx="24"
            fill="url(#shieldBgGrad)"
            stroke={isDarkBg ? '#38BDF8' : '#0A192F'}
            strokeWidth="2.5"
            strokeOpacity={isDarkBg ? '0.6' : '0.25'}
          />

          {/* Inner Curvy Display Glass */}
          <rect
            x="6"
            y="6"
            width="72"
            height="72"
            rx="18"
            fill="#050B14"
            fillOpacity="0.8"
            stroke="#1E3A8A"
            strokeWidth="1.2"
          />

          {/* Organic Curvy 'S' Fluid Ribbon in Crisp White */}
          <path
            d="M 36 28 C 36 23 31 19 24 19 C 17 19 13 23 13 28 C 13 37 36 34 36 45 C 36 53 29 57 21 57 C 14 57 11 52 11 48"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Curvy Bold 'F' Anchor with Sweeping Top Curve */}
          <path
            d="M 45 59 V 21 C 45 20 46 19 47 19 H 62 M 45 37 H 58"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Fluid S-Curved Laser Wave in Electric Sunset Tangerine */}
          <path
            d="M 8 42 C 22 42, 28 32, 42 42 C 54 50, 62 38, 76 42"
            stroke="url(#curvyLaserGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            filter="url(#curvyGlow)"
          />

          {/* Luminous Precision Neon Cyan Pixel Dot */}
          <circle cx="68" cy="24" r="3.5" fill="url(#cyanGrad)" filter="url(#curvyGlow)" />

          {/* Electric Amber Origin Dot */}
          <circle cx="16" cy="42" r="3" fill={amber} />
        </g>

        {/* 2. CURVY, BOLD, AND STYLISH TYPOGRAPHY */}
        {/* 'SMART' rendered in curvy bold font (Outfit style) */}
        <text
          x="112"
          y="58"
          fill={primaryTextColor}
          fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="800"
          fontSize="46"
          letterSpacing="-0.02em"
        >
          SMART
        </text>

        {/* 'FIX' rendered in curvy bold font with vibrant electric styling */}
        <text
          x="286"
          y="58"
          fill={orange}
          fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="900"
          fontSize="46"
          letterSpacing="-0.01em"
        >
          FIX
        </text>

        {/* Curvy Fluid Laser Underline swooping beneath FIX */}
        <path
          d="M 286 67 C 314 67, 334 69, 372 65"
          stroke="url(#curvyLaserGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Floating Glowing Square Pixel above 'I' */}
        <rect
          x="321"
          y="18"
          width="10"
          height="10"
          rx="3"
          fill={amber}
          filter="url(#curvyGlow)"
        />

        {/* 3. SUBTITLE: LED TV CENTER • COIMBATORE */}
        {showSubtitle && (
          <g transform="translate(114, 88)">
            {/* Curvy Orange Pill Badge */}
            <rect
              x="0"
              y="-11"
              width="136"
              height="17"
              rx="8.5"
              fill={orange}
              fillOpacity={isDarkBg ? '0.22' : '0.14'}
            />
            <text
              x="12"
              y="1.5"
              fill={orange}
              fontFamily="'Outfit', system-ui, sans-serif"
              fontWeight="800"
              fontSize="10.5"
              letterSpacing="0.22em"
            >
              LED TV CENTER
            </text>

            {/* Glowing separator dot */}
            <circle cx="150" cy="-2.5" r="2.5" fill={cyan} />

            <text
              x="162"
              y="1.5"
              fill={subtitleColor}
              fontFamily="'Outfit', system-ui, sans-serif"
              fontWeight="700"
              fontSize="10.5"
              letterSpacing="0.26em"
            >
              COIMBATORE
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default SmartFixLogo;
