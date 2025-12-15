import ClientLogos from "@/components/clients/ClientLogos";
import TrustStatement from "@/components/clients/TrustStatement";
import Hero from "@/components/common/Hero";

export const metadata = {
  title: 'Our Clients - Bharat Engrs',
  description: 'Trusted by leading companies across industries.',
}

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

