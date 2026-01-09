'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaLock, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const buttonHover = { scale: 1.02 };
const buttonTap = { scale: 0.97 };

export default function ContactFormModal({ open, onClose }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '', // Honeypot field (hidden from UI)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [retryAfter, setRetryAfter] = useState(null);

  // Client-side validation
  const validateForm = () => {
    const newErrors = {};

    // First name validation
    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (form.firstName.length > 50) {
      newErrors.firstName = 'First name must be 50 characters or less';
    }

    // Last name validation
    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (form.lastName.length > 50) {
      newErrors.lastName = 'Last name must be 50 characters or less';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but validate format if provided)
    if (form.phone && form.phone.length > 20) {
      newErrors.phone = 'Phone number is too long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    // Check if rate limited
    if (retryAfter) {
      toast.error(`Please wait ${retryAfter} seconds before trying again`);
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({}); // Clear previous errors

      const res = await fetch('/api/catalog-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      // Handle rate limiting
      if (res.status === 429) {
        const retrySeconds = data.retryAfter || 60;
        setRetryAfter(retrySeconds);
        toast.error(`Too many requests. Please try again in ${retrySeconds} seconds.`);

        // Countdown timer
        const timer = setInterval(() => {
          setRetryAfter((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return null;
            }
            return prev - 1;
          });
        }, 1000);

        return;
      }

      // Handle validation errors
      if (res.status === 400 && data.errors) {
        setErrors(data.errors);
        toast.error('Please check the form for errors');
        return;
      }

      // Handle other errors
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Success
      toast.success(data.message || 'Catalog will be sent to your email shortly!');

      // Reset form
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        website: '', // Reset honeypot
      });

      // Close modal after short delay
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      console.error('Catalog request error:', err);
      toast.error(err.message || 'Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when modal closes
  const handleClose = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      website: '',
    });
    setErrors({});
    setRetryAfter(null);
    onClose();
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <Toaster />
      <motion.div
        className="fixed inset-0 z-[999] bg-black/60
                   flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose} // Close on backdrop click
      >
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          {/* ORIGINAL UI (UNCHANGED) */}
          <div className="relative w-full max-w-md md:max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 md:p-6"
            >
              {/* Header */}
              <div className="relative flex items-center gap-1 md:gap-3 mb-4 md:mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center justify-center
                   w-8 h-8 md:w-12 md:h-12
                   bg-gradient-to-br from-orange-500 to-orange-600
                   rounded-md md:rounded-xl shadow-lg shrink-0"
                >
                  <FaPaperPlane className="text-white text-sm sm:text-base md:text-lg" />
                </motion.div>

                <div className="flex-1">
                  <h2 className="text-sm md:text-lg font-bold text-gray-900">
                    Request Product Catalog
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">Get our detailed brochure</p>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute right-0 top-0 sm:right-1 sm:top-1
                   text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
                  type="button"
                >
                  <FaTimes className="text-xl sm:text-2xl" />
                </button>
              </div>

              {/* FORM */}
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-5"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.08 } } }}
                noValidate
              >
                {/* HONEYPOT FIELD - Hidden from users, visible to bots */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                  className="absolute -left-[9999px]"
                  aria-hidden="true"
                />

                {/* Name Fields */}
                <motion.div
                  variants={cardVariant}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      onChange={handleChange}
                      value={form.firstName}
                      placeholder="John"
                      maxLength={50}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3
                       bg-gray-50 border rounded-xl
                       focus:outline-none focus:ring-1 
                       transition placeholder:text-gray-400
                       ${
                         errors.firstName
                           ? 'border-red-300 focus:ring-red-500'
                           : 'border-gray-200 focus:ring-orange-600'
                       }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      onChange={handleChange}
                      value={form.lastName}
                      placeholder="Doe"
                      maxLength={50}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3
                       bg-gray-50 border rounded-xl
                       focus:outline-none focus:ring-1
                       transition placeholder:text-gray-400
                       ${
                         errors.lastName
                           ? 'border-red-300 focus:ring-red-500'
                           : 'border-gray-200 focus:ring-orange-600'
                       }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </motion.div>

                {/* Email & Phone */}
                <motion.div
                  variants={cardVariant}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3
                       bg-gray-50 border rounded-xl
                       focus:outline-none focus:ring-1
                       transition placeholder:text-gray-400
                       ${
                         errors.email
                           ? 'border-red-300 focus:ring-red-500'
                           : 'border-gray-200 focus:ring-orange-600'
                       }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      maxLength={20}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3
                       bg-gray-50 border rounded-xl
                       focus:outline-none focus:ring-1
                       transition placeholder:text-gray-400
                       ${
                         errors.phone
                           ? 'border-red-300 focus:ring-red-500'
                           : 'border-gray-200 focus:ring-orange-600'
                       }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || retryAfter}
                  variants={cardVariant}
                  whileHover={!isSubmitting && !retryAfter ? buttonHover : undefined}
                  whileTap={!isSubmitting && !retryAfter ? buttonTap : undefined}
                  className={`w-full py-3.5 sm:py-4 rounded-xl font-semibold
                   flex items-center justify-center gap-3
                   shadow-lg transition
                   ${
                     isSubmitting || retryAfter
                       ? 'bg-gray-400 cursor-not-allowed'
                       : 'bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700'
                   } text-white`}
                >
                  <FaPaperPlane className="text-base sm:text-lg" />
                  {retryAfter
                    ? `Wait ${retryAfter}s`
                    : isSubmitting
                    ? 'Sending…'
                    : 'Download Catalog'}
                </motion.button>

                {/* Trust */}
                <motion.div
                  variants={cardVariant}
                  className="flex items-center justify-center gap-2
                   text-xs sm:text-sm text-gray-500
                   bg-gray-50 rounded-xl p-3 sm:p-4"
                >
                  <FaLock className="text-green-600 shrink-0" />
                  <span>Your information is secure and will never be shared</span>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
