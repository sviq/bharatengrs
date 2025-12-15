import FaqSection from '@/components/Contact/FaqSection';
import MapEmbed from '@/components/Contact/MapEmbed';
import ContactClient from './ContactClient';
import { generateMetadata as genMeta } from '@/lib/meta';
import { BreadcrumbStructuredData } from '@/components/seo/PageStructuredData';

export const metadata = genMeta({
  title: 'Contact Us',
  description:
    'Get in touch with Bharat Engrs for your electrical engineering needs. Contact us for expert consultation, product inquiries, and support. We are here to help with your electrical panel requirements.',
  url: '/contact',
  keywords: ['contact', 'get in touch', 'customer support', 'product inquiry', 'electrical engineering consultation'],
});

export default function ContactUsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ];

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbs} />
      <ContactClient />

      <div className="flex items-center justify-center">
        <MapEmbed />
      </div>

      <FaqSection />
    </>
  );
}
