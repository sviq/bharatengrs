'use client';

import { motion } from 'framer-motion';

export default function CeoMessage() {
  return (
    <section
      id="ceo-message"
      className="py-12 md:py-20 bg-[#F5F5F7] relative overflow-hidden"
      aria-labelledby="ceo-quote-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* MAIN CARD */}
        <motion.article
          role="blockquote"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white rounded-2xl shadow-xl p-10 md:p-14 relative overflow-hidden"
        >
          {/* Decorative Glow – Top Right */}
          <motion.div
            aria-hidden="true"
            className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"
            animate={{
              y: [0, -10, 0],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Decorative Glow – Bottom Left */}
          <motion.div
            aria-hidden="true"
            className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-gray-700/5 rounded-full blur-3xl"
            animate={{
              y: [0, 10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Quote Icon */}
          <motion.div
            aria-hidden="true"
            className="absolute top-8 left-8 text-5xl text-orange-400/20 pointer-events-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-12 h-12"
              fill="currentColor"
            >
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
          </motion.div>

          {/* Main Quote + Footer */}
          <blockquote className="text-center relative z-10">
            <h2 id="ceo-quote-title" className="sr-only">
              CEO Message
            </h2>

            {/* Quote Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-10 max-w-4xl mx-auto"
            >
              “Delivering techno-commercially viable low and medium voltage power control panels,
              adhering to stringent industry standards within predefined time periods and
              competitive budgets, is the forte of Bharat Engineers.”
            </motion.p>

            {/* CEO Info */}
            <motion.footer
              className="flex items-center justify-center gap-4 mt-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500"
              >
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                  alt="Portrait of Mr. Anil M. Deotale"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Name + Title */}
              <div className="text-left">
                <cite className="not-italic font-bold text-lg text-gray-900 block">
                  Mr. Anil M. Deotale
                </cite>
                <span className="text-orange-500 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Founder & CEO
                </span>
              </div>
            </motion.footer>
          </blockquote>
        </motion.article>
      </div>
    </section>
  );
}
