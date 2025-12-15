'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MapEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 🔐 Safety fallback: hide loader after 3s no matter what
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="locations" className="w-full max-w-7xl flex items-center justify-center my-6 px-4">
      <motion.div
        className="relative w-full h-[350px] rounded-sm overflow-hidden
                   border-2 border-gray-200 shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* LOADER */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-gray-500">Loading map…</p>
            </div>
          </div>
        )}

        {/* MAP */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.5865579716688!2d73.19233107451663!3d22.255760244509855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc438ffffffff%3A0x3422e1cca07504a9!2sBharat%20Engineers!5e0!3m2!1sen!2sin!4v1765811968906!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoading(false)}
          title="Bharat Engineers Location"
        />
      </motion.div>
    </div>
  );
}
