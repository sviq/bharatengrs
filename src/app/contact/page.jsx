
import FaqSection from '@/components/Contact/FaqSection';
import MapEmbed from '@/components/Contact/MapEmbed';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Us - Bharat Engrs',
  description: 'Get in touch with Bharat Engrs for your electrical engineering needs.',
};

export default function ContactUsPage() {
  return (
    <>
      <ContactClient />

      <div className="flex items-center justify-center">
        <MapEmbed />
      </div>

      <FaqSection />
    </>
  );
}
