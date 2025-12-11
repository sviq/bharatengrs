'use client';

import dynamic from 'next/dynamic';

// Dynamically import framer-motion for optimal performance
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

// ---------------- Icons ---------------- //
const ShieldIcon = (props) => (
  <svg
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 512 512"
    aria-hidden="true"
    {...props}
  >
    <path d="m466.5 83.7-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3M256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7" />
  </svg>
);

const ToolIcon = (props) => (
  <svg
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 512 512"
    aria-hidden="true"
    {...props}
  >
    <path d="M501.1 395.7 384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7M331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9m-103.9 82-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7M64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24" />
  </svg>
);

// ---------------- Motion Variants ---------------- //
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const staggerParent = {
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// ---------------- Component ---------------- //
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 lg:py-24 bg-white scroll-mt-20"
      aria-labelledby="about-title"
    >
      <div className="max-w-[1600px] mx-auto px-6">
        {/* MAIN WRAPPER WITH STAGGER ANIMATION */}
        <MotionDiv
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* ---------------- IMAGE GRID ---------------- */}
          <MotionDiv variants={fadeUp} className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 px-4 lg:px-0">
              {/* LEFT COLUMN */}
              <div className="space-y-4 mt-4">
                <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/hero/about1.webp"
                    alt="Engineer working on equipment"
                    width={500}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="h-60 rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-4xl font-bold text-orange-500">20+</h3>
                    <p className="text-gray-600 font-medium">Years of Experience</p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-4">
                <div className="h-60 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/hero/about2.webp"
                    alt="Electrical control panel"
                    width={500}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="h-48 rounded-lg shadow-lg bg-[#0F172A] p-6 flex flex-col justify-center">
                  <div className="text-orange-500 text-4xl mb-2">“</div>
                  <p className="text-gray-300 text-sm italic">
                    "Commitment towards Product Quality & Delivery"
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* ---------------- TEXT CONTENT ---------------- */}
          <MotionDiv variants={fadeUp} className="w-full lg:w-1/2">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm block mb-2">
              Company Introduction
            </span>

            <h2 id="about-title" className="font-bold text-4xl text-gray-900 mb-6 leading-snug">
              Engineering Excellence Since 2005
            </h2>

            <div className="text-gray-600 mb-8 leading-relaxed space-y-4">
              <p>
                Bharat Engineers and its talented team is led by
                <strong> Mr. Anil M. Deotale</strong>, a veteran in the field of Power Control
                Centers. Since its establishment in 2005, Bharat Engineers has made significant
                strides in the manufacturing of Power Control Center (PCC) Panels.
              </p>

              <p>
                With 20+ years of experience at L&T Switchgears across multiple divisions, Mr.
                Deotale brings unmatched expertise and leadership. His technical proficiency drives
                Bharat Engineers toward becoming the most reliable manufacturer of PCC panels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FeatureItem
                title="Technical Proficiency"
                description="Expert engineering for complex needs."
                icon={<ToolIcon className="text-orange-500 h-5 w-5" />}
              />

              <FeatureItem
                title="Safety First"
                description="Guaranteed safety for operating personnel."
                icon={<ShieldIcon className="text-orange-500 h-5 w-5" />}
              />
            </div>

            <a
              href="#contact"
              className="text-orange-600 font-bold hover:text-gray-900 transition inline-flex items-center gap-2"
            >
              Learn More About Us →
            </a>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}

// ---------------- Feature Item Component ---------------- //
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-3">
    <div className="w-12 h-12 rounded bg-orange-100 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);
