'use client';

import { industries } from '@/data/Industry';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function IndustriesSection() {
  return (
    <section id="industries-section" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200/50 rounded-bl-full -z-0 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/50 rounded-tr-full -z-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-start">
            <div className="w-2 h-16 bg-orange-500 mr-6 rounded-full flex-shrink-0" />
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                Industries We Serve
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                We provide specialized engineering solutions tailored to the unique demands of heavy
                industries, ensuring efficiency and sustainability.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Icon */}
                <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                  {industry.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
