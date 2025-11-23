'use client'

import Image from 'next/image'

export default function GalleryModal({ image, isOpen, onClose }) {
  if (!isOpen || !image) return null

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        aria-label="Close"
      >
        ✕
      </button>
      <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
        <Image
          src={image.src}
          alt={image.alt || 'Gallery image'}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

