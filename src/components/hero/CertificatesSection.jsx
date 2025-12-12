'use client';

import { CheckDouble, FaAward, FaCertificate, FaShieldAlt } from 'public/icons/Icons';

const iconClass = 'text-4xl text-orange-500';

const certificateItems = [
  {
    Icon: FaCertificate,
    title: 'ISO 9001:2008',
  },
  {
    Icon: FaShieldAlt,
    title: 'CPRI Tested',
  },
  {
    Icon: CheckDouble,
    title: 'IEC 61439',
  },
  {
    Icon: FaAward,
    title: 'ERDA Certified',
  },
];

const CertificatesSection = () => {
  return (
    <section id="cert-cta" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
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
          {certificateItems.map(({ Icon, title }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100
                         flex flex-col items-center text-center
                         hover:shadow-md transition-all duration-300"
            >
              <Icon className={iconClass} />
              <h4 className="mt-4 font-semibold text-gray-900">{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
