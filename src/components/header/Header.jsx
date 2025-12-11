'use client';

import Navbar from './NavbarCopy';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <div className="border-b-2 border-gray-300">
      <motion.div
        className="max-w-7xl mx-auto flex flex-row items-center justify-between w-full "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <motion.div
          className="w-fit h-full py-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src="/logo.webp" alt="logo" className="h-10 md:h-14 px-4 cursor-pointer" />
        </motion.div>

        {/* Navbar */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Navbar />
        </motion.div>
      </motion.div>
    </div>
  );
}
