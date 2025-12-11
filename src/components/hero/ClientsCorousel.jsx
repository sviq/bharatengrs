'use client';

import dynamic from 'next/dynamic';
import { memo, useEffect, useRef, useState } from 'react';

// Dynamic import for framer-motion (CSR only)
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

const ClientsCarousel = () => {
  const [ready, setReady] = useState(false);
  const controlsRef = useRef(null);

  useEffect(() => {
    setReady(true);
  }, []);

  const logos = [
    { src: '/images/hero/reliance.png', alt: 'Reliance Industries' },
    { src: '/images/hero/Linde.webp', alt: 'Linde' },
    { src: '/images/hero/lnt-power.webp', alt: 'L&T Power' },

    { src: '/images/hero/ABB.webp', alt: 'ABB' },
    { src: '/images/hero/rubamin.png', alt: 'Rubamin' },
    { src: '/images/hero/emerson.webp', alt: 'Emerson' },
    { src: '/images/hero/essar.png', alt: 'Essar' },
    { src: '/images/hero/gsfc.png', alt: 'GSFC' },
    { src: '/images/hero/KEC.png', alt: 'KEC International' },
    { src: '/images/hero/polycab.png', alt: 'Polycab' },
    { src: '/images/hero/Aditya.jpg', alt: 'Aditya Birla Group' },
  ];

  const duplicated = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 px-4">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <span className="text-orange-500 text-base font-bold uppercase px-4 py-2 rounded-full inline-block">
            Our Clients
          </span>

          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Trusted by Industry Leaders Across India
          </h2>

          <p className="text-lg text-gray-600">
            Over the years, Bharat Engineers has partnered with top organizations across power,
            manufacturing, infrastructure, and process industries. Our solutions support
            mission-critical operations with unmatched reliability.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100">
            {ready && (
              <MotionDiv
                className="flex gap-6 sm:gap-10 md:gap-14 lg:gap-16"
                style={{ width: 'max-content', willChange: 'transform' }}
                animate={{
                  x: ['0%', '-33.33%'],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {duplicated.map((logo, idx) => (
                  <MotionDiv
                    key={idx}
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.12, y: -6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <div className="bg-white rounded-xl p-8 h-40 w-56 flex items-center justify-center border border-gray-100 hover:border-blue-200 transition-all duration-300">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                        style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                      />
                    </div>
                  </MotionDiv>
                ))}
              </MotionDiv>
            )}

            {!ready && (
              <div className="flex gap-12 justify-center">
                {logos.slice(0, 6).map((logo, idx) => (
                  <div key={idx} className="flex-shrink-0 w-44">
                    <div className="bg-white rounded-xl p-8 h-40 flex items-center justify-center border border-gray-100">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain opacity-70"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .flex-shrink-0 {
            width: 150px !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .flex-shrink-0 {
            width: 180px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(ClientsCarousel);
