import StrengthHero from "@/components/our-strength/Hero"
import ManufacturingFacilities from "../../components/our-strength/ManufacturingFacilities"
import OtherFacilities from "../../components/our-strength/OtherFacilities"
import AssemblySection from "../../components/our-strength/AssemblySection"
import CtPtManufacturing from "../../components/our-strength/CtPtManufacturing"

export const metadata = {
  title: 'Our Strength - Bharat Engrs',
  description: 'Discover the strengths and capabilities that make Bharat Engrs a trusted partner.',
}

export default function OurStrengthPage() {
  return (
    <main>
      <StrengthHero />
      <ManufacturingFacilities />
      <OtherFacilities />
      <AssemblySection />
      <CtPtManufacturing />
    </main>
  )
}

