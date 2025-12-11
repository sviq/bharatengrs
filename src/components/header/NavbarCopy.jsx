// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import Link from 'next/link';

// // NAV ITEMS WITH ROUTES
// const navLinks = [
//   { label: 'Home', path: '/' },
//   { label: 'About Us', path: '/about' },
//   { label: 'Products', path: '/products' },
//   { label: 'Our Strength', path: '/our-strength' },
//   { label: 'Clients', path: '/clients' },
//   { label: 'Gallery', path: '/gallery' },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full sticky top-0 z-50"
//     >
//       <div className="flex items-center justify-between px-4 py-4 md:py-3">
//         {/* DESKTOP MENU */}
//         <ul className="hidden lg:flex items-center justify-center gap-8 font-medium text-gray-700">
//           {navLinks.map((item, index) => (
//             <motion.li
//               key={index}
//               className="relative cursor-pointer pb-1"
//               initial="rest"
//               whileHover="hover"
//               animate="rest"
//             >
//               <Link href={item.path}>{item.label}</Link>

//               {/* Animated Underline */}
//               <motion.div
//                 className="absolute bottom-0 left-0 h-0.5 bg-orange-500"
//                 variants={{
//                   rest: { width: 0 },
//                   hover: { width: '100%' },
//                 }}
//                 transition={{ duration: 0.25 }}
//               />
//             </motion.li>
//           ))}

//           {/* CONTACT BUTTON */}
//           <motion.a
//             href="/contact"
//             className="relative px-5 py-2 font-medium text-white bg-orange-500 rounded-md cursor-pointer"
//             initial="rest"
//             whileHover="hover"
//             animate="rest"
//           >
//             <span className="relative z-10">Contact Us</span>

//             <motion.div
//               className="absolute inset-0 rounded-md bg-[#ff3700]"
//               variants={{
//                 rest: { scaleX: 0, originX: 0 },
//                 hover: { scaleX: 1, originX: 0 },
//               }}
//               transition={{ duration: 0.3, ease: 'easeOut' }}
//             />
//           </motion.a>
//         </ul>

//         {/* MOBILE MENU BUTTON */}
//         <button className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
//           {open ? '✖' : '☰'}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <motion.ul
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="lg:hidden flex flex-col bg-white shadow px-6 py-4 gap-4 font-medium text-gray-800"
//         >
//           {navLinks.map((item, index) => (
//             <motion.li key={index} whileHover={{ x: 5, color: '#ff6b42' }}>
//               <Link href={item.path}>{item.label}</Link>
//             </motion.li>
//           ))}

//           {/* MOBILE CONTACT BUTTON */}
//           <motion.a
//             href="/contact"
//             className="px-4 py-2 mt-2 bg-[#FF6B42] text-white rounded-md text-center"
//           >
//             Contact Us
//           </motion.a>
//         </motion.ul>
//       )}
//     </motion.nav>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import Link from 'next/link';

// NAV ITEMS WITH ROUTES
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Our Strength', path: '/our-strength' },
  { label: 'Clients', path: '/clients' },
  { label: 'Gallery', path: '/gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-auto"
    >
      <div className="flex items-center justify-between lg:justify-center px-4 py-2 lg:py-0 lg:px-0">
        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center justify-center gap-8 font-medium text-gray-700">
          {navLinks.map((item) => (
            <motion.li
              key={item.path}
              className="relative cursor-pointer pb-1"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Link href={item.path}>{item.label}</Link>

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
              className="relative px-5 py-2 font-medium text-white bg-orange-500 rounded-md block overflow-hidden"
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
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-3xl"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          {open ? '✖' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden flex flex-col bg-white shadow-md px-6 py-4 gap-4 font-medium text-gray-800"
        >
          {navLinks.map((item) => (
            <motion.li
              key={item.path}
              whileHover={{ x: 5, color: '#ff6b42' }}
              transition={{ duration: 0.2 }}
            >
              <Link href={item.path} onClick={closeMenu}>
                {item.label}
              </Link>
            </motion.li>
          ))}

          {/* MOBILE CONTACT BUTTON */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="px-4 py-2 mt-2 bg-[#FF6B42] text-white rounded-md text-center"
          >
            Contact Us
          </Link>
        </motion.ul>
      )}
    </motion.nav>
  );
}
