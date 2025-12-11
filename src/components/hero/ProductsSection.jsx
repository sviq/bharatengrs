'use client';

import dynamic from 'next/dynamic';
import { memo } from 'react';

// Optimize performance: dynamically load framer-motion
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

// Animation Variants (GPU-safe)
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Soft Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">
            Our Solutions
          </span>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Engineered for Performance
          </h2>

          <p className="mt-4 text-gray-600">
            Discover our comprehensive range of electrical panels and distribution systems tailored
            for modern industries.
          </p>
        </MotionDiv>

        {/* Grid Wrapper with Stagger Animation */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <MotionDiv
              key={index}
              variants={fadeUp}
              custom={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">{card.description}</p>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold hover:text-orange-500"
                >
                  View Specifications →
                </a>
              </div>
            </MotionDiv>
          ))}

          {/* CTA Card */}
          <MotionDiv
            variants={fadeUp}
            custom={cards.length + 1}
            whileHover={{ scale: 1.03 }}
            className="group bg-orange-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-500 overflow-hidden flex flex-col justify-center items-center text-center p-8"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
              <PdfIcon className="text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Download Catalog</h3>

            <p className="text-orange-100 text-sm mb-6">
              Get detailed technical specifications for all our products.
            </p>

            <button className="bg-white text-orange-500 cursor-pointer px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
              Download PDF
            </button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}

/* -------------------- PDF ICON -------------------- */
const PdfIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="27"
    fill="currentColor"
    viewBox="0 0 512 512"
    {...props}
  >
    {' '}
    <path d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H176c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64zm384 64H256V0zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-32c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16v96zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V368"></path>{' '}
  </svg>
);

/* -------------------- CARD DATA -------------------- */
const cards = [
  {
    title: 'PCC & MCC Panels',
    description:
      'High-capacity Power Control Centers and Motor Control Centers designed for efficiency.',
    image: '/images/hero/product1.webp',
  },
  {
    title: 'MV Panels up to 11kV',
    description: 'Robust Medium Voltage panels ensuring safe power distribution for heavy loads.',
    image: '/images/hero/product2.webp',
  },
  {
    title: 'Bus Duct Systems',
    description: 'Efficient and compact power transmission solutions for modern infrastructure.',
    image: '/images/hero/product3.webp',
  },
  {
    title: 'AMF, APFC & VFD Panels',
    description: 'Advanced automation panels for power factor correction and drive control.',
    image: '/images/hero/product4.webp',
  },
  {
    title: 'Process Control Panels',
    description: 'Customized control solutions for specialized process industries.',
    image: '/images/hero/product5.webp',
  },
];
