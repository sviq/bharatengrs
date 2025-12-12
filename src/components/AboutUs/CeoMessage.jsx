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
                  src="data:image/jpeg;base64,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"
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
