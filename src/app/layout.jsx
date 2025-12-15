import ScrollToTop from '@/components/floating/ScrollToTop';
import WhatsAppButton from '@/components/floating/WhatsAppButton';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { StructuredData } from '@/components/seo/StructuredData';
import './globals.css';

import { companyInfo } from '@/data/company-info';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bharatengrs.com';
const siteName = 'Bharat Engrs';
const defaultTitle = 'Bharat Engrs - Electrical Engineering & Panel Manufacturing';
const defaultDescription =
  companyInfo.description ||
  'Manufacturing of electrical switchboards, PCC, MCC, DBs, Busduct and instrument transformers. Trusted by leading industrial companies across India since 2005.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'electrical control panels',
    'MCC panels',
    'PCC panels',
    'electrical panel manufacturing',
    'motor control centers',
    'power distribution panels',
    'electrical engineering',
    'industrial automation',
    'bus ducts',
    'synchronizing panels',
    'electrical panels India',
    'control panel manufacturers',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/images/hero/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'Bharat Engrs - Electrical Engineering & Panel Manufacturing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/images/hero/hero.webp`],
    creator: '@bharatengrs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
  },
  category: 'Manufacturing',
  classification: 'Electrical Engineering & Panel Manufacturing',
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StructuredData />
        <Header />

        <main>{children}</main>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
