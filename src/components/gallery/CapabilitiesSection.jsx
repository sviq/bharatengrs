'use client';

import { FaIndustry, FaShieldAlt, FaClock, FaHeadset } from 'react-icons/fa';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      title: 'Industrial Scale',
      description: 'Large-scale manufacturing capabilities for complex projects',
      icon: <FaIndustry className="text-accent text-3xl" />,
    },
    {
      title: 'Quality Assured',
      description: 'ISO certified processes ensuring consistent quality',
      icon: <FaShieldAlt className="text-accent text-3xl" />,
    },
    {
      title: 'Rapid Delivery',
      description: 'Efficient production timelines without compromising quality',
      icon: <FaClock className="text-accent text-3xl" />,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance and maintenance',
      icon: <FaHeadset className="text-accent text-3xl" />,
    },
  ];

  return (
    <section
      id="capabilities-section"
      className="py-24 bg-gradient-to-br from-black to-black/90 text-white relative overflow-hidden"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-10"></div>

      {/* orange-5text-orange-500 glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Engineering Capabilities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions backed by decades of industrial expertise
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-500bg-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
