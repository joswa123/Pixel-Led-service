'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much does LED TV repair cost in Coimbatore?',
      a: 'Our doorstep diagnosis & wall-mount services start from just ₹399. Screen panel repairs start at ₹599, motherboard repairs at ₹850, backlight replacement at ₹1,200, and Laser COF bonding at ₹2,500. We provide an exact itemized estimate before any work begins.',
    },
    {
      q: 'Do you repair Smart TVs?',
      a: 'Yes, we specialize in Android TV, Google TV, WebOS (LG), Tizen (Samsung), VIDAA, and PatchWall (Mi). We fix motherboard reboot loops, Wi-Fi connectivity issues, HDMI port failures, and firmware crashes.',
    },
    {
      q: 'What if my TV has no display but sound works?',
      a: 'This is the classic symptom of a failed LED backlight array or backlight driver inverter circuit. We replace the faulty strips with original manufacturer-grade LED arrays without needing an expensive panel replacement.',
    },
    {
      q: 'Do you offer warranty?',
      a: 'Yes! We provide an official 90-Day Written Warranty on all replaced spare parts and repair services. If any recurring issue occurs within 90 days, we fix it at zero extra charge.',
    },
    {
      q: 'How long does repair take?',
      a: 'We operate on a strict Day 1-2 turnaround model. Doorstep initial inspection is typically conducted within 2-4 hours of booking, and standard motherboard, power supply, and backlight repairs are completed in 24 to 48 hours.',
    },
    {
      q: 'Do you service all Coimbatore areas?',
      a: 'Yes, we cover all 6 zones in Coimbatore District — including Gandhipuram, RS Puram, Peelamedu, Saravanampatti, Singanallur, Vadavalli, Thudiyalur, Sundarapuram, and surrounding suburban corridors.',
    },
    {
      q: 'Do you use genuine spare parts?',
      a: 'Yes, 100%. We source OEM-grade T-Con boards, power supply ICs, original LED backlight strips, and laser COF driver ribbons matching your specific TV brand and panel model.',
    },
    {
      q: 'Can I book via WhatsApp?',
      a: 'Yes! You can simply submit the booking form above, or click any WhatsApp button to message us directly at +91 81229 92491. We typically respond within 2 hours.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8C00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 mb-2">
            <HelpCircle className="h-3.5 w-3.5" /> Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A2342] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Everything you need to know about our TV repair process, pricing, and warranty in Coimbatore.
          </p>
        </div>

        {/* 8-Item Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-base text-[#0A2342] hover:bg-gray-50 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FF8C00]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
