'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const reviews = [
    {
      name: 'Karthik Ramanathan',
      area: 'Gandhipuram, Coimbatore',
      brand: 'Sony Bravia 55" 4K',
      rating: 5,
      comment:
        'Authorized service center told me I had to change the entire expensive panel due to red light standby blinking. Smart Fix diagnosed a faulty LED backlight circuit and fixed it in Day 2 at home for a fraction of the cost. Crystal clear picture restored.',
    },
    {
      name: 'Dr. Anand Kumar',
      area: 'RS Puram, Coimbatore',
      brand: 'Samsung 65" QLED',
      rating: 5,
      comment:
        'Horizontal lines on my QLED screen were fixed using their Laser COF micro-bonding equipment. Very punctual doorstep pickup and safe return with an official written warranty card.',
    },
    {
      name: 'Priya Sundar',
      area: 'Saravanampatti, Coimbatore',
      brand: 'LG 43" Smart WebOS',
      rating: 5,
      comment:
        'My LG TV was stuck on the boot logo in a restart loop. The Smart Fix senior technician re-flashed the motherboard firmware within 24 hours at home. Very reasonable and transparent communication.',
    },
  ];

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="section-padding bg-[#F8F9FA] border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 font-bold text-[#0A2342] text-sm">4.9 / 5.0 (480+ Reviews)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-[#0A2342] tracking-tight leading-tight">
            What Coimbatore Families Say
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2.5 max-w-2xl mx-auto leading-relaxed font-normal">
            Real feedback from doorstep repair customers across Gandhipuram, RS Puram, and Saravanampatti.
          </p>
        </div>

        {/* 3-Column Grid with Staggered Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              className="flex flex-col justify-between p-6 rounded-2xl border border-gray-200 bg-white shadow-card hover:shadow-hover transition-all relative"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gray-200 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic mb-5">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342]">{rev.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <MapPin className="h-3 w-3 text-[#FF8C00]" />
                    <span>{rev.area}</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full">
                  {rev.brand}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
