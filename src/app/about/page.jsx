import AboutStory from '@/components/AboutUs/AboutStory';
import CeoMessage from '@/components/AboutUs/CeoMessage';
import WhyChooseUs from '@/components/AboutUs/WhyChooseUs';
import Hero from '@/components/common/Hero';

export const metadata = {
  title: 'About Us - Bharat Engrs',
  description:
    'Learn about Bharat Engrs - Leading electrical engineering and panel manufacturing company.',
};

export default function AboutUsPage() {
  return (
    <main>
      <Hero
        badge="SINCE 2005"
        heading="Engineering Excellence"
        description="Pioneering the future of Power Control Centers with precision, innovation, and unwavering reliability."
      />
      <AboutStory />
      <CeoMessage />
      <WhyChooseUs />
    </main>
  );
}
