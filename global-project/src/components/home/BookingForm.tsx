'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { z } from 'zod';
import { FaWhatsapp } from 'react-icons/fa';
import { ShieldCheck, Clock, CheckCircle2, Send, Phone, Truck } from 'lucide-react';

import { FloatingInput } from '@/components/watermelon/floating-input';
import { activeBrands } from '@/data/brands';

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

interface BookingFormProps {
  initialBrand?: string;
  initialService?: string;
  initialPincode?: string;
  className?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialBrand = '',
  initialService = 'LED/LCD Panel Repair',
  initialPincode = '',
  className = '',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mainServices = [
    { label: 'Panel Repair', value: 'LED/LCD Panel Repair', tag: 'Free Quote' },
    { label: 'Motherboard', value: 'Motherboard & Power Board', tag: 'Free Quote' },
    { label: 'Backlight Strip', value: 'Backlight / LED Strip', tag: 'Free Quote' },
    { label: 'Wall Mount', value: 'TV Wall Mount & Install', tag: 'Same Day' },
  ];

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

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const message = `Hi Smart Fix LED TV Center, I need doorstep repair service.
Name: ${data.name}
Phone: ${data.phone}
Brand: ${data.brand}
Service: ${data.serviceType}
Issue: ${data.issueDescription}
Pincode: ${data.pincode ? data.pincode : 'Coimbatore'}`;

      const whatsappUrl = `https://wa.me/918122992491?text=${encodeURIComponent(message)}`;

      toast.success('Opening WhatsApp — we\'ll respond swiftly.', {
        description: 'Connecting to Smart Fix technician dispatch.',
        duration: 4000,
        icon: <FaWhatsapp className="h-5 w-5 text-[#25D366]" />,
      });

      window.open(whatsappUrl, '_blank');
    } catch (e) {
      toast.error('Unable to open WhatsApp. Please call 8122992491.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="booking-form"
      className={`w-full rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-card ${className}`}
    >
      <div className="mb-5 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#C2410C] bg-orange-50 px-2.5 py-0.5 rounded">
            <Clock className="h-3 w-3" /> Fast Doorstep Visit
          </span>
          <span className="text-xs font-semibold text-gray-500">
            In Hours to 1 Day
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#0A2342] tracking-tight">
          Book Your TV Repair
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Doorstep inspection across Coimbatore. Call or message for a <strong>Free Quote</strong>.
        </p>
      </div>

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
                  id="form-name"
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
                  id="form-phone"
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
                  id="form-pincode"
                  label="e.g. 641002 or RS Puram"
                />
              )}
            />
          </div>
        </div>

        {/* Service Type Selection (NO PRICES) */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Service Required <span className="text-[#FF8C00]">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {mainServices.map((svc) => {
              const selected = form.watch('serviceType') === svc.value;
              return (
                <button
                  key={svc.value}
                  type="button"
                  onClick={() => form.setValue('serviceType', svc.value)}
                  className={`flex flex-col text-left p-2.5 rounded-lg border text-xs transition-all ${
                    selected
                      ? 'border-[#0A2342] bg-[#0A2342] text-white shadow-sm'
                      : 'border-gray-200 bg-gray-50 text-gray-800 hover:border-gray-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>{svc.label}</span>
                    <span className={selected ? 'text-amber-300' : 'text-[#FF8C00]'}>
                      {svc.tag}
                    </span>
                  </div>
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
            placeholder="E.g., No picture but sound is working, red light blinking, vertical lines on screen..."
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
          className="w-full py-3.5 px-4 rounded-lg bg-[#FF8C00] hover:bg-[#EA580C] text-white font-bold text-sm sm:text-base shadow-cta flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98]"
        >
          <FaWhatsapp className="h-5 w-5 fill-current text-white" />
          <span>Book via WhatsApp</span>
          <Send className="h-4 w-4 ml-1" />
        </button>

        {/* Direct Call Secondary Option */}
        <div className="text-center pt-1">
          <a
            href="tel:8122992491"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2342] hover:text-[#FF8C00] transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-[#FF8C00]" /> Need instant diagnosis? <span className="underline">Call 8122992491</span>
          </a>
        </div>

        {/* Micro Trust Guarantee */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-[11px] font-semibold text-gray-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Free Doorstep Diagnosis
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-[#0A2342]" /> Reach Within a Day (Hours by Location)
          </span>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
