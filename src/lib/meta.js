const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bharatengrs.com';
const siteName = 'Bharat Engrs';
const defaultDescription =
  'Leading manufacturer of electrical control panels, MCC, PCC, and automation solutions. Trusted by leading industrial companies across India since 2005.';

export function generateMetadata({ title, description, image, url, keywords = [], type = 'website' }) {
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Electrical Engineering & Panel Manufacturing`;
  const fullDescription = description || defaultDescription;
  const ogImage = image || `${siteUrl}/images/hero/hero.webp`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  const defaultKeywords = [
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
  ];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_IN',
      type: type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: '@bharatengrs',
    },
    alternates: {
      canonical: fullUrl,
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
  };
}

export function getPageMetadata(page) {
  const metadataMap = {
    home: {
      title: 'Home',
      description:
        'Leading manufacturer of electrical control panels, MCC, PCC, and automation solutions. Trusted by leading industrial companies across India since 2005.',
      keywords: ['electrical panels', 'control panels', 'MCC', 'PCC', 'industrial automation'],
    },
    about: {
      title: 'About Us',
      description:
        'Learn about Bharat Engrs - Leading electrical engineering and panel manufacturing company. Established in 2005, we specialize in precision-engineered electrical control solutions.',
      keywords: ['about bharat engrs', 'electrical engineering company', 'panel manufacturers'],
    },
    products: {
      title: 'Products',
      description:
        'Explore our comprehensive range of electrical control panels, MCC, PCC, bus ducts, synchronizing panels, and automation solutions. Engineered for reliability and performance.',
      keywords: [
        'electrical control panels',
        'MCC panels',
        'PCC panels',
        'bus ducts',
        'synchronizing panels',
        'control panels',
      ],
    },
    'our-strength': {
      title: 'Our Strength',
      description:
        'Discover the strengths and capabilities that make Bharat Engrs a trusted partner. State-of-the-art manufacturing facilities, quality certifications, and decades of expertise.',
      keywords: ['manufacturing facilities', 'quality certifications', 'engineering capabilities'],
    },
    application: {
      title: 'Application',
      description:
        'Explore the various applications of our electrical control panels and solutions across industries including power plants, manufacturing, infrastructure, and more.',
      keywords: ['electrical panel applications', 'industrial applications', 'power distribution'],
    },
    inquiry: {
      title: 'Product Inquiry',
      description:
        'Submit an inquiry for our products and services. Get expert consultation and customized solutions for your electrical engineering needs.',
      keywords: ['product inquiry', 'request quote', 'custom panels'],
    },
    clients: {
      title: 'Our Clients',
      description:
        'Trusted by leading companies across industries including ABB, Aditya Birla, Essar, Reliance, and more. See our portfolio of satisfied clients.',
      keywords: ['clients', 'portfolio', 'trusted manufacturers'],
    },
    gallery: {
      title: 'Gallery',
      description:
        'View our projects, products, and facilities gallery. Explore our engineering excellence through detailed images of our manufacturing capabilities and completed projects.',
      keywords: ['project gallery', 'product gallery', 'manufacturing facilities'],
    },
    contact: {
      title: 'Contact Us',
      description:
        'Get in touch with Bharat Engrs for your electrical engineering needs. Contact us for expert consultation, product inquiries, and support.',
      keywords: ['contact', 'get in touch', 'customer support'],
    },
    certificates: {
      title: 'Certificates',
      description:
        'View our certifications and quality standards. Bharat Engrs maintains ISO certifications and industry-standard quality compliance.',
      keywords: ['certifications', 'ISO', 'quality standards'],
    },
  };

  return metadataMap[page] || metadataMap.home;
}

