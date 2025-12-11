import AboutSection from '@/components/hero/AboutSection';
import CertificatesSection from '@/components/hero/CertificatesSection';
import ClientsCorousel from '@/components/hero/ClientsCorousel';
import CtaSection from '@/components/hero/Ctasection';
import HeroSection from '@/components/hero/Hero';
import ProductsSection from '@/components/hero/ProductsSection';
import BannerLayout from '@/components/layouts/BannerLayout';

export default function HomePage() {
  return (
    <main>
      {/* <BannerLayout bannerImage="/banner/hero-banner.webp"> */}
        <HeroSection />
      {/* </BannerLayout> */}

      <AboutSection />
      <ProductsSection />
      <ClientsCorousel />
      <CertificatesSection />
      <CtaSection />
    </main>
  );
}
