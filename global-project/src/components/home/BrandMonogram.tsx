'use client';

import React from 'react';

interface BrandMonogramProps {
  brandName: string;
  shape?: 'circle' | 'square';
  className?: string;
  isComingSoon?: boolean;
}

export const BrandMonogram: React.FC<BrandMonogramProps> = ({
  brandName,
  shape = 'square',
  className = '',
  isComingSoon = false,
}) => {
  // Extract the first prominent letter (e.g., "Samsung" -> "S", "Mi / Xiaomi" -> "M")
  const firstLetter = brandName.trim().charAt(0).toUpperCase();

  const shapeClasses =
    shape === 'circle' ? 'rounded-full' : 'rounded-2xl';

  return (
    <div
      className={`relative flex items-center justify-center w-16 h-16 select-none shrink-0 transition-all duration-300 shadow-xs border ${shapeClasses} ${
        isComingSoon
          ? 'bg-gray-100/90 border-gray-200 text-gray-500 group-hover:bg-[#FF8C00] group-hover:border-[#FF8C00] group-hover:text-white group-hover:shadow-md'
          : 'bg-[#F8F9FA] border-gray-200 text-[#0A2342] group-hover:bg-[#FF8C00] group-hover:border-[#FF8C00] group-hover:text-white group-hover:shadow-md group-hover:scale-105'
      } ${className}`}
    >
      <span className="font-sans font-black text-2xl tracking-tight transition-colors duration-300">
        {firstLetter}
      </span>
      {/* Subtle modern corner accent mark */}
      <span
        className={`absolute bottom-1.5 right-2 h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
          isComingSoon
            ? 'bg-gray-400 group-hover:bg-white'
            : 'bg-[#FF8C00] group-hover:bg-white'
        }`}
      />
    </div>
  );
};

export default BrandMonogram;
