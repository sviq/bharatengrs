'use client';

import { FaBolt, FaCircleCheck, FaCube, FaGaugeHigh, FaSliders, FaTape } from 'react-icons/fa6';

import { LazyMotion, domAnimation, m } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function TechnicalSpecifications() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="details"
        className="py-16 md:py-24 bg-gray-50 border-y border-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT COLUMN */}
            <div>
              <m.h2
                variants={fadeUp}
                className="text-3xl font-display font-bold text-gray-900 border-l-4 border-orange-500 pl-4 mb-8"
              >
                Technical Specifications
              </m.h2>

              <div className="space-y-8">
                <m.div variants={fadeUp}>
                  <SpecItem
                    title="Electrical Power & Control Panels"
                    description="Comprehensive Electrical Distribution Panels including PCC, PDB, ACDB, DCDB, LDBs, Bus Ducts, and robust Feeder pillars designed for optimal power management."
                  />
                </m.div>

                <m.div variants={fadeUp}>
                  <SpecItem
                    title="Motor Control Centers (MCC/PMCC)"
                    description="Advanced Electrical Motor Control Panels available in both draw-out and fixed type configurations for flexible industrial applications."
                  />
                </m.div>

                <m.div variants={fadeUp}>
                  <SpecItem
                    title="Specialized & Control Panels"
                    description="Custom engineered solutions including Furnace control, Chiller control, Damper control, AMF Panels, Change Over Panels, and APFC Panels."
                  />
                </m.div>

                <m.div variants={fadeUp}>
                  <SpecItem
                    title="Synchronizing Panels"
                    description="Precision DG & Grid Synchronizing Panels and Relay Control Panels ensuring seamless power transitions."
                  />
                </m.div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <m.div
              variants={fadeUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 -mt-8"
            >
              <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaGaugeHigh className="text-orange-500" />
                Instrumentation CTs & PTs
              </h3>

              <div className="space-y-8">
                {/* CTs */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Current Transformers (CTs)
                  </h4>

                  <ul className="space-y-3">
                    <m.li variants={fadeUp}>
                      <CTItem label="Tape Insulated" icon={<FaTape className="text-gray-400" />} />
                    </m.li>

                    <m.li variants={fadeUp}>
                      <CTBadge label="Wound Primary" badge="1–150A" />
                    </m.li>

                    <m.li variants={fadeUp}>
                      <CTBadge label="Wound Secondary" badge="9A–6300A" />
                    </m.li>

                    <m.li variants={fadeUp}>
                      <CTItem label="Resin Cast" icon={<FaCube className="text-gray-400" />} />
                    </m.li>
                  </ul>
                </div>

                {/* PTs */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Potential & Control Transformers
                  </h4>

                  <ul className="space-y-3">
                    <m.li variants={fadeUp}>
                      <CTItem
                        label="Potential Transformers"
                        icon={<FaBolt className="text-gray-400" />}
                      />
                    </m.li>

                    <m.li variants={fadeUp}>
                      <CTItem
                        label="Control Transformers"
                        icon={<FaSliders className="text-gray-400" />}
                      />
                    </m.li>
                  </ul>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
}

/* -------------------------------------------
   REUSABLE COMPONENTS
-------------------------------------------- */

function SpecItem({ title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <FaCircleCheck className="text-orange-500 text-lg" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
        <p className="text-gray-600 mt-1 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CTItem({ label, icon }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100">
      <span className="text-gray-700 font-medium">{label}</span>
      {icon}
    </div>
  );
}

function CTBadge({ label, badge }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100">
      <span className="text-gray-700 font-medium">{label}</span>
      <span className="text-xs font-mono bg-gray-200 px-2 py-1 rounded text-gray-600">{badge}</span>
    </div>
  );
}
