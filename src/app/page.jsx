
import AboutSection from '@/components/hero/AboutSection';
import CertificatesSection from '@/components/hero/CertificatesSection';
import ClientsCorousel from '@/components/hero/ClientsCorousel';
import CtaSection from '@/components/hero/Ctasection';
import HeroSection from '@/components/hero/Hero';
import ProductsSection from '@/components/hero/ProductsSection';
import WhyChooseUs from '@/components/hero/WhyChooseUsHome';
import { generateMetadata as genMeta } from '@/lib/meta';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bharatengrs.com';

export const metadata = genMeta({
  title: 'Home',
  description:
    'Leading manufacturer of electrical control panels, MCC, PCC, and automation solutions. Trusted by leading industrial companies across India since 2005.',
  url: '/',
  keywords: ['electrical panels', 'control panels', 'MCC', 'PCC', 'industrial automation', 'panel manufacturers India'],
});

export default function HomePage() {
  

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <ClientsCorousel />
      <CertificatesSection />
      <CtaSection />
      

    </main>
  );
}
