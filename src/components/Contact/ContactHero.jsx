'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export default function ContactHero({ firstNameRef }) {
  const handleScrollToForm = () => {
    if (!firstNameRef?.current) return;

    // Wait for layout + paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        firstNameRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });

        firstNameRef.current.focus({ preventScroll: true });
      });
    });
  };

  return (
    <section
      id="hero-contact"
      className="relative py-20 md:pt-0 overflow-hidden h-[600px] flex items-center"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/banner/Hero_banner(home).webp"
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* GRID OVERLAY */}
      {/* <motion.div
        className="absolute inset-0 opacity-[0.01] bg-[url('/grid.svg')] bg-repeat"
        variants={fade}
        initial="hidden"
        animate="show"
      /> */}

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 z-20" />

      {/* CONTENT */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto w-full px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        // initial="hidden"
        // whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div
          className="max-w-2xl bg-[#050f47]/80 backdrop-blur-sm rounded-lg px-4 py-6 "
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* BADGE */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                       bg-orange-500/10 border border-orange-500 text-orange-500 
                       text-xs font-bold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Sales & Inquiries
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Partner with <br />
            <span className="text-orange-500">Precision Engineering</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
            Connect with our technical sales team for custom solutions, bulk orders, and industrial
            partnership opportunities. We engineer success.
          </motion.p>

          {/* BUTTONS */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05, x: 4 }}
              transition={{ type: 'spring', stiffness: 220, damping: 15 }}
              onClick={handleScrollToForm}
              className="bg-orange-500 text-white px-8 py-4 font-semibold 
             hover:bg-white hover:text-orange-500 transition-all duration-300 
             rounded-sm shadow-xl shadow-orange-500/20 flex items-center gap-2"
            >
              Start Conversation <FaArrowRight />
            </motion.button>

            {/* <motion.a
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 220, damping: 12 }}
              href="#locations"
              className="border border-gray-600 text-white px-8 py-4 font-medium 
                         hover:bg-gray-800 transition-all duration-300 rounded-sm flex items-center gap-2"
            >
              Find Locations
            </motion.a> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
