import Hero from "@/components/common/Hero"
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
      <Hero
        badge="PROJECT SHOWCASE"
        heading="Engineering Gallery"
        description="Explore our diverse range of engineered solutions and precision-built products. From high-voltage power distribution systems to custom sheet metal fabrication, witness the quality and precision that defines Bharat Engineers."
      />
      <GallerySection />
      <CapabilitiesSection />
    </main>
  );
}

