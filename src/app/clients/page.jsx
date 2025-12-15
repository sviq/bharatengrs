import ClientLogos from "@/components/clients/ClientLogos";
import TrustStatement from "@/components/clients/TrustStatement";
import Hero from "@/components/common/Hero";
import { generateMetadata as genMeta } from '@/lib/meta';

export const metadata = genMeta({
  title: 'Our Clients',
  description:
    'Trusted by leading companies across industries including ABB, Aditya Birla, Essar, Reliance, and more. See our portfolio of satisfied clients who rely on our electrical panel solutions.',
  url: '/clients',
  keywords: ['clients', 'portfolio', 'trusted manufacturers', 'satisfied customers', 'client testimonials'],
});

export default function ClientsPage() {
  return (
    <main>
      <Hero
        badge="TRUSTED MANUFACTURER"
        heading="OUR VALUED CLIENTS"
        description="Trusted by leading industrial and engineering giants across India."
      />
      <ClientLogos />
      <TrustStatement />
    </main>
  );
}

