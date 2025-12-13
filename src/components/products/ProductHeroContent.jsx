'use client';

import { motion } from 'framer-motion';

export default function ProductsHeroContent() {
  return (
    <div className="max-w-3xl">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
        className="inline-flex items-center gap-2 px-3 py-1 mb-6
        border border-orange-500/30 bg-orange-500/10
        rounded text-orange-500 text-xs font-bold uppercase tracking-widest"
      >
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        Engineering Excellence
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
        className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
      >
        OUR <span className="text-orange-500">PRODUCTS</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        viewport={{ once: true, margin: '-50px' }}
        className="text-xl text-gray-400 max-w-2xl font-light border-l-4 border-orange-500 pl-6"
      >
        Advanced electrical distribution, control panels, and instrumentation solutions engineered
        for reliability and performance.
      </motion.p>
    </div>
  );
}
