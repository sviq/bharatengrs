// 'use client';

// import { AnimatePresence, motion } from 'framer-motion';
// import { FaTimes } from 'react-icons/fa';

// import { contactFormSchema } from '@/lib/validations';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';
// import { FaPaperPlane } from 'react-icons/fa6';

// const cardVariant = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0 },
// };

// const buttonHover = { scale: 1.02 };
// const buttonTap = { scale: 0.97 };

// export function ContactFormContent({ onSuccess }) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: zodResolver(contactFormSchema),
//     mode: 'onBlur',
//   });

//   const onSubmit = async (data) => {
//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (res.ok) {
//         toast.success('Message sent successfully!');
//         reset();
//         onSuccess?.(); // close modal or open next step
//       } else {
//         toast.error('Something went wrong.');
//       }
//     } catch {
//       toast.error('Network error.');
//     }
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-8"
//       initial="hidden"
//       animate="show"
//       variants={{ show: { transition: { staggerChildren: 0.12 } } }}
//     >
//       {/* Name */}
//       <motion.div variants={cardVariant} className="grid md:grid-cols-2 gap-6">
//         {/* First Name */}
//         <div className="relative">
//           <input
//             {...register('firstName')}
//             placeholder=" "
//             className="peer w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
//                    focus:outline-none focus:ring-1 focus:ring-orange-500"
//           />
//           <label
//             className="absolute left-4 top-2 text-xs text-gray-500
//                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
//                         peer-placeholder-shown:text-gray-400
//                         peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-500
//                         transition-all"
//           >
//             First Name
//           </label>
//         </div>

//         {/* Last Name */}
//         <div className="relative">
//           <input
//             {...register('lastName')}
//             placeholder=" "
//             className="peer w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
//                    focus:outline-none focus:ring-1 focus:ring-orange-500"
//           />
//           <label
//             className="absolute left-4 top-2 text-xs text-gray-500
//                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
//                         peer-placeholder-shown:text-gray-400
//                         peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-500
//                         transition-all"
//           >
//             Last Name
//           </label>
//         </div>
//       </motion.div>

//       {/* Email & Phone */}
//       <motion.div variants={cardVariant} className="grid md:grid-cols-2 gap-6">
//         {/* Email */}
//         <div className="relative">
//           <input
//             {...register('email')}
//             type="email"
//             placeholder=" "
//             className="peer w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
//                    focus:outline-none focus:ring-1 focus:ring-orange-500"
//           />
//           <label
//             className="absolute left-4 top-2 text-xs text-gray-500
//                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
//                         peer-placeholder-shown:text-gray-400
//                         peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-500
//                         transition-all"
//           >
//             Work Email
//           </label>
//         </div>

//         {/* Phone */}
//         <div className="relative">
//           <input
//             {...register('phone')}
//             type="tel"
//             placeholder=" "
//             className="peer w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
//                    focus:outline-none focus:ring-1 focus:ring-orange-500"
//           />
//           <label
//             className="absolute left-4 top-2 text-xs text-gray-500
//                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
//                         peer-placeholder-shown:text-gray-400
//                         peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-500
//                         transition-all"
//           >
//             Phone Number
//           </label>
//         </div>
//       </motion.div>

//       {/* Inquiry */}
//       <motion.div variants={cardVariant} className="relative">
//         <select
//           {...register('inquiry')}
//           className="w-full px-4 pt-5 pb-2 bg-gray-50 border border-gray-200 rounded-sm
//                  focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none"
//         >
//           <option>Product Inquiry (Sales)</option>
//           <option>Technical Support</option>
//           <option>Partnership Proposal</option>
//           <option>Other</option>
//         </select>
//         <label className="absolute left-4 top-2 text-xs text-gray-500">Inquiry Type</label>
//       </motion.div>

//       {/* Divider */}
//       <motion.div
//         variants={cardVariant}
//         className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
//       />

//       {/* Submit */}
//       <motion.button
//         type="submit"
//         disabled={isSubmitting}
//         whileHover={!isSubmitting ? buttonHover : undefined}
//         whileTap={!isSubmitting ? buttonTap : undefined}
//         className="w-full bg-[#050f47] text-white py-4 rounded-sm font-bold
//                flex items-center justify-center gap-3 shadow-lg
//                hover:bg-orange-500 transition-all duration-300"
//       >
//         <FaPaperPlane className="text-sm" />
//         {isSubmitting ? 'Sending…' : 'Send Request'}
//       </motion.button>

