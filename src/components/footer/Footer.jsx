'use client';

import { FaBolt } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#111] text-gray-400 py-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-0 ">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xl">
                <FaBolt />
              </div>
              <span className="font-bold text-lg text-white">
                BHARAT<span className="text-orange-500">ENGINEERS</span>
              </span> */}
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
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about-why-us" className="hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-500 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-orange-500 transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#cert-cta" className="hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  PCC & MCC Panels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  MV Panels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Bus Duct Systems
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Control Panels
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaLocationDot className="text-orange-500 mt-1" />
                <span>Industrial Area, Gujarat, India</span>
              </li>

              <li className="flex items-center gap-2">
                <FaPhone className="text-orange-500" />
                <span>+91 1234 567 890</span>
              </li>

              <li className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <span>info@bharatengineers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* COPYRIGHT */}
          <p className="text-sm text-center md:text-left">
            © 2025 Bharat Engineers. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition-colors text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors text-xl">
              <FaInstagram />
            </a>
          </div>

          {/* DESIGNED BY */}
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
};

export default Footer;
