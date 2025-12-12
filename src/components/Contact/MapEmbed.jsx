'use client';

import { motion } from 'framer-motion';

export default function MapEmbed() {
  return (
    <div className="w-full flex justify-center my-6">
      <motion.div
        className="
          w-full max-w-7xl 
          h-[350px] 
          rounded-sm
          overflow-hidden
          border-2 border-gray-200
          shadow-md
          mx-4
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.586688377428!2d73.194906!3d22.2557553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc438ffffffff%3A0x3422e1cca07504a9!2sBharat%20Engineers!5e0!3m2!1sen!2sin!4v1765539604121!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
}