//       {/* Trust Text */}
//       <motion.p variants={cardVariant} className="text-xs text-gray-400 text-center">
//         We respect your privacy. Your information is safe with us.
//       </motion.p>
//     </motion.form>
//   );
// }

// export default function ContactFormModal({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden"
//         >
//           {/* Header */}
//           <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
//             <h3 className="text-lg font-bold text-gray-900">Contact Our Team</h3>
//             <button onClick={onClose}>
//               <FaTimes />
//             </button>
//           </div>

//           {/* Body */}
//           <div className="p-6">
//             <ContactFormContent onSuccess={onClose} />
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { FaCheckCircle, FaLock, FaPaperPlane } from 'react-icons/fa';

// export default function EnhancedContactForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     inquiry: 'Product Inquiry (Sales)',
//   });

//   const cardVariant = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   const buttonHover = { scale: 1.02 };
//   const buttonTap = { scale: 0.98 };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setTimeout(() => setIsSubmitting(false), 2000);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-6">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12"
//       >
//         {/* Header */}
//         <div className="text-center flex gap-3 ">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: 'spring' }}
//             className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg"
//           >
//             <FaPaperPlane className="text-white text-2xl" />
//           </motion.div>
//           <div className='flex flex-col items-start'>
//             <h2 className="text-3xl font-bold text-gray-900 ">Get in Touch</h2>
//             <p className="text-gray-600">We'll respond within 24 hours</p>
//           </div>
//         </div>

//         <motion.form
//           onSubmit={handleSubmit}
//           className="space-y-6"
//           initial="hidden"
//           animate="show"
//           variants={{ show: { transition: { staggerChildren: 0.1 } } }}
//         >
//           {/* Name Fields */}
//           <motion.div variants={cardVariant} className="grid md:grid-cols-2 gap-4">
//             {/* First Name */}
//             <div className="group">
//               <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//               <input
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="John"
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
//                          focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent
//                          transition-all duration-200 placeholder:text-gray-400
//                          hover:border-gray-300"
//               />
//             </div>

//             {/* Last Name */}
//             <div className="group">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//               <input
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Doe"
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
//                          focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent
//                          transition-all duration-200 placeholder:text-gray-400
//                          hover:border-gray-300"
//               />
//             </div>
//           </motion.div>

//           {/* Email & Phone */}
//           <motion.div variants={cardVariant} className="grid md:grid-cols-2 gap-4">
//             {/* Email */}
//             <div className="group">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
//               <div className="relative">
//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john@company.com"
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
//                            focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent
//                            transition-all duration-200 placeholder:text-gray-400
//                            hover:border-gray-300"
//                 />
//                 {formData.email.includes('@') && formData.email.includes('.') && (
//                   <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 text-lg" />
//                 )}
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="group">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//               <input
//                 name="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="+1 (555) 000-0000"
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
//                          focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent
//                          transition-all duration-200 placeholder:text-gray-400
//                          hover:border-gray-300"
//               />
//             </div>
//           </motion.div>

//           {/* Inquiry Type */}
//           <motion.div variants={cardVariant}>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               What can we help you with?
//             </label>
//             <select
//               name="inquiry"
//               value={formData.inquiry}
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
//                        focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent
//                        transition-all duration-200 cursor-pointer
//                        hover:border-gray-300 appearance-none bg-no-repeat bg-right pr-10"
//               style={{
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
//                 backgroundSize: '1.5rem',
//                 backgroundPosition: 'right 0.75rem center',
//               }}
//             >
//               <option>Product Inquiry (Sales)</option>
//               <option>Technical Support</option>
//               <option>Partnership Proposal</option>
//               <option>Other</option>
//             </select>
//           </motion.div>

//           {/* Divider */}
//           <motion.div variants={cardVariant} className="relative py-4">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center">
//               <span className="bg-white px-4 text-xs text-gray-500 uppercase tracking-wider">
//                 Ready to send
//               </span>
//             </div>
//           </motion.div>

//           {/* Submit Button */}
//           <motion.button
//             type="submit"
//             disabled={isSubmitting}
//             variants={cardVariant}
//             whileHover={!isSubmitting ? buttonHover : undefined}
//             whileTap={!isSubmitting ? buttonTap : undefined}
//             className={`w-full py-4 rounded-xl font-semibold text-lg
//                      flex items-center justify-center gap-3 shadow-lg
//                      transition-all duration-300 ${
//                        isSubmitting
//                          ? 'bg-gray-400 cursor-not-allowed'
//                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
//                      }`}
//           >
//             {isSubmitting ? (
//               <>
//                 <svg
//                   className="animate-spin h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   />
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   />
//                 </svg>
//                 Sending...
//               </>
//             ) : (
//               <>
//                 <FaPaperPlane className="text-lg" />
//                 Send Request
//               </>
//             )}
//           </motion.button>

