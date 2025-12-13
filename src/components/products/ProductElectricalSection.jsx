'use client';

import Image from 'next/image';
import { memo, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

/* ---------------------------------------------
   ANIMATION VARIANTS (Lightweight & GPU-based)
---------------------------------------------- */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // softer cubic-bezier
      delay: i * 0.1,
    },
  }),
};

/* ---------------------------------------------
   PRODUCTS DATA (memoized for performance)
---------------------------------------------- */
const useProducts = () =>
  useMemo(
    () => [
      {
        title: 'Electrical Distribution Panels',
        description:
          'PCC, PDB, ACDB, DCDB, LDBs, Bus Ducts, Feeder Pillars for efficient power distribution.',
        image: '/images/hero/product1.webp',
      },
      {
        title: 'Motor Control Centers (MCC)',
        description:
          'Draw-out and fixed type MCC panels engineered for operational safety and reliability.',
        image: '/images/hero/product2.webp',
      },
      {
        title: 'Control Panels',
        description:
          'Furnace, Chiller, and Damper control panels designed for precise process automation.',
        image: '/images/hero/product3.webp',
      },
      {
        title: 'Specialized Panels',
        description: 'AMF, Change Over, and APFC panels tailored for industrial requirements.',
        image: '/images/hero/product4.webp',
      },
      {
        title: 'Synchronizing Panels',
        description:
          'DG & Grid synchronizing solutions ensuring seamless power source integration.',
        image: '/images/hero/product5.webp',
      },
      {
        title: 'Bus Ducts',
        description: 'High-amperage bus bar systems for reliable and efficient power transmission.',
        image: '/images/hero/product3.webp',
      },
    ],
    []
  );

/* ---------------------------------------------
   PRODUCT CARD (memoized for performance)
---------------------------------------------- */
const ProductCard = memo(({ product, index }) => (
  <MotionDiv
    variants={fadeUp}
    custom={index}
    whileHover={{
      scale: 1.03,
      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
    }}
    transition={{ type: 'spring', stiffness: 140, damping: 12 }}
    className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 
               overflow-hidden transition-all duration-300"
  >
    {/* Image */}
    <div className="h-48 overflow-hidden bg-gray-100 relative">
      <Image
        src={product.image}
        alt={product.title}
        loading="lazy"
        width={500}
        height={400}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors">
        {product.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">{product.description}</p>

      <Link
        href="/products"
        className="inline-flex hover:text-orange-500 items-center font-semibold text-sm 
                   hover:translate-x-1 transition-transform"
      >
        View Specifications →
      </Link>
    </div>
  </MotionDiv>
));

ProductCard.displayName = 'ProductCard';

/* ---------------------------------------------
   MAIN SECTION COMPONENT
---------------------------------------------- */
export default function ProductsElectricalSection() {
  const products = useProducts();

  return (
    <section id="products-electrical" className="py-20 lg:py-28 bg-gray-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-30 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between mb-14 gap-6"
        >
          <div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-2">
              Product <span className="text-orange-500">Categories</span>
            </h2>
            <div className="h-1 w-24 bg-orange-500"></div>
          </div>

          <p className="text-gray-600 max-w-md md:text-right text-sm">
            Comprehensive range of LT panels designed for robust power distribution and precise
            control across industrial applications.
          </p>
        </MotionDiv>

        {/* Product Grid */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
