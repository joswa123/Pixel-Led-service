'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { X, Calendar, Search, PhoneCall, MessageCircle, ChevronRight, Phone } from 'lucide-react';

export const QuickChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleAction = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918122992491?text=${encoded}`, '_blank');
  };

  const quickActions = [
    {
      title: 'Book a Repair',
      desc: 'Doorstep TV repair in Day 1-2',
      icon: Calendar,
      message: 'Hi Smart Fix, I want to book a TV repair.',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
    },
    {
      title: 'Check Repair Status',
      desc: 'Track job card or technician visit',
      icon: Search,
      message: 'Hi Smart Fix, I want to check the status of my TV repair.',
      color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
    },
    {
      title: 'Talk to a Technician',
      desc: 'Free instant fault diagnosis',
      icon: PhoneCall,
      message: 'Hi Smart Fix, I need to talk to a technician.',
      color: 'bg-orange-50 text-[#FF8C00] border-orange-200 hover:bg-orange-100',
    },
  ];

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 select-none flex flex-col items-end gap-2.5">
      {/* Expanded Quick Chat Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-2 origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-[#0A2342] text-white p-4 flex items-center justify-between relative">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                    <FaWhatsapp className="h-6 w-6" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#0A2342]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">Need Help?</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-300">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Smart Fix Technician Online</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Quick Chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content & Actions */}
            <div className="p-4 space-y-3 bg-gray-50/60">
              <div className="bg-white p-3 rounded-xl border border-gray-200/80 text-xs text-gray-700 shadow-xs leading-relaxed">
                👋 Hello! How can our Coimbatore technician team help you today? Choose an option below to chat directly on WhatsApp:
              </div>

              <div className="space-y-2">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleAction(action.message)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 hover:border-[#0A2342] hover:shadow-sm transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg border ${action.color} transition-colors`}>
                        <action.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0A2342] group-hover:text-[#FF8C00] transition-colors">
                          {action.title}
                        </div>
                        <div className="text-[10px] text-gray-500">
                          {action.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#0A2342] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>

              {/* Direct Call Link */}
              <div className="pt-2 text-center border-t border-gray-200">
                <a
                  href="tel:8122992491"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2342] hover:text-[#FF8C00] transition-colors"
                >
                  <Phone className="h-3 w-3 text-[#FF8C00]" /> Prefer calling directly? <span className="underline">8122992491</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Direct Call Button (Above WhatsApp Button) */}
      <motion.a
        href="tel:8122992491"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Call Smart Fix TV Repair directly at 8122992491"
        className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#0A2342] text-white shadow-2xl hover:bg-navy-800 border-2 border-white/20 transition-all focus:outline-none focus:ring-4 focus:ring-navy-400/40"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF8C00] fill-current" />
      </motion.a>

      {/* Floating Circular WhatsApp Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open Smart Fix WhatsApp Quick Chat"
        className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#1ebe5d] transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaWhatsapp className="h-8 w-8 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Static Notification Badge when closed */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 rounded-full bg-[#FF8C00] border-2 border-white" />
        )}
      </motion.button>
    </div>
  );
};

export default QuickChatWidget;
