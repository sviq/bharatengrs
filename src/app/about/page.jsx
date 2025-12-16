import AboutStory from '@/components/AboutUs/AboutStory';
import CeoMessage from '@/components/AboutUs/CeoMessage';
import WhyChooseUs from '@/components/AboutUs/WhyChooseUs';
import Hero from '@/components/common/Hero';
import { generateMetadata as genMeta } from '@/lib/meta';
import { BreadcrumbStructuredData } from '@/components/seo/PageStructuredData';

export const metadata = genMeta({
  title: 'About Us',
  description:
    'Learn about Bharat Engrs - Leading electrical engineering and panel manufacturing company. Established in 2005, we specialize in precision-engineered electrical control solutions for industrial applications.',
  url: '/about',
  keywords: ['about bharat engrs', 'electrical engineering company', 'panel manufacturers', 'company history'],
});

export default function AboutUsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ];

  return (
    <>
      {/* <BreadcrumbStructuredData items={breadcrumbs} /> */}
      <Hero
        badge="SINCE 2005"
        heading="Engineering Excellence"
        description="Pioneering the future of Power Control Centers with precision, innovation, and unwavering reliability."
      />
      <AboutStory />
      <CeoMessage />
      <WhyChooseUs />
    </>
  );
}
