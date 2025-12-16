'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FaEnvelope, FaLocationDot, FaPaperPlane, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { RiCustomerServiceFill } from 'react-icons/ri';

import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { companyInfo } from '@/data/company-info';
import { contactFormSchema } from '@/lib/validations';

// -------------------------
// Framer Motion Variants
// -------------------------

// Whole section subtle lift-in animation
const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.6,
    },
  },
};

// Stagger child elements (form + sidebar)
const gridVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Cards animation
const cardVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Button hover animation
const buttonTap = { scale: 0.97 };
const buttonHover = { scale: 1.02 };

export default function ContactSection({ firstNameRef }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      inquiry: 'Product Inquiry (Sales)',
      message: '',
      consent: false,
      website: '', // Honeypot field
    },
  });

  // Merge firstNameRef with register
  const { ref: firstNameRegisterRef, ...firstNameRegisterRest } = register('firstName');

  useEffect(() => {
    if (firstNameRef && firstNameRegisterRef) {
      firstNameRegisterRef(firstNameRef.current);
    }
  }, [firstNameRef, firstNameRegisterRef]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully! We'll get back to you within 24 hours.", {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#10b981',
            color: '#fff',
            fontWeight: '600',
            padding: '16px',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#10b981',
          },
        });

        reset();
      } else if (res.status === 429) {
        toast.error(
          `Too many requests. Please wait ${result.retryAfter || 60} seconds and try again.`,
          {
            duration: 6000,
            position: 'top-center',
          }
        );
      } else {
        toast.error(result.message || 'Something went wrong. Please try again.', {
          duration: 4000,
          position: 'top-center',
        });
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.', {
        duration: 4000,
        position: 'top-center',
      });
    }
  };

  return (
    <>
      <Toaster />
      <main className="relative z-[60] mt-12 md:-mt-32 mb-20" id="contact-form">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8" variants={gridVariant}>
            {/* CONTACT FORM ------------------------------ */}
            <motion.div
              variants={cardVariant}
              className="lg:col-span-2 bg-white rounded-sm border-2 border-gray-200 
                         overflow-hidden border-t-4 border-t-orange-500"
            >
              <div className="p-4 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form below and our engineering team will get back to you within 24
                  hours.
                </p>

                <motion.form
                  className="space-y-6"
                  variants={gridVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* HONEYPOT FIELD - Hidden from users, visible to bots */}
                  <input
                    type="text"
                    {...register('website')}
                    autoComplete="off"
                    tabIndex="-1"
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      width: '1px',
                      height: '1px',
                      opacity: 0,
                    }}
                    aria-hidden="true"
                  />

                  {/* NAME FIELDS */}
                  <motion.div
                    variants={cardVariant}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>

                      <input
                        ref={(e) => {
                          firstNameRegisterRef(e);
                          if (firstNameRef) {
                            firstNameRef.current = e;
                          }
                        }}
                        {...firstNameRegisterRest}
                        type="text"
                        id="first-name"
                        placeholder="John"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                          ${
                            errors.firstName
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:ring-orange-500'
                          }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        {...register('lastName')}
                        type="text"
                        placeholder="Doe"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                          ${
                            errors.lastName
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:ring-orange-500'
                          }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                      )}
                    </div>
                  </motion.div>

                  {/* CONTACT FIELDS */}
                  <motion.div
                    variants={cardVariant}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Work Email
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                          ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:ring-orange-500'
                          }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                          ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:ring-orange-500'
                          }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                  </motion.div>

                  {/* INQUIRY TYPE */}
                  <motion.div variants={cardVariant}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      {...register('inquiry')}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-sm cursor-pointer focus:ring-2 appearance-none focus:outline-none
                        ${
                          errors.inquiry
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-200 focus:ring-orange-500'
                        }`}
                    >
                      <option>Product Inquiry (Sales)</option>
                      <option>Technical Support</option>
                      <option>Partnership Proposal</option>
                      <option>Vendor Registration</option>
                      <option>Other</option>
                    </select>
                    {errors.inquiry && (
                      <p className="mt-1 text-sm text-red-600">{errors.inquiry.message}</p>
                    )}
                  </motion.div>

                  {/* MESSAGE */}
                  <motion.div variants={cardVariant}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      {...register('message')}
                      rows="4"
                      placeholder="Tell us about your requirements..."
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                        ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-200 focus:ring-orange-500'
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </motion.div>

                  {/* CONSENT */}
                  <motion.div variants={cardVariant}>
                    <div className="flex items-start gap-3">
                      <input
                        {...register('consent')}
                        type="checkbox"
                        className={`mt-1 w-4 h-4 border-gray-300 rounded
                          ${
                            errors.consent
                              ? 'border-red-500 text-red-600 focus:ring-red-500'
                              : 'text-orange-500 focus:ring-orange-500'
                          }`}
                      />
                      <label className="text-sm text-gray-500">
                        I agree to the processing of my personal data.
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
                    )}
                  </motion.div>

                  {/* SUBMIT BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? buttonHover : undefined}
                    whileTap={!isSubmitting ? buttonTap : undefined}
                    className={`w-full font-bold py-4 px-8 rounded-sm shadow-lg
      flex justify-center items-center gap-2 transition-all duration-300
      ${
        isSubmitting
          ? 'bg-orange-500 text-white cursor-not-allowed'
          : 'bg-[#050f47] text-white hover:bg-orange-500'
      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform" />
                        <span>Send Request</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>

            {/* RIGHT SIDEBAR ------------------------------ */}
            <motion.div variants={gridVariant} className="space-y-6">
              {/* DIRECT LINES */}
              <motion.div
                variants={cardVariant}
                className="bg-[#050f47] text-white p-8 rounded-sm relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full 
                                blur-[60px] opacity-20 group-hover:opacity-30 transition"
                />

                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                  <RiCustomerServiceFill className="text-orange-500" /> Direct Lines
                </h3>

                <div className="space-y-6 relative z-10">
                  {/* PHONE */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                      <FaPhone className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase mb-1">Sales Hotline</p>
                      <a
                        href={`tel:+91${companyInfo.phone.replace(/\s/g, '').replace(/^0/, '')}`}
                        className="text-lg font-medium hover:text-orange-500 cursor-pointer block"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                      <FaWhatsapp className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase mb-1">WhatsApp Support</p>
                      <p className="text-lg font-medium hover:text-orange-500 cursor-pointer">
                        +91 98790 17654
                      </p>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                      <FaEnvelope className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase mb-1">Email Sales</p>
                      <p className="text-lg font-medium hover:text-orange-500 cursor-pointer">
                        bharat_engrs@yahoo.com
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* HQ ADDRESS */}
              <motion.div
                variants={cardVariant}
                className="bg-white p-8 rounded-sm border-2 border-gray-200"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-orange-500">
                  <FaLocationDot /> Headquarters
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900 block">Bharat Engineers Pvt. Ltd.</strong>
                  Plot No. 290, 2, Krishna Nagar, <br />
                  Makarpura GIDC, Makarpura, <br />
                  Vadodara, Gujarat 390010
                </p>

                {/* HOURS */}
                <div className="pt-4 border-t-2 border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">Working Hours</p>

                  <div className="flex justify-between text-sm text-gray-800">
                    <span>Mon - Sat</span>
                    <span>09:00 AM - 07:00 PM</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>

                <a
                  href="#"
                  className="block w-full text-center py-3 border items-center border-gray-300 rounded-sm text-sm font-bold 
                             text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all mt-6"
                >
                  <FaLocationDot className="inline mr-2 -mt-1" />
                  Get Directions
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
