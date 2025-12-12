'use client';

import { features } from '@/data/features'
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  /** ---------- ANIMATION VARIANTS (Highly Lightweight) ---------- **/
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">
            Our Strengths
          </h2>

          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose Bharat Engineers?
          </h3>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            When you buy ‘Bharat Engineers’ switchboards, you invest in reliability and excellence.
          </p>
        </div>

        {/* FEATURES GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -150px 0px' }}
        >
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg 
                           hover:-translate-y-1 transition-all duration-300 group"
                variants={cardVariants}
              >
                {/* ICON BOX */}
                <div
                  className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6 
                             group-hover:bg-orange-500 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* TITLE */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>

                {/* DESCRIPTION */}
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
