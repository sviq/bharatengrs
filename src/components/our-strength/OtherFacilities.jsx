'use client';

import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaFillDrip, FaIndustry } from 'react-icons/fa6';

export default function OtherFacilities() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="other-facilities" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 uppercase mb-6">
                Other <span className="text-orange-500">Facilities</span>
              </h2>

              <p className="text-gray-600 mb-10">
                Beyond our core machinery, we maintain comprehensive facilities for surface
                treatment and auxiliary fabrication to ensure end-to-end quality control.
              </p>

              <div className="space-y-6">
                <FacilityItem
                  icon={<FaFillDrip className="text-xl" />}
                  title="Powder Coating & Treatment"
                  description="Steel sheet surface treatment by seven tank process. Dedicated in-house test laboratory."
                />

                <FacilityItem
                  icon={<FaIndustry className="text-xl" />}
                  title="Fabrication Auxiliary"
                  listItems={[
                    'Power Press – 80T',
                    'Radial Drilling Machines',
                    'Specialized Welding Machines',
                  ]}
                />
              </div>
            </m.div>

            {/* RIGHT IMAGE PANEL */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src="/images/ourStrength/workflow.webp"
                  alt="Factory Floor"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />

                {/* Bottom text */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-white font-display text-2xl font-bold uppercase tracking-wide">
                    Integrated Workflow
                  </div>
                  <div className="w-12 h-1 bg-orange-500 mt-2"></div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

/* =====================================================================
    REUSABLE FACILITY ITEM
===================================================================== */
function FacilityItem({ icon, title, description, listItems }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 
                 hover:border-orange-500/30 transition-colors"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded bg-slate-900 text-white flex items-center justify-center">
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-lg text-slate-900">{title}</h4>

        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}

        {listItems && (
          <ul className="text-sm text-gray-600 mt-1 list-disc list-inside space-y-1">
            {listItems.map((li, idx) => (
              <li key={idx}>{li}</li>
            ))}
          </ul>
        )}
      </div>
    </m.div>
  );
}
