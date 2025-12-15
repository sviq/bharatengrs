import { generateMetadata as genMeta } from '@/lib/meta';

export const metadata = genMeta({
  title: 'Application',
  description:
    'Explore the various applications of our electrical control panels and solutions across industries including power plants, manufacturing, infrastructure, oil & gas, and more.',
  url: '/application',
  keywords: [
    'electrical panel applications',
    'industrial applications',
    'power distribution',
    'manufacturing applications',
    'power plant panels',
  ],
});

export default function ApplicationPage() {
  return (
    <main>
      <h1>Application</h1>
      {/* Application page content */}
    </main>
  );
}

