'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

export default function Hero({ badge, heading, description }) {
  // Split heading into all words except last + last word
  const words = heading.trim().split(' ');
  const lastWord = words.pop(); // removes last word
  const firstPart = words.join(' '); // joins the remaining words

  const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
    ssr: false,
  });

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hero"
        className="
   relative h-[580px] flex items-end md:items-center bg-black/40 overflow-hidden
  "
      >
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner/HERO_BANNER(home).webp"
            alt="Industrial Factory Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/5 to-transparent z-[1]" />

        {/* Content */}
        {/* <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl"> */}
            {/* Badge */}
            {/* <m.div
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
            </m.div> */}

            {/* Heading */}
            {/* Heading with last word colored */}
            {/* <m.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-5xl md:text-6xl 
                         text-white mb-6 uppercase tracking-tight leading-tight"
            >
              {firstPart} <span className="text-orange-500">{lastWord}</span>
            </m.h1> */}

            {/* Description */}
            {/* <m.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed border-l-4 border-orange-500 pl-6"
            >
              {description}
            </m.p>
          </div>
        </div> */}

        <div className="container max-w-7xl pb-8 md:pb-0 px-4 mx-auto relative z-[2] flex flex-col md:flex-row items-center">
          {/* LEFT SIDE CONTENT */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="
            w-full md:w-[420px]
            text-white
            bg-[#050f47]/80
            backdrop-blur-sm
            border border-white/10
            rounded-2xl
            p-4
            
          "
          >
            {/* Badge */}
            {/* <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 border border-orange-400/50 rounded-full bg-orange-400/10 backdrop-blur-sm mb-6"
                  >
                    <span className="text-xs font-medium tracking-wide text-orange-400 uppercase">
                      ERDA Approved – Certificate No: T-0071
                    </span>
                  </MotionDiv> */}

            {/* Main Heading */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <h1
                className="font-display font-bold text-5xl md:text-6xl 
                         text-white uppercase tracking-tight leading-tight"
              >
                {firstPart} {firstPart && <br/>}<span className="text-orange-500">{lastWord}</span>
              </h1>
            </MotionDiv>

            {/* Subheading */}
            {/* <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
                      Specializing in Instrumentation CTs & PTs. Delivering reliable, high-performance
                      switchboards engineered for safety and efficiency.
                    </p>
                  </MotionDiv> */}

            {/* CTA Buttons */}

            {/* Feature Icons */}
            {/* <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300"
                  >
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <FaCircleCheck className="text-orange-500 w-5" />
                        {feature}
                      </div>
                    ))}
                  </MotionDiv> */}
          </MotionDiv>

          {/* Right placeholder (optional) */}
          <div className="hidden lg:block w-1/2 h-full absolute right-0 bottom-0 pointer-events-none"></div>
        </div>
      </section>
    </LazyMotion>
  );
}
