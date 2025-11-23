'use client'

import Link from 'next/link'
import { navigation } from '@/data/navigation'

export default function Navbar() {
  return (
    <nav className="hidden md:flex space-x-6">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-primary-600 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

