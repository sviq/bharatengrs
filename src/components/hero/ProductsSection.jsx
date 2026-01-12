'use client';

import { products } from '@/data/products';
import dynamic from 'next/dynamic';
import { PdfIcon } from 'public/icons/Icons';
import { useState } from 'react';
import RequestPdfModal from './ContactPDFModel';

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
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  return (
    <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Soft Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <MotionDiv
              key={index}
              variants={fadeUp}
              custom={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative min-h-[12rem] md:min-h-[24rem] overflow-hidden bg-gray-100">
                {product?.image && (
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors">
                  {product.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">{product.description}</p>

                {/* <Link
                  href="/products"
                  className="inline-flex text-orange-500 items-center text-sm font-semibold hover:text-orange-500"
                >
                  View Specifications →
                </Link> */}
              </div>
            </MotionDiv>
          ))}

          {/* CTA Card */}
          <MotionDiv
            variants={fadeUp}
            custom={products.length + 1}
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

            <button
              // href="/assets/Bharat_profile.pdf"
              onClick={() => setPdfModalOpen(true)}
              className="bg-white text-orange-500 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
              aria-label="Download product catalog PDF"
            >
              Download PDF
            </button>
          </MotionDiv>
        </MotionDiv>
      </div>

      <RequestPdfModal open={pdfModalOpen} onClose={() => setPdfModalOpen(false)} />
    </section>
  );
}
