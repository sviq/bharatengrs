import Link from 'next/link'
import { navigation } from '@/data/navigation'

export default function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

