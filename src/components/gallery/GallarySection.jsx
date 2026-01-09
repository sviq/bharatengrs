'use client';

import { galleryItems2 } from '@/data/gallaryItems';
import Image from 'next/image';
import { useState } from 'react';



export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section id="gallery-grid-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="font-display text-4xl font-bold text-industrial-dark mb-3">
              Our Work Portfolio
            </h2>
            <p className="text-gray-600">
              Industrial-grade engineering solutions across multiple domains
            </p>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {['All Projects'].map((filter) => (
              <button
                key={filter}
                className={`px-6 py-3 rounded-lg font-semibold transition-all bg-orange-500 text-white hover:bg-orange-600`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems2.map((item, index) => (
            <div
              key={index}
              className="gallery-card group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden h-80">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  {item.icon}
                  <span>{item.category}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-display text-xl font-bold text-industrial-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                {/* <div className="accent-line h-0.5 bg-blue-500" /> */}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]"
            onClick={closeLightbox}
          >
            <div className="relative w-[90%] max-w-5xl h-[80vh]">
              <Image
                src={galleryItems2[lightboxIndex].img}
                alt="Expanded View"
                fill
                className="object-contain"
              />
            </div>

            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              onClick={closeLightbox}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
