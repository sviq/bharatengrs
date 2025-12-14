import CapabilitiesSection from "@/components/gallery/CapabilitiesSection"
import GallerySection from "@/components/gallery/GallarySection"
import GallaryhHero from "@/components/gallery/Hero"

export const metadata = {
  title: 'Gallery - Bharat Engrs',
  description: 'View our projects, products, and facilities gallery.',
}

export default function GalleryPage() {
  return (
    <main>
      <GallaryhHero />
      <GallerySection />
      <CapabilitiesSection />
    </main>
  )
}

