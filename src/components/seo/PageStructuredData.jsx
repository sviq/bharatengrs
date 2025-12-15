'use client';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bharatengrs.com';

/**
 * BreadcrumbList Schema for navigation
 */
export function BreadcrumbStructuredData({ items }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

/**
 * Product Schema for product pages
 */
export function ProductStructuredData({ product }) {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image ? `${siteUrl}${product.image}` : undefined,
    brand: {
      '@type': 'Brand',
      name: 'Bharat Engrs',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Bharat Engrs',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      url: `${siteUrl}/products`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

/**
 * FAQPage Schema for FAQ sections
 */
export function FAQStructuredData({ faqs }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

/**
 * Service Schema for service pages
 */
export function ServiceStructuredData({ service }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.type || 'Electrical Engineering Services',
    provider: {
      '@type': 'Organization',
      name: 'Bharat Engrs',
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: service.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

