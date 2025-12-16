import Hero from '@/components/common/Hero';
import { generateMetadata as genMeta } from '@/lib/meta';
import AssemblySection from '../../components/our-strength/AssemblySection';
import CtPtManufacturing from '../../components/our-strength/CtPtManufacturing';
import ManufacturingFacilities from '../../components/our-strength/ManufacturingFacilities';
import OtherFacilities from '../../components/our-strength/OtherFacilities';

export const metadata = genMeta({
  title: 'Our Strength',
  description:
    'Discover the strengths and capabilities that make Bharat Engrs a trusted partner. State-of-the-art manufacturing facilities, quality certifications, and decades of expertise in electrical panel manufacturing.',
  url: '/our-strength',
  keywords: [
    'manufacturing facilities',
    'quality certifications',
    'engineering capabilities',
    'ISO certified',
    'testing facilities',
  ],
});

export default function OurStrengthPage() {
  return (
    <main>
      <Hero
        badge="INFRASTRUCTURE & CAPABILITY"
        heading="Our Strength"
        description="Bharat Engineers is empowered with robust manufacturing and testing facilities enabling precision engineering and unmatched product quality. We combine cutting-edge technology with decades of expertise."
      />
      <ManufacturingFacilities />
      <OtherFacilities />
      <AssemblySection />
      <CtPtManufacturing />
    </main>
  );
}
