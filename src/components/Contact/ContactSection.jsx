'use client';

import { FaLocationDot } from "public/icons/Icons";
import { FaLocationArrow } from "react-icons/fa";

export default function ContactSection() {
  return (
    <main className="relative z-[60] mt-12 md:-mt-32 mb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CONTACT FORM */}
          <div
            id="contact-form"
            className="lg:col-span-2 bg-white rounded-sm border-2 border-gray-200 overflow-hidden border-t-4 border-t-orange-500"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-500 mb-8">
                Fill out the form below and our engineering team will get back to you within 24
                hours.
              </p>

              <form className="space-y-6">
                {/* NAME FIELDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm 
                                 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm 
                                 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* CONTACT FIELDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm 
                                 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm 
                                 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* INQUIRY TYPE */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm cursor-pointer
                               focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none focus:outline-none"
                  >
                    <option>Product Inquiry (Sales)</option>
                    <option>Technical Support</option>
                    <option>Partnership Proposal</option>
                    <option>Vendor Registration</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm 
                               focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* CONSENT */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:outline-none"
                  />
                  <label className="text-sm text-gray-500">
                    I agree to the processing of my personal data.
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="button"
                  className="w-full bg-slate-800 text-white font-bold py-4 px-8 
                rounded-sm hover:bg-orange-500 transition-all duration-300 shadow-lg flex justify-center items-center gap-2 group"
                >
                  <span>Submit Request</span>
                  <span className="group-hover:translate-x-1 transition-transform">✈</span>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* DIRECT LINES */}
            <div className="bg-slate-800 text-white p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition" />

              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-orange-500">
                Direct Lines
              </h3>

              <div className="space-y-6 relative z-10">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase mb-1">Sales Hotline</p>
                    <p className="font-mono text-lg font-medium hover:text-orange-500 cursor-pointer">
                      +91 22 4567 8900
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                    💬
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase mb-1">WhatsApp Support</p>
                    <p className="font-mono text-lg font-medium hover:text-orange-500 cursor-pointer">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase mb-1">Email Sales</p>
                    <p className="font-mono text-sm hover:text-orange-500 cursor-pointer">
                      sales@bharatengineers.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HQ ADDRESS */}
            <div className="bg-white p-8 rounded-sm border-2 border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-orange-500">
                Headquarters
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-gray-900 block">Bharat Engineers Pvt. Ltd.</strong>
                Plot No. 45, MIDC Industrial Area,
                <br />
                Thane-Belapur Road, Airoli,
                <br />
                Navi Mumbai, Maharashtra 400708
              </p>

              {/* Hours */}
              <div className="pt-4 border-t-2 border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Working Hours</p>
                <div className="flex justify-between text-sm text-gray-800">
                  <span>Mon - Sat</span>
                  <span>09:00 AM - 06:00 PM</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <a
                href="#"
                className="block w-full text-center py-3 border border-gray-300 rounded-sm text-sm font-bold 
                           text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all mt-6"
              >
                Get Directions 
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
