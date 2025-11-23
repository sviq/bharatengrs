import Link from 'next/link'

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link href="/" className="hover:text-primary-600">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-2">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-primary-600">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

