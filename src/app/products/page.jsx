import ClientsCorousel from "@/components/hero/ClientsCorousel";
import HeroWrapper from "@/components/products/HeroWrapper"
import IndustriesSection from "@/components/products/IndustrySection";
import ProductsElectricalSection from "@/components/products/ProductElectricalSection"
import ProductsHeroContent from "@/components/products/ProductHeroContent"
import TechnicalSpecifications from "@/components/products/TechnicalSpecifications";

export const metadata = {
  title: 'Products - Bharat Engrs',
  description: 'Explore our range of electrical control panels, MCC, PCC, and automation solutions.',
}

export default function ProductsPage() {
  return (
    <>
      <HeroWrapper>
        <ProductsHeroContent />
      </HeroWrapper>
      <ProductsElectricalSection />
      <TechnicalSpecifications />
      <IndustriesSection />
      <ClientsCorousel />
    </>
  );
}

