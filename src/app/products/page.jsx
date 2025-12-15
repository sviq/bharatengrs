import Hero from '@/components/common/Hero';
import ClientsCorousel from '@/components/hero/ClientsCorousel';

import IndustriesSection from '@/components/products/IndustrySection';
import ProductsElectricalSection from '@/components/products/ProductElectricalSection';

import TechnicalSpecifications from '@/components/products/TechnicalSpecifications';

export const metadata = {
  title: 'Products - Bharat Engrs',
  description:
    'Explore our range of electrical control panels, MCC, PCC, and automation solutions.',
};

export default function ProductsPage() {
  return (
    <>
      <Hero
        badge="ENGINEERING EXCELLENCE"
        heading="OUR PRODUCTS"
        description="Advanced electrical distribution, control panels, and instrumentation solutions engineered for reliability and performance."
      />
      <ProductsElectricalSection />
      <TechnicalSpecifications />
      <IndustriesSection />
      <ClientsCorousel />
    </>
  );
}
