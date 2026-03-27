'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  }),
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

export default function AboutStory() {
  return (
    <section id="about-content" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Tilt Background */}
            <motion.div
              className="absolute -inset-4 bg-orange-500/20 rounded-xl transform -rotate-2"
              variants={{
                hidden: { opacity: 0, rotate: -4, y: 20 },
                visible: { opacity: 1, rotate: -2, y: 0, transition: { duration: 0.8 } },
              }}
            />

            {/* Image */}
            <motion.div
              className="relative h-[420px] sm:h-[460px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl"
              variants={{
                hidden: { opacity: 0, scale: 1.05, y: 30 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 1, ease: 'easeOut' },
                },
              }}
            >
              <img
                src="/images/about/Story.webp"
                alt="Engineering Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Caption */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                variants={fadeUp}
              >
                <p className="text-white text-lg sm:text-xl font-semibold">
                  Precision in every panel.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            className="space-y-8"
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Headings */}
            <motion.div variants={fadeUp}>
              <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">
                Our Story
              </h2>

              <h3 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark leading-snug mb-6">
                Leaders in Power Control
              </h3>

              <div className="w-20 h-1 bg-orange-500 mb-8"></div>
            </motion.div>

            {/* TEXT CONTENT */}
            <motion.div
              className="prose prose-lg text-gray-600 space-y-6 max-w-none"
              variants={fadeUp}
            >
              <p className="leading-relaxed text-justify">
                <strong className="text-brand-dark">Bharat Engineers</strong> founded by{' '}
                <span className="text-brand-dark font-medium">Mr. Anil M. Deotale</span>, a Veteran
                in the field of Power Control Centers, established in 2005, has made rapid strides
                in the field of electrical panel manufacturing.
              </p>

              <p className="leading-relaxed text-justify">
                Having worked for 20 long years in panel division of L&T Switchgears, our founder
                Mr. Anil M. Deotale has gained a wealth of experience and practical knowledge. Under
                his technical proficiency and adept management, Bharat Engineers is moving forward
                towards becoming the most reliable manufacturer of electrical panels.
              </p>

              <p className="leading-relaxed pl-4 border-l-4 border-gray-200 italic text-justify">
                We design and manufacture a complete range of low and medium voltage power control
                panels for diverse applications across industrial and commercial sectors. Known for
                exceptional quality, technical superiority, operational smoothness, safety,
                durability and aesthetics—our electric power and control panels deliver high value
                for capital investments.
              </p>
            </motion.div>

            {/* EXPERIENCE + STATS */}
            <motion.div className="pt-4 flex items-center space-x-6" variants={fadeUp}>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-dark">20+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Years Exp.</span>
              </div>

              <div className="w-px h-12 bg-gray-200"></div>

              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-dark">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  Quality Assured
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
