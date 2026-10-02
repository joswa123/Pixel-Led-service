'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much does LED TV repair cost in Coimbatore?',
      a: 'Call our team at 8122992491 for a free, transparent quote. Repair costs vary depending on your TV brand, screen size (32" to 85"+), and the specific component needed. We provide an exact upfront estimate before beginning any work with zero hidden diagnostic fees.',
    },
    {
      q: 'Do you repair Smart TVs?',
      a: 'Yes, BrightSide TV specializes in all Smart TV operating systems including Android TV, Google TV, LG WebOS, Samsung Tizen, VIDAA, and Mi PatchWall. We resolve motherboard reboot loops, Wi-Fi connectivity problems, HDMI port issues, and firmware crashes.',
    },
    {
      q: 'What if my TV has sound but no display?',
      a: 'This is the classic symptom of a failed LED backlight array or backlight driver inverter circuit. We replace the faulty strips with 100% brand-new manufacturer-grade LED arrays backed by a 6-Month Warranty without needing an expensive panel replacement.',
    },
    {
      q: 'Do you offer warranty on repairs?',
      a: 'Yes! BrightSide TV provides official written warranty cards on all replaced components: 1-Year Comprehensive Warranty on Display & Panel replacements, and 6-Month Written Warranty on Motherboard and Backlight replacements.',
    },
    {
      q: 'How long does the TV repair take?',
      a: 'We try to reach you within a day, and many locations across Coimbatore receive doorstep service in just a few hours based on your area. Doorstep diagnostic is arranged promptly, and common repairs like backlight replacement, motherboard fixes, and wall-mounting are completed swiftly.',
    },
    {
      q: 'Do you service all Coimbatore areas and PIN codes?',
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
            <HelpCircle className="h-3.5 w-3.5" /> Clear Answers &amp; Policies
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A2342] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Everything you need to know about BrightSide TV repair process, free quotes, and warranty policies in Coimbatore.
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

        {/* FAQ Helpline Callout */}
        <div className="mt-8 text-center bg-gray-50 rounded-xl p-5 border border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            Need an instant quote for your TV brand &amp; issue? Call our technical helpline:
          </p>
          <a
            href="tel:8122992491"
            className="inline-flex items-center gap-2 mt-2 font-black text-sm sm:text-base text-[#0A2342] hover:text-[#FF8C00] transition-colors"
          >
            <Phone className="h-4 w-4 text-[#FF8C00]" /> 8122992491 (Mon - Sat: 9 AM - 8 PM)
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
