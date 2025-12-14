'use client';

import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function GallaryhHero() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Industrial Factory"
            fill
            priority={false}
            className="object-cover opacity-20"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>

          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            {/* Badge */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/30 
                         rounded-full text-orange-500 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              PROJECT SHOWCASE
            </m.div>

            {/* Heading */}
            <m.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-5xl md:text-6xl text-white mb-6 uppercase tracking-tight leading-tight"
            >
              Engineering <span className="text-orange-500">Gallery</span>
            </m.h1>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed border-l-4 border-orange-500 pl-6"
            >
              Explore our diverse range of engineered solutions and precision-built products. From
              high-voltage power distribution systems to custom sheet metal fabrication, witness the
              quality and precision that defines Bharat Engineers.
            </m.p>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
}
