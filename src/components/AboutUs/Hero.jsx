'use client';

import { motion } from 'framer-motion';

export default function HeroEngineering() {
  return (
    <section
      id="hero"
      className="relative h-[550px] sm:h-[600px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-[#0B0E11] text-white"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src="/images/about/About-Hero.webp"
          alt="Engineering background"
          className="w-full h-full object-cover opacity-20"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E11] via-[#0B0E11]/80 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          className="inline-block mb-5 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <span className="text-orange-500 font-medium text-sm tracking-widest uppercase">
            Since 2005
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: 'easeOut',
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
            Engineering
          </motion.span>
          <br />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            Excellence
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Pioneering the future of Power Control Centers with precision, innovation, and unwavering
          reliability.
        </motion.p>
      </div>
    </section>
  );
}
