import { z } from 'zod';

// Zod schema for server-side validation
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name contains invalid characters'),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name contains invalid characters'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address')
    .max(100, 'Email too long')
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .min(1, 'Phone is required')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Phone contains invalid characters')
    .refine((val) => val.replace(/\D/g, '').length >= 10, 'Phone number must be at least 10 digits')
    .refine((val) => val.replace(/\D/g, '').length <= 13, 'Phone number too long'),

  inquiry: z.string().min(1, 'Inquiry type is required').max(100, 'Inquiry type too long'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message too long'),

  consent: z.boolean().refine((val) => val === true, 'Consent is required'),

  // Honeypot field - should always be empty
  website: z.string().max(0).optional(),
});

// Sanitize function to prevent email header injection
export function sanitizeForEmail(input) {
  if (typeof input !== 'string') return '';

  // Remove newlines, carriage returns, and null bytes to prevent header injection
  return input
    .replace(/[\r\n\0]/g, '')
    .trim()
    .slice(0, 1000); // Limit length as extra safety
}

// Sanitize HTML content for email body
export function sanitizeHtmlForEmail(input) {
  if (typeof input !== 'string') return '';

  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/[\r\n]/g, '<br/>');
}

// Legacy validation functions (kept for compatibility)
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

export function validateRequired(value) {
  return value && value.trim().length > 0;
}

export function validateForm(formData) {
  const errors = {};

  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'Message is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
