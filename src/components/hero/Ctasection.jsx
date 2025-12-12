'use client';

import Link from 'next/link';
import { FaPhoneAlt } from 'public/icons/Icons';


const CtaSection = () => {
  return (
    <section className="relative py-20 bg-[#071045] border-b overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.12] bg-[url('/grid.svg')] bg-repeat"></div>

      {/* Radial Highlight */}
      {/* <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-orange-900/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2"></div> */}

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-4xl font-bold text-white drop-shadow-md leading-tight">
          Looking for Reliable Electrical Panels?
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-lg sm:text-xl text-white">
          Get engineering-driven solutions, perfectly tailored to your industrial needs.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-4 py-4 text-base font-semibold
                       rounded-md bg-orange-500 text-white
                       hover:bg-orange-600 transition-all duration-300 gap-3"
          >
            <FaPhoneAlt className="w-5 group-hover:scale-110 transition" />
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
