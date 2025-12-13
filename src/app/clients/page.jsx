import ClientsHeroContent from "@/components/clients/Hero"
import HeroWrapper from "@/components/products/HeroWrapper"

export const metadata = {
  title: 'Our Clients - Bharat Engrs',
  description: 'Trusted by leading companies across industries.',
}

export default function ClientsPage() {
  return (
    <main>
      <HeroWrapper>
        <ClientsHeroContent />
      </HeroWrapper>
    </main>
  );
}

