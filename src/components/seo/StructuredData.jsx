import { companyInfo } from '@/data/company-info';
import { extractCoordinatesFromGoogleMaps } from '@/lib/google-maps-utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bharatengrs.com';

export function StructuredData() {
  // Extract coordinates from Google Maps link if not already set
  let coordinates = companyInfo.coordinates;
  if ((!coordinates.latitude || !coordinates.longitude) && companyInfo.googleMapsLink) {
    const extracted = extractCoordinatesFromGoogleMaps(companyInfo.googleMapsLink);
    if (extracted) {
      coordinates = extracted;
    }
  }

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bharat Engrs',
    url: siteUrl,
    logo: `${siteUrl}/logo-blue.svg`,
    description:
      companyInfo.description ||
      'Manufacturing of electrical switchboards, PCC, MCC, DBs, Busduct and instrument transformers. Trusted by leading industrial companies across India since 2005.',
    foundingDate: '2005',
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address,
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.phone,
      contactType: 'Customer Service',
      email: companyInfo.email,
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: companyInfo.socialLinks.map((link) => link.url),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };

  // LocalBusiness Schema
  const openingHours = [];
  const daysMap = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  };

  Object.entries(companyInfo.businessHours || {}).forEach(([day, hours]) => {
    if (!hours.closed && hours.open && hours.close) {
      openingHours.push({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: daysMap[day] || day,
        opens: hours.open,
        closes: hours.close,
      });
    }
  });

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#organization`,
    name: 'Bharat Engrs',
    image: `${siteUrl}/images/hero/hero.webp`,
    url: siteUrl,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address,
      addressCountry: 'IN',
    },
    ...(coordinates.latitude && coordinates.longitude
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          },
        }
      : {}),
    ...(openingHours.length > 0
      ? {
          openingHoursSpecification: openingHours,
        }
      : {}),
    priceRange: '$$',
    areaServed: companyInfo.serviceAreas && companyInfo.serviceAreas.length > 0
      ? companyInfo.serviceAreas.map((area) => ({
          '@type': 'City',
          name: area,
        }))
      : {
          '@type': 'Country',
          name: 'India',
        },
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bharat Engrs',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // BreadcrumbList Schema (will be added per page)
  // Product Schema (will be added to product pages)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

