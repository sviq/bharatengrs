import Hero from "@/components/common/Hero"
import CapabilitiesSection from "@/components/gallery/CapabilitiesSection"
import GallerySection from "@/components/gallery/GallarySection"
import { generateMetadata as genMeta } from '@/lib/meta';

export const metadata = genMeta({
  title: 'Gallery',
  description:
    'View our projects, products, and facilities gallery. Explore our engineering excellence through detailed images of our manufacturing capabilities, completed projects, and precision-built electrical control panels.',
  url: '/gallery',
  keywords: ['project gallery', 'product gallery', 'manufacturing facilities', 'completed projects', 'engineering showcase'],
});

export default function GalleryPage() {
  return (
    <main>
      <Hero
        badge="PROJECT SHOWCASE"
        heading="Gallery"
        description="Explore our diverse range of engineered solutions and precision-built products. From high-voltage power distribution systems to custom sheet metal fabrication, witness the quality and precision that defines Bharat Engineers."
      />
      <GallerySection />
      <CapabilitiesSection />
    </main>
  );
}

