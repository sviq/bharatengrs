'use client';

import dynamic from 'next/dynamic';
import { memo, useState, useEffect } from 'react';

const MotionDiv = dynamic(() => import('framer-motion').then((m) => m.motion.div), { 
  ssr: false,
  loading: () => (
    <div className="flex gap-4 sm:gap-10 md:gap-14 lg:gap-16" style={{ width: 'max-content' }}>
      {[...Array(11)].map((_, idx) => (
        <div key={idx} className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[220px]">
          <div className="p-8 h-40 w-full flex items-center justify-center">
            <div className="w-full h-full bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  )
});

const logos = [
  { src: '/images/hero/reliance.webp', alt: 'Reliance Industries' },
  { src: '/images/hero/Linde.webp', alt: 'Linde' },
  { src: '/images/hero/lnt-power.webp', alt: 'L&T Power' },
  { src: '/images/hero/ABB.webp', alt: 'ABB' },
  { src: '/images/hero/rubamin.webp', alt: 'Rubamin' },
  { src: '/images/hero/emerson.webp', alt: 'Emerson' },
  { src: '/images/hero/essar.webp', alt: 'Essar' },
  { src: '/images/hero/gsfc.webp', alt: 'GSFC' },
  { src: '/images/hero/KEC.webp', alt: 'KEC International' },
  { src: '/images/hero/polycab.webp', alt: 'Polycab' },
  { src: '/images/hero/Aditya.webp', alt: 'Aditya Birla Group' },
];

const duplicated = [...logos, ...logos, ...logos];

// Static fallback for SSR - matches client structure exactly
const StaticCarousel = memo(() => (
  <div className="flex gap-4 sm:gap-10 md:gap-14 lg:gap-16" style={{ width: 'max-content' }}>
    {duplicated.map((logo, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[220px]"
      >
        <div className="p-8 h-40 w-full flex items-center justify-center">
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="max-w-full max-h-full object-contain opacity-90 transition-all duration-300"
            style={{ filter: 'brightness(1.05) contrast(1.05)' }}
          />
        </div>
      </div>
    ))}
  </div>
));

StaticCarousel.displayName = 'StaticCarousel';

function ClientsCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 px-4">
      <div className="max-w-full mx-auto">
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
          <div className="overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm">
            {mounted ? (
              <MotionDiv
                className="flex gap-4 sm:gap-10 md:gap-14 lg:gap-16"
                style={{ width: 'max-content' }}
                animate={{ x: ['0%', '-33.33%'] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                {duplicated.map((logo, idx) => (
                  <MotionDiv
                    key={idx}
                    className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[220px]"
                    whileHover={{ scale: 1.12, y: -6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <div className="p-8 h-40 w-full flex items-center justify-center">
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
            ) : (
              <StaticCarousel />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ClientsCarousel);
