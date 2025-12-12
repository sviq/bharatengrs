'use client';

export default function ContactHero() {
  return (
    <section
      id="hero-contact"
      className="relative py-20 md:pt-0 bg-slate-800 overflow-hidden h-[600px] flex items-center"
    >
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
          alt="Industrial Background"
          className="w-full h-full object-cover grayscale opacity-40"
        />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-repeat z-10"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-20"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500 text-orange-500 bg-orange-500 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Sales & Inquiries
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Partner with <br />
            <span className="text-orange-500bg-orange-500">Precision Engineering</span>
          </h1>

          {/* Sub Text */}
          <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
            Connect with our technical sales team for custom solutions, bulk orders, and industrial
            partnership opportunities. We engineer success.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact-form"
              className="bg-orange-500 text-white px-8 py-4 font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 rounded-sm shadow-xl shadow-orange-500bg-orange-500/20 flex items-center gap-2"
            >
              Start Conversation →
            </a>

            <a
              href="#locations"
              className="border border-gray-600 text-white px-8 py-4 font-medium hover:bg-gray-800 transition-all duration-300 rounded-sm flex items-center gap-2"
            >
              Find Locations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
