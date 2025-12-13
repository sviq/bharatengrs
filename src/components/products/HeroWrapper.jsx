'use client';

import { motion } from 'framer-motion';

export default function HeroWrapper({ children }) {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative pt-32 pb-20 lg:pb-32 overflow-hidden bg-slate-900"
      role="banner"
    >
      {/* Background Image (Lazy Loaded) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b45285035e-0b9b4e7fe096c8f3b63e.png"
          alt="Industrial factory background representing engineering aesthetics"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-30 will-change-transform"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>

      {/* Decorative tech lines */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none select-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full stroke-white"
        >
          <path d="M0 400 L400 0 M50 400 L400 50 M100 400 L400 100" strokeWidth="1" />
        </svg>
      </div>
    </motion.section>
  );
}
