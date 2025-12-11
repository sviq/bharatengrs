'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

// NAV ITEMS WITH ROUTES
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Our Strength', path: '/our-strength' },
  { label: 'Clients', path: '/clients' },
  { label: 'Gallery', path: '/gallery' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('nav')) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Close menu on route change (for mobile)
  const handleLinkClick = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b-2 border-gray-300">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="flex items-center justify-between px-4 py-2 md:py-3">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 z-50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" onClick={handleLinkClick}>
              <img
                src="/logo.webp"
                alt="Company Logo"
                className="h-10 md:h-14 cursor-pointer object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML =
                    '<div class="text-xl md:text-2xl font-bold text-orange-500">LOGO</div>';
                }}
              />
            </Link>
          </motion.div>

          {/* DESKTOP MENU */}
          <motion.ul
            className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 font-medium text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((item, index) => (
              <motion.li
                key={`desktop-${item.path}`}
                className="relative cursor-pointer pb-1"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <Link
                  href={item.path}
                  className="text-sm xl:text-base hover:text-orange-500 transition-colors duration-200"
                >
                  {item.label}
                </Link>

                {/* Animated Underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-orange-500"
                  variants={{
                    rest: { width: 0 },
                    hover: { width: '100%' },
                  }}
                  transition={{ duration: 0.25 }}
                />
              </motion.li>
            ))}

            {/* CONTACT BUTTON */}
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <Link
                href="/contact"
                className="relative inline-block px-5 py-2 font-medium text-white bg-orange-500 rounded-md cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Contact Us</span>

                <motion.div
                  className="absolute inset-0 rounded-md bg-[#ff3700]"
                  variants={{
                    rest: { scaleX: 0, originX: 0 },
                    hover: { scaleX: 1, originX: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </Link>
            </motion.div>
          </motion.ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-3xl z-50 p-2 -mr-2"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open ? 'close' : 'menu'}
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {open ? <FiX /> : <FiMenu />}
              </motion.div>
            </AnimatePresence>
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
                style={{ top: '60px' }}
                onClick={() => setOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden absolute left-0 right-0 bg-white shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col px-4 py-4 gap-2 font-medium text-gray-800 max-h-[calc(100vh-80px)] overflow-y-auto">
                  {navLinks.map((item, index) => (
                    <motion.li
                      key={`mobile-${item.path}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5, color: '#ff6b42' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className="block py-3 px-3"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}

                  {/* MOBILE CONTACT BUTTON */}
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-2"
                  >
                    <Link
                      href="/contact"
                      onClick={handleLinkClick}
                      className="block px-4 py-3 bg-[#FF6B42] text-white rounded-md text-center font-medium hover:bg-[#ff3700] transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
