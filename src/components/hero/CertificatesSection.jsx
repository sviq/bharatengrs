'use client';

import { FaCertificate, FaShieldAlt, FaCheckDouble, FaAward } from 'react-icons/fa';

const CertificatesSection = () => {
  const items = [
    {
      icon: <FaCertificate className="text-4xl text-orange-500" />,
      title: 'ISO 9001:2008',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
      title: 'CPRI Tested',
    },
    {
      icon: <FaCheckDouble className="text-4xl text-orange-500" />,
      title: 'IEC 61439',
    },
    {
      icon: <FaAward className="text-4xl text-orange-500" />,
      title: 'ERDA Certified',
    },
  ];

  return (
    <section id="cert-cta" className="py-24 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">
            Standards & Quality
          </span>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Certificates & Compliance
          </h2>

          <p className="mt-4 text-gray-600">
            Our products comply with national and international standards including IEC 61439,
            ensuring reliability, safety, and top-tier performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 
                         flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
