export function generateMetadata({ title, description, image, url }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bharatengrs.com'
  const fullTitle = title ? `${title} | Bharat Engrs` : 'Bharat Engrs - Electrical Engineering & Panel Manufacturing'
  const fullDescription = description || 'Leading manufacturer of electrical control panels, MCC, PCC, and automation solutions.'
  const ogImage = image || `${siteUrl}/og-image.jpg`
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: 'Bharat Engrs',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export function getPageMetadata(page) {
  const metadataMap = {
    home: {
      title: 'Home',
      description: 'Leading manufacturer of electrical control panels, MCC, PCC, and automation solutions.',
    },
    about: {
      title: 'About Us',
      description: 'Learn about Bharat Engrs - Leading electrical engineering and panel manufacturing company.',
    },
    products: {
      title: 'Products',
      description: 'Explore our range of electrical control panels, MCC, PCC, and automation solutions.',
    },
    'our-strength': {
      title: 'Our Strength',
      description: 'Discover the strengths and capabilities that make Bharat Engrs a trusted partner.',
    },
    application: {
      title: 'Application',
      description: 'Explore the various applications of our electrical control panels and solutions.',
    },
    inquiry: {
      title: 'Product Inquiry',
      description: 'Submit an inquiry for our products and services.',
    },
    clients: {
      title: 'Our Clients',
      description: 'Trusted by leading companies across industries.',
    },
    gallery: {
      title: 'Gallery',
      description: 'View our projects, products, and facilities gallery.',
    },
    contact: {
      title: 'Contact Us',
      description: 'Get in touch with Bharat Engrs for your electrical engineering needs.',
    },
  }

  return metadataMap[page] || metadataMap.home
}

