'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMobileAlt, FaTwitter } from 'react-icons/fa';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'PCC & MCC Panels', href: '/products#pcc-mcc' },
  { label: 'MV Panels', href: '/products#mv-panels' },
  { label: 'Bus Duct Systems', href: '/products#bus-duct' },
  { label: 'Control Panels', href: '/products#control-panels' },
];

// const socialLinks = [
//   { icon: <FaFacebookF />, href: '#' },
//   { icon: <FaLinkedinIn />, href: '#' },
//   { icon: <FaTwitter />, href: '#' },
//   { icon: <FaInstagram />, href: '#' },
// ];

export default function Footer() {
  return (
    <footer className="bg-[#050f47] text-gray-400 py-12" id="footer">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xl"> <FaBolt /> </div> <span className="font-bold text-lg text-white"> BHARAT<span className="text-orange-500">ENGINEERS</span> </span> */}
              <motion.div
                className="w-fit h-full py-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img src="/logo.webp" alt="logo" className="h-16 cursor-pointer" />
              </motion.div>
            </div>
            <p className="text-sm">
              Powering industries with reliable electrical solutions since 2005.
            </p>
          </div>

          {/* QUICK LINKS */}
          <FooterColumn title="Quick Links">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="hover:text-orange-500 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* PRODUCTS */}
          <FooterColumn title="Products">
            {productLinks.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="hover:text-orange-500 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* CONTACT */}
          <FooterColumn title="Contact">
            <ul className="space-y-3 text-sm">
              {/* Address */}
              <li className="flex items-center gap-2">
                <FaLocationDot className="text-orange-500" />
                <a
                  href="https://maps.app.goo.gl/Yawifv2drPDtnhB86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  Bharat Engineers, Vadodara, Gujarat.
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2">
                <FaPhone className="text-orange-500" />
                <a href="tel:02652645006" className="hover:text-orange-500 transition-colors">
                  0265 2645006
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaMobileAlt className="text-orange-500" />
                <a href="tel:+919879017654" className="hover:text-orange-500 transition-colors">
                  +91 9879017654
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:bharat_engrs@yahoo.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  bharat_engrs@yahoo.com
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* COPYRIGHT */}
          <p className="text-sm">© 2025 Bharat Engineers. All rights reserved.</p>

          {/* SOCIAL ICONS */}
          {/* <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="hover:text-orange-500 transition-colors text-xl"
              >
                {item.icon}
              </Link>
            ))}
          </div> */}

          {/* DESIGN CREDIT */}
          <p className="text-sm mt-4 md:mt-0">
            Designed by{' '}
            <a
              href="https://www.sviqsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              SVIQ SOLUTIONS LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* 📌 Reusable column wrapper */
function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}
