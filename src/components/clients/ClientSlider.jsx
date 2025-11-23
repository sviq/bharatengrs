'use client'

import { useState } from 'react'
import ClientCard from './ClientCard'

export default function ClientSlider({ clients }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 4

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= clients.length ? 0 : prev + itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerView < 0 ? clients.length - itemsPerView : prev - itemsPerView))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {clients.map((client) => (
            <div key={client.id} className="w-1/4 flex-shrink-0 px-2">
              <ClientCard client={client} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full"
        aria-label="Next"
      >
        →
      </button>
    </div>
  )
}

