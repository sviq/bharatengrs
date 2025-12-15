'use client';

import { useRef, useState } from 'react';

import { FaEnvelope, FaLocationDot, FaPaperPlane, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { RiCustomerServiceFill } from 'react-icons/ri';

import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';

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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
    consent: false,
    website: '', // Honeypot field
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // prevent double click
    setLoading(true);
    setErrors({}); // Clear previous errors

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours.', {
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
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          inquiry: '',
          message: '',
          consent: false,
          website: '',
        });
        setErrors({});
      } else if (res.status === 400 && result.errors) {
        // Set validation errors from server
        setErrors(result.errors);
        toast.error('Please fix the errors in the form', {
          duration: 4000,
          position: 'top-center',
        });
      } else if (res.status === 429) {
        toast.error(`Too many requests. Please wait ${result.retryAfter || 60} seconds and try again.`, {
          duration: 6000,
          position: 'top-center',
        });
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
    } finally {
      setLoading(false);
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
                  onSubmit={handleSubmit}
                >
                  {/* HONEYPOT FIELD - Hidden from users, visible to bots */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
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
                        ref={firstNameRef}
                        type="text"
                        id="first-name"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                          ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-orange-500'}`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName[0]}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                          ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-orange-500'}`}
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName[0]}</p>
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
                        type="email"
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                          ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-orange-500'}`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email[0]}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                          ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-orange-500'}`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone[0]}</p>
                      )}
                    </div>
                  </motion.div>

                  {/* INQUIRY TYPE */}
                  <motion.div variants={cardVariant}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-sm cursor-pointer focus:ring-2 appearance-none focus:outline-none
                        ${errors.inquiry ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-orange-500'}`}
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                    >
                      <option>Product Inquiry (Sales)</option>
                      <option>Technical Support</option>
                      <option>Partnership Proposal</option>
                      <option>Vendor Registration</option>
                      <option>Other</option>
                    </select>
                    {errors.inquiry && (
                      <p className="mt-1 text-sm text-red-600">{errors.inquiry[0]}</p>
                    )}
                  </motion.div>

                  {/* MESSAGE */}
                  <motion.div variants={cardVariant}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell us about your requirements..."
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-sm focus:ring-2 focus:outline-none
                        ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-orange-500'}`}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message[0]}</p>
                    )}
                  </motion.div>

                  {/* CONSENT */}
                  <motion.div variants={cardVariant}>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className={`mt-1 w-4 h-4 border-gray-300 rounded
                          ${errors.consent ? 'border-red-500 text-red-600 focus:ring-red-500' : 'text-orange-500 focus:ring-orange-500'}`}
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                      />
                      <label className="text-sm text-gray-500">
                        I agree to the processing of my personal data.
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="mt-1 text-sm text-red-600">{errors.consent[0]}</p>
                    )}
                  </motion.div>

                  {/* SUBMIT BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? buttonHover : undefined}
                    whileTap={!loading ? buttonTap : undefined}
                    className={`w-full font-bold py-4 px-8 rounded-sm shadow-lg
      flex justify-center items-center gap-2 transition-all duration-300
      ${loading ? 'bg-orange-500 text-white cursor-not-allowed' : 'bg-[#050f47] text-white hover:bg-orange-500'}`}
                  >
                    {loading ? (
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
                      <p className="text-lg font-medium hover:text-orange-500 cursor-pointer">
                        0265 2645006
                      </p>
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