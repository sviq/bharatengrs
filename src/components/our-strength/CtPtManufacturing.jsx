'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaCircleNotch, FaFlask } from 'react-icons/fa6';

export default function CtPtManufacturing() {
  const items = [
    {
      title: 'Transformer Winding Machine',
      description:
        'High-precision automated winding for CT/PT transformers ensuring consistent quality and electrical characteristics.',
      // image:
      //   'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      image: '/images/ourStrength/image7.avif',
      icon: <FaCircleNotch className="text-2xl text-orange-500" />,
    },
    {
      title: 'Vacuum Epoxy Resin Casting',
      description:
        'Advanced vacuum casting plant for superior insulation and environmental protection of transformers.',
      // image:
      //   'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      image: '/images/ourStrength/image8.jpg',
      icon: <FaFlask className="text-2xl text-orange-500" />,
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="ct-pt-manufacturing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* SECTION HEADER */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 uppercase mb-2">
              CT / PT <span className="text-orange-500">Manufacturing</span>
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto mt-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Advanced transformer manufacturing capabilities with precision winding and epoxy
              casting technology.
            </p>
          </m.div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {items.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 
                           hover:shadow-xl transition-all duration-300 group"
              >
                {/* IMAGE BLOCK */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-scale-down group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-slate-900">{item.title}</h3>
                  </div>

                  <p className="text-gray-600">{item.description}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
