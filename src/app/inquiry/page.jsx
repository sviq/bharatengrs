import { generateMetadata as genMeta } from '@/lib/meta';

export const metadata = genMeta({
  title: 'Product Inquiry',
  description:
    'Submit an inquiry for our products and services. Get expert consultation and customized solutions for your electrical engineering needs. Request a quote today.',
  url: '/inquiry',
  keywords: ['product inquiry', 'request quote', 'custom panels', 'product consultation', 'get quote'],
});

export default function InquiryPage() {
  return (
    <main>
      <h1>Inquiry</h1>
      {/* Inquiry page content */}
    </main>
  );
}

