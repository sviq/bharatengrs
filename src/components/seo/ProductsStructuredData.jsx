'use client';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bharatengrs.com';

/**
 * ProductCollection Schema for products listing page
 */
export function ProductsCollectionStructuredData({ products }) {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Electrical Control Panels and Solutions',
    description: 'Comprehensive range of electrical control panels, MCC, PCC, and automation solutions',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
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
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
    />
  );
}

