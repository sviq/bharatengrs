'use client';

import { FaPhone, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiPhonepe } from 'react-icons/si';

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-repeat"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Looking for Reliable Electrical Panels?
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 mb-8">
          Contact us today for engineering-driven solutions tailored to your industry needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Contact Us Button */}
          <a
            href="#contact"
            className="
              inline-flex justify-center items-center px-4 py-4 
              border border-transparent text-base font-semibold rounded
              bg-orange-500 text-white hover:bg-orange-600
              transition-all shadow-lg
            "
          >
            <FaPhoneAlt className="mr-2" />
            Contact Us Now
          </a>

          {/* Request Quote Button */}
          {/* <a
            href="#quote"
            className="
              inline-flex justify-center items-center px-8 py-4
              border-2 border-white text-base font-semibold rounded 
              text-white hover:bg-white hover:text-gray-900
              transition-all
            "
          >
            <FaEnvelope className="mr-2" />
            Request Quote
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
