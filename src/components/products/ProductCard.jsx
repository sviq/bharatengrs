import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <Link
          href={`/products#${product.id}`}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          Learn More →
        </Link>
      </div>
    </div>
  )
}

