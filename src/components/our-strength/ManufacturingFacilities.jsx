'use client';

import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaSprayCanSparkles, FaTemperatureHigh } from 'react-icons/fa6';

// Data-driven card list
const facilities = [
  {
    title: 'CNC Turret Punch Press',
    // image:
    //   'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
    image: '/images/ourStrength/image1.jpg',
    badge: 'AMADA',
    specs: [
      { label: 'Capacity:', value: '200KN' },
      { label: 'Type:', value: 'AE2510NT' },
      { label: 'Power:', value: '40KVA' },
      { label: 'Size (LxWxH):', value: '4152 x 5120 x 2082', small: true },
    ],
  },
  {
    title: 'CNC Bending Machine',
    // image:
    //   'https://images.unsplash.com/photo-1565439398532-39c642a8b9e2?auto=format&fit=crop&w=800&q=80',
    image: '/images/ourStrength/image2.jpg',
    badge: 'AMADA',
    specs: [
      { label: 'Type:', value: 'RGM2' },
      { label: 'Operation:', value: 'Hydraulic' },
      { label: '', value: 'High precision bending for complex geometries.', note: true },
    ],
  },
  {
    title: 'Hydraulic Bending Machine',
    // image:
    //   'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    image: '/images/ourStrength/image3.jpg',
    badge: 'WELDOR',
    specs: [
      { label: 'Capacity:', value: '80T' },
      { label: 'Power:', value: '7.5 HP' },
      { label: 'Cut Size:', value: '2540mm x 4.0mm' },
    ],
  },
  {
    title: 'Hydraulic Shearing Machine',
    // image:
    //   'https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&w=800&q=80',
    image: '/images/ourStrength/image4.jpg',
    badge: 'WELDOR',
    specs: [
      { label: 'Capacity:', value: '4.0mm Sheet' },
      { label: 'Power:', value: '7.5 HP' },
      { label: 'Speed:', value: '1440 RPM' },
    ],
  },
  {
    title: 'Powder Coating Spray Booth',

    // icon: (
    //   <FaSprayCanSparkles className="text-6xl text-gray-300 group-hover:text-orange-500 transition-colors" />
    // ),
    image: '/images/ourStrength/image5.jpg',
    specs: [{ label: 'Dimensions (LxWxH):', value: '2700mm x 1900mm x 3000mm' }],
  },
  {
    title: 'Powder Coating Oven',
    // icon: (
    //   <FaTemperatureHigh className="text-6xl text-gray-300 group-hover:text-orange-500 transition-colors" />
    // ),
    image: '/images/ourStrength/image6..webp',
    specs: [
      { label: 'Max Temp:', value: '200°C', highlight: true },
      { label: 'Dimensions (LxWxH):', value: '3000mm x 2300mm x 2400mm' },
    ],
  },
];

// Icon Cards (Powder Coating + Oven)
// const iconCards = [
  
//   {
//     title: 'Powder Coating Oven',
//     icon: (
//       <FaTemperatureHigh className="text-6xl text-gray-300 group-hover:text-orange-500 transition-colors" />
//     ),
//     specs: [
//       { label: 'Max Temp:', value: '200°C', highlight: true },
//       { label: 'Dimensions (LxWxH):', value: '3000mm x 2300mm x 2400mm' },
//     ],
//   },
// ];

export default function ManufacturingFacilities() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="manufacturing-facilities" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 uppercase mb-2">
                Manufacturing <span className="text-orange-500">Facilities</span>
              </h2>
              <div className="h-1 w-24 bg-orange-500 mx-auto mt-4"></div>
            </div>

            {/* <div className="hidden md:block text-gray-400 text-sm font-mono">
              // PRECISION MACHINERY
            </div> */}
            <div className="text-gray-400 text-base text-center max-w-4xl mt-4 ">
              Bharat Engineers is empowered with robust manufacturing and testing facilities
              enabling precision engineering and unmatched product quality. We combine cutting-edge
              technology with decades of expertise.
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Machine Cards */}
            {facilities.map((item, i) => (
              <FacilityCard key={i} {...item} />
            ))}

            {/* Icon Cards */}
            {/* {iconCards.map((item, i) => (
              <IconFacilityCard key={`icon-${i}`} {...item} />
            ))} */}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

/* ----------------------------------------
   Reusable Facility Card (Image + Specs)
---------------------------------------- */
function FacilityCard({ title, image, badge, specs }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 
                 border border-gray-100 overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-scale-down  group-hover:scale-105 transition-transform duration-500"
        />
        {/* <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
          {badge}
        </div> */}
      </div>

      <div className="p-6 flex-grow">
        <h3 className="font-display font-bold text-xl text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        <div className="space-y-2 text-sm text-gray-600 font-mono border-t border-gray-100 pt-4">
          {specs.map((s, idx) => (
            <SpecRow key={idx} {...s} />
          ))}
        </div>
      </div>
    </m.div>
  );
}

/* ----------------------------------------
   Icon-based Facility Card
---------------------------------------- */
function IconFacilityCard({ title, icon, specs }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 
                 border border-gray-100 overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 bg-gray-100 flex items-center justify-center">{icon}</div>

      <div className="p-6 flex-grow">
        <h3 className="font-display font-bold text-xl text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        <div className="space-y-3 text-sm text-gray-600 border-t border-gray-100 pt-4">
          {specs.map((s, idx) => (
            <SpecColumn key={idx} {...s} />
          ))}
        </div>
      </div>
    </m.div>
  );
}

/* ----------------------------------------
   Spec Row for machine cards
---------------------------------------- */
function SpecRow({ label, value, note, small }) {
  if (note) {
    return <div className="mt-2 text-xs text-gray-400">{value}</div>;
  }

  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className={`font-bold text-slate-800 ${small ? 'text-xs' : ''}`}>{value}</span>
    </div>
  );
}

/* ----------------------------------------
   Spec Column for icon cards
---------------------------------------- */
function SpecColumn({ label, value, highlight }) {
  return (
    <div className="flex flex-col">
      {label && <span className="text-xs text-gray-400 mb-1">{label}</span>}

      <span className={`font-bold ${highlight ? 'text-orange-500' : 'text-slate-800'}`}>
        {value}
      </span>
    </div>
  );
}
