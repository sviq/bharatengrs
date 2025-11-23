'use client'

import Image from 'next/image'
import { useState } from 'react'
import GalleryModal from './GalleryModal'

export default function GalleryItem({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={image.src}
          alt={image.alt || 'Gallery image'}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <GalleryModal
        image={image}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

