'use client';

import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const CtaSection = () => {
  return (
    <section className="relative py-20 bg-[#071045] border-b overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/grid.svg')] bg-repeat"></div>

      {/* Radial Highlight */}
      {/* <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-orange-600/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2"></div> */}

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-4xl font-bold text-white drop-shadow-md leading-tight">
          Looking for Reliable Electrical Panels?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-white">
          Get engineering-driven solutions, perfectly tailored to your industrial needs.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold
                       rounded-md bg-orange-500 text-white
                       hover:bg-orange-600 transition-all duration-300"
          >
            <FaPhoneAlt className="mr-2 text-xl group-hover:scale-110 transition" />
            Contact Us Now
          </Link>

          {/* Request Quote Button */}
          {/* <Link
            href="/contact#quote"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md
                       border border-white/30 text-white hover:border-white hover:bg-white/10 
                       backdrop-blur-md transition-all duration-300"
          >
            <FaEnvelope className="mr-2 text-xl group-hover:scale-110 transition" />
            Request Quote
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
