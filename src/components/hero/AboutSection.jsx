'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldIcon, ToolIcon } from 'public/icons/Icons';
import Counter from './Counter';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const staggerParent = {
  visible: { transition: { staggerChildren: 0.18 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <MotionDiv
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* IMAGE GRID */}
          <MotionDiv variants={fadeUp} className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {/* LEFT COLUMN */}
              <div className="space-y-4 mt-4">
                {/* Image 1 */}
                <div className="h-48 rounded-lg overflow-hidden shadow-lg relative bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6 ">
                    <h3 className="text-4xl font-bold text-orange-500">
                      <Counter end={50} />
                    </h3>
                    <p className="text-gray-600 font-medium">Major Clients</p>
                  </div>
                </div>

                {/* Counter Box */}
                <div className="h-60 rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-4xl font-bold text-orange-500">
                      <Counter end={20} />
                    </h3>
                    <p className="text-gray-600 font-medium">Years of Experience</p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-4">
                {/* Image 2 */}
                <div className="h-60 rounded-lg overflow-hidden shadow-lg relative flex items-center justify-center bg-gray-100">
                  {/* <Image
                    src="/images/hero/hero-about-2.webp"
                    alt="Electrical control panel"
                    fill
                    priority={false}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  /> */}
                  <div className="text-center p-6 ">
                    <h3 className="text-4xl font-bold text-orange-500">
                      <Counter end={2500} />
                    </h3>
                    <p className="text-gray-600 font-medium">Project Executed</p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="h-48 rounded-lg shadow-lg bg-[#050f47] p-6 flex flex-col justify-center">
                  <div className="text-orange-500 text-4xl mb-2">“</div>
                  <p className="text-gray-100 text-sm italic">
                    "Commitment towards Product Quality & Delivery"
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* TEXT CONTENT */}
          <MotionDiv variants={fadeUp} className="w-full lg:w-1/2">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm block mb-2">
              Company Introduction
            </span>

            <h2 className="font-bold text-4xl text-gray-900 mb-6 leading-snug">
              Engineering Excellence Since 2005
            </h2>

            <div className="text-gray-600 mb-8 space-y-4 leading-relaxed">
              {/* <p>
                Bharat Engineers and its talented team is led by
                <strong> Mr. Anil M. Deotale</strong>, a Veteran in the field of Power Control
                Centers, Established in 2005. Bharat Engineers has made rapid strides in the field
                of Power Control Centers (PCC) Panels.
              </p> */}

              <p>
                Bharat Engineers, established in 2005, is a manufacturer of
                <strong> LV and MV </strong>panels for a variety of industrial and commercial
                applications. Based in Vadodara, we are committed to delivering technically
                superior, operationally smooth and safe, sturdy and aesthetically pleasing products
                that offer high value for capital investment.
              </p>

              {/* <p>
                Having worked for 20 long years in different divisions of L&T Switchgears, Mr. Anil
                M. Deotale has gained a wealth of experience and practical knowledge. Under his
                technical proficiency and adept management, Bharat Engineers is moving forward
                towards the most reliable manufacturer of Power Control Center panels.
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((item) => (
                <FeatureItem {...item} key={item.title} />
              ))}
            </div>

            <Link
              href="/about"
              className="text-orange-600 font-bold hover:text-gray-900 transition inline-flex items-center gap-2"
            >
              Learn More About Us →
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}

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

const features = [
  {
    title: 'Technical Proficiency',
    description: 'Expert engineering for complex needs.',
    icon: <ToolIcon className="text-orange-500 h-5 w-5" />,
  },
  {
    title: 'Safety First',
    description: 'Guaranteed safety for operating personnel.',
    icon: <ShieldIcon className="text-orange-500 h-5 w-5" />,
  },
];
