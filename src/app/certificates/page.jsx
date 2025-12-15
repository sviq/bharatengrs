import { generateMetadata as genMeta } from '@/lib/meta';

export const metadata = genMeta({
  title: 'Certificates',
  description:
    'View our certifications and quality standards. Bharat Engrs maintains ISO certifications and industry-standard quality compliance, ensuring the highest standards in electrical panel manufacturing.',
  url: '/certificates',
  keywords: ['certifications', 'ISO', 'quality standards', 'quality compliance', 'industry certifications'],
});

export default function CertificatesPage() {
  return (
    <main>
      <h1>Certificates Page</h1>
      {/* Certificates page content */}
    </main>
  );
}