//           {/* Trust Badge */}
//           <motion.div
//             variants={cardVariant}
//             className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-xl p-4"
//           >
//             <FaLock className="text-green-600" />
//             <span>Your information is secure and will never be shared</span>
//           </motion.div>

//           {/* Additional Info */}
//           <motion.div
//             variants={cardVariant}
//             className="flex items-center justify-center gap-6 text-xs text-gray-400 pt-2"
//           >
//             <div className="flex items-center gap-1">
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//               <span>Average response: 2-4 hours</span>
//             </div>
//             <span>•</span>
//             <span>Available Mon-Fri, 9AM-6PM EST</span>
//           </motion.div>
//         </motion.form>
//       </motion.div>
//     </div>
//   );
// }

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FaLock, FaPaperPlane, FaTimes } from 'react-icons/fa';

export default function ContactFormModal({
  open,
  onClose,
  handleSubmit,
  handleChange,
  formData,
  isSubmitting,
  cardVariant,
  buttonHover,
  buttonTap,
}) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black/60
                   flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          // className="
          //   w-full max-w-4xl
          //   bg- rounded-2xl shadow-2xl
          //   p-6 md:p-8
          //   relative
          // "
        >
          {/* Close Button */}
          {/* <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <FaTimes />
          </button> */}

          {/* ORIGINAL UI (UNCHANGED) */}
          <div className="relative w-full max-w-md md:max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 md:p-6"
            >
              {/* Header */}
              <div className="relative flex items-start gap-3 mb-4 md:mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center justify-center
                   w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14
                   bg-gradient-to-br from-orange-500 to-orange-600
                   rounded-md md:rounded-2xl shadow-lg shrink-0"
                >
                  <FaPaperPlane className="text-white text-sm sm:text-base md:text-lg" />
                </motion.div>

                <div className="flex-1">
                  <h2 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900">
                    Get in Touch
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">We'll respond within 24 hours</p>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute right-0 top-0 sm:right-1 sm:top-1
                   text-gray-400 hover:text-gray-600"
                  aria-label="Close modal"
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
              >
                {/* Name Fields */}
                <motion.div
                  variants={cardVariant}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                >
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3
                       bg-gray-50 border border-gray-200 rounded-xl
                       focus:outline-none focus:ring-1 focus:ring-orange-600
                       transition placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3
                       bg-gray-50 border border-gray-200 rounded-xl
                       focus:outline-none focus:ring-1 focus:ring-orange-600
                       transition placeholder:text-gray-400"
                    />
                  </div>
                </motion.div>

                {/* Email & Phone */}
                <motion.div
                  variants={cardVariant}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                >
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Work Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3
                       bg-gray-50 border border-gray-200 rounded-xl
                       focus:outline-none focus:ring-1 focus:ring-orange-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3
                       bg-gray-50 border border-gray-200 rounded-xl
                       focus:outline-none focus:ring-1 focus:ring-orange-600"
                    />
                  </div>
                </motion.div>

                {/* Inquiry */}
                <motion.div variants={cardVariant}>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                    What can we help you with?
                  </label>
                  <select
                    name="inquiry"
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3
                     bg-gray-50 border border-gray-200 rounded-xl
                     focus:outline-none focus:ring-1 focus:ring-orange-600
                     appearance-none"
                  >
                    <option>Product Inquiry (Sales)</option>
                    <option>Technical Support</option>
                    <option>Partnership Proposal</option>
                    <option>Other</option>
                  </select>
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={cardVariant}
                  whileHover={!isSubmitting ? buttonHover : undefined}
                  whileTap={!isSubmitting ? buttonTap : undefined}
                  className="w-full py-3.5 sm:py-4 rounded-xl font-semibold
                   flex items-center justify-center gap-3
                   shadow-lg transition
                   bg-gradient-to-r from-orange-600 to-orange-600
                   hover:from-orange-700 hover:to-orange-700 text-white"
                >
                  <FaPaperPlane className="text-base sm:text-lg" />
                  Download Catalog
                </motion.button>

                {/* Trust */}
                <motion.div
                  variants={cardVariant}
                  className="flex items-center justify-center gap-2
                   text-xs sm:text-sm text-gray-500
                   bg-gray-50 rounded-xl p-3 sm:p-4"
                >
                  <FaLock className="text-green-600" />
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
