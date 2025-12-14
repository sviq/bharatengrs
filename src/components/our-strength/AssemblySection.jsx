'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaPuzzlePiece, FaScrewdriverWrench, FaBolt } from 'react-icons/fa6';

export default function AssemblySection() {
  const steps = [
    {
      icon: <FaPuzzlePiece className="text-2xl text-orange-500" />,
      title: '01. Pre-Assembly',
      description:
        'Precision pre-assembly of bus bars ensuring optimal conductivity and alignment.',
    },
    {
      icon: <FaScrewdriverWrench className="text-2xl text-orange-500" />,
      title: '02. Component Mounting',
      description: 'Systematic mounting and assembly of all electrical components with precision.',
    },
    {
      icon: <FaBolt className="text-2xl text-orange-500" />,
      title: '03. Wiring Integration',
      description: 'Complete power and control wiring with rigorous quality checks and testing.',
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="assembly" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase mb-2">
              Assembly <span className="text-orange-500">Section</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our streamlined assembly process ensures every component fits perfectly, delivering
              reliable power solutions.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal line (desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 z-0" />

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <AssemblyCard
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

/* =======================================================================
   REUSABLE CARD COMPONENT
======================================================================= */
function AssemblyCard({ icon, title, description, index }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-slate-800 p-8 rounded-lg border border-slate-700 
                 hover:border-orange-500 transition-all duration-300 
                 text-center group"
    >
      {/* Icon Circle */}
      <div
        className="w-16 h-16 mx-auto bg-slate-900 rounded-full border-2 border-orange-500 
                   flex items-center justify-center mb-6 
                   shadow-[0_0_15px_rgba(255,107,66,0.3)]
                   group-hover:scale-110 transition-transform"
      >
        {icon}
      </div>

      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </m.div>
  );
}
