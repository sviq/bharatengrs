'use client';

import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaCirclePlus } from 'react-icons/fa6';

const logos = [
  { src: '/images/hero/hero-reliance.webp', alt: 'Reliance Industries' },
  { src: '/images/hero/hero-linde.webp', alt: 'Linde' },
  { src: '/images/hero/hero-lnt-power.webp', alt: 'L&T Power' },
  { src: '/images/hero/hero-abb.webp', alt: 'ABB' },
  { src: '/images/hero/hero-rubamin.webp', alt: 'Rubamin' },
  { src: '/images/hero/hero-emerson.webp', alt: 'Emerson' },
  // { src: '/images/hero/hero-essar.webp', alt: 'Essar' },
  { src: '/images/hero/hero-gsfc.webp', alt: 'GSFC' },
  { src: '/images/hero/hero-kec.webp', alt: 'KEC International' },
  { src: '/images/hero/hero-polycab.webp', alt: 'Polycab' },
  { src: '/images/hero/hero-aditya.webp', alt: 'Aditya Birla Group' },
  { src: '/images/hero/hero-gulbrandsen.webp', alt: 'gulbrandsen' },
  { src: '/images/hero/hero-lttechandservice.webp', alt: 'lttechandservice' },
  { src: '/images/hero/hero-adani.png', alt: 'adani' },
  { src: '/images/hero/hero-gfl.webp', alt: 'gfl' },
  { src: '/images/hero/hero-siemens.webp', alt: 'siemens' },
  { src: '/images/hero/hero-jsw.webp', alt: 'jsw' },
  { src: '/images/hero/hero-epsilon.webp', alt: 'epsilon' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.08 },
  }),
};

export default function ClientLogos() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="client-logos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Logo Cards */}
            {logos.map((logo, index) => (
              <m.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className="client-card bg-white rounded-lg p-8 shadow-sm border border-gray-200 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={100}
                  className="w-full h-24 object-contain duration-300"
                />
              </m.div>
            ))}

            {/* "More Clients" Card */}
            <m.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={logos.length + 1}
              className="client-card bg-white rounded-lg p-8 shadow-sm border border-gray-200 border-dashed flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center">
                <FaCirclePlus className="text-4xl text-gray-300 mb-2" />
                <p className="text-sm text-gray-500 font-medium">More Clients</p>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
