'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation'; // ⭐ ADD THIS

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
  const pathname = usePathname(); // ⭐ GET CURRENT ROUTE
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleLinkClick = () => open && setOpen(false);

  return (
    <header className="w-full sticky top-0 z-[80] bg-white border-b-2 border-gray-300">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="flex items-center justify-between px-4">
          {/* Logo */}
          <motion.div className="flex-shrink-0 z-50">
            <Link href="/" onClick={handleLinkClick}>
              <img
                src="/logo-cropped.svg"
                alt="Company Logo"
                className="h-12 md:h-20 cursor-pointer object-contain"
              />
            </Link>
          </motion.div>

          {/* DESKTOP MENU */}
          <motion.ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-gray-700">
            {navLinks.map((item) => {
              const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
 // ⭐ CHECK ACTIVE STATE

              return (
                <motion.li key={item.path} className="relative pb-1 cursor-pointer">
                  <Link
                    href={item.path}
                    className={`text-sm xl:text-base transition-colors duration-200 ${
                      isActive ? 'text-orange-500 font-semibold' : 'hover:text-orange-500'
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Animated Underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-orange-500"
                    animate={{ width: isActive ? '100%' : 0 }} // ⭐ ACTIVE UNDERLINE
                    transition={{ duration: 0.25 }}
                  />
                </motion.li>
              );
            })}

            {/* CONTACT BUTTON */}
            <Link
              href="/contact"
              className="relative inline-block px-5 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </motion.ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-3xl z-50 p-2 -mr-2"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
          >
            <AnimatePresence mode="wait">{open ? <FiX /> : <FiMenu />}</AnimatePresence>
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="fixed inset-0 lg:hidden"
                onClick={() => setOpen(false)}
              />

              <motion.div className="absolute left-0 right-0 bg-white shadow-lg lg:hidden">
                <ul className="flex flex-col px-4 py-4 gap-2 font-medium text-gray-800">
                  {navLinks.map((item, index) => {
                    const isActive = pathname === item.path || pathname.startsWith(item.path + '/');// ⭐ MOBILE ACTIVE STATE

                    return (
                      <motion.li key={item.path} whileHover={{ x: 5 }}>
                        <Link
                          href={item.path}
                          onClick={handleLinkClick}
                          className={`block py-3 px-3 rounded-md ${
                            isActive
                              ? 'text-orange-500 font-semibold bg-orange-50'
                              : 'hover:text-orange-500'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}

                  {/* MOBILE CONTACT */}
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 bg-orange-500 text-white rounded-md text-center font-medium"
                  >
                    Contact Us
                  </Link>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
