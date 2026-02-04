import Hero from '@/components/common/Hero';
import ClientsCorousel from '@/components/hero/ClientsCorousel';

import IndustriesSection from '@/components/products/IndustrySection';
import ProductsElectricalSection from '@/components/products/ProductElectricalSection';

import TechnicalSpecifications from '@/components/products/TechnicalSpecifications';
import { generateMetadata as genMeta } from '@/lib/meta';
import { BreadcrumbStructuredData } from '@/components/seo/PageStructuredData';

export const metadata = genMeta({
  title: 'Products',
  description:
    'Explore our comprehensive range of electrical control panels, MCC, PCC, bus ducts, synchronizing panels, and automation solutions. Engineered for reliability and performance across industrial applications.',
  url: '/products',
  keywords: [
    'electrical control panels',
    'MCC panels',
    'PCC panels',
    'bus ducts',
    'synchronizing panels',
    'control panels',
    'motor control centers',
    'power distribution panels',
  ],
});

export default function ProductsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
  ];

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbs} />
      <Hero
        badge="ENGINEERING EXCELLENCE"
        heading="OUR PRODUCTS"
        description="Advanced electrical distribution, control panels, and instrumentation solutions engineered for reliability and performance."
      />
      <ProductsElectricalSection />
      {/* <TechnicalSpecifications /> */}
      <IndustriesSection />
      <ClientsCorousel />
    </>
  );
}
