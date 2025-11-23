import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Bharat Engrs Logo"
        width={150}
        height={50}
        className="h-10 w-auto"
      />
    </Link>
  )
}

