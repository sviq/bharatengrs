// 'use client';

// import { motion } from 'framer-motion';

// // ICONS
// const FacIcon = (props) => (
//   <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" {...props}>
//     <path d="M17 10V6l-5 4V6l-5 4V4H2v16h20V6zm-8 7H7v-3h2zm5 0h-2v-3h2zm5 0h-2v-3h2z" />
//   </svg>
// );

// const VerifiedIcon = (props) => (
//   <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" {...props}>
//     <path d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414 2.828 2.829 5.657-5.657 1.415 1.414-7.072 7.07z" />
//   </svg>
// );

// const ShieldIcon = (props) => (
//   <svg width="28" height="28" fill="currentColor" viewBox="0 0 512 512" {...props}>
//     <path d="m466.5 83.7-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3M256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7" />
//   </svg>
// );

// // Motion Variants
// const fadeLeft = {
//   hidden: { opacity: 0, x: -20 },
//   show: { opacity: 1, x: 0 },
// };

// const fadeRight = {
//   hidden: { opacity: 0, x: 20 },
//   show: { opacity: 1, x: 0 },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 10 },
//   show: { opacity: 1, y: 0 },
// };

// export default function Hero() {
//   return (
//     <section className="relative py-8 bg-white overflow-hidden">
//       {/* WRAPPER */}
//       <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT CONTENT */}
//           <motion.div
//             variants={fadeLeft}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="space-y-6"
//           >
//             {/* Badge */}
//             <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5">
//               <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
//               <span className="text-orange-500 text-sm md:text-base font-semibold uppercase">
//                 Reliable. Safe. Efficient. Always.
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="text-6xl leading-[1.15] font-extrabold text-gray-900">
//               Powering <br />
//               Industries with <br />
//               <span className="text-orange-500">Reliable Electrical</span> <br />
//               Solutions
//             </h1>

//             {/* Description */}
//             <p className="text-lg text-gray-600 max-w-xl border-l-4 border-orange-500 pl-6">
//               Bharat Engineers manufactures Electrical Panels, Bus Ducts, and Instrument
//               Transformers—delivering certified, high-performance solutions since 2005.
//             </p>

//             {/* CTA Buttons */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               transition={{ duration: 0.4 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <a
//                 href="#products"
//                 className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-md"
//               >
//                 Explore Products →
//               </a>

//               <a
//                 href="#about-why-us"
//                 className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-lg border border-gray-200 text-gray-700 bg-white hover:border-orange-400 hover:text-orange-500 transition-all"
//               >
//                 Learn More
//               </a>
//             </motion.div>

//             {/* Certifications */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               transition={{ duration: 0.4 }}
//               className="flex items-center gap-12 pt-4"
//             >
//               <div className="flex items-center gap-3">
//                 <VerifiedIcon className="text-gray-500" />
//                 <span className="text-base text-gray-500 font-medium">
//                   ISO 9001:2015 <br /> Certified
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <ShieldIcon className="text-gray-500" />
//                 <span className="text-base text-gray-500 font-medium">
//                   CPRI <br /> Tested
//                 </span>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             variants={fadeRight}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="relative hidden lg:block"
//           >
//             <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
//               <img
//                 src="/images/hero.webp"
//                 alt="Industrial Electrical Control Room"
//                 className="w-full h-[600px] object-cover"
//                 loading="lazy"
//               />
//             </div>

//             {/* Floating Stats Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               whileHover={{ scale: 1.02 }}
//               className="absolute bottom-8 left-8 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border-l-4 border-orange-500 px-6 py-5 flex items-center gap-4 max-w-xs"
//             >
//               <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center">
//                 <FacIcon className="text-orange-500" />
//               </div>

//               <div className="leading-tight">
//                 <p className="text-xl font-bold text-gray-900">18+</p>
//                 <p className="text-sm text-gray-600">
//                   Years of Engineering <br /> Excellence
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';


import dynamic from 'next/dynamic';
import { FaCircleCheck } from 'react-icons/fa6';
import Link from 'next/link';


// Framer Motion loaded only on client → MUCH better performance
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-[700px] flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner/hero-banner.webp"
          alt="Industrial Factory Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-transparent z-[1]" />

      {/* CONTENT WRAPPER */}
      <div className="container max-w-7xl px-4 mx-auto relative z-[2] flex flex-col md:flex-row items-center">
        {/* LEFT SIDE CONTENT */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-2/3 lg:w-1/2 text-white"
        >
          {/* Badge */}
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-orange-400/50 rounded-full bg-orange-400/10 backdrop-blur-sm mb-6"
          >
            <span className="text-xs font-medium tracking-wide text-orange-400 uppercase">
              ERDA Approved – Certificate No: T-0071
            </span>
          </MotionDiv>

          {/* Main Heading */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Manufacturer of Quality <span className="text-orange-500">Electrical Power</span> &
              Control Panels
            </h1>
          </MotionDiv>

          {/* Subheading */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
              Specializing in Instrumentation CTs & PTs. Delivering reliable, high-performance
              switchboards engineered for safety and efficiency.
            </p>
          </MotionDiv>

          {/* CTA Buttons */}
          <MotionDiv
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* EXPLORE PRODUCTS BUTTON */}
            <Link
              href="/products"
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded hover:bg-orange-600
               transition flex items-center justify-center gap-2 group"
            >
              Explore Products
            </Link>

            {/* CONTACT SALES BUTTON */}
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/30 text-white font-bold rounded hover:bg-white/10 
               transition flex items-center justify-center backdrop-blur-sm"
            >
              Contact Sales
            </Link>
          </MotionDiv>

          {/* Feature Icons */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <FaCircleCheck className="text-orange-500" /> High Quality
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck className="text-orange-500" /> Competitive Price
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck className="text-orange-500" /> Easy Maintenance
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* Right placeholder (optional) */}
        <div className="hidden lg:block w-1/2 h-full absolute right-0 bottom-0 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default HeroSection;
