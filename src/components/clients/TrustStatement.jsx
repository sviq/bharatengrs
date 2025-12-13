'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaAward } from 'react-icons/fa6';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 },
  }),
};

export default function TrustStatement() {
  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Major Clients' },
    { value: '20+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="trust-statement"
        className="relative py-24 bg-gradient-to-br from-[#050f47] to-[#070f41] overflow-hidden"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-engineering opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 opacity-10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Award Divider */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mb-8"
          >
            <div className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-12 bg-orange-500"></div>
                <FaAward className="text-orange-500 text-3xl" />
                <div className="h-1 w-12 bg-orange-500"></div>
              </div>
            </div>
          </m.div>

          {/* Heading */}
          <m.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-4xl font-black text-white mb-8 leading-tight"
          >
            Trusted by India&apos;s Leading Industrial Giants
            <br />
            for Over <span className="text-orange-500">20 Years</span>
          </m.h2>

          {/* Subtitle */}
          <m.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Our commitment to
            <span className="text-white font-semibold">
              quality, reliability, engineering excellence,
            </span>
            and <span className="text-white font-semibold">timely delivery</span> has earned us the
            trust of top national brands.
          </m.p>

          {/* Stats */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white"
          >
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-2">{item.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
