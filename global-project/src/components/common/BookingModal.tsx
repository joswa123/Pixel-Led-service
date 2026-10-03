'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Truck, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { FloatingInput } from '@/components/watermelon/floating-input';
import { activeBrands } from '@/data/brands';
import { services } from '@/data/services';

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(1, 'Mobile number is required')
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number (e.g. 9876543210)'),
  brand: z.string().min(1, 'Please select your TV brand'),
  serviceType: z.string().min(1, 'Please select the service required'),
  issueDescription: z.string().min(10, 'Please describe the issue (minimum 10 characters)'),
  pincode: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface BookingModalContextType {
  isOpen: boolean;
  openBookingModal: (options?: { brand?: string; service?: string; pincode?: string }) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType>({
  isOpen: false,
  openBookingModal: () => {},
  closeBookingModal: () => {},
});

export const useBookingModal = () => useContext(BookingModalContext);

export const BookingModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<{ brand?: string; service?: string; pincode?: string }>({});

  const openBookingModal = (options?: { brand?: string; service?: string; pincode?: string }) => {
    setModalOptions(options || {});
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider value={{ isOpen, openBookingModal, closeBookingModal }}>
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBookingModal}
        initialBrand={modalOptions.brand}
        initialService={modalOptions.service}
        initialPincode={modalOptions.pincode}
      />
    </BookingModalContext.Provider>
  );
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBrand?: string;
  initialService?: string;
  initialPincode?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialBrand = '',
  initialService = 'Panel Repair & Screen Lines',
  initialPincode = '',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      brand: initialBrand,
      serviceType: initialService,
      issueDescription: '',
      pincode: initialPincode,
    },
  });

  // Keep form in sync when props change
  React.useEffect(() => {
    if (isOpen) {
      if (initialBrand) form.setValue('brand', initialBrand);
      if (initialService) form.setValue('serviceType', initialService);
      if (initialPincode) form.setValue('pincode', initialPincode);
    }
  }, [isOpen, initialBrand, initialService, initialPincode, form]);

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const message = `Hi Smart Fix LED TV Center, I need doorstep TV repair service.
Name: ${data.name}
Phone: ${data.phone}
Brand: ${data.brand}
Service: ${data.serviceType}
Issue: ${data.issueDescription}
Pincode/Area: ${data.pincode ? data.pincode : 'Coimbatore'}`;

      const whatsappUrl = `https://wa.me/918122992491?text=${encodeURIComponent(message)}`;

      toast.success('Redirecting to WhatsApp for instant technician dispatch...', {
        description: 'Smart Fix LED TV Center Coimbatore',
        duration: 4000,
        icon: <FaWhatsapp className="h-5 w-5 text-[#25D366]" />,
      });

      window.open(whatsappUrl, '_blank');
      onClose();
    } catch {
      toast.error('Unable to open WhatsApp. Please call 8122992491.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur Fade In */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A2342]/70 backdrop-blur-md"
          />

          {/* Modal Container: Scale from 0.9 to 1.0 with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-10 max-h-[92vh] flex flex-col"
          >
            {/* Header with Navy background & Orange accent */}
            <div className="bg-[#0A2342] text-white p-5 sm:p-6 relative">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking modal"
                className="absolute top-4 right-4 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#FF8C00] bg-white/10 px-2.5 py-1 rounded-full mb-2">
                <Truck className="h-3 w-3 fill-current" /> Fast Coimbatore Doorstep Repair
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Book TV Inspection — Smart Fix
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Day 1-2 doorstep repair across Coimbatore. Free diagnosis &amp; transparent quotes.
              </p>
            </div>

            {/* Modal Body / Form */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Controller
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FloatingInput
                          {...field}
                          id="modal-name"
                          label="Your Full Name *"
                          error={form.formState.errors.name?.message}
                        />
                      )}
                    />
                    {form.formState.errors.name && (
                      <p className="text-[11px] font-medium text-red-600 mt-1">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Controller
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FloatingInput
                          {...field}
                          id="modal-phone"
                          type="tel"
                          maxLength={10}
                          label="10-Digit Mobile Number *"
                          error={form.formState.errors.phone?.message}
                        />
                      )}
                    />
                    {form.formState.errors.phone && (
                      <p className="text-[11px] font-medium text-red-600 mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Brand & Pincode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      TV Brand <span className="text-[#FF8C00]">*</span>
                    </label>
                    <select
                      {...form.register('brand')}
                      className="w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition-colors"
                    >
                      <option value="">Select TV Brand (15 Active)</option>
                      {activeBrands.map((b) => (
                        <option key={b.slug} value={b.name}>
                          {b.name} ({b.specialization.split(',')[0]})
                        </option>
                      ))}
                    </select>
                    {form.formState.errors.brand && (
                      <p className="text-[11px] font-medium text-red-600 mt-1">
                        {form.formState.errors.brand.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Coimbatore Area / Pincode
                    </label>
                    <Controller
                      control={form.control}
                      name="pincode"
                      render={({ field }) => (
                        <FloatingInput
                          {...field}
                          id="modal-pincode"
                          label="e.g. 641002 or RS Puram"
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Service Type Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Service Required <span className="text-[#FF8C00]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {services.map((svc) => {
                      const selected = form.watch('serviceType') === svc.title;
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => form.setValue('serviceType', svc.title)}
                          className={`flex flex-col text-left p-2.5 rounded-lg border text-xs transition-all ${
                            selected
                              ? 'border-[#0A2342] bg-[#0A2342] text-white shadow-sm'
                              : 'border-gray-200 bg-gray-50 text-gray-800 hover:border-gray-300 hover:bg-white'
                          }`}
                        >
                          <span className="font-bold truncate">{svc.title.split('&')[0]}</span>
                          <span className={`text-[10px] ${selected ? 'text-amber-300' : 'text-[#FF8C00]'}`}>
                            {svc.timeEstimate}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {form.formState.errors.serviceType && (
                    <p className="text-[11px] font-medium text-red-600 mt-1">
                      {form.formState.errors.serviceType.message}
                    </p>
                  )}
                </div>

                {/* Issue Description */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Issue Description <span className="text-[#FF8C00]">*</span>
                  </label>
                  <textarea
                    {...form.register('issueDescription')}
                    rows={2}
                    placeholder="E.g., Screen has horizontal lines, red standby light blinking, no picture but audio works..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition-colors resize-none"
                  />
                  {form.formState.errors.issueDescription && (
                    <p className="text-[11px] font-medium text-red-600 mt-1">
                      {form.formState.errors.issueDescription.message}
                    </p>
                  )}
                </div>

                {/* Primary CTA (Vibrant Orange) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#FF8C00] hover:bg-[#EA580C] text-white font-black text-sm sm:text-base shadow-cta flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                  <FaWhatsapp className="h-5 w-5 fill-current" />
                  <span>Send to WhatsApp Dispatch</span>
                  <Send className="h-4 w-4 ml-1" />
                </button>

                {/* Direct Call Option */}
                <div className="text-center pt-1">
                  <a
                    href="tel:8122992491"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2342] hover:text-[#FF8C00] transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#FF8C00]" /> Prefer calling directly? <span className="underline">8122992491</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-[11px] font-semibold text-gray-500 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Free Diagnosis
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#0A2342]" /> Doorstep Within Day 1-2
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" /> All Brands Serviced
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
