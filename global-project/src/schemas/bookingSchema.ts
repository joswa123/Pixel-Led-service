import { z } from 'zod';

export const bookingSchema = z.object({
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number (e.g. 9876543210)'),
  brand: z
    .string()
    .min(1, 'Please select your TV brand'),
  serviceType: z
    .string()
    .min(1, 'Please select the service required'),
  issueDescription: z
    .string()
    .min(10, 'Please describe your TV issue (minimum 10 characters)'),
  customerName: z
    .string()
    .optional(),
  pincode: z
    .string()
    .optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
