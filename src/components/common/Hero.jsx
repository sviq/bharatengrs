'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Image from 'next/image';

export default function Hero({ badge, heading, description }) {
  // Split heading into all words except last + last word
  const words = heading.trim().split(' ');
  const lastWord = words.pop(); // removes last word
  const firstPart = words.join(' '); // joins the remaining words

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hero"
        className="
    relative
    pt-[calc(80px+2rem)]
    pb-20
    lg:pt-[calc(80px+4rem)]
    lg:pb-28
    min-h-[55vh]
    lg:min-h-[65vh]
    overflow-hidden
    bg-slate-900
  "
      >
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner/HERO_BANNER.webp"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-transparent z-[1]" />

          <div
            className="absolute inset-0 opacity-10 
             bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),
             linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] 
             bg-[size:40px_40px]"
          />
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
              className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 
                         border border-orange-500/30 rounded-full text-orange-500 
                         text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              {badge}
            </m.div>

            {/* Heading */}
            {/* Heading with last word colored */}
            <m.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-5xl md:text-6xl 
                         text-white mb-6 uppercase tracking-tight leading-tight"
            >
              {firstPart} <span className="text-orange-500">{lastWord}</span>
            </m.h1>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed border-l-4 border-orange-500 pl-6"
            >
              {description}
            </m.p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
