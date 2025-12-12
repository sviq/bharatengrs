import ContactHero from "@/components/Contact/ContactHero";
import ContactSection from "@/components/Contact/ContactSection";
import FaqSection from "@/components/Contact/FaqSection";
import MapEmbed from "@/components/Contact/MapEmbed";

export const metadata = {
  title: 'Contact Us - Bharat Engrs',
  description: 'Get in touch with Bharat Engrs for your electrical engineering needs.',
}

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <MapEmbed />
      <FaqSection />
    </>
  );
}

