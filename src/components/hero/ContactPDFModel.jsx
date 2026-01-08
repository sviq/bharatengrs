'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

import { contactFormSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaPaperPlane } from 'react-icons/fa6';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const buttonHover = { scale: 1.02 };
const buttonTap = { scale: 0.97 };

export function ContactFormContent({ onSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        reset();
        onSuccess?.(); // close modal or open next step
      } else {
        toast.error('Something went wrong.');
      }
    } catch {
      toast.error('Network error.');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      {/* Name */}
      <motion.div variants={cardVariant} className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="relative">
          <input
            {...register('firstName')}
            placeholder=" "
            className="peer w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <label
            className="absolute left-4 top-2 text-xs text-gray-500
                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                        peer-placeholder-shown:text-gray-400
                        peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-500
                        transition-all"
          >
            First Name
          </label>
        </div>

        {/* Last Name */}
        <div className="relative">
          <input
            {...register('lastName')}
            placeholder=" "
            className="peer w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <label
            className="absolute left-4 top-2 text-xs text-gray-500
                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                        peer-placeholder-shown:text-gray-400
                        peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-500
                        transition-all"
          >
            Last Name
          </label>
        </div>
      </motion.div>

      {/* Email & Phone */}
      <motion.div variants={cardVariant} className="grid md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="relative">
          <input
            {...register('email')}
            type="email"
            placeholder=" "
            className="peer w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <label
            className="absolute left-4 top-2 text-xs text-gray-500
                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                        peer-placeholder-shown:text-gray-400
                        peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-500
                        transition-all"
          >
            Work Email
          </label>
        </div>

        {/* Phone */}
        <div className="relative">
          <input
            {...register('phone')}
            type="tel"
            placeholder=" "
            className="peer w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <label
            className="absolute left-4 top-2 text-xs text-gray-500
                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                        peer-placeholder-shown:text-gray-400
                        peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-500
                        transition-all"
          >
            Phone Number
          </label>
        </div>
      </motion.div>

      {/* Inquiry */}
      <motion.div variants={cardVariant} className="relative">
        <select
          {...register('inquiry')}
          className="w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
                 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
        >
          <option>Product Inquiry (Sales)</option>
          <option>Technical Support</option>
          <option>Partnership Proposal</option>
          <option>Other</option>
        </select>
        <label className="absolute left-4 top-2 text-xs text-gray-500">Inquiry Type</label>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={cardVariant}
        className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
      />

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={!isSubmitting ? buttonHover : undefined}
        whileTap={!isSubmitting ? buttonTap : undefined}
        className="w-full bg-[#050f47] text-white py-4 rounded-sm font-bold
               flex items-center justify-center gap-3 shadow-lg
               hover:bg-orange-500 transition-all duration-300"
      >
        <FaPaperPlane className="text-sm" />
        {isSubmitting ? 'Sending…' : 'Send Request'}
      </motion.button>

      {/* Trust Text */}
      <motion.p variants={cardVariant} className="text-xs text-gray-400 text-center">
        We respect your privacy. Your information is safe with us.
      </motion.p>
    </motion.form>
  );
}

export default function ContactFormModal({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
            <h3 className="text-lg font-bold text-gray-900">Contact Our Team</h3>
            <button onClick={onClose}>
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            <ContactFormContent onSuccess={onClose} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
