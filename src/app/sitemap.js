export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bharatengrs.com'

  const routes = [
    '',
    '/about',
    '/products',
    '/our-strength',
    '/application',
    '/clients',
    '/inquiry',
    '/gallery',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}

